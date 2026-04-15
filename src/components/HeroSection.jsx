import { Waves, Rocket, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="intro" className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/4 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-[#0891b2]/5 blur-[100px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#00d4ff]/3 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
          <Waves size={12} />
          <span>Vibe Coding Guide 2025</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#e2e8f0] leading-[1.1] mb-6 tracking-tight">
          <span className="block">Der Ultimative</span>
          <span className="block text-[#00d4ff] mt-1">Vibe Coding Guide</span>
        </h1>

        <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
          Willkommen in der Zukunft der Softwareentwicklung! Beim Vibe Coding geht es nicht mehr darum,
          sich stundenlang mit fehlenden Semikolons oder komplexer Syntax herumzuschlagen.
          Du gibst den <span className="text-[#00d4ff] font-medium">Vibe</span> vor — die Idee, die Architektur,
          das Gefühl — und die KI erledigt die harte Arbeit.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {['Spec-Driven Dev', 'KI-gestützt', 'GitHub Workflow', 'Zero-Config Deploy'].map((tag) => (
            <span key={tag} className="text-xs text-[#475569] bg-[#0d1f3c] border border-[#1e3a5f] px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#phase1"
            className="flex items-center gap-2 bg-[#00d4ff] text-[#050a14] font-semibold px-6 py-3 rounded-xl hover:bg-[#00b8d9] transition-colors duration-200 text-sm"
          >
            <Rocket size={16} />
            Guide starten
          </a>
          <a
            href="#phase1"
            className="flex items-center gap-2 text-[#94a3b8] border border-[#1e3a5f] px-6 py-3 rounded-xl hover:border-[#00d4ff]/40 hover:text-[#e2e8f0] transition-all duration-200 text-sm"
          >
            Inhaltsverzeichnis
            <ArrowDown size={14} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-[#1e3a5f]" />
      </div>
    </section>
  );
}
