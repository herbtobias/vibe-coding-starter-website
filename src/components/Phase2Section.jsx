import { Palette, ExternalLink, Image, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Callout from './Callout';
import CodeBlock from './CodeBlock';
import ToolLink from './ToolLink';

const stitchPrompt = `"Erstelle das UI für eine [App-Art]. Das Design soll modern, clean und
im [Dark Mode / Apple-Style / Retro-Look] sein. Ich brauche einen
Homescreen mit [Feature 1] und einer Navigation zu [Feature 2].
Nutze Tailwind CSS für das Styling."`;

const referencePrompt = `"Erstelle das UI für [deine App]. Bitte orientiere dich stark an dem
angehängten Screenshot für Farben, Abstände (Whitespace), das Menü
und das generelle Layout. Mache es professionell und nutze Tailwind CSS."`;

const resources = [
  {
    name: 'Mobbin',
    url: 'mobbin.com',
    href: 'https://mobbin.com',
    badge: '#1',
    desc: 'Die absolute Nummer 1 für echte App- und Web-Designs. Tausende Screenshots von jeder großen App (Spotify, Airbnb, Uber) – perfekt für bewährte UX-Muster und Layouts.',
  },
  {
    name: 'Dribbble',
    url: 'dribbble.com',
    href: 'https://dribbble.com',
    badge: 'Design',
    desc: 'Die größte Plattform für Design-Portfolios. Suche nach "Dashboard", "Login Screen" oder "Fitness App" und screenshotte was du liebst.',
  },
  {
    name: 'Tailwind UI',
    url: 'tailwindui.com',
    href: 'https://tailwindui.com',
    badge: 'Components',
    desc: 'Da wir mit Tailwind CSS arbeiten, lohnt sich ein Blick auf die offiziellen Web-Komponenten. Die KI kann diesen Standard-Tailwind-Look fast 1:1 nachbauen.',
  },
];

const steps = [
  { num: '01', action: 'Gehe zu', highlight: 'Google Stitch', desc: 'Öffne das Tool im Browser.' },
  { num: '02', action: 'Füttere Stitch mit', highlight: 'SPEC.md Kern-Features', desc: 'Kopiere die relevanten Abschnitte aus deiner Spec.' },
  { num: '03', action: 'Prompt eingeben', highlight: 'und generieren', desc: 'Nutze den unten stehenden Template-Prompt.' },
  { num: '04', action: 'Iterieren', highlight: 'bis der Vibe stimmt', desc: 'Nutze den Chat in Stitch, um das Design anzupassen.' },
];

export default function Phase2Section() {
  return (
    <section id="phase2" className="mb-16 scroll-mt-20">
      <SectionHeader
        phase="2"
        title="UI/UX Design mit Google Stitch"
        icon={Palette}
      />

      <div className="text-[#94a3b8] text-base leading-relaxed mb-6">
        <p>
          Jetzt bringen wir den Vibe auf den Bildschirm. Wir überspringen traditionelle Design-Tools wie{' '}
          <span className="line-through text-[#475569]">Figma</span> und lassen KI direkt UI-Code generieren.
        </p>
      </div>

      <div className="bg-[#0a1628] border border-[#162840] rounded-none p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <ExternalLink size={14} className="text-[#00d4ff]" />
          <ToolLink href="https://stitch.withgoogle.com" className="text-sm font-semibold">Das Tool: Google Stitch</ToolLink>
        </div>
        <p className="text-sm text-[#94a3b8]">
          Ein KI-gestütztes UI-Generierungstool, das direkt Tailwind CSS Code ausgibt.
          Perfekt für den schnellen Einstieg ohne Design-Vorkenntnisse.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#e2e8f0] mb-4">So gehst du vor</h3>
        <div className="space-y-3">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 items-start p-4 bg-[#0a1628] border border-[#162840] rounded-none">
              <span className="text-xl font-bold text-[#162840] font-mono min-w-[36px]">{step.num}</span>
              <div>
                <p className="text-sm text-[#94a3b8]">
                  {step.action} <strong className="text-[#e2e8f0]">{step.highlight}</strong> — {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-2">
        <p className="text-sm text-[#94a3b8] mb-2">Template-Prompt für Stitch:</p>
        <CodeBlock code={stitchPrompt} language="prompt" />
      </div>

      <div className="mt-10 mb-2">
        <div className="flex items-center gap-2 mb-5">
          <Star size={16} className="text-[#00d4ff]" />
          <h3 className="text-lg font-semibold text-[#e2e8f0]">Der Profi-Trick: Referenz-Bilder & Templates nutzen</h3>
        </div>
        <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">
          KI-Modelle für Coden sind extrem gut darin, Bilder zu analysieren. Statt ein Design nur umständlich mit Worten
          zu beschreiben, solltest du dir Screenshots von Profi-Apps suchen und diese als Vorlage hochladen.
        </p>

        <div className="space-y-4 mb-6">
          {resources.map((res) => (
            <a
              key={res.name}
              href={res.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 p-4 bg-[#0a1628] border border-[#162840] rounded-none hover:border-[#00d4ff]/30 transition-colors duration-200 group block"
            >
              <div className="flex flex-col items-center min-w-[60px]">
                <Image size={18} className="text-[#475569] mb-1 group-hover:text-[#00d4ff] transition-colors duration-150" />
                <span className="text-xs text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded-sm font-mono">{res.badge}</span>
              </div>
              <div>
                <p className="font-semibold text-[#e2e8f0] text-sm mb-1 flex items-center gap-1.5">
                  {res.name}
                  <span className="text-[#475569] font-normal">— {res.url}</span>
                  <ExternalLink size={11} className="text-[#475569] group-hover:text-[#00d4ff] transition-colors duration-150" />
                </p>
                <p className="text-xs text-[#94a3b8] leading-relaxed">{res.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <p className="text-sm font-semibold text-[#94a3b8] mb-2">Prompt mit Referenz-Screenshot:</p>
        <CodeBlock code={referencePrompt} language="prompt" />
      </div>
    </section>
  );
}
