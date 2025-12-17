import React from "react";

interface ContactProps {
  theme: string;
}

export default function Contact({ theme }: ContactProps) {
  const isDark = theme === "dark";

  return (
    <section id="contact" className={`relative py-24 transition-colors duration-700 ${isDark ? "bg-slate-950" : "bg-slate-50"
      }`}>
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r via-opacity-50 to-transparent ${isDark ? "from-transparent via-blue-500/50" : "from-transparent via-amber-500/30"
        }`}></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors ${isDark ? "text-white" : "text-slate-900"
          }`}>
          Ready to Refine?
        </h2>
        <p className={`text-lg mb-12 transition-colors ${isDark ? "text-slate-400" : "text-slate-600"
          }`}>
          Connect with our engineering team to discuss your requirements.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <ContactCard theme={theme} icon="📞" title="24/7 Support" content="+91 98765 43210" />
          <ContactCard theme={theme} icon="✉️" title="Email Us" content="info@bullion.com" />
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  theme: string;
  icon: string;
  title: string;
  content: string;
}

function ContactCard({ theme, icon, title, content }: ContactCardProps) {
  const isDark = theme === "dark";
  return (
    <div className={`flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 ${isDark
        ? "bg-slate-900 border-white/5 hover:border-blue-500/30"
        : "bg-white border-slate-200 hover:border-amber-400/50 shadow-sm"
      }`}>
      <span className={`text-4xl mb-4 p-4 rounded-full ring-1 transition-colors ${isDark ? "bg-blue-500/10 ring-white/10" : "bg-amber-100 ring-amber-200"
        }`}>{icon}</span>
      <h3 className={`text-sm font-medium tracking-wide uppercase mb-2 ${isDark ? "text-blue-400" : "text-amber-600"
        }`}>{title}</h3>
      <p className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-800"
        }`}>{content}</p>
    </div>
  );
}
