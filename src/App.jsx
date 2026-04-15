import { useState, useEffect, useRef } from 'react';
import { Menu, Waves } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import HeroSection from './components/HeroSection';
import Phase1Section from './components/Phase1Section';
import Phase1_1Section from './components/Phase1_1Section';
import Phase2Section from './components/Phase2Section';
import Phase3Section from './components/Phase3Section';
import Phase4Section from './components/Phase4Section';
import Phase5Section from './components/Phase5Section';
import Phase6Section from './components/Phase6Section';
import GoldenRulesSection from './components/GoldenRulesSection';
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

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const observerRef = useRef(null);

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
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
  }, []);

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
          <div>
            <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-2 py-0.5 uppercase tracking-widest">
              2026 Edition
            </span>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />

      <div className="max-w-screen-2xl mx-auto flex pt-12">
        <aside className="hidden lg:block w-60 xl:w-64 shrink-0 sticky top-12 h-[calc(100vh-48px)] overflow-y-auto border-r border-[#122035] py-8 px-4">
          <Sidebar activeSection={activeSection} />
        </aside>

        <main className="flex-1 min-w-0">
          <HeroSection />

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
            <GoldenRulesSection />
          </div>
        </main>
      </div>
    </div>
  );
}
