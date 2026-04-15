import { Terminal, FlaskConical, Bug, Globe, Code as Code2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CodeBlock from './CodeBlock';
import Callout from './Callout';

const debugFormula = `"Ich habe versucht, [Aktion, z.B. Server zu starten].
Dabei ist im [Chrome Console / VS Code Terminal] folgender Fehler aufgetreten:

[Füge hier die kopierte Fehlermeldung ein]

Bitte analysiere den Fehler und gib mir den korrigierten Code."`;

const testingRules = [
  {
    icon: FlaskConical,
    color: 'text-[#00d4ff]',
    title: 'KI-TDD: Die KI testet sich selbst',
    desc: 'Lass die KI Tests schreiben, bevor sie baut. So stellst du sicher, dass der Code gegen seine eigenen Anforderungen geprüft wird.',
  },
  {
    icon: Bug,
    color: 'text-[#00d4ff]',
    title: 'Achtung vor dem "Happy Path" Bias',
    desc: 'KI-Modelle sind extrem optimistisch. Erinnere sie explizit an Fehler: Offline-Modus, falsches Passwort, leere Listen.',
  },
  {
    icon: Terminal,
    color: 'text-[#10b981]',
    title: 'Debugging-Haken einbauen lassen',
    desc: 'Bitte die KI um detaillierte console.log() Ausgaben für API-Calls, damit du Fehler schnell lokalisieren kannst.',
  },
  {
    icon: Code2,
    color: 'text-[#e2e8f0]',
    title: 'Isoliertes Testen (Sandbox)',
    desc: 'Teste neue große Komponenten auf einer separaten Route, bevor sie live gehen. Verhindert, dass Bugs die ganze App betreffen.',
  },
];

export default function Phase5Section() {
  return (
    <section id="phase5" className="mb-12 scroll-mt-20">
      <SectionHeader
        phase="5"
        title="Entwicklung & Logik mit Antigravity / Gemini CLI"
        icon={Terminal}
      />

      <div className="text-[#94a3b8] text-base leading-relaxed mb-6">
        <p>
          Jetzt wird die App lebendig. Hier kommen mächtige KI-Coding-Agenten ins Spiel,
          die direkt in deiner Codebase arbeiten können.
        </p>
      </div>

      <div className="bg-[#0a1628] border border-[#162840] rounded-none p-5 mb-8">
        <p className="text-xs font-semibold text-[#475569] uppercase tracking-wide mb-3">Die Tools</p>
        <div className="flex flex-wrap gap-2">
          {['Antigravity', 'Gemini CLI', 'Cursor', 'GitHub Copilot Workspace'].map((tool) => (
            <span key={tool} className="text-xs bg-[#0a1628] border border-[#162840] text-[#94a3b8] px-3 py-1.5 rounded-sm font-mono">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-semibold text-[#e2e8f0] mb-4">Vibe Coding in Action</h3>
        <div className="space-y-4">
          {[
            { step: '01', title: 'Repo öffnen', desc: 'Öffne das Repo in deinem CLI-Tool oder Editor.' },
            { step: '02', title: 'Context is King', desc: 'Übergib dem Agenten deine SPEC.md als Kontext. Die KI braucht diesen Rahmen.' },
            { step: '03', title: 'Delegieren statt Tippen', desc: 'Du schreibst keine Funktionen mehr, du delegierst sie. Beispiel: "Schau dir die LoginScreen.jsx an. Füge die Logik hinzu, um einen User per E-Mail und Passwort mit Firebase zu authentifizieren."' },
            { step: '04', title: 'Review & Test', desc: 'Du testest die App im Browser. Funktioniert etwas nicht? Gib der KI das Feedback inklusive Fehlermeldung.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-4 bg-[#0a1628] border border-[#162840] rounded-none">
              <span className="text-xl font-bold text-[#162840] font-mono min-w-[36px]">{item.step}</span>
              <div>
                <p className="font-semibold text-[#e2e8f0] text-sm mb-0.5">{item.title}</p>
                <p className="text-xs text-[#94a3b8]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section id="phase5-1" className="mt-10 scroll-mt-20">
        <div className="flex items-center gap-2 mb-6">
          <FlaskConical size={18} className="text-[#00d4ff]" />
          <h3 className="text-xl font-bold text-[#e2e8f0]">5.1 Wichtige Regeln für das Testen (Vibe Testing)</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testingRules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div key={rule.title} className="bg-[#0a1628] border border-[#162840] rounded-none p-5 hover:border-[#00d4ff]/20 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={16} className={rule.color} />
                  <p className="font-semibold text-[#e2e8f0] text-sm">{rule.title}</p>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">{rule.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="phase5-2" className="mt-12 scroll-mt-20">
        <div className="flex items-center gap-2 mb-6">
          <Bug size={18} className="text-[#00d4ff]" />
          <h3 className="text-xl font-bold text-[#e2e8f0]">5.2 Fehler auslesen & der KI füttern (Debugging für Anfänger)</h3>
        </div>

        <p className="text-[#94a3b8] text-sm mb-6">
          Wenn die KI Code schreibt, entstehen Fehler. Das ist dein Werkzeugkasten:
        </p>

        <div className="space-y-4 mb-6">
          <div className="border border-[#162840] rounded-none overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
              <Globe size={16} className="text-[#00d4ff]" />
              <p className="font-semibold text-[#e2e8f0] text-sm">1. Fehler im Browser finden (Google Chrome)</p>
            </div>
            <div className="p-5 bg-[#0a1628] space-y-2">
              <p className="text-xs text-[#94a3b8]">
                Mache einen <strong className="text-[#e2e8f0]">Rechtsklick</strong> auf deine Webseite →{' '}
                <strong className="text-[#e2e8f0]">"Untersuchen"</strong> → Reiter{' '}
                <strong className="text-[#00d4ff]">"Console"</strong>.
              </p>
              <p className="text-xs text-[#94a3b8]">
                Suche nach <span className="text-[#ef4444] font-mono">rotem Text</span>. Kopiere die gesamte Meldung inkl. "Stacktrace" (den kryptischen Zeilen darunter).
              </p>
            </div>
          </div>

          <div className="border border-[#162840] rounded-none overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3 bg-[#0a1628] border-b border-[#162840]">
              <Code2 size={16} className="text-[#00d4ff]" />
              <p className="font-semibold text-[#e2e8f0] text-sm">2. Fehler im Backend/Code finden (VS Code IDE)</p>
            </div>
            <div className="p-5 bg-[#0a1628] space-y-2">
              <p className="text-xs text-[#94a3b8]">
                Im VS Code Terminal (unten) nach oben scrollen, bis du{' '}
                <span className="text-[#ef4444] font-mono">"Error:"</span> oder{' '}
                <span className="text-[#ef4444] font-mono">"Exception:"</span> siehst. Kopieren!
              </p>
              <p className="text-xs text-[#94a3b8]">
                Alternativ: <kbd className="text-xs bg-[#0a1628] border border-[#162840] px-1.5 py-0.5 rounded font-mono">F5</kbd> drücken (VS Code Debugger), um den Code Zeile für Zeile zu prüfen.
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-sm font-semibold text-[#e2e8f0] mb-2">3. Die perfekte Fehler-Formel für die KI</h4>
        <CodeBlock code={debugFormula} language="prompt" />
      </section>
    </section>
  );
}
