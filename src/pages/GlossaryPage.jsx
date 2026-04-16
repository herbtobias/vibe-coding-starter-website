import { ArrowLeft, Waves } from 'lucide-react';
import PrintButton from '../components/PrintButton';

const glossaryTerms = [
  {
    term: 'Prompt',
    short: 'Arbeitsanweisung / Briefing',
    desc: 'Deine Arbeitsanweisung (Briefing) an deinen neuen, hochmotivierten KI-Kollegen. Je präziser das Briefing, desto weniger Schleifen dreht ihr.',
  },
  {
    term: 'Spec (Spezifikation)',
    short: 'Lastenheft',
    desc: 'Das Lastenheft. Hier steht haargenau drin, was am Ende auf dem Tisch liegen muss, damit das Projekt abgenommen wird.',
  },
  {
    term: 'MVP',
    short: 'Minimum Viable Product – Phase-1-Rollout',
    desc: 'Das Pilotprojekt oder der "Phase-1-Rollout". Keine goldenen Wasserhähne, keine Sonderlocken. Nur das absolute Minimum, um zu prüfen, ob der Kernprozess überhaupt funktioniert.',
  },
  {
    term: 'Frontend (UI / UX)',
    short: 'Empfangsbereich & Antragsformular',
    desc: 'Der Empfangsbereich, das Corporate Design oder das eigentliche Antragsformular. Alles, was der Endkunde sieht, anklickt und wo er seine Daten einträgt.',
  },
  {
    term: 'Backend',
    short: 'Backoffice / Sachbearbeitung',
    desc: 'Das Backoffice oder die Sachbearbeitung im Hintergrund. Der Kunde sieht diesen Bereich nie, aber hier rattern die Taschenrechner, hier werden Berechtigungen geprüft und Freigaben erteilt.',
  },
  {
    term: 'API (Schnittstelle)',
    short: 'Hauspost / Aktenkurier',
    desc: 'Die Hauspost oder der Aktenkurier. Die API nimmt den ausgefüllten Antrag vom Empfang (Frontend), bringt ihn sicher ins Backoffice (Backend) und meldet dem Kunden später: "Antrag bewilligt!".',
  },
  {
    term: 'Datenbank (SQL / NoSQL)',
    short: 'Zentrales Konzernarchiv',
    desc: 'Das zentrale, revisionssichere Konzernarchiv (wie z.B. SAP). Hier werden alle Vorgänge, Rechnungen und Nutzerdaten sicher und strukturiert abgelegt.',
  },
  {
    term: 'Tech-Stack',
    short: 'Genehmigte Büroausstattung',
    desc: 'Die genehmigte Büroausstattung. Die grundsätzliche Entscheidung, ob eine Abteilung mit Microsoft Office, Google Workspace oder noch auf Papier arbeitet (z.B. React vs. Vue vs. Swift).',
  },
  {
    term: 'Repository (GitHub / Git)',
    short: 'Dokumentenmanagementsystem (DMS)',
    desc: 'Das Dokumentenmanagementsystem (DMS). Es versioniert jede einzelne Datei. Jeder Tastenschlag wird protokolliert (wer, wann, was geändert hat).',
  },
  {
    term: 'Commit & Push',
    short: 'Abzeichnen & Hochladen',
    desc: '"Commit" bedeutet, du speicherst und zeichnest ein Dokument lokal ab. "Push" bedeutet, du lädst es auf das zentrale Netzlaufwerk hoch, damit alle den neuesten Stand haben.',
  },
  {
    term: 'Branch',
    short: 'Arbeitskopie / Entwurf',
    desc: 'Eine Arbeitskopie / Ein Entwurf. Du kopierst dir eine wichtige Vorlage, um gefahrlos eine neue Formulierung auszuprobieren, ohne das Live-Dokument zu zerschießen.',
  },
  {
    term: 'Merge',
    short: 'Übernahme in den offiziellen Standard',
    desc: 'Deine Arbeitskopie (Branch) wurde geprüft und wird nun als neuer, offizieller Standard in die Konzernrichtlinien übernommen.',
  },
  {
    term: 'Bug',
    short: 'Formfehler / kaputter Prozess',
    desc: 'Ein Formfehler oder ein kaputter Prozess. Ein Antrag bleibt hängen oder liefert falsche Zahlen.',
  },
  {
    term: 'Stacktrace / Debugger',
    short: 'Audit-Trail der internen Revision',
    desc: 'Der Audit-Trail der internen Revision. Wenn etwas kaputt geht, zeigt dir der Stacktrace minutengenau an, auf welchem Schreibtisch, in welcher Abteilung und in welcher Zeile der Prozess gescheitert ist. (Diesen Trail gibst du der KI zur Korrektur).',
  },
  {
    term: 'Terminal / CLI',
    short: 'Kommandozeile / AS/400-Maske',
    desc: 'Die Kommandozeile. Erinnert stark an alte DOS-Zeiten oder AS/400-Masken ohne Maussteuerung. Hier gibst du dem Computer direkte, schriftliche Befehle.',
  },
  {
    term: 'Environment Variables (.env)',
    short: 'Safe im Chefbüro',
    desc: 'Der Safe im Chefbüro. Hier liegen API-Schlüssel, Passwörter und Zugangsdaten, die niemals in den normalen Aktenordnern (GitHub) herumliegen dürfen.',
  },
  {
    term: 'Deployment / Hosten',
    short: 'Offizieller Go-Live',
    desc: 'Der offizielle "Go-Live". Der Moment, in dem das neue Tool aus der Testumgebung geholt und für alle Niederlassungen oder Kunden im Internet freigeschaltet wird.',
  },
  {
    term: 'Native App',
    short: 'Hochspezialisiertes Formular',
    desc: 'Ein hochspezialisiertes Formular, das nur für eine bestimmte Abteilung (z.B. Buchhaltung) perfektioniert wurde. Für den Vertrieb musst du das Formular noch einmal komplett neu entwerfen.',
  },
  {
    term: 'Hybride App',
    short: 'Universalformular',
    desc: 'Ein Universalformular. Es ist ein Kompromiss, funktioniert aber für alle Abteilungen sofort, da du es nur ein einziges Mal erstellen musstest.',
  },
];

