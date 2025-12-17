export default function EcoFriendly() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src="/images/eco.jpg" 
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-950/90" />

        <div className="absolute bottom-10 left-10 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Eco-Friendly Refining
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl">
            Our refinery is engineered to minimize emissions and operate with maximum sustainability.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">Sustainable Engineering</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Our eco-friendly refinery incorporates emission controls, chemically-stable workflows, 
          and advanced material recovery systems that drastically reduce environmental impact.
        </p>

        <ul className="space-y-4 text-gray-300">
          <li>• Low-emission processing chambers</li>
          <li>• Environmentally safe chemical handling</li>
          <li>• Waste heat recycling</li>
          <li>• Minimal environmental footprint verified through audits</li>
        </ul>
      </section>
    </main>
  );
}
