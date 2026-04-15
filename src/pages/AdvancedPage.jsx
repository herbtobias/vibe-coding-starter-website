import { useState } from 'react';
import { Waves, ArrowLeft, Flame, Menu } from 'lucide-react';
import AdvancedSection from '../components/AdvancedSection';
import AdvancedTableOfContents from '../components/AdvancedTableOfContents';
import AdvancedSidebar from '../components/AdvancedSidebar';
import PrintButton from '../components/PrintButton';

function MobileAdvancedMenu({ isOpen, onClose, onBack }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-[#060d1a] border-r border-[#122035] overflow-y-auto py-8 px-4">
        <AdvancedSidebar onBack={() => { onClose(); onBack(); }} />
      </div>
    </div>
  );
}

export default function AdvancedPage({ onBack }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060d1a]">
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#060d1a]/95 backdrop-blur-sm border-b border-[#122035]">
        <div className="max-w-screen-2xl mx-auto px-5 h-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1.5 text-[#475569] hover:text-[#e2e8f0] transition-colors"
            >
              <Menu size={18} />
            </button>
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-[#475569] hover:text-[#e2e8f0] transition-colors text-xs font-mono uppercase tracking-wide"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Zurück zum Guide</span>
            </button>
            <div className="w-px h-4 bg-[#122035]" />
            <a
              href="#advanced"
              onClick={onBack}
              className="flex items-center gap-2"
            >
              <span className="w-5 h-5 bg-[#00d4ff] flex items-center justify-center">
                <Waves size={11} className="text-black" />
              </span>
              <span className="font-black text-sm text-[#e2e8f0] tracking-tight uppercase hidden sm:block">
                Vibe Coding Guide
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-[#f59e0b]/10 border border-[#f59e0b]/30 px-2.5 py-0.5">
              <Flame size={10} className="text-[#f59e0b]" />
              <span className="text-[10px] font-mono text-[#f59e0b] uppercase tracking-widest">Advanced</span>
            </div>
            <PrintButton />
          </div>
        </div>
      </header>

      <MobileAdvancedMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onBack={onBack}
      />

      <div className="max-w-screen-2xl mx-auto flex pt-12">
        <aside className="hidden lg:block w-60 xl:w-64 shrink-0 sticky top-12 h-[calc(100vh-48px)] overflow-y-auto border-r border-[#122035] py-8 px-4">
          <AdvancedSidebar onBack={onBack} />
        </aside>

        <main className="flex-1 min-w-0">
          <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#f59e0b]" />
                <span className="text-[11px] font-mono font-bold text-[#f59e0b] uppercase tracking-[0.3em]">
                  Vibe Coding Guide — Advanced Track
                </span>
              </div>
              <h1
                className="font-black uppercase leading-none mb-6 text-[#e2e8f0]"
                style={{
                  fontFamily: "'Bebas Neue', 'Inter', sans-serif",
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  letterSpacing: '0.01em',
                  lineHeight: '0.9',
                }}
              >
                <span className="block">Mobile Apps,</span>
                <span className="block text-[#f59e0b]">Hybride</span>
                <span className="block">Ansätze</span>
                <span className="block">&amp; Stores</span>
              </h1>
              <p className="text-[#94a3b8] text-base leading-relaxed border-l-2 border-[#f59e0b] pl-5 max-w-2xl">
                Du hast den Basis-Guide gemeistert? Hier geht es in die Königsklasse:
                Native Android & iOS Apps, hybride Container-Apps und Kotlin Multiplatform.
              </p>
            </div>

            <AdvancedTableOfContents />
            <AdvancedSection />

            <div className="mt-16 border border-[#122035] p-8 bg-[#080f1e] border-l-4 border-l-[#f59e0b]">
              <p
                className="font-black text-[#e2e8f0] uppercase mb-2"
                style={{
                  fontFamily: "'Bebas Neue', 'Inter', sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  letterSpacing: '0.02em',
                }}
              >
                Zurück zum Basis-Guide?
              </p>
              <p className="text-[#475569] text-sm mb-5">
                Die Grundlagen von Spec, Design, GitHub-Workflow und Deployment findest du im Haupt-Guide.
              </p>
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 border border-[#1e3a5f] text-[#94a3b8] text-sm px-5 py-2.5 uppercase tracking-wider hover:border-[#00d4ff]/40 hover:text-[#e2e8f0] transition-all duration-150 font-mono"
              >
                <ArrowLeft size={13} />
                Zum Haupt-Guide
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
