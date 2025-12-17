export default function Scrubbers() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src="/images/scrubber.jpg" 
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-950/90" />

        <div className="absolute bottom-10 left-10 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Industrial Scrubber Systems
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl">
            Scrubbers neutralize chemical fumes and ensure clean, safe air output.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">How Scrubbers Work</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Our scrubbers absorb and neutralize toxic gaseous byproducts generated during gold refining. 
          They ensure worker safety and environmental compliance by converting harmful fumes 
          into harmless compounds before release.
        </p>

        <ul className="space-y-4 text-gray-300">
          <li>• Multi-stage chemical absorption</li>
          <li>• Fume neutralization and filtration</li>
          <li>• Real-time exhaust monitoring</li>
          <li>• Near-zero harmful emissions</li>
        </ul>
      </section>
    </main>
  );
}
