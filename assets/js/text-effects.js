class Particle {
    constructor(x, y) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.targetX = x;
        this.targetY = y;
        const colors = ['#e2a397', '#f0a58e', '#fafaf9', '#d6d3d1', '#78716c'];
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

        window.addEventListener('resize', () => this.resize());
        this.resize();
    }

    resize() {
        const rect = this.textElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;

        // Increase padding to 100px so particles have more "flight space" without clipping
        const padding = 100;
        this.canvas.width = (rect.width + padding) * dpr;
        this.canvas.height = (rect.height + padding) * dpr;
        this.canvas.style.width = `${rect.width + padding}px`;
        this.canvas.style.height = `${rect.height + padding}px`;

        this.ctx.scale(dpr, dpr);
        this.ctx.translate(padding / 2, padding / 2);
    }

    setText(text) {
        this.currentText = text;
        const dpr = window.devicePixelRatio || 1;
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true });

        const parentStyle = window.getComputedStyle(this.textElement.parentElement.parentElement);
        const fontSize = parseInt(parentStyle.fontSize);
        const fontWeight = parentStyle.fontWeight;

        // Use high-DPI for the sampling canvas too
        tempCanvas.width = this.canvas.width;
        tempCanvas.height = this.canvas.height;
        tempCtx.scale(dpr, dpr);

        tempCtx.fillStyle = 'white';
        tempCtx.font = `${fontWeight} ${fontSize}px Outfit`;
        tempCtx.textAlign = 'left';
        tempCtx.textBaseline = 'middle';

        // Draw centered in the padded area (padding/2 translate from resize)
        const xPos = 10; // Add small padding on the left to avoid clipping
        const baselineY = (this.canvas.height / dpr) / 2;
        tempCtx.fillText(text, xPos, baselineY);

        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const newTargets = [];
        const border = 5 * dpr;

        for (let y = border; y < tempCanvas.height - border; y += this.sampling) {
            for (let x = border; x < tempCanvas.width - border; x += this.sampling) {
                const index = (x + y * tempCanvas.width) * 4;
                if (imageData.data[index + 3] > 128) {
                    newTargets.push({
                        x: (x / dpr) - 50, // Adjust for larger padding (100/2)
                        y: (y / dpr) - baselineY
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
        this.particles.forEach((p, i) => {
            p.targetX = newTargets[i].x;
            p.targetY = newTargets[i].y;
            // Burst
            p.curX += (Math.random() - 0.5) * 50;
            p.curY += (Math.random() - 0.5) * 50;
        });

        if (!this.animationId) this.animate();
    }

    animate() {
        // Clear a much larger area to ensure no ghosting or clipping
        const padding = 100;
        this.ctx.clearRect(-padding, -this.canvas.height, this.canvas.width * 2, this.canvas.height * 2);
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
