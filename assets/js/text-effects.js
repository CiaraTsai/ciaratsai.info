function getParticleTextColors() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    if (currentTheme === 'dark') {
        // Original bright coral / warm orange / rose gold for dark mode
        return [
            '#ff8a65', // Bright coral / orange
            '#f0a58e', // Soft coral
            '#e2a397', // Rose gold
            '#ffb74d', // Bright amber highlight
            '#fafaf9', // Crisp stone white
            '#d6d3d1'  // Soft stone shimmer
        ];
    }

    // 4-Color Palette: Sage Green (#8B9A6E), Cream (#F7F2EB), Sand (#EAE2D6), Grey (#EEEEEE)
    // with complementary deep olive charcoal (#2C3322) and deep sage (#75835C, #5F6B49)
    return [
        '#8B9A6E',
        '#8B9A6E',
        '#75835C',
        '#2C3322',
        '#5F6B49',
        '#9CAD7E',
        '#EAE2D6'
    ];
}

class Particle {
    constructor(x, y) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.targetX = x;
        this.targetY = y;
        const colors = getParticleTextColors();
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 0.8 + 0.4; // Smaller particles for finer detail
        this.baseSize = this.size;
        this.velocity = 0.08 + Math.random() * 0.04;
        this.friction = 0.92;
        this.curX = this.x;
        this.curY = this.y;
    }

    update() {
        const dx = this.targetX - this.curX;
        const dy = this.targetY - this.curY;

        // High-precision snapping
        this.curX += dx * this.velocity;
        this.curY += dy * this.velocity;

        // Subtle cosmic "twinkle" effect
        if (Math.random() > 0.98) {
            this.size = this.baseSize * (1 + Math.random() * 0.5);
        } else {
            this.size = this.baseSize;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.curX, this.curY, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class ParticleText {
    constructor(canvasId, textId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.textElement = document.getElementById(textId);
        this.particles = [];
        this.animationId = null;

        // Configuration
        this.sampling = 1; // Ultra-Density: every pixel
        this.color = '#3b82f6';
        this.currentText = '';

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (this.currentText) {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                if (this.currentText) this.setText(this.currentText);
            }, 100);
        }
    }

    setText(text) {
        this.currentText = text;
        const dpr = window.devicePixelRatio || 1;
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

        // Get computed font size from parent title or element
        const parent = this.textElement ? (this.textElement.closest('.hero-title') || this.textElement.parentElement) : null;
        const parentStyle = parent ? window.getComputedStyle(parent) : null;
        const fontSize = parentStyle ? parseInt(parentStyle.fontSize) : 32;
        const fontWeight = parentStyle ? parentStyle.fontWeight : 600;

        const fontStr = `${fontWeight} ${fontSize}px Outfit, -apple-system, BlinkMacSystemFont, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", "Segoe UI", sans-serif`;
        tempCtx.font = fontStr;

        // Measure text with exact metrics
        const metrics = tempCtx.measureText(text);
        const textWidth = Math.ceil(metrics.width);
        const textHeight = Math.ceil(fontSize * 1.6);

        // Pre-measure both effect names to ensure a stable canvas dimension
        // so canvas doesn't resize or trigger synthetic mouseleave events during hover transitions
        let maxTextW = textWidth;
        try {
            if (typeof i18nData !== 'undefined' && typeof currentLang !== 'undefined' && i18nData[currentLang]?.profile) {
                const p = i18nData[currentLang].profile;
                if (p.effectName) maxTextW = Math.max(maxTextW, Math.ceil(tempCtx.measureText(p.effectName).width));
                if (p.effectHoverName) maxTextW = Math.max(maxTextW, Math.ceil(tempCtx.measureText(p.effectHoverName).width));
            }
        } catch (e) {}

        // Generous padding around the text so particles never get clipped
        const horizontalPadding = 80;
        const verticalPadding = 40;
        const totalW = Math.max(maxTextW + horizontalPadding, 260);
        const totalH = textHeight + verticalPadding;

        // Set Main Canvas with integer backing store
        const canvasWidth = Math.ceil(totalW * dpr);
        const canvasHeight = Math.ceil(totalH * dpr);

        if (this.canvas.width !== canvasWidth || this.canvas.height !== canvasHeight) {
            this.canvas.width = canvasWidth;
            this.canvas.height = canvasHeight;
            this.canvas.style.width = `${totalW}px`;
            this.canvas.style.height = `${totalH}px`;
            this.canvas.style.maxWidth = '100vw';

            // Translate origin to exact center of main canvas
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.scale(dpr, dpr);
            this.ctx.translate(totalW / 2, totalH / 2);
        }

        // Set Temp Sampling Canvas
        tempCanvas.width = canvasWidth;
        tempCanvas.height = canvasHeight;
        tempCtx.setTransform(1, 0, 0, 1, 0, 0);
        tempCtx.scale(dpr, dpr);

        tempCtx.fillStyle = 'white';
        tempCtx.font = fontStr;
        if ('letterSpacing' in tempCtx) {
            tempCtx.letterSpacing = '1px';
        }
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';
        tempCtx.fillText(text, totalW / 2, totalH / 2);

        const imgData = tempCtx.getImageData(0, 0, canvasWidth, canvasHeight).data;
        const newTargets = [];
        const step = Math.max(1, Math.round(dpr));

        for (let py = 0; py < canvasHeight; py += step) {
            const rowOffset = py * canvasWidth;
            for (let px = 0; px < canvasWidth; px += step) {
                const alpha = imgData[(rowOffset + px) * 4 + 3];
                if (alpha > 128) {
                    newTargets.push({
                        x: (px - canvasWidth / 2) / dpr,
                        y: (py - canvasHeight / 2) / dpr
                    });
                }
            }
        }

        // Adjust particle count
        while (this.particles.length < newTargets.length) {
            this.particles.push(new Particle(0, 0));
        }
        if (this.particles.length > newTargets.length) {
            this.particles.splice(newTargets.length);
        }

        newTargets.sort(() => Math.random() - 0.5);
        const currentColors = getParticleTextColors();
        this.particles.forEach((p, i) => {
            p.targetX = newTargets[i].x;
            p.targetY = newTargets[i].y;
            p.color = currentColors[Math.floor(Math.random() * currentColors.length)];
            // Burst
            p.curX += (Math.random() - 0.5) * 40;
            p.curY += (Math.random() - 0.5) * 40;
        });

        if (!this.animationId) this.animate();
    }

    refreshColors() {
        const currentColors = getParticleTextColors();
        this.particles.forEach(p => {
            p.color = currentColors[Math.floor(Math.random() * currentColors.length)];
            p.curX += (Math.random() - 0.5) * 20;
            p.curY += (Math.random() - 0.5) * 20;
        });
        if (!this.animationId) this.animate();
    }

    animate() {
        // Clear entire canvas area centered at origin
        this.ctx.clearRect(-this.canvas.width, -this.canvas.height, this.canvas.width * 2, this.canvas.height * 2);
        let active = false;

        this.particles.forEach(p => {
            p.update();
            p.draw(this.ctx);

            const dx = p.targetX - p.curX;
            const dy = p.targetY - p.curY;
            if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) active = true;
        });

        if (active || Math.random() > 0.98) {
            this.animationId = requestAnimationFrame(() => this.animate());
        } else {
            this.animationId = null;
        }
    }
}
