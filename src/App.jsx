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
    <div className="min-h-screen bg-[#050a14]">
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050a14]/80 backdrop-blur-md border-b border-[#1e3a5f]">
        <div className="max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[#475569] hover:text-[#94a3b8] transition-colors rounded-lg hover:bg-[#0d1f3c]"
            >
              <Menu size={18} />
            </button>
            <a href="#intro" className="flex items-center gap-2 text-[#e2e8f0] hover:text-[#00d4ff] transition-colors">
              <Waves size={18} className="text-[#00d4ff]" />
              <span className="font-semibold text-sm hidden sm:block">Vibe Coding Guide</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#475569] hidden sm:block font-mono">v2025</span>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
      />

      <div className="max-w-screen-2xl mx-auto flex pt-14">
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto border-r border-[#1e3a5f] py-6 px-4">
          <Sidebar activeSection={activeSection} />
        </aside>

        <main className="flex-1 min-w-0">
          <HeroSection />

          <div className="max-w-3xl mx-auto px-6 py-12">
            <Phase1Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <Phase1_1Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <Phase2Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <Phase3Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <Phase4Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <Phase5Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <Phase6Section />
            <div className="h-px bg-gradient-to-r from-transparent via-[#1e3a5f] to-transparent my-12" />
            <GoldenRulesSection />
          </div>
        </main>
      </div>
    </div>
  );
}
