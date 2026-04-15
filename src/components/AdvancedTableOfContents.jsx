import { Smartphone, Apple, Globe, Layers, TestTube, Store } from 'lucide-react';

const sections = [
  {
    id: 'advanced-android',
    icon: Smartphone,
    number: '01',
    title: 'Native Android Apps bauen',
    subtitle: 'Android Studio + Kotlin / Jetpack Compose',
    steps: ['Leeres Projekt anlegen', 'Screens-Bibliothek anlegen', 'Gemini CLI starten', 'Prompt mit Bild + Spec kombinieren'],
  },
  {
    id: 'advanced-ios',
    icon: Apple,
    number: '02',
    title: 'Native iOS Apps bauen',
    subtitle: 'Xcode + SwiftUI',
    steps: ['Leeres Projekt anlegen', 'Screens-Bibliothek anlegen', 'Terminal & Gemini CLI prompten'],
  },
  {
    id: 'advanced-hybrid',
    icon: Globe,
    number: '03',
    title: 'Hybride Container-Apps',
    subtitle: 'Capacitor (Ionic) — Eine Codebase, zwei Stores',
    steps: ['Capacitor installieren & initialisieren', 'Web-App bauen', 'Plattformen hinzufügen', 'Sync & öffnen'],
  },
  {
    id: 'advanced-kmp',
    icon: Layers,
    number: '04',
    title: 'Kotlin Multiplatform (KMP)',
    subtitle: 'Geteilte Logik, native UIs',
    steps: ['KMP Projekt anlegen', 'Shared-Logik prompten', 'Android-UI in Jetpack Compose', 'iOS-UI in SwiftUI'],
  },
  {
    id: 'advanced-testing',
    icon: TestTube,
    number: '05',
    title: 'App-Testing',
    subtitle: 'JUnit · XCTest · KMP Shared Tests',
    steps: ['Unit-Tests für Android (JUnit + MockK)', 'UI-Tests für Android (Compose)', 'Tests für iOS (XCTest)', 'Plattformübergreifende KMP-Tests'],
  },
  {
    id: 'advanced-release',
    icon: Store,
    number: '06',
    title: 'Release — Ab in die Stores',
    subtitle: 'Google Play Store & Apple App Store',
    steps: ['Signed Bundle / APK generieren', 'Play Console Store Listing', 'Xcode Archivieren & Upload', 'TestFlight & Apple Review'],
  },
];

export default function AdvancedTableOfContents() {
  return (
    <div className="mb-16 border border-[#f59e0b]/20 bg-[#0a1628] rounded-none overflow-hidden">
      <div className="px-6 py-4 border-b border-[#f59e0b]/20 flex items-center gap-3">
        <div className="h-px w-5 bg-[#f59e0b]" />
        <span className="text-[10px] font-mono font-bold text-[#f59e0b] uppercase tracking-[0.3em]">
          Inhaltsverzeichnis
        </span>
      </div>

      <div className="divide-y divide-[#122035]">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex gap-4 px-6 py-4 hover:bg-[#f59e0b]/5 transition-colors duration-150 group"
            >
              <span className="text-[11px] font-mono font-bold text-[#f59e0b]/40 group-hover:text-[#f59e0b] transition-colors duration-150 min-w-[22px] mt-0.5 tabular-nums">
                {section.number}
              </span>

              <div className="w-6 h-6 border border-[#162840] group-hover:border-[#f59e0b]/40 flex items-center justify-center bg-[#060d1a] shrink-0 transition-colors duration-150 mt-0.5">
                <Icon size={12} className="text-[#f59e0b]/60 group-hover:text-[#f59e0b] transition-colors duration-150" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors duration-150 leading-tight">
                    {section.title}
                  </span>
                  <span className="text-[11px] text-[#475569] font-mono truncate">
                    — {section.subtitle}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-3 mt-1.5">
                  {section.steps.map((step, i) => (
                    <span key={i} className="text-[11px] text-[#475569] group-hover:text-[#94a3b8]/60 transition-colors duration-150">
                      {step}{i < section.steps.length - 1 && <span className="ml-3 text-[#1e3a5f]">·</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[#1e3a5f] group-hover:text-[#f59e0b]/40 transition-colors duration-150 self-center shrink-0 text-xs font-mono">
                →
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
