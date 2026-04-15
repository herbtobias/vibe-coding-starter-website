import { GitBranch, Plus, Lock, BookOpen } from 'lucide-react';
import SectionHeader from './SectionHeader';

const steps = [
  { icon: GitBranch, title: 'GitHub einloggen', desc: 'Logge dich bei github.com in deinen Account ein.' },
  { icon: Plus, title: 'Neues Repository erstellen', desc: 'Klicke auf "New" und nenne das Repo z.B. mein-vibe-projekt.' },
  { icon: Lock, title: 'Sichtbarkeit wählen', desc: 'Setze es auf "Public" oder "Private" und füge eine README.md hinzu.' },
  { icon: BookOpen, title: 'Repo klonen', desc: 'Klone das Repo auf deinen lokalen Rechner mit git clone.' },
];

export default function Phase3Section() {
  return (
    <section id="phase3" className="mb-16 scroll-mt-20">
      <SectionHeader
        phase="3"
        title="Setup – Das GitHub Repository"
        icon={GitBranch}
        iconColor="text-[#f0ede8]"
      />

      <div className="text-[#777] text-base leading-relaxed mb-8">
        <p>
          Auch Vibe Coder brauchen Versionskontrolle. Hier speichern wir unseren Fortschritt, falls die KI mal
          "halluziniert" und wir einen Schritt zurückgehen müssen.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="bg-[#111] border border-[#1f1f1f] rounded-none p-5 hover:border-[#f97316]/30 transition-colors duration-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-none bg-[#111] border border-[#1f1f1f] flex items-center justify-center">
                  <Icon size={16} className="text-[#f97316]" />
                </div>
                <span className="text-xs font-mono text-[#444]">Schritt {String(i + 1).padStart(2, '0')}</span>
              </div>
              <h4 className="font-semibold text-[#f0ede8] text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-[#777] leading-relaxed">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
