// components/AntigravityParticles.tsx
"use client";

import React, { useEffect, useRef } from "react";

const Antigravity = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const currentCanvas = canvas;
    const currentCtx = ctx;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];

    // Mouse state
    const mouse = {
      x: -9999, // Start off-screen
      y: -9999,
      radius: 150, // Interaction radius
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    // Track mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      // Get canvas position to correct coordinates if canvas isn't full screen
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    // Particle Class
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        currentCtx.beginPath();
        currentCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        currentCtx.fillStyle = this.color;
        currentCtx.fill();
      }

      update() {
        // 1. Boundary Logic (Bounce off edges)
        if (this.x > currentCanvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > currentCanvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // 2. Mouse Interaction (Antigravity Effect)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          if (
            mouse.x < this.x &&
            this.x < currentCanvas.width - this.size * 10
          ) {
            this.x += 3; // Push right
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 3; // Push left
          }
          if (
            mouse.y < this.y &&
            this.y < currentCanvas.height - this.size * 10
          ) {
            this.y += 3; // Push down
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 3; // Push up
          }
        }

        // 3. Move Particle
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    // Initialize Particles
    function init() {
      particlesArray = [];
      // Calculate number of particles based on screen area
      const numberOfParticles =
        (currentCanvas.height * currentCanvas.width) / 9000;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (window.innerWidth - size * 2) + size * 2;
        const y = Math.random() * (window.innerHeight - size * 2) + size * 2;
        const directionX = Math.random() * 1 - 0.5; // Speed range -0.5 to 0.5
        const directionY = Math.random() * 1 - 0.5;

        // Cyan/Blueish color to match your theme (Tailwind Cyan-300)
        const color = "rgba(103, 232, 249, 0.8)";

        particlesArray.push(
          new Particle(x, y, directionX, directionY, size, color)
        );
      }
    }

    // Draw lines between close particles
    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance =
            (particlesArray[a].x - particlesArray[b].x) *
              (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) *
              (particlesArray[a].y - particlesArray[b].y);

          if (
            distance <
            (currentCanvas.width / 7) * (currentCanvas.height / 7)
          ) {
            opacityValue = 1 - distance / 20000;
            if (!ctx) return;
            // Line color (Cyan with dynamic opacity)
            ctx.strokeStyle = "rgba(103, 232, 249," + opacityValue + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    }

    // Setup
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto"
      // pointer-events-auto allows the canvas to track mouse movements
      // If it blocks buttons, we might need to adjust z-index layers in the parent
    />
  );
};

export default Antigravity;
