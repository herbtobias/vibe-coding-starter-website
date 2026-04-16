import { useEffect } from 'react';
import { X } from 'lucide-react';

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
    <div className="border border-[#122035] bg-[#060d1a] p-4 hover:border-[#1e3a5f] transition-colors duration-150">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
        <h3 className="text-[#00d4ff] font-bold text-sm leading-tight">{term}</h3>
        <span className="text-[10px] font-mono text-[#475569] uppercase tracking-wide">{short}</span>
      </div>
      <p className="text-[#94a3b8] text-xs leading-relaxed">{desc}</p>
    </div>
  );
}

export default function GlossaryModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full sm:max-w-4xl sm:mx-4 bg-[#080f1e] border border-[#1e3a5f] flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#122035] shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-[#00d4ff]" />
            <span className="text-[11px] font-mono font-bold text-[#00d4ff] uppercase tracking-[0.3em]">
              IT-Begriffe auf Deutsch
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#475569] hover:text-[#e2e8f0] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-5 py-2 border-b border-[#122035] shrink-0">
          <h2
            className="font-black uppercase text-[#e2e8f0]"
            style={{
              fontFamily: "'Bebas Neue', 'Inter', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              letterSpacing: '0.01em',
              lineHeight: '1',
            }}
          >
            Das <span className="text-[#00d4ff]">Glossar</span>
          </h2>
          <p className="text-[#475569] text-xs mt-1">
            Alle Fachbegriffe aus dem Guide – übersetzt in die Sprache des Büroalltags.
          </p>
        </div>

        <div className="overflow-y-auto flex-1 p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {glossaryTerms.map((item) => (
              <GlossaryCard key={item.term} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
