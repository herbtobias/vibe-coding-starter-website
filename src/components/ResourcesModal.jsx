import { useEffect } from 'react';
import { X, ExternalLink, Flame } from 'lucide-react';

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
      className="group flex items-start justify-between gap-3 p-3 border border-[#122035] bg-[#060d1a] hover:border-[#1e3a5f] hover:bg-[#0a1628] transition-all duration-150"
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
    <div className="mb-5">
      <div className="flex items-center gap-2.5 mb-2.5">
        {section.phase ? (
          <span className="text-[10px] font-mono font-bold min-w-[28px] tabular-nums" style={{ color: section.color }}>
            {section.phase}
          </span>
        ) : (
          <span style={{ color: section.color }}>
            <Flame size={11} />
          </span>
        )}
        <h3 className="text-[12px] font-bold text-[#94a3b8] uppercase tracking-wide">{section.title}</h3>
        <div className="flex-1 h-px" style={{ backgroundColor: isAdvanced ? '#f59e0b20' : '#122035' }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-1.5">
        {section.resources.map((r) => (
          <ResourceCard key={r.url + r.label} resource={r} />
        ))}
      </div>
    </div>
  );
}

export default function ResourcesModal({ onClose }) {
  const baseSections = sections.filter((s) => s.color === '#00d4ff');
  const advancedSections = sections.filter((s) => s.color === '#f59e0b');

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
              Alle Ressourcen auf einen Blick
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
            Ressourcen <span className="text-[#00d4ff]">&amp; Links</span>
          </h2>
          <p className="text-[#475569] text-xs mt-1">
            Alle Tools, Plattformen und Dienste aus dem Guide kompakt zusammengefasst.
          </p>
        </div>

        <div className="overflow-y-auto flex-1 p-5">
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-3 bg-[#00d4ff]" />
              <span className="text-[10px] font-mono font-bold text-[#00d4ff] uppercase tracking-widest">Basis-Guide</span>
            </div>
            {baseSections.map((s) => (
              <SectionBlock key={s.title} section={s} />
            ))}
          </div>

          <div className="border-t border-[#122035] pt-5 mt-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-3 bg-[#f59e0b]" />
              <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-widest">Advanced Track</span>
            </div>
            {advancedSections.map((s) => (
              <SectionBlock key={s.title} section={s} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
