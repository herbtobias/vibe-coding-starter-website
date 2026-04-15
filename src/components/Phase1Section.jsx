import { FileText, CircleCheck as CheckCircle, Lightbulb } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CodeBlock from './CodeBlock';
import Callout from './Callout';

const specKitCmd = `uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>`;
const specExample = `"Die Architektur basiert auf einem monolithischen Node.js/Express-Backend.
Die Kommunikation zum React-Frontend erfolgt über eine RESTful API.
Als Datenbank nutzen wir PostgreSQL, da wir stark strukturierte
Nutzerdaten haben. Für das Caching von häufig abgerufenen Feeds
verwenden wir Redis."`;
const aiPrompt = `"Ich möchte eine App bauen, die [Problem] für [Zielgruppe] löst.
Stell mir die 5 wichtigsten Fragen, um eine detaillierte Software-
Spezifikation (Spec) für dieses Projekt zu schreiben.
Fokus auf das 'Was' und 'Warum', Kernfeatures (MVP) und User Experience."`;

const archItems = [
  {
    title: 'Architektur-Stil',
    items: [
      { name: 'Monolith', desc: 'Alles in einer Codebase (Frontend, Backend, Logik). Perfekt für den Start und schnelle MVPs.' },
      { name: 'Microservices', desc: 'Getrennte, kleine Dienste. Gut, wenn das Team wächst und stark skaliert werden muss.' },
    ],
  },
  {
    title: 'Kommunikationsprotokoll (API)',
    items: [
      { name: 'REST', desc: 'Der absolute Standard für die Kommunikation zwischen Frontend und Backend.' },
      { name: 'GraphQL', desc: 'Wenn das Frontend sehr flexibel exakt die Daten abfragen muss, die es braucht (verhindert Over- und Underfetching).' },
      { name: 'WebSockets', desc: 'Pflicht, wenn du Echtzeit-Funktionen wie Chats oder Live-Updates baust.' },
    ],
  },
  {
    title: 'Datenbank-Design (SQL vs. NoSQL)',
    items: [
      { name: 'SQL (PostgreSQL, MySQL)', desc: 'Für stark strukturierte Daten mit klaren Beziehungen (z.B. Finanzen, E-Commerce).' },
      { name: 'NoSQL (MongoDB, Firebase)', desc: 'Für flexible Dokumente und schnelles Iterieren ohne starres Schema.' },
    ],
  },
];

const specContents = [
  'Elevator Pitch: Was macht die App in einem Satz?',
  'User Stories: "Als Nutzer möchte ich X tun können, damit Y passiert."',
  'Kern-Features: Was ist absolut notwendig für den Release? (Lass Unnötiges weg!)',
  'Tech-Stack Wunsch (Der Plan): Deine Architekturentscheidungen.',
];

const workflowSteps = [
  {
    num: '01',
    title: 'Specify (Spezifizieren)',
    desc: 'Konzentriere dich komplett auf das "Was" und "Warum". Wer nutzt die App? Welches Problem löst sie? Wie sieht die User Experience aus?',
  },
  {
    num: '02',
    title: 'Plan (Planen) & Architektur-Wahl',
    desc: 'Jetzt wird es technisch. Hier definierst du Stack, Architektur, Security-Regeln und wie die Systeme miteinander kommunizieren.',
  },
  {
    num: '03',
    title: 'Tasks (Aufgaben)',
    desc: 'Lass die KI diese Spec in kleine, isolierte und testbare Aufgaben herunterbrechen.',
  },
];

