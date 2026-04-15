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
    color: 'text-[#f59e0b]',
    bg: 'bg-[#f59e0b]/10',
    border: 'border-[#f59e0b]/20',
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
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent" />
          <span className="text-xs font-semibold text-[#475569] uppercase tracking-widest px-2">Das Fazit</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#1e3a5f] to-transparent" />
        </div>
        <h2 className="text-3xl font-bold text-center text-[#e2e8f0] mb-2">
          Goldene Regeln
        </h2>
        <p className="text-center text-[#475569] text-sm">
          Die vier wichtigsten Prinzipien für erfolgreiche Vibe Coder
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {rules.map((rule, i) => {
          const Icon = rule.icon;
          return (
            <div
              key={i}
              className={`relative bg-[#0d1f3c] border ${rule.border} rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg`}
            >
              <div className={`w-10 h-10 rounded-xl ${rule.bg} border ${rule.border} flex items-center justify-center mb-4`}>
                <Icon size={20} className={rule.color} />
              </div>
              <h3 className="font-bold text-[#e2e8f0] text-base mb-2">{rule.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{rule.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 bg-[#0d1f3c] border border-[#1e3a5f] rounded-2xl px-8 py-6">
          <Waves size={24} className="text-[#00d4ff]" />
          <div className="text-left">
            <p className="font-bold text-[#e2e8f0]">Viel Spaß beim Erschaffen!</p>
            <p className="text-sm text-[#94a3b8]">Du dirigierst jetzt Software, anstatt sie mühsam zusammenzuschrauben.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
