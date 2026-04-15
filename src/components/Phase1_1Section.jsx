import { Layers, Smartphone, Database, Building2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { techStacks } from '../data/content';

const icons = [Layers, Smartphone, Database, Building2];
const accentColors = [
  'border-[#f97316]/40 hover:border-[#f97316]',
  'border-[#10b981]/40 hover:border-[#10b981]',
  'border-[#f97316]/40 hover:border-[#f97316]',
  'border-[#ef4444]/40 hover:border-[#ef4444]',
];
const iconColors = ['text-[#f97316]', 'text-[#10b981]', 'text-[#f97316]', 'text-[#ef4444]'];
const badgeColors = ['bg-[#f97316]/10 text-[#f97316]', 'bg-[#10b981]/10 text-[#10b981]', 'bg-[#f59e0b]/10 text-[#f97316]', 'bg-[#ef4444]/10 text-[#ef4444]'];

export default function Phase1_1Section() {
  return (
    <section id="phase1-1" className="mb-16 scroll-mt-20">
      <SectionHeader
        phase="1.1"
        title="Tech-Stack Empfehlungen: Die besten Werkzeuge für Vibe Coder"
        icon={Layers}
        iconColor="text-[#f97316]"
      />

      <div className="space-y-4 text-[#777] text-base leading-relaxed mb-8">
        <p>
          Die Wahl der Technologien ist entscheidend. Die goldene Regel für Vibe Coding lautet:{' '}
          <strong className="text-[#f97316]">Wähle Mainstream-Technologien!</strong> KIs wie Gemini oder Copilot wurden
          mit Milliarden Zeilen Code von beliebten Frameworks trainiert. Wenn du sehr exotische Programmiersprachen wählst,
          wird die KI öfter Fehler machen (halluzinieren).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {techStacks.map((stack, i) => {
          const Icon = icons[i];
          return (
            <div
              key={stack.label}
              className={`bg-[#111] border rounded-none p-5 transition-all duration-300 ${accentColors[i]}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`p-2 rounded-none bg-[#111] ${iconColors[i]}`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-sm font-mono ${badgeColors[i]}`}>
                      Szenario {stack.label}
                    </span>
                  </div>
                  <h4 className="font-semibold text-[#f0ede8] text-sm leading-snug">{stack.title}</h4>
                  <p className="text-xs text-[#444] mt-0.5">{stack.subtitle}</p>
                </div>
              </div>

              <p className="text-xs text-[#777] mb-4 leading-relaxed">{stack.description}</p>

              <div className="space-y-2 border-t border-[#1f1f1f] pt-4">
                {stack.items.map((item) => (
                  <div key={item.category} className="flex gap-2 text-xs">
                    <span className="text-[#444] font-medium min-w-[90px] shrink-0">{item.category}:</span>
                    <span className="text-[#777]">{item.tech}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
