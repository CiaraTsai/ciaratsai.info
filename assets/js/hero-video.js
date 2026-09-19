/**
 * WebGL Transparent Video Player for Hero Section
 * Strips white background in real-time on GPU, providing 100% transparent
 * background that seamlessly blends into the website's grid & particle background.
 * Automatically adapts sketch line colors between Light and Dark themes.
 */

class HeroVideoPlayer {
    constructor() {
        this.canvas = null;
        this.gl = null;
        this.video = null;
        this.program = null;
        this.texture = null;
        this.animFrameId = null;
        this.isDarkLoc = null;
        this.isVisible = true;
        this.isInitialized = false;
    }

    init(canvasId, videoId) {
        this.canvas = document.getElementById(canvasId);
        this.video = document.getElementById(videoId);

        if (!this.canvas || !this.video) {
            console.warn('[HeroVideo] Canvas or Video element not found.');
            return;
        }

        // Set explicit default dimensions on canvas
        if (!this.canvas.width) this.canvas.width = 720;
        if (!this.canvas.height) this.canvas.height = 1280;

        // Detect local file:// protocol where WebGL video texture is blocked by browser CORS
        if (window.location.protocol === 'file:') {
            console.log('[HeroVideo] Local file:// protocol detected. Using CSS blend-mode fallback.');
            this.fallbackToCSS();
            return;
        }

        const gl = this.canvas.getContext('webgl', {
            alpha: true,
            premultipliedAlpha: true,
            antialias: true
        }) || this.canvas.getContext('experimental-webgl', {
            alpha: true,
            premultipliedAlpha: true
        });

        if (!gl) {
            console.warn('[HeroVideo] WebGL not supported, falling back to CSS blend mode.');
            this.fallbackToCSS();
            return;
        }

        this.gl = gl;

        // Vertex & Fragment Shaders
        const vsSource = `
            attribute vec2 a_position;
            attribute vec2 a_texCoord;
            varying vec2 v_texCoord;
            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
                v_texCoord = vec2(a_texCoord.x, 1.0 - a_texCoord.y);
            }
        `;

        const fsSource = `
            precision mediump float;
            uniform sampler2D u_video;
            uniform int u_isDark;
            varying vec2 v_texCoord;

            void main() {
                vec4 src = texture2D(u_video, v_texCoord);
                float lum = dot(src.rgb, vec3(0.299, 0.587, 0.114));
                bool isBlue = (src.b > src.r + 0.12) && (src.b > src.g * 0.95);

                // Alpha gradient: white background (lum > 0.90) is 100% transparent
                float alpha = 1.0 - smoothstep(0.72, 0.93, lum);
                if (alpha <= 0.01) {
                    discard;
                }

                vec3 col;
                if (u_isDark == 0) {
                    // Light Theme: Deep organic charcoal ink lines matching text
                    col = isBlue ? src.rgb : vec3(0.17, 0.20, 0.14);
                } else {
                    // Dark Theme: Glowing soft-gold / crisp lines + Vibrant Cyan Blue Bottle
                    col = isBlue ? vec3(0.18, 0.72, 1.0) : vec3(0.95, 0.93, 0.90);
                }

                gl_FragColor = vec4(col * alpha, alpha);
            }
        `;

        const program = this.createProgram(gl, vsSource, fsSource);
        if (!program) return;
        this.program = program;

        // Quad Geometry (two triangles filling full viewport)
        const positionLoc = gl.getAttribLocation(program, 'a_position');
        const texCoordLoc = gl.getAttribLocation(program, 'a_texCoord');
        this.isDarkLoc = gl.getUniformLocation(program, 'u_isDark');

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            // x, y, u, v
            -1, -1, 0, 0,
             1, -1, 1, 0,
            -1,  1, 0, 1,
            -1,  1, 0, 1,
             1, -1, 1, 0,
             1,  1, 1, 1,
        ]), gl.STATIC_DRAW);

        gl.enableVertexAttribArray(positionLoc);
        gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 16, 0);

        gl.enableVertexAttribArray(texCoordLoc);
        gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, false, 16, 8);

        // Texture Setup
        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        this.texture = texture;

        gl.useProgram(program);
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        // Setup Video Playback
        this.video.muted = true;
        this.video.defaultMuted = true;
        this.video.setAttribute('muted', '');
        this.video.playsInline = true;
        this.video.setAttribute('playsinline', '');
        this.video.loop = true;

        const startPlayback = () => {
            if (this.video.videoWidth && this.video.videoHeight) {
                this.canvas.width = this.video.videoWidth;
                this.canvas.height = this.video.videoHeight;
                gl.viewport(0, 0, this.canvas.width, this.canvas.height);
            }
            const playPromise = this.video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    const resumeOnInteract = () => {
                        this.video.play();
                        window.removeEventListener('click', resumeOnInteract);
                        window.removeEventListener('touchstart', resumeOnInteract);
                    };
                    window.addEventListener('click', resumeOnInteract, { once: true });
                    window.addEventListener('touchstart', resumeOnInteract, { once: true });
                });
            }
            this.startRenderLoop();
        };

        if (this.video.readyState >= 2) {
            startPlayback();
        } else {
            this.video.addEventListener('loadeddata', startPlayback, { once: true });
            this.video.addEventListener('canplay', startPlayback, { once: true });
        }

        // Intersection Observer: Pause when off-screen to save battery/GPU
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    this.isVisible = entry.isIntersecting;
                    if (this.isVisible && !this.animFrameId) {
                        this.startRenderLoop();
                    }
                });
            }, { threshold: 0.05 });
            observer.observe(this.canvas);
        }

        this.isInitialized = true;
    }

    createProgram(gl, vs, fs) {
        const vShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vShader, vs);
        gl.compileShader(vShader);
        if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) {
            console.error('Vertex shader error:', gl.getShaderInfoLog(vShader));
            return null;
        }

        const fShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fShader, fs);
        gl.compileShader(fShader);
        if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) {
            console.error('Fragment shader error:', gl.getShaderInfoLog(fShader));
            return null;
        }

        const prog = gl.createProgram();
        gl.attachShader(prog, vShader);
        gl.attachShader(prog, fShader);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error('Program link error:', gl.getProgramInfoLog(prog));
            return null;
        }
        return prog;
    }

    startRenderLoop() {
        if (this.animFrameId) return;

        const render = () => {
            if (!this.isVisible) {
                this.animFrameId = null;
                return;
            }

            const gl = this.gl;
            if (gl && this.video && this.video.readyState >= 2) {
                // Update canvas dimensions if video aspect ratio is now available
                if (this.video.videoWidth && this.canvas.width !== this.video.videoWidth) {
                    this.canvas.width = this.video.videoWidth;
                    this.canvas.height = this.video.videoHeight;
                    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
                }

                // Update theme uniform
                const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ? 1 : 0;
                gl.uniform1i(this.isDarkLoc, isDark);

                // Upload current video frame to texture
                try {
                    gl.bindTexture(gl.TEXTURE_2D, this.texture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.video);
                } catch (err) {
                    console.warn('[HeroVideo] WebGL texture upload failed, falling back to CSS blend mode:', err);
                    this.fallbackToCSS();
                    return;
                }

                // Clear and render
                gl.clearColor(0, 0, 0, 0);
                gl.clear(gl.COLOR_BUFFER_BIT);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
            }

            this.animFrameId = requestAnimationFrame(render);
        };

        this.animFrameId = requestAnimationFrame(render);
    }

    fallbackToCSS() {
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
        if (this.canvas) {
            this.canvas.style.display = 'none';
        }
        if (this.video) {
            this.video.className = 'hero-video-fallback';
            this.video.style.position = 'relative';
            this.video.style.opacity = '1';
            this.video.style.pointerEvents = 'none';
            this.video.style.zIndex = '1';
            this.video.style.display = 'block';
            this.video.style.width = 'auto';
            this.video.style.height = 'auto';
            this.video.play().catch(() => {});
        }
    }
}

// Global instance
window.heroVideoPlayer = new HeroVideoPlayer();

function initHeroVideo() {
    window.heroVideoPlayer.init('hero-canvas', 'hero-video');
}
