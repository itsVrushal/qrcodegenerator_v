import React from "react";

export default function Features({ theme }) {
  const isDark = theme === "dark";

  return (
    <section className={`relative py-32 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-slate-950" : "bg-slate-50"
    }`}>
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
        style={{
            backgroundImage: `radial-gradient(${isDark ? "#475569" : "#cbd5e1"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
        }}
      ></div>
      
      <div className={`absolute inset-0 z-0 bg-gradient-to-b via-transparent pointer-events-none ${
          isDark ? "from-slate-950 to-slate-950" : "from-slate-50 to-slate-50"
      }`}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent transition-all duration-700 ${
              isDark 
              ? "bg-gradient-to-r from-blue-200 via-cyan-200 to-white"
              : "bg-gradient-to-r from-slate-800 via-amber-700 to-slate-900"
          }`}>
            Core Environmental Systems
          </h2>
          <p className={`mt-6 text-lg max-w-2xl mx-auto transition-colors duration-700 ${
              isDark ? "text-slate-400" : "text-slate-600"
          }`}>
            The foundation of our refinery—engineered for zero-emission safety and absolute precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <PillarCard theme={theme} href="/eco" title="Eco-Friendly Refining" icon="🌱" desc="Closed-loop systems designed to capture 99.9% of emissions." />
          <PillarCard theme={theme} href="/scrubbers" title="Scrubber Systems" icon="🧪" desc="Advanced chemical absorption towers that neutralize fumes." />
          <PillarCard theme={theme} href="/etp" title="Effluent Treatment" icon="💧" desc="Multi-stage filtration converts waste into reusable water." />
          <PillarCard theme={theme} href="/cert" title="Digital Verification" icon="🔍" desc="Blockchain-ready QR codes allow instant verification." />
        </div>
      </div>
    </section>
  );
}

function PillarCard({ theme, href, title, icon, desc }) {
  const isDark = theme === "dark";
  return (
    <a href={href} className={`group relative overflow-hidden rounded-3xl border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isDark 
        ? "bg-slate-900/50 border-white/5 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
        : "bg-white border-slate-200 hover:border-amber-400/50 hover:shadow-amber-500/10"
    }`}>
      <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-4xl shadow-inner ring-1 transition-colors ${
          isDark ? "bg-blue-500/10 ring-white/10" : "bg-amber-100 ring-amber-200"
      }`}>
        {icon}
      </div>
      <h3 className={`mb-3 text-2xl font-semibold transition-colors ${
          isDark ? "text-white group-hover:text-cyan-200" : "text-slate-800 group-hover:text-amber-700"
      }`}>{title}</h3>
      <p className={`leading-relaxed transition-colors ${
          isDark ? "text-slate-400 group-hover:text-slate-300" : "text-slate-500 group-hover:text-slate-700"
      }`}>{desc}</p>
    </a>
  );
}
