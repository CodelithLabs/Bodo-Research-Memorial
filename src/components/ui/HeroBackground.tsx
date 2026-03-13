'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            // Handle high DPI displays for crisp rendering
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 2 + 0.5;
                this.density = (Math.random() * 30) + 1;

                // Obsidian to Ember color spectrum for particles
                const colors = ['rgba(217, 119, 87, 0.4)', 'rgba(184, 92, 64, 0.6)', 'rgba(255, 255, 255, 0.1)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Interactive physics logic based on mouse proximity
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Guard against divide by zero
                let forceDirectionX = 0;
                let forceDirectionY = 0;
                if (distance > 0) {
                    forceDirectionX = dx / distance;
                    forceDirectionY = dy / distance;
                }

                // Max distance to affect particles
                const maxDistance = 250;
                const force = Math.max(0, (maxDistance - distance) / maxDistance);

                // Repulsion logic
                const directionX = (forceDirectionX * force * this.density) * -0.6;
                const directionY = (forceDirectionY * force * this.density) * -0.6;

                if (distance < maxDistance) {
                    this.x += directionX;
                    this.y += directionY;
                } else {
                    // Return to base position slowly
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX;
                        this.x -= dx / 20;
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY;
                        this.y -= dy / 20;
                    }
                }
            }
        }

        const initParticles = () => {
            particles = [];
            // Calculate a grid based on screen size
            const spacing = 35;
            const cols = Math.floor(window.innerWidth / spacing);
            const rows = Math.floor(window.innerHeight / spacing);

            for (let y = 0; y <= rows; y++) {
                for (let x = 0; x <= cols; x++) {
                    // Add slight random offset for a more organic look
                    const offsetX = (Math.random() - 0.5) * spacing * 0.5;
                    const offsetY = (Math.random() - 0.5) * spacing * 0.5;
                    particles.push(new Particle((x * spacing) + offsetX, (y * spacing) + offsetY));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            // Draw subtle connecting lines (constellation effect) near mouse
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        const connectParticles = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Only connect if they are close AND near the mouse
                    const mouseDx = mouse.x - particles[a].x;
                    const mouseDy = mouse.y - particles[a].y;
                    const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

                    if (distance < 50 && mouseDistance < 200) {
                        const opacity = 1 - (distance / 50);
                        const mouseFade = 1 - (mouseDistance / 200);
                        ctx.strokeStyle = `rgba(217, 119, 87, ${opacity * mouseFade * 0.3})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        window.addEventListener('resize', resize);

        const mouseMoveHandler = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const mouseOutHandler = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mouseout', mouseOutHandler);

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseout', mouseOutHandler);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#050505]">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0 opacity-80"
            />
            {/* Ambient Base Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-secondary/5 blur-[150px] pointer-events-none z-0" />
        </div>
    );
}
