"use client";

import React, { useEffect, useRef, useState } from "react";

// DATA: Update paths to match your files in the 'public' folder
const items = [
  {
    id: "carbon",
    title: "Low Carbon Emissions",
    color: "text-emerald-400",
    desc: "Our advanced smelting furnaces use closed-loop filtration to capture 99.9% of particulate matter. By optimizing combustion efficiency, we drastically reduce the carbon footprint of every kilo refined, setting a new standard for green metallurgy.",
    img: "carbon1.jpg" // <--- Make sure this file exists in /public folder
  },
  {
    id: "toxic",
    title: "Neutralizing Toxic Residue",
    color: "text-rose-400",
    desc: "Traditional refining releases harmful sulfur and nitrogen oxides. Our multi-stage wet scrubbers chemically neutralize these fumes before they ever reach the chimney, turning hazardous waste into harmless, neutral compounds.",
    img: "toxic1.jpg" // <--- Make sure this file exists in /public folder
  },
  {
    id: "water",
    title: "Recycling Water",
    color: "text-cyan-400",
    desc: "Water is precious. Our Effluent Treatment Plant (ETP) processes acidic wastewater through pH correction and reverse osmosis, allowing us to reuse 95% of process water for cooling and sanitation, achieving near zero-liquid discharge.",
    img: "water1.jpg" // <--- Make sure this file exists in /public folder
  }
];

export default function SustainabilityScroll({ theme }: { theme: string }) {
  const isDark = theme === "dark";
  const [activeId, setActiveId] = useState(items[0].id);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Trigger when element is near center of screen
      threshold: 0.5 // Trigger when 50% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Only set active if it's actually on screen
            setActiveId(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`relative py-24 transition-colors duration-700 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
    }`}>
      
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-24 text-center">
           <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${
               isDark ? "text-white" : "text-slate-900"
           }`}>
             What Sustainability Means to Us
           </h2>
           <p className={`text-lg max-w-2xl mx-auto ${
               isDark ? "text-slate-400" : "text-slate-600"
           }`}>
             Our Focus relies on three major goals
           </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT: SCROLLING TEXT CONTENT */}
          <div className="lg:w-1/2 flex flex-col pb-32">
            {items.map((item, index) => (
              <div 
                key={item.id}
                id={item.id}
                ref={(el) => { if (el) observerRefs.current[index] = el; }} 
                // Increased height (min-h-screen) so they don't overlap
                className={`transition-all duration-700 flex flex-col justify-center min-h-[80vh] px-4 border-l-4 ${
                    activeId === item.id 
                    ? `opacity-100 translate-x-0 ${isDark ? 'border-l-white' : 'border-l-slate-900'}` 
                    : "opacity-20 translate-x-[-20px] border-l-transparent blur-sm"
                }`}
              >
                <h3 className={`text-4xl md:text-5xl font-bold mb-8 ${item.color}`}>
                  {item.title}
                </h3>
                <p className={`text-xl md:text-2xl leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-700"
                }`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: STICKY IMAGE HOLDER */}
          <div className="lg:w-1/2 relative hidden lg:block">
            {/* Sticky Container - Stuck to center of viewport */}
            <div className="sticky top-1/4 w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
               
               {/* Render ALL images stacked */}
               {items.map((item) => (
                 <div
                   key={item.id}
                   className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                       activeId === item.id 
                         ? "opacity-100 scale-100 z-10" 
                         : "opacity-0 scale-110 z-0" 
                   }`}
                 >
                   {/* Gradient Overlay for Readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent z-10"></div>
                   
                   <img 
                     src={item.img} 
                     alt={item.title}
                     className="w-full h-full object-cover"
                   />
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
