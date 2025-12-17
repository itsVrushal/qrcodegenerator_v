// "use client";

// import React, { useEffect, useRef } from "react";

// export default function HeroClient({ theme }) {
//   const canvasRef = useRef(null);
//   const isDark = theme === "dark";

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let particlesArray = [];
//     const mouse = { x: undefined, y: undefined, radius: 150 };

//     const handleMouseMove = (e) => { mouse.x = e.x; mouse.y = e.y; };
    
//     // Dynamic Color based on Theme
//     // Dark: Cyan (#67e8f9) | Light: Gold (#d97706)
//     const particleColor = theme === "dark" ? "rgba(103, 232, 249, 0.8)" : "rgba(217, 119, 6, 0.8)";
//     const lineColor = theme === "dark" ? "103, 232, 249" : "217, 119, 6"; // RGB values for line opacity

//     const init = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       particlesArray = [];
//       let numberOfParticles = (canvas.height * canvas.width) / 9000;

//       for (let i = 0; i < numberOfParticles; i++) {
//         let size = Math.random() * 2 + 1;
//         let x = Math.random() * (canvas.width - size * 2) + size * 2;
//         let y = Math.random() * (canvas.height - size * 2) + size * 2;
//         let directionX = Math.random() * 1 - 0.5;
//         let directionY = Math.random() * 1 - 0.5;
//         particlesArray.push({ x, y, directionX, directionY, size });
//       }
//     };

//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particlesArray.forEach((p) => {
//         // Update
//         if (p.x > canvas.width || p.x < 0) p.directionX = -p.directionX;
//         if (p.y > canvas.height || p.y < 0) p.directionY = -p.directionY;
        
//         // Mouse Interaction
//         let dx = mouse.x - p.x;
//         let dy = mouse.y - p.y;
//         let distance = Math.sqrt(dx * dx + dy * dy);
//         if (distance < mouse.radius + p.size) {
//              if (mouse.x < p.x && p.x < canvas.width - p.size * 10) p.x += 3;
//              if (mouse.x > p.x && p.x > p.size * 10) p.x -= 3;
//              if (mouse.y < p.y && p.y < canvas.height - p.size * 10) p.y += 3;
//              if (mouse.y > p.y && p.y > p.size * 10) p.y -= 3;
//         }

//         p.x += p.directionX;
//         p.y += p.directionY;

//         // Draw Dot
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = particleColor;
//         ctx.fill();

//         // Draw Lines
//         particlesArray.forEach((p2) => {
//             let dist = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
//             if (dist < (canvas.width/7) * (canvas.height/7)) {
//                 let opacity = 1 - dist / 20000;
//                 ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
//                 ctx.lineWidth = 1;
//                 ctx.beginPath();
//                 ctx.moveTo(p.x, p.y);
//                 ctx.lineTo(p2.x, p2.y);
//                 ctx.stroke();
//             }
//         });
//       });
//     };

//     init();
//     animate();
//     window.addEventListener("resize", init);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", init);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [theme]); // Re-run when theme changes

//   return (
//     <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" style={{ opacity: 0.6 }}></canvas>
      
//       {/* Orbs - Change color based on theme */}
//       <div className={`absolute -top-20 -left-20 w-96 h-96 blur-3xl rounded-full z-0 transition-colors duration-1000 ${
//           isDark ? "bg-emerald-500/20" : "bg-amber-300/30"
//       }`}></div>
//       <div className={`absolute top-10 right-10 w-72 h-72 blur-3xl rounded-full z-0 transition-colors duration-1000 ${
//           isDark ? "bg-blue-500/20" : "bg-yellow-500/20"
//       }`}></div>

//       <div className="relative z-10 max-w-5xl mx-auto px-6 pointer-events-none">
//         <h1 className={`pointer-events-auto text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent drop-shadow-lg leading-tight transition-all duration-700 ${
//             isDark 
//             ? "bg-gradient-to-r from-blue-300 via-emerald-300 to-yellow-400" 
//             : "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 drop-shadow-none"
//         }`}>
//           Sustainable<br />Gold Refiners
//         </h1>

