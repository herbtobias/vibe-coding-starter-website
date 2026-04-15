import { Download, GitCommitVertical as GitCommit, Tag, GitBranch, GitMerge } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CodeBlock from './CodeBlock';
import Callout from './Callout';

const commitCmds = `git add .
git commit -m "feat: initial UI screens from Stitch"
git push origin main`;

const branchCreate = `git checkout -b feature-login`;
const mergeSteps = `git checkout main
git merge feature-login
git branch -d feature-login`;
const tagCmds = `git tag -a v1.0 -m "Login und UI funktionieren perfekt"`;
const tagCheckout = `git checkout v1.0`;

const steps = [
  {
    icon: Download,
    title: 'Code aus Stitch exportieren',
    desc: 'Exportiere den generierten Code (HTML/React/Tailwind) aus Google Stitch.',
  },
  {
    icon: GitCommit,
    title: 'Dateien einfügen',
    desc: 'Füge die Dateien in deinen lokalen GitHub-Ordner ein.',
  },
  {
    icon: GitCommit,
    title: 'Committen & Pushen',
    desc: 'Öffne dein Terminal und committe den Code mit den unten stehenden Befehlen.',
  },
];

export default function Phase4Section() {
  return (
    <section id="phase4" className="mb-12 scroll-mt-20">
      <SectionHeader
        phase="4"
        title="Screen Designs exportieren & committen"
        icon={GitCommit}
      />

      <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
        Wir haben das Design aus Stitch und unser Repo – jetzt führen wir beides zusammen.
      </p>

      <div className="space-y-4 mb-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex gap-4 items-start p-4 bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-[#0a1628] border border-[#1e3a5f] flex items-center justify-center shrink-0">
                <Icon size={14} className="text-[#00d4ff]" />
              </div>
              <div>
                <p className="font-semibold text-[#e2e8f0] text-sm mb-0.5">{step.title}</p>
                <p className="text-xs text-[#94a3b8]">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <CodeBlock code={commitCmds} language="bash" />

      <section id="phase4-1" className="mt-12 scroll-mt-20">
        <div className="flex items-center gap-2 mb-6">
          <GitBranch size={18} className="text-[#00d4ff]" />
          <h3 className="text-xl font-bold text-[#e2e8f0]">4.1 Sicher entwickeln mit Git (Branches & Tags)</h3>
        </div>

        <p className="text-[#94a3b8] text-sm leading-relaxed mb-8">
          Beim Vibe Coding wird die KI ab und zu Code generieren, der alles kaputt macht. Das ist völlig normal.
          Damit dein funktionierendes Projekt nicht zerstört wird, nutzt du Git{' '}
          <strong className="text-[#e2e8f0]">Branches</strong> (Zweige) und <strong className="text-[#e2e8f0]">Tags</strong> (Speicherpunkte).
        </p>

        <div className="space-y-6">
          <div className="border border-[#1e3a5f] rounded-xl overflow-hidden">
            <div className="px-5 py-4 bg-[#0a1628] border-b border-[#1e3a5f] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-xs font-bold text-[#00d4ff]">1</span>
              <p className="font-semibold text-[#e2e8f0] text-sm">Für jedes Feature einen neuen Branch anlegen (Dein Sicherheitsnetz)</p>
            </div>
            <div className="p-5 bg-[#0d1f3c]">
              <p className="text-xs text-[#94a3b8] mb-3">
                Arbeite <strong className="text-[#ef4444]">niemals</strong> direkt auf dem Hauptzweig (main),
                wenn du die KI an etwas Neuem arbeiten lässt.
              </p>
              <CodeBlock code={branchCreate} language="bash" />
              <p className="text-xs text-[#475569] mt-2">
                (Das erstellt den Branch "feature-login" und wechselt sofort dorthin). Lass die KI jetzt arbeiten.
                Wenn sie alles kaputt macht, ist dein main-Branch immer noch sicher!
              </p>
            </div>
          </div>

          <div className="border border-[#1e3a5f] rounded-xl overflow-hidden">
            <div className="px-5 py-4 bg-[#0a1628] border-b border-[#1e3a5f] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-xs font-bold text-[#00d4ff]">2</span>
              <div className="flex items-center gap-2">
                <GitMerge size={14} className="text-[#10b981]" />
                <p className="font-semibold text-[#e2e8f0] text-sm">Das Feature funktioniert? Ab in den Main-Branch (Mergen)</p>
              </div>
            </div>
            <div className="p-5 bg-[#0d1f3c]">
              <CodeBlock code={mergeSteps} language="bash" />
            </div>
          </div>

          <div className="border border-[#1e3a5f] rounded-xl overflow-hidden">
            <div className="px-5 py-4 bg-[#0a1628] border-b border-[#1e3a5f] flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-xs font-bold text-[#00d4ff]">3</span>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-[#f59e0b]" />
                <p className="font-semibold text-[#e2e8f0] text-sm">Savepoints setzen (Tags)</p>
              </div>
            </div>
            <div className="p-5 bg-[#0d1f3c]">
              <p className="text-xs text-[#94a3b8] mb-3">Setze einen Speicherpunkt für die aktuell perfekt laufende Version:</p>
              <CodeBlock code={tagCmds} language="bash" />
              <p className="text-xs text-[#94a3b8] mt-4 mb-2">Zurück in die Vergangenheit reisen:</p>
              <CodeBlock code={tagCheckout} language="bash" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
