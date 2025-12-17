export default function ETP() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src="/images/etp.jpg" 
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-950/90" />

        <div className="absolute bottom-10 left-10 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
            Effluent Treatment Plant (ETP)
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl">
            Converts acidic waste streams into safe, reusable clean water.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">Acid-to-Water Conversion</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Our ETP system neutralizes harmful chemical effluents and purifies them to produce 
          clean water suitable for gardening, toilet use, and safe discharge.
        </p>

        <ul className="space-y-4 text-gray-300">
          <li>• pH neutralization system</li>
          <li>• Multi-stage filtration</li>
          <li>• Heavy-metal precipitation safeguards</li>
          <li>• Water output suitable for non-potable use</li>
        </ul>
      </section>
    </main>
  );
}
