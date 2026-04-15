import { Brain, Footprints, RefreshCw, Heart, Waves } from 'lucide-react';

const rules = [
  {
    icon: Brain,
    color: 'text-[#00d4ff]',
    bg: 'bg-[#00d4ff]/10',
    border: 'border-[#00d4ff]/20',
    title: 'Denk wie ein Product Manager',
    description: 'Du bist der Architekt. Fokussiere dich auf das "Was" und "Warum", die KI kümmert sich um das "Wie".',
  },
  {
    icon: Footprints,
    color: 'text-[#10b981]',
    bg: 'bg-[#10b981]/10',
    border: 'border-[#10b981]/20',
    title: 'Kleine Schritte (Baby Steps)',
    description: 'Lass die KI nicht die ganze App auf einmal bauen. Mach Feature für Feature. Zuerst das UI, dann das Routing, dann das Backend.',
  },
  {
    icon: RefreshCw,
    color: 'text-[#00d4ff]',
    bg: 'bg-[#00d4ff]/10',
    border: 'border-[#00d4ff]/20',
    title: 'Wenn es feststeckt, starte neu',
    description: 'Manchmal verrennt sich die KI in eine Sackgasse. Lösche den schlechten Code, mach einen Git-Reset und starte den Prompt neu – vielleicht etwas anders formuliert.',
  },
  {
    icon: Heart,
    color: 'text-[#ec4899]',
    bg: 'bg-[#ec4899]/10',
    border: 'border-[#ec4899]/20',
    title: 'Vibe Check',
    description: 'Wenn sich der Code nicht gut anfühlt, sag es der KI. "Das ist zu kompliziert geschrieben, bitte refactore das in saubere, kleinere Komponenten."',
  },
];

export default function GoldenRulesSection() {
  return (
    <section id="golden-rules" className="mb-16 scroll-mt-20">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-mono font-bold text-[#00d4ff] uppercase tracking-[0.2em]">
            Fazit
          </span>
          <div className="h-px flex-1 bg-[#122035]" />
        </div>
        <h2
          className="font-black text-[#e2e8f0] uppercase leading-none mb-3"
          style={{
            fontFamily: "'Bebas Neue', 'Inter', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            letterSpacing: '0.02em',
          }}
        >
          Goldene Regeln
        </h2>
        <p className="text-[#475569] text-sm font-mono">
          — Die vier wichtigsten Prinzipien für erfolgreiche Vibe Coder
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#122035]">
        {rules.map((rule, i) => {
          const Icon = rule.icon;
          return (
            <div
              key={i}
              className="bg-[#060d1a] p-6 hover:bg-[#0a1628] transition-colors duration-200 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-mono text-[#2a4a6e] tabular-nums">0{i + 1}</span>
                <div className="h-px flex-1 bg-[#122035]" />
                <Icon size={14} className={rule.color} />
              </div>
              <h3
                className="font-black text-[#e2e8f0] uppercase mb-3 leading-tight"
                style={{
                  fontFamily: "'Bebas Neue', 'Inter', sans-serif",
                  fontSize: '1.4rem',
                  letterSpacing: '0.03em',
                }}
              >
                {rule.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed group-hover:text-[#94a3b8] transition-colors duration-200">{rule.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 border border-[#122035] p-8 bg-[#080f1e] border-l-4 border-l-[#00d4ff]">
        <p
          className="font-black text-[#e2e8f0] uppercase mb-2"
          style={{
            fontFamily: "'Bebas Neue', 'Inter', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            letterSpacing: '0.02em',
          }}
        >
          Viel Spaß beim Erschaffen!
        </p>
        <p className="text-[#475569] text-sm">Du dirigierst jetzt Software, anstatt sie mühsam zusammenzuschrauben. 2026 ist dein Jahr.</p>
      </div>
    </section>
  );
}
