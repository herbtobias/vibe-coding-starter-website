import { X } from 'lucide-react';
import { navItems } from '../data/content';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute top-0 left-0 bottom-0 w-72 bg-[#0a1628] border-r border-[#1e3a5f] overflow-y-auto">
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e3a5f]">
          <span className="font-semibold text-[#e2e8f0] text-sm">Inhaltsverzeichnis</span>
          <button onClick={onClose} className="text-[#475569] hover:text-[#94a3b8] transition-colors">
            <X size={18} />
          </button>
        </div>
        <nav className="p-4 space-y-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isSubItem = item.phase && item.phase.includes('.');

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200
                  ${isSubItem ? 'pl-6' : ''}
                  ${isActive
                    ? 'bg-[#00d4ff]/10 text-[#00d4ff]'
                    : 'text-[#475569] hover:text-[#94a3b8] hover:bg-[#0d1f3c]'
                  }`}
              >
                {item.phase && (
                  <span className={`text-xs font-mono font-medium min-w-[24px]
                    ${isActive ? 'text-[#00d4ff]/70' : 'text-[#1e3a5f]'}`}>
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
