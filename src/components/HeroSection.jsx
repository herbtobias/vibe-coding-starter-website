import { ArrowDown, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="intro" className="relative min-h-screen flex flex-col justify-end px-6 pb-16 pt-24 overflow-hidden bg-[#060d1a]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(90deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 80px)`,
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d4ff]/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#00d4ff]/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#00d4ff]" />
          <span className="text-[11px] font-mono font-bold text-[#00d4ff] uppercase tracking-[0.3em]">
            Vibe Coding Guide — 2026 Edition
          </span>
        </div>

        <h1
          className="font-black uppercase leading-none mb-6 text-[#e2e8f0]"
          style={{
            fontFamily: "'Bebas Neue', 'Inter', sans-serif",
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            letterSpacing: '0.01em',
            lineHeight: '0.9',
          }}
        >
          <span className="block">Der</span>
          <span className="block text-[#00d4ff]">Ultimative</span>
          <span className="block">Vibe</span>
          <span className="block">Coding</span>
          <span className="block">Guide</span>
        </h1>

        <div className="mt-10 max-w-2xl">
          <p className="text-[#94a3b8] text-base leading-relaxed border-l-2 border-[#00d4ff] pl-5">
            Stell dir vor, die Barriere zwischen deiner genialen Idee und dem fertigen Produkt wäre plötzlich verschwunden.
            Du gibst den <strong className="text-[#e2e8f0]">Vibe</strong> vor — die KI erledigt die harte Arbeit.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href="#phase1"
            className="inline-flex items-center gap-2 bg-[#00d4ff] text-black font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-[#00bcd4] transition-colors duration-150"
          >
            <Zap size={14} />
            Guide starten
          </a>
          <a
            href="#phase1"
            className="inline-flex items-center gap-2 border border-[#1e3a5f] text-[#94a3b8] text-sm px-6 py-3 uppercase tracking-wider hover:border-[#00d4ff]/40 hover:text-[#e2e8f0] transition-all duration-150"
          >
            Inhaltsverzeichnis
            <ArrowDown size={12} />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {['Spec-Driven Dev', 'KI-gestützt', 'GitHub Workflow', 'Zero-Config Deploy'].map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-[#475569] uppercase tracking-widest">
              / {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
