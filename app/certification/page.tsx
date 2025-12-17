export default function Certification() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src="/images/certification.jpg" 
          className="w-full h-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 to-slate-950/90" />

        <div className="absolute bottom-10 left-10 animate-fade-in-up">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Scan-Based Certification
          </h1>
          <p className="text-gray-300 mt-3 max-w-2xl">
            Instantly verify purity, weight, batch data, and authenticity using QR technology.
          </p>
        </div>
      </section>

      <section className="px-8 py-20 max-w-5xl mx-auto animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">Real-Time Verification</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Each refined product includes a digital certificate containing full traceability data. 
          Simply scan the QR to view purity details, batch logs, processing history, and authenticity markers.
        </p>

        <ul className="space-y-4 text-gray-300">
          <li>• QR-enabled authentication</li>
          <li>• Immutable batch logs</li>
          <li>• Full transparency & traceability</li>
          <li>• Trusted by institutional clients</li>
        </ul>
      </section>
    </main>
  );
}
