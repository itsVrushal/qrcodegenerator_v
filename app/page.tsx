"use client";

import React, { useState } from "react";
import HeroClient from "@/components/HeroClient";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import SustainabilityScroll from "@/components/SustainabilityScroll";

interface FeaturesProps {
  theme: "light" | "dark";
}

export default function Home() {
  // State: 'dark' or 'light'
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-700 ease-in-out ${theme === "dark"
        ? "bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200"
        : "bg-slate-50 text-slate-900 selection:bg-amber-500/30 selection:text-amber-800"
        }`}
    >
      {/* Pass theme props to Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Pass theme props to Sections */}
      <HeroClient theme={theme} />

      <div className="relative z-10">
        <Features theme={theme} />
        <SustainabilityScroll theme={theme} />
        <Contact theme={theme} />
      </div>

      <footer
        className={`py-8 border-t text-center text-sm relative z-10 transition-colors duration-500 ${theme === 'dark'
          ? "bg-slate-950 border-white/5 text-slate-500"
          : "bg-slate-100 border-amber-900/10 text-slate-400"
          }`}
      >
        <p>© {new Date().getFullYear()} Bullion Refinery Tech. Engineering Sustainability.</p>
      </footer>
    </main>
  );
}