//         <p className={`pointer-events-auto text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed transition-colors duration-700 ${
//             isDark ? "text-gray-300" : "text-slate-600 font-medium"
//         }`}>
//           Combining engineering precision with eco-safe systems—our refinery leads the industry with clean air technology, effluent conversion, and fully verifiable purity.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";

export default function HeroClient({ theme }: { theme: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particlesArray: Particle[] = [];

    // --- CONFIGURATION ---
    const mouse = { x: -9999, y: -9999, radius: 150 };
    
    // Dynamic Colors based on theme
    const colors = {
      particle: isDark ? "rgba(148, 163, 184, 0.5)" : "rgba(100, 116, 139, 0.5)", // Slate
      glow:     isDark ? "rgba(34, 211, 238, 1)"    : "rgba(245, 158, 11, 1)",    // Cyan vs Amber
      line:     isDark ? "103, 232, 249"            : "245, 158, 11"              // RGB for lines
    };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x; // Remember original position
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 1; // How heavy/fast it moves
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        
        // CHECK MOUSE DISTANCE FOR GLOW
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        
        if (distance < 100) {
            ctx.fillStyle = colors.glow; // Bright active color
            ctx.shadowBlur = 15;         // Glow effect
            ctx.shadowColor = colors.glow;
        } else {
            ctx.fillStyle = colors.particle; // Dim passive color
            ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }

      update() {
        // MOUSE INTERACTION PHYSICS
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        const maxDistance = mouse.radius;

        // "Force Direction" - Calculates angle to move particle away/towards mouse
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;

        // "Force Magnitude" - Closer = Stronger push
        const force = (maxDistance - distance) / maxDistance;
        
        // "Direction" - Negative means push away (Antigravity), Positive means pull (Gravity)
        // Let's do a gentle "Push" to create a ripple effect
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position (Elastic Snap)
          if (this.x !== this.baseX) {
            const dxMove = this.x - this.baseX;
            this.x -= dxMove / 10; // Easing factor
          }
          if (this.y !== this.baseY) {
            const dyMove = this.y - this.baseY;
            this.y -= dyMove / 10;
          }
        }
        this.draw();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesArray = [];
      
      // Density: 1 particle per 9000px
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy;

          // Connect if close enough (100px)
          if (distance < (canvas.width/7) * (canvas.height/7)) {
             const connectDistance = 100 * 100; // threshold squared
             if (distance < connectDistance) {
                 opacityValue = 1 - (distance / connectDistance);
                 ctx.strokeStyle = `rgba(${colors.line}, ${opacityValue})`;
                 ctx.lineWidth = 1;
                 ctx.beginPath();
                 ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                 ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                 ctx.stroke();
             }
          }
        }
      }
    };

    // EVENTS
    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => { mouse.x = -9999; };
    const handleResize = () => { init(); };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    init();
    animate();

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mouseleave', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
    };
  }, [theme, isDark]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>
      
      {/* Background Gradients */}
      <div className={`absolute -top-20 -left-20 w-96 h-96 blur-3xl rounded-full z-0 pointer-events-none transition-colors duration-1000 ${
          isDark ? "bg-emerald-500/20" : "bg-amber-300/30"
      }`}></div>
      <div className={`absolute top-10 right-10 w-72 h-72 blur-3xl rounded-full z-0 pointer-events-none transition-colors duration-1000 ${
          isDark ? "bg-blue-500/20" : "bg-yellow-500/20"
      }`}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pointer-events-none">
        <h1 className={`pointer-events-auto text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent drop-shadow-lg leading-tight transition-all duration-700 ${
            isDark 
            ? "bg-gradient-to-r from-blue-300 via-emerald-300 to-yellow-400" 
            : "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-400 drop-shadow-none"
        }`}>
          Refinement meets Sustanability
        </h1>

        <p className={`pointer-events-auto text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed transition-colors duration-700 ${
            isDark ? "text-gray-300" : "text-slate-600 font-medium"
        }`}>
          Combining advanced refining technology with eco-friendly practices for achieving{' '}
          <span className="font-bold text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">
            low carbon emissions
          </span>
          , neutralizing{' '}
          <span className="font-bold text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.3)]">
            toxic residue
          </span>{' '}
          and{' '}
          <span className="font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            recycling water
          </span>{' '}
          used in the refining process.
        </p>
      </div>
    </section>
  );
}
