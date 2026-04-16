import { ArrowLeft, Waves, ExternalLink, Flame, Library } from 'lucide-react';
import PrintButton from '../components/PrintButton';

const sections = [
  {
    phase: '1',
    title: 'Phase 1 – Die Spec',
    color: '#00d4ff',
    resources: [
      { label: 'GitHub', url: 'https://github.com', desc: 'Versionskontrolle & Code-Hosting' },
      { label: 'Gemini', url: 'https://gemini.google.com', desc: 'KI-Assistent von Google' },
    ],
  },
  {
    phase: '1.1',
    title: 'Phase 1.1 – Tech-Stack',
    color: '#00d4ff',
    resources: [
      { label: 'Gemini', url: 'https://gemini.google.com', desc: 'KI-Assistent von Google' },
      { label: 'GitHub Copilot', url: 'https://github.com/features/copilot', desc: 'KI-gestützte Code-Vervollständigung' },
    ],
  },
  {
    phase: '2',
    title: 'Phase 2 – UI/UX Design',
    color: '#00d4ff',
    resources: [
      { label: 'Google Stitch', url: 'https://stitch.withgoogle.com', desc: 'UI-Design-Tool von Google' },
      { label: 'Mobbin', url: 'https://mobbin.com', desc: 'Mobile & Web Design-Referenzen' },
    ],
  },
  {
    phase: '3',
    title: 'Phase 3 – GitHub Setup',
    color: '#00d4ff',
    resources: [
      { label: 'GitHub', url: 'https://github.com', desc: 'Repository anlegen & verwalten' },
    ],
  },
  {
    phase: '5',
    title: 'Phase 5 – Entwicklung',
    color: '#00d4ff',
    resources: [
      { label: 'Antigravity', url: 'https://antigravity.dev', desc: 'Vibe Coding Plattform' },
      { label: 'Gemini CLI', url: 'https://github.com/google-gemini/gemini-cli', desc: 'Terminal-basierter KI-Assistent' },
      { label: 'Cursor', url: 'https://cursor.com', desc: 'KI-gestützter Code-Editor' },
      { label: 'GitHub Copilot Workspace', url: 'https://githubnext.com/projects/copilot-workspace', desc: 'KI-Entwicklungsumgebung von GitHub' },
    ],
  },
  {
    phase: '6',
    title: 'Phase 6 – Deployment',
    color: '#00d4ff',
    resources: [
      { label: 'Vercel', url: 'https://vercel.com', desc: 'Frontend-Hosting & Deployment' },
      { label: 'Render', url: 'https://render.com', desc: 'Backend-Hosting & Cloud-Services' },
    ],
  },
  {
    phase: null,
    title: 'Advanced – Native Android',
    color: '#f59e0b',
    resources: [
      { label: 'Android Studio', url: 'https://developer.android.com/studio', desc: 'Offizielle Android-Entwicklungsumgebung' },
      { label: 'Google Stitch', url: 'https://stitch.withgoogle.com', desc: 'UI-Design-Tool von Google' },
      { label: 'Mobbin', url: 'https://mobbin.com', desc: 'Mobile Design-Referenzen' },
      { label: 'Gemini CLI', url: 'https://github.com/google-gemini/gemini-cli', desc: 'Terminal-basierter KI-Assistent' },
      { label: 'Jetpack Compose', url: 'https://developer.android.com/develop/ui/compose', desc: 'Modernes Android UI-Framework' },
    ],
  },
  {
    phase: null,
    title: 'Advanced – Native iOS',
    color: '#f59e0b',
    resources: [
      { label: 'SwiftUI', url: 'https://developer.apple.com/xcode/swiftui/', desc: 'Apples modernes UI-Framework' },
      { label: 'Gemini CLI', url: 'https://github.com/google-gemini/gemini-cli', desc: 'Terminal-basierter KI-Assistent' },
    ],
  },
  {
    phase: null,
    title: 'Advanced – Hybride Apps',
    color: '#f59e0b',
    resources: [
      { label: 'Capacitor', url: 'https://capacitorjs.com', desc: 'Web-Apps als native Container-App' },
    ],
  },
  {
    phase: null,
    title: 'Advanced – Kotlin Multiplatform',
    color: '#f59e0b',
    resources: [
      { label: 'Kotlin Multiplatform', url: 'https://kotlinlang.org/docs/multiplatform.html', desc: 'Shared Logic für Android & iOS' },
      { label: 'KMP Plugin (JetBrains)', url: 'https://plugins.jetbrains.com/plugin/14936-kotlin-multiplatform', desc: 'Plugin für Android Studio' },
      { label: 'Jetpack Compose', url: 'https://developer.android.com/develop/ui/compose', desc: 'Android UI-Framework' },
      { label: 'SwiftUI', url: 'https://developer.apple.com/xcode/swiftui/', desc: 'iOS UI-Framework' },
    ],
  },
  {
    phase: null,
    title: 'Advanced – App Testing',
    color: '#f59e0b',
    resources: [
      { label: 'JUnit 4', url: 'https://junit.org/junit4/', desc: 'Java/Kotlin Unit-Test-Framework' },
      { label: 'Compose UI Tests', url: 'https://developer.android.com/develop/ui/compose/testing', desc: 'UI-Tests für Jetpack Compose' },
      { label: 'XCTest', url: 'https://developer.apple.com/documentation/xctest', desc: 'Apples Test-Framework für iOS' },
      { label: 'Kotlin Test (KMP)', url: 'https://kotlinlang.org/api/latest/kotlin.test/', desc: 'Plattformübergreifende Tests' },
    ],
  },
  {
    phase: null,
    title: 'Advanced – Release & Stores',
    color: '#f59e0b',
    resources: [
      { label: 'Google Play Console', url: 'https://play.google.com/console/signup', desc: 'Android-App veröffentlichen' },
      { label: 'Apple Developer Program', url: 'https://developer.apple.com/programs/', desc: 'iOS-App veröffentlichen' },
      { label: 'App Store Connect', url: 'https://appstoreconnect.apple.com', desc: 'App Store Management' },
      { label: 'TestFlight', url: 'https://developer.apple.com/testflight/', desc: 'Beta-Testing für iOS' },
    ],
  },
];

