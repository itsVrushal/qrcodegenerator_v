"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void; // Defines a function that takes no args and returns nothing
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- DYNAMIC STYLES BASED ON THEME ---
  const navContainerClasses = isScrolled
    ? isDark
      ? "w-full rounded-none py-4 px-8 bg-neutral-900/95 border-b-amber-500/20" // Dark Scrolled (Warm)
      : "w-full rounded-none py-4 px-8 bg-white/90 border-b-amber-200/50 shadow-sm backdrop-blur-md" // Light Scrolled
    : isDark
      ? "w-full max-w-3xl rounded-full py-3 px-6 bg-slate-900/60 border-white/10 shadow-cyan-500/10" // Dark Floating
      : "w-full max-w-3xl rounded-full py-3 px-6 bg-white/70 border-amber-900/10 shadow-amber-500/10 backdrop-blur-md"; // Light Floating

  const logoGradient = isDark
    ? isScrolled ? "from-amber-600 to-yellow-500" : "from-blue-600 to-cyan-500"
    : "from-amber-500 to-yellow-400"; // Light mode always Gold

  const textColor = isDark ? "text-white" : "text-slate-800";
  const subTextColor = isDark
    ? (isScrolled ? "text-amber-400" : "text-cyan-400")
    : "text-amber-600"; // Light mode Gold text

  return (
    <nav className={`fixed z-50 transition-all duration-500 ease-in-out flex justify-center ${isScrolled ? "top-0 left-0 right-0" : "top-6 left-0 right-0 px-4"
      }`}>
      <div className={`relative flex items-center justify-between transition-all duration-500 ease-in-out border backdrop-blur-xl shadow-lg ${navContainerClasses}`}>

        {/* LEFT: LOGO */}
        {/* <div className="flex items-center gap-3">
          <div className={`relative flex h-9 w-9 items-center justify-center rounded-full text-white shadow-lg bg-gradient-to-tr ${logoGradient}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <div className="hidden sm:block">
            <span className={`block text-sm font-bold tracking-wide ${textColor}`}>MOSAIC</span>
            <span className={`block text-[10px] font-medium tracking-widest uppercase ${subTextColor}`}>REFINERS</span>
          </div>
        </div> */}
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full shadow-lg bg-gradient-to-tr">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
        </div>


        {/* RIGHT: CONTROLS */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isDark ? "bg-white/10 hover:bg-white/20 text-yellow-300" : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            title="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Contact Button */}
          <a href="#contact" className={`hidden md:flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-105 ${isDark
            ? (isScrolled ? "bg-amber-500/10 border border-amber-500/20" : "bg-white/5 border border-white/5")
            : "bg-amber-500 text-white shadow-md shadow-amber-500/20"
            }`}>
            <span>Contact</span>
          </a>
        </div>

      </div>
    </nav>
  );
}
