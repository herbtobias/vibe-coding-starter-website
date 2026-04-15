import { ArrowDown, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="intro" className="relative min-h-screen flex flex-col justify-end px-6 pb-16 pt-24 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(90deg, #f97316 0px, #f97316 1px, transparent 1px, transparent 80px)`,
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f97316]/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-[#f97316]/3 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-[#f97316]" />
          <span className="text-[11px] font-mono font-bold text-[#f97316] uppercase tracking-[0.3em]">
            Vibe Coding Guide — 2026 Edition
          </span>
        </div>

        <h1
          className="font-black uppercase leading-none mb-6 text-[#f0ede8]"
          style={{
            fontFamily: "'Bebas Neue', 'Inter', sans-serif",
            fontSize: 'clamp(4rem, 12vw, 10rem)',
            letterSpacing: '0.01em',
            lineHeight: '0.9',
          }}
        >
          <span className="block">Der</span>
          <span className="block text-[#f97316]">Ultimative</span>
          <span className="block">Vibe</span>
          <span className="block">Coding</span>
          <span className="block">Guide</span>
        </h1>

        <div className="mt-10 max-w-2xl">
          <p className="text-[#999] text-base leading-relaxed border-l-2 border-[#f97316] pl-5">
            Willkommen in der Zukunft der Softwareentwicklung! Beim Vibe Coding geht es nicht mehr darum,
            sich stundenlang mit fehlenden Semikolons herumzuschlagen.
            Du gibst den <strong className="text-[#f0ede8]">Vibe</strong> vor — die KI erledigt die harte Arbeit.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href="#phase1"
            className="inline-flex items-center gap-2 bg-[#f97316] text-black font-bold text-sm px-6 py-3 uppercase tracking-wider hover:bg-[#fb923c] transition-colors duration-150"
          >
            <Zap size={14} />
            Guide starten
          </a>
          <a
            href="#phase1"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#777] text-sm px-6 py-3 uppercase tracking-wider hover:border-[#f97316]/40 hover:text-[#f0ede8] transition-all duration-150"
          >
            Inhaltsverzeichnis
            <ArrowDown size={12} />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {['Spec-Driven Dev', 'KI-gestützt', 'GitHub Workflow', 'Zero-Config Deploy'].map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-[#444] uppercase tracking-widest">
              / {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