export default function Phase1Section() {
  return (
    <section id="phase1" className="mb-16 scroll-mt-20">
      <SectionHeader
        phase="1"
        title="Die Spec – Spec-Driven Development & Vibe Check"
        icon={FileText}
      />

      <div className="space-y-5 text-[#94a3b8] text-base leading-relaxed">
        <p>
          Bevor wir Code generieren, brauchen wir einen Plan. Die KI braucht Kontext, um in deinem Sinne zu handeln.
          Hier machen sich die Prinzipien des <strong className="text-[#e2e8f0]">Spec-Driven Development (SDD)</strong> bezahlt,
          wie sie kürzlich auch von GitHub in einem neuen Open-Source-Toolkit ("Spec Kit") hervorgehoben wurden.
        </p>

        <div className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-5">
          <p className="text-sm font-semibold text-[#00d4ff] uppercase tracking-wide mb-2">Das wichtigste Mindset-Shift</p>
          <p className="text-[#e2e8f0]">
            Wir bewegen uns von <span className="line-through text-[#475569]">"Code ist die Quelle der Wahrheit"</span> hin zu
            <span className="text-[#00d4ff] font-semibold"> "Die Absicht (Intent) ist die Quelle der Wahrheit"</span>.
          </p>
        </div>

        <p>
          Wir müssen aufhören, Coding-Agenten wie Suchmaschinen zu behandeln. Wir sollten sie vielmehr als{' '}
          <strong className="text-[#e2e8f0]">extrem buchstäbliche Pair-Programmer</strong> betrachten.
          Sie sind Weltklasse in der Mustererkennung, aber sie können keine Gedanken lesen. Ein vager Prompt wie
          "bau mir eine Foto-App" zwingt die KI, Tausende von unausgesprochenen Anforderungen einfach zu erraten – und sie wird oft falsch raten.
        </p>

        <p>
          <strong className="text-[#e2e8f0]">Das Ziel:</strong> Ein solides Textdokument, das kein statisches Dokument für später ist,
          sondern ein <strong className="text-[#00d4ff]">lebendiges, ausführbares Artefakt</strong>. Diese Spec ist der Vertrag darüber,
          wie sich deine Software verhalten soll, und dient der KI als alleinige Quelle der Wahrheit (Source of Truth).
        </p>
      </div>

      <div className="mt-10 mb-8">
        <h3 className="text-lg font-semibold text-[#e2e8f0] mb-6">
          Der optimale Ablauf <span className="text-[#475569] font-normal text-sm">(angelehnt an das GitHub Spec Kit)</span>
        </h3>
        <div className="space-y-4">
          {workflowSteps.map((step) => (
            <div key={step.num} className="flex gap-4 p-5 bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl hover:border-[#00d4ff]/30 transition-colors duration-200">
              <span className="text-2xl font-bold text-[#1e3a5f] font-mono min-w-[40px]">{step.num}</span>
              <div>
                <p className="font-semibold text-[#e2e8f0] mb-1">{step.title}</p>
                <p className="text-sm text-[#94a3b8]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-[#e2e8f0] mb-4">Essenzielle Architektur-Entscheidungen</h3>
        <p className="text-[#94a3b8] text-sm mb-5">
          Um der KI die richtigen Leitplanken zu geben, ist es enorm wichtig, grundlegende Architekturmuster zu benennen.
          Eine der besten Anlaufstellen ist das{' '}
          <span className="text-[#00d4ff]">System Design 101 Repository von ByteByteGo</span>.
          Hier sind die wichtigsten Architektur-Entscheidungen, die in deine Spec gehören:
        </p>
        <div className="space-y-4">
          {archItems.map((group) => (
            <div key={group.title} className="border border-[#1e3a5f] rounded-xl overflow-hidden">
              <div className="px-5 py-3 bg-[#0a1628] border-b border-[#1e3a5f]">
                <p className="text-sm font-semibold text-[#00d4ff]">{group.title}</p>
              </div>
              <div className="divide-y divide-[#1e3a5f]">
                {group.items.map((item) => (
                  <div key={item.name} className="px-5 py-4 bg-[#0d1f3c] flex gap-3">
                    <span className="text-[#00d4ff] text-sm mt-0.5">•</span>
                    <div>
                      <span className="text-[#e2e8f0] font-medium text-sm">{item.name}: </span>
                      <span className="text-[#94a3b8] text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-[#94a3b8] mb-2">Beispiel für den "Plan"-Teil in deiner SPEC.md:</p>
        <CodeBlock code={specExample} language="markdown" />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-[#e2e8f0] mb-4">So gehst du vor</h3>
        <p className="text-[#94a3b8] text-sm mb-3">
          Nutze das strukturierte GitHub Spec Kit im Terminal:
        </p>
        <CodeBlock code={specKitCmd} language="terminal" />
        <p className="text-[#94a3b8] text-sm my-3">Oder starte mit diesem KI-Prompt (z.B. in Gemini):</p>
        <CodeBlock code={aiPrompt} language="prompt" />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-[#e2e8f0] mb-4">Wichtige Dinge, die in die Spec gehören</h3>
        <div className="space-y-2">
          {specContents.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg">
              <CheckCircle size={16} className="text-[#10b981] mt-0.5 shrink-0" />
              <span className="text-[#94a3b8] text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <Callout type="tip" title="Profi-Tipp">
        Speichere das finale Ergebnis als <code className="text-[#00d4ff] bg-[#00d4ff]/10 px-1.5 py-0.5 rounded font-mono text-xs">SPEC.md</code> ab.
        Das wird unsere Bibel für die nächsten Schritte und verhindert, dass die KI später halluziniert
        oder falsche Architekturentscheidungen trifft.
      </Callout>
    </section>
  );
}