function ResourceCard({ resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-3 p-3 border border-[#122035] bg-[#080f1e] hover:border-[#1e3a5f] hover:bg-[#0a1628] transition-all duration-150"
    >
      <div className="min-w-0">
        <span className="text-[13px] font-semibold text-[#e2e8f0] group-hover:text-[#00d4ff] transition-colors leading-tight block truncate">
          {resource.label}
        </span>
        <span className="text-[11px] text-[#475569] leading-snug block mt-0.5">{resource.desc}</span>
      </div>
      <ExternalLink size={12} className="text-[#1e3a5f] group-hover:text-[#00d4ff] shrink-0 mt-0.5 transition-colors" />
    </a>
  );
}

function SectionBlock({ section }) {
  const isAdvanced = section.color === '#f59e0b';
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2.5 mb-3">
        {section.phase ? (
          <span
            className="text-[10px] font-mono font-bold min-w-[28px] tabular-nums"
            style={{ color: section.color }}
          >
            {section.phase}
          </span>
        ) : (
          <span style={{ color: section.color }}>
            <Flame size={11} />
          </span>
        )}
        <h2 className="text-[13px] font-bold text-[#94a3b8] uppercase tracking-wide">{section.title}</h2>
        <div className="flex-1 h-px" style={{ backgroundColor: isAdvanced ? '#f59e0b20' : '#122035' }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
        {section.resources.map((r) => (
          <ResourceCard key={r.url + r.label} resource={r} />
        ))}
      </div>
    </div>
  );
}

export default function ResourcesPage({ onBack, onGlossary }) {
  const baseSections = sections.filter((s) => s.color === '#00d4ff');
  const advancedSections = sections.filter((s) => s.color === '#f59e0b');

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
            <button
              onClick={onGlossary}
              className="flex items-center gap-1.5 text-[#475569] hover:text-[#e2e8f0] transition-colors text-[11px] font-mono uppercase tracking-wide px-2 py-1.5 border border-transparent hover:border-[#1e3a5f]"
            >
              <Library size={12} />
              <span className="hidden sm:inline">Glossar</span>
            </button>
            <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-2 py-0.5 uppercase tracking-widest hidden sm:inline">
              Ressourcen
            </span>
            <PrintButton />
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="text-[11px] font-mono font-bold text-[#00d4ff] uppercase tracking-[0.3em]">
              Alle Ressourcen auf einen Blick
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
            <span className="block">Ressourcen</span>
            <span className="block text-[#00d4ff]">&amp; Links</span>
          </h1>
          <p className="text-[#475569] text-sm max-w-xl">
            Alle Tools, Plattformen und Dienste aus dem Guide kompakt zusammengefasst.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 bg-[#00d4ff]" />
            <h2 className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-widest">Basis-Guide</h2>
          </div>
          {baseSections.map((s) => (
            <SectionBlock key={s.title} section={s} />
          ))}
        </div>

        <div className="border-t border-[#122035] pt-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-4 bg-[#f59e0b]" />
            <h2 className="text-xs font-mono font-bold text-[#f59e0b] uppercase tracking-widest">Advanced Track</h2>
          </div>
          {advancedSections.map((s) => (
            <SectionBlock key={s.title} section={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
