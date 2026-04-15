import { useState, useEffect, useRef } from 'react';
import { Smartphone, Apple, Globe, Layers, TestTube, Store, ArrowLeft } from 'lucide-react';

const sections = [
  { id: 'advanced-android', number: '01', label: 'Native Android Apps', icon: Smartphone },
  { id: 'advanced-ios', number: '02', label: 'Native iOS Apps', icon: Apple },
  { id: 'advanced-hybrid', number: '03', label: 'Hybride Container-Apps', icon: Globe },
  { id: 'advanced-kmp', number: '04', label: 'Kotlin Multiplatform', icon: Layers },
  { id: 'advanced-testing', number: '05', label: 'App-Testing', icon: TestTube },
  { id: 'advanced-release', number: '06', label: 'Release – Ab in die Stores', icon: Store },
];

export default function AdvancedSidebar({ onBack }) {
  const [activeSection, setActiveSection] = useState('advanced-android');
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);

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
    <nav className="space-y-px">
      <div className="mb-5 px-2">
        <div className="flex items-center gap-2">
          <div className="h-px w-3 bg-[#f59e0b]" />
          <span className="text-[9px] font-mono font-bold text-[#f59e0b] uppercase tracking-[0.25em]">Advanced</span>
        </div>
      </div>

      {sections.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2.5 px-2 py-1.5 text-[13px] transition-all duration-150 group border-l-2
              ${isActive
                ? 'border-[#f59e0b] text-[#e2e8f0] bg-[#f59e0b]/5'
                : 'border-transparent text-[#475569] hover:text-[#94a3b8] hover:border-[#475569]'
              }`}
          >
            <span className={`text-[10px] font-mono min-w-[22px] tabular-nums
              ${isActive ? 'text-[#f59e0b]' : 'text-[#1e3a5f] group-hover:text-[#475569]'}`}>
              {item.number}
            </span>
            <Icon size={11} className={`shrink-0 ${isActive ? 'text-[#f59e0b]' : 'text-[#1e3a5f] group-hover:text-[#475569]'}`} />
            <span className="truncate leading-tight">{item.label}</span>
          </a>
        );
      })}

      <div className="pt-4 pb-1 px-2">
        <div className="h-px bg-[#122035]" />
      </div>

      <button
        onClick={onBack}
        className="w-full flex items-center gap-2.5 px-2 py-2 text-[13px] transition-all duration-150 border-l-2 border-[#1e3a5f] hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 group"
      >
        <ArrowLeft size={12} className="text-[#475569] group-hover:text-[#00d4ff] shrink-0" />
        <span className="truncate leading-tight text-[#475569] group-hover:text-[#94a3b8]">Zurück zum Guide</span>
      </button>
    </nav>
  );
}