function GlossaryCard({ term, short, desc }) {
  return (
    <div className="border border-[#122035] bg-[#080f1e] p-5 hover:border-[#1e3a5f] transition-colors duration-150">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <h2 className="text-[#00d4ff] font-bold text-base leading-tight">{term}</h2>
        <span className="text-[11px] font-mono text-[#475569] uppercase tracking-wide">{short}</span>
      </div>
      <p className="text-[#94a3b8] text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function GlossaryPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#060d1a]">
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#060d1a]/95 backdrop-blur-sm border-b border-[#122035]">
        <div className="max-w-screen-2xl mx-auto px-5 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-[#475569] hover:text-[#e2e8f0] transition-colors text-xs font-mono uppercase tracking-wide"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Zurück</span>
            </button>
            <div className="w-px h-4 bg-[#122035]" />
            <a href="#" onClick={onBack} className="flex items-center gap-2">
              <span className="w-5 h-5 bg-[#00d4ff] flex items-center justify-center">
                <Waves size={11} className="text-black" />
              </span>
              <span className="font-black text-sm text-[#e2e8f0] tracking-tight uppercase hidden sm:block">
                Vibe Coding Guide
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-2 py-0.5 uppercase tracking-widest hidden sm:inline">
              Glossar
            </span>
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pt-20 pb-24">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[11px] font-mono font-bold text-[#00d4ff] uppercase tracking-[0.3em]">
              IT-Begriffe auf Deutsch
            </span>
          </div>
          <h1
            className="font-black uppercase leading-none mb-4 text-[#e2e8f0]"
            style={{
              fontFamily: "'Bebas Neue', 'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              letterSpacing: '0.01em',
              lineHeight: '0.9',
            }}
          >
            <span className="block">Das</span>
            <span className="block text-[#00d4ff]">Glossar</span>
          </h1>
          <p className="text-[#475569] text-sm max-w-xl">
            IT-Begriffe fühlen sich oft wie eine Fremdsprache an. Hier findest du alle wichtigen Fachbegriffe aus dem Guide – übersetzt in deinen Büro-Alltag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {glossaryTerms.map((item) => (
            <GlossaryCard key={item.term} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
