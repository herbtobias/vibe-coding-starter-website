import { useState, useEffect, useRef } from 'react';
import { Menu, Waves, Flame, BookOpen } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import PrintButton from './components/PrintButton';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import Phase1Section from './components/Phase1Section';
import Phase1_1Section from './components/Phase1_1Section';
import Phase2Section from './components/Phase2Section';
import Phase3Section from './components/Phase3Section';
import Phase4Section from './components/Phase4Section';
import Phase5Section from './components/Phase5Section';
import Phase6Section from './components/Phase6Section';
import GoldenRulesSection from './components/GoldenRulesSection';
import AdvancedPage from './pages/AdvancedPage';
import ResourcesPage from './pages/ResourcesPage';
import { navItems } from './data/content';

function Divider() {
  return (
    <div className="flex items-center gap-4 my-16">
      <div className="flex-1 h-px bg-[#122035]" />
      <div className="w-1.5 h-1.5 bg-[#00d4ff] rotate-45" />
      <div className="flex-1 h-px bg-[#122035]" />
    </div>
  );
}

const mainNavItems = navItems.filter((item) => !item.id.startsWith('advanced'));

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    if (showAdvanced || showResources) {
      window.scrollTo(0, 0);
      return;
    }
    const ids = mainNavItems.map((item) => item.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    elements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [showAdvanced, showResources]);

  const goToAdvanced = () => {
    setShowAdvanced(true);
    setShowResources(false);
    setMobileOpen(false);
  };

  const goToResources = () => {
    setShowResources(true);
    setShowAdvanced(false);
    setMobileOpen(false);
  };

  const goBack = () => {
    setShowAdvanced(false);
    setShowResources(false);
    setTimeout(() => {
      document.getElementById('golden-rules')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  if (showAdvanced) {
    return <AdvancedPage onBack={goBack} onResources={goToResources} />;
  }

  if (showResources) {
    return <ResourcesPage onBack={goBack} />;
  }

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
            <a href="#intro" className="flex items-center gap-2">
              <span className="w-5 h-5 bg-[#00d4ff] flex items-center justify-center">
                <Waves size={11} className="text-black" />
              </span>
              <span className="font-black text-sm text-[#e2e8f0] tracking-tight uppercase hidden sm:block">
                Vibe Coding Guide
              </span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToResources}
              className="flex items-center gap-1.5 text-[#475569] hover:text-[#e2e8f0] transition-colors text-[11px] font-mono uppercase tracking-wide px-2 py-1.5 border border-transparent hover:border-[#1e3a5f]"
            >
              <BookOpen size={12} />
              <span className="hidden sm:inline">Ressourcen</span>
            </button>
            <button
              onClick={goToAdvanced}
              className="flex items-center gap-1.5 bg-[#f59e0b] text-black font-bold text-[11px] px-3 py-1.5 uppercase tracking-wider hover:bg-[#d97706] transition-colors duration-150"
            >
              <Flame size={11} />
              <span>Advanced</span>
            </button>
            <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-2 py-0.5 uppercase tracking-widest hidden sm:inline">
              2026 Edition
            </span>
            <PrintButton />
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        onAdvanced={goToAdvanced}
      />

      <div className="max-w-screen-2xl mx-auto flex pt-12">
        <aside className="hidden lg:block w-60 xl:w-64 shrink-0 sticky top-12 h-[calc(100vh-48px)] overflow-y-auto border-r border-[#122035] py-8 px-4">
          <Sidebar activeSection={activeSection} onAdvanced={goToAdvanced} />
        </aside>

        <main className="flex-1 min-w-0">
          <HeroSection onAdvanced={goToAdvanced} />
          <IntroSection />

          <div className="max-w-3xl mx-auto px-6 py-16">
            <Phase1Section />
            <Divider />
            <Phase1_1Section />
            <Divider />
            <Phase2Section />
            <Divider />
            <Phase3Section />
            <Divider />
            <Phase4Section />
            <Divider />
            <Phase5Section />
            <Divider />
            <Phase6Section />
            <Divider />
            <GoldenRulesSection onAdvanced={goToAdvanced} />
          </div>
        </main>
      </div>
    </div>
  );
}
