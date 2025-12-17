"use client";
import React, { useEffect, useState } from "react";

const TOTAL = 40;

export default function Particles() {
  const [positions, setPositions] = useState(
    Array.from({ length: TOTAL }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 4 + Math.random() * 6,
      delay: Math.random() * 4,
    }))
  );

  // VERY SMOOTH, ELEGANT MOVEMENT
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => {
          const drift = 0.08; // SUPER slow movement
          return {
            ...p,
            top: (p.top + (Math.random() * drift - drift / 2) + 100) % 100,
            left: (p.left + (Math.random() * drift - drift / 2) + 100) % 100,
          };
        })
      );
    }, 200); // slows down updates

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {positions.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-cyan-300/30 animate-hero-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            transition: "top 0.3s linear, left 0.3s linear",
          }}
        />
      ))}
    </div>
  );
}
