// --- Particle Background System ---
function initParticles() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    function getBgParticleColors() {
        const theme = document.documentElement.getAttribute('data-theme') || 'light';
        return theme === 'dark'
            ? ['rgba(226, 163, 151, 0.35)', 'rgba(240, 165, 142, 0.35)', 'rgba(250, 250, 249, 0.2)']
            : ['rgba(139, 154, 110, 0.35)', 'rgba(117, 131, 92, 0.45)', 'rgba(234, 226, 214, 0.5)'];
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            const colors = getBgParticleColors();
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        resize();
        particles = [];
        const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            p1.update();
            p1.draw();

            // Draw connecting lines between close particles
            for (let j = i; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) { // Increased connection distance
                    ctx.beginPath();
                    const theme = document.documentElement.getAttribute('data-theme') || 'light';
                    const strokeRgb = theme === 'dark' ? '226, 163, 151' : '139, 154, 110';
                    ctx.strokeStyle = `rgba(${strokeRgb}, ${0.12 * (1 - dist / 150)})`;
                    ctx.lineWidth = 0.5; // Thinner lines
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    window.refreshBgParticles = function() {
        const newColors = getBgParticleColors();
        particles.forEach(p => {
            p.color = newColors[Math.floor(Math.random() * newColors.length)];
        });
    };

    window.addEventListener('resize', () => {
        resize();
        init();
    });

    init();
    animate();
}
