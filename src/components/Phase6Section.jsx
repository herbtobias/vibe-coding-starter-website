import { Rocket, Server, Shield, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CodeBlock from './CodeBlock';
import Callout from './Callout';

const gitignoreCmd = `echo ".env" >> .gitignore
git add .gitignore
git commit -m "chore: ignore env file"`;

const vercelSteps = [
  'Erstelle einen kostenlosen Account bei Vercel.',
  'Klicke auf "Add New Project".',
  'Verbinde deinen GitHub-Account. Vercel zeigt dir nun eine Liste deiner Repositories.',
  'Klicke bei deinem Projekt auf "Import".',
  'Vercel erkennt meistens automatisch, welches Framework du nutzt (z.B. Vite, React, Next.js) und trägt die richtigen Build-Befehle ein.',
  'Klicke auf "Deploy".',
];

const renderSteps = [
  'Erstelle einen Account bei Render.',
  'Klicke auf "New" → "Web Service".',
  'Verbinde dein GitHub-Repo.',
  'Wähle die Umgebung (z.B. Node oder Python) und trage den Start-Befehl ein (meistens npm start oder node server.js).',
  'Wähle den "Free" (kostenlos) Plan und klicke auf "Create Web Service".',
];

export default function Phase6Section() {
  return (
    <section id="phase6" className="mb-12 scroll-mt-20">
      <SectionHeader
        phase="6"
        title="Deployment – Die App live bringen"
        icon={Rocket}
      />

      <div className="text-[#94a3b8] text-base leading-relaxed mb-8">
        <p>
          Dein Code funktioniert lokal auf deinem Rechner perfekt? Großartig! Jetzt ist es Zeit, die App der Welt zu zeigen.
          Das Beste daran: Du musst keine Server mieten oder Linux-Befehle lernen. Dank moderner Cloud-Plattformen ist
          das Deployment heute meistens <strong className="text-[#10b981]">kostenlos und vollständig automatisiert</strong>.
        </p>
      </div>

      <section id="phase6-1" className="mb-10 scroll-mt-20">
        <div className="flex items-center gap-2 mb-5">
          <ExternalLink size={18} className="text-[#00d4ff]" />
          <h3 className="text-xl font-bold text-[#e2e8f0]">6.1 Das Frontend hosten (Websites & React-Apps)</h3>
        </div>

        <p className="text-[#94a3b8] text-sm mb-5">
          Für alles, was im Browser des Nutzers läuft (React, Next.js, HTML/CSS), gibt es einen unangefochtenen König für Vibe Coder.
        </p>

        <div className="bg-[#0d1f3c] border border-[#00d4ff]/30 rounded-xl overflow-hidden mb-5">
          <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#00d4ff]/10 to-transparent border-b border-[#1e3a5f]">
            <div className="w-8 h-8 rounded-lg bg-[#050a14] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 76 65" fill="none">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#e2e8f0] text-sm">Vercel</p>
              <p className="text-xs text-[#10b981]">Kostenlos für Hobby-Projekte — Empfehlung</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs text-[#94a3b8] mb-4 italic">
              Vercel ist so magisch, dass es sich anfühlt wie Vibe Coding für Server.
            </p>
            <div className="space-y-2">
              {vercelSteps.map((step, i) => (
                <div key={i} className="flex gap-3 text-xs">
                  <span className="text-[#00d4ff] font-mono font-bold min-w-[20px]">{i + 1}.</span>
                  <span className="text-[#94a3b8]">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Callout type="tip" title="Magie-Faktor">
          Jedes Mal, wenn du Code in deinen GitHub main-Branch pushst, zieht Vercel automatisch die neueste Version
          und bringt sie in Sekunden live. Du musst nie wieder etwas manuell hochladen!
        </Callout>
      </section>

      <section id="phase6-2" className="mb-10 scroll-mt-20">
        <div className="flex items-center gap-2 mb-5">
          <Server size={18} className="text-[#00d4ff]" />
          <h3 className="text-xl font-bold text-[#e2e8f0]">6.2 Das Backend hosten (Node.js, Python, Datenbanken)</h3>
        </div>

        <p className="text-[#94a3b8] text-sm mb-5">
          Wenn du nicht nur ein Frontend hast, sondern auch einen echten Server (z.B. eine API mit Node.js/Express oder Python/FastAPI),
          brauchst du einen anderen Anbieter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
          {[
            { name: 'Render.com', badge: 'Empfehlung', desc: 'Extrem anfängerfreundlich. Perfekt, um Backends und Datenbanken (PostgreSQL) kostenlos zum Laufen zu bringen.' },
            { name: 'Railway.app', badge: 'Alternative', desc: 'Ähnlich wie Render, tolle Benutzeroberfläche, funktioniert ebenfalls super mit GitHub.' },
          ].map((platform) => (
            <div key={platform.name} className="bg-[#0d1f3c] border border-[#1e3a5f] rounded-xl p-5 hover:border-[#00d4ff]/30 transition-colors duration-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-[#e2e8f0] text-sm">{platform.name}</p>
                <span className="text-xs bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 px-2 py-0.5 rounded-full">{platform.badge}</span>
              </div>
              <p className="text-xs text-[#94a3b8]">{platform.desc}</p>
            </div>
          ))}
        </div>

        <div className="border border-[#1e3a5f] rounded-xl overflow-hidden">
          <div className="px-5 py-3 bg-[#0a1628] border-b border-[#1e3a5f]">
            <p className="text-sm font-semibold text-[#e2e8f0]">So gehst du vor (am Beispiel Render)</p>
          </div>
          <div className="p-5 bg-[#0d1f3c] space-y-2">
            {renderSteps.map((step, i) => (
              <div key={i} className="flex gap-3 text-xs">
                <span className="text-[#00d4ff] font-mono font-bold min-w-[20px]">{i + 1}.</span>
                <span className="text-[#94a3b8]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="phase6-3" className="scroll-mt-20">
        <div className="flex items-center gap-2 mb-5">
          <Shield size={18} className="text-[#ef4444]" />
          <h3 className="text-xl font-bold text-[#e2e8f0]">6.3 Das Wichtigste beim Deployment: Umgebungsvariablen</h3>
        </div>

        <div className="bg-[#ef4444]/5 border border-[#ef4444]/40 rounded-xl p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={16} className="text-[#ef4444]" />
            <p className="font-bold text-[#ef4444] text-sm uppercase tracking-wide">Sicherheitsrisiko!</p>
          </div>
          <p className="text-[#94a3b8] text-sm leading-relaxed">
            Wenn deine App Passwörter, API-Keys (wie deinen OpenAI/Gemini Key) oder Datenbank-Verbindungen nutzt,
            dürfen diese <strong className="text-[#ef4444]">niemals im Code stehen, den du zu GitHub pusht</strong>.
            Sonst kann sie jeder im Internet lesen!
          </p>
        </div>

        <div className="space-y-5">
          <div className="border border-[#1e3a5f] rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-[#0a1628] border-b border-[#1e3a5f]">
              <p className="text-sm font-semibold text-[#e2e8f0]">Lokal: Die .env Datei verstecken</p>
            </div>
            <div className="p-5 bg-[#0d1f3c]">
              <p className="text-xs text-[#94a3b8] mb-3">
                Du speicherst Secrets auf deinem Rechner in einer versteckten Datei namens{' '}
                <code className="text-[#00d4ff] bg-[#00d4ff]/10 px-1.5 py-0.5 rounded font-mono">.env</code>.
                Damit diese Datei auf keinen Fall bei GitHub landet, musst du sie ignorieren.
                So ignorierst du Dateien sicher (im Terminal):
              </p>
              <CodeBlock code={gitignoreCmd} language="bash" />
              <p className="text-xs text-[#10b981] mt-2">
                Git wird deine Passwörter ab sofort komplett übersehen und sie bleiben sicher auf deinem eigenen Rechner.
              </p>
            </div>
          </div>

          <div className="border border-[#1e3a5f] rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-[#0a1628] border-b border-[#1e3a5f]">
              <p className="text-sm font-semibold text-[#e2e8f0]">Im Deployment: Environment Variables eintragen</p>
            </div>
            <div className="p-5 bg-[#0d1f3c]">
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                In Vercel oder Render gibt es in den Projekteinstellungen immer einen Punkt namens{' '}
                <strong className="text-[#e2e8f0]">"Environment Variables"</strong>. Hier trägst du deine Keys manuell ein
                (z.B. Name: <code className="text-[#00d4ff] bg-[#00d4ff]/10 px-1 rounded font-mono text-xs">API_KEY</code>,
                Value: <code className="text-[#f59e0b] bg-[#f59e0b]/10 px-1 rounded font-mono text-xs">12345-geheim</code>).
                So hat der Live-Server Zugriff auf die Keys, ohne dass sie öffentlich in GitHub stehen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
