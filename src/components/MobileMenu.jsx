import { X, Waves, Flame } from 'lucide-react';
import { navItems } from '../data/content';

const mainNavItems = navItems.filter((item) => !item.id.startsWith('advanced'));

export default function MobileMenu({ isOpen, onClose, activeSection, onAdvanced }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="absolute top-0 left-0 bottom-0 w-64 bg-[#060d1a] border-r border-[#122035] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#122035]">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#00d4ff] flex items-center justify-center">
              <Waves size={9} className="text-black" />
            </span>
            <span className="font-black text-xs text-[#e2e8f0] uppercase tracking-tight">Vibe Guide</span>
          </div>
          <button onClick={onClose} className="text-[#2a4a6e] hover:text-[#e2e8f0] transition-colors">
            <X size={16} />
          </button>
        </div>
        <nav className="p-3 space-y-px">
          {mainNavItems.map((item) => {
            const isActive = activeSection === item.id;
            const isSubItem = item.phase && item.phase.includes('.');

            return (
              <a
                key={item.id}
                href={"#" + item.id}
                onClick={onClose}
                className={"flex items-center gap-2 px-2 py-1.5 text-[13px] transition-all duration-150 border-l-2 " +
                  (isSubItem ? 'pl-5 ' : '') +
                  (isActive
                    ? 'border-[#00d4ff] text-[#e2e8f0] bg-[#00d4ff]/5'
                    : 'border-transparent text-[#1e3a5f] hover:text-[#94a3b8]'
                  )}
              >
                {item.phase && (
                  <span className={"text-[10px] font-mono min-w-[22px] " + (isActive ? 'text-[#00d4ff]' : 'text-[#1e3a5f]')}>
                    {item.phase}
                  </span>
                )}
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}

          <div className="pt-3 pb-1">
            <div className="h-px bg-[#122035]" />
          </div>

          <button
            onClick={() => { onClose(); onAdvanced(); }}
            className="w-full flex items-center gap-2 px-2 py-2 text-[13px] transition-all duration-150 border-l-2 border-[#f59e0b]/40 bg-[#f59e0b]/5 hover:bg-[#f59e0b]/10 hover:border-[#f59e0b]"
          >
            <Flame size={12} className="text-[#f59e0b] shrink-0" />
            <span className="truncate text-[#f59e0b] font-semibold">Advanced: Mobile & Stores</span>
          </button>
        </nav>
      </div>
    </div>
  );
}
