import { X } from 'lucide-react';
import { Waves } from 'lucide-react';
import { navItems } from '../data/content';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="absolute top-0 left-0 bottom-0 w-64 bg-[#0a0a0a] border-r border-[#1a1a1a] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1a1a1a]">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-[#f97316] flex items-center justify-center">
              <Waves size={9} className="text-black" />
            </span>
            <span className="font-black text-xs text-[#f0ede8] uppercase tracking-tight">Vibe Guide</span>
          </div>
          <button onClick={onClose} className="text-[#333] hover:text-[#f0ede8] transition-colors">
            <X size={16} />
          </button>
        </div>
        <nav className="p-3 space-y-px">
          {navItems.map((item) => {
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
                    ? 'border-[#f97316] text-[#f0ede8] bg-[#f97316]/5'
                    : 'border-transparent text-[#3a3a3a] hover:text-[#777]'
                  )}
              >
                {item.phase && (
                  <span className={"text-[10px] font-mono min-w-[22px] " + (isActive ? 'text-[#f97316]' : 'text-[#2a2a2a]')}>
                    {item.phase}
                  </span>
                )}
                <span className="truncate">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
