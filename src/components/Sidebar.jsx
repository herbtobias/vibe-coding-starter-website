import { navItems } from '../data/content';

export default function Sidebar({ activeSection }) {
  return (
    <nav className="space-y-px">
      <div className="mb-5 px-2">
        <div className="flex items-center gap-2">
          <div className="h-px w-3 bg-[#f97316]" />
          <span className="text-[9px] font-mono font-bold text-[#3a3a3a] uppercase tracking-[0.25em]">Inhalt</span>
        </div>
      </div>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isSubItem = item.phase && item.phase.includes('.');

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2.5 px-2 py-1.5 text-[13px] transition-all duration-150 group border-l-2
              ${isSubItem ? 'pl-5' : ''}
              ${isActive
                ? 'border-[#f97316] text-[#f0ede8] bg-[#f97316]/5'
                : 'border-transparent text-[#3a3a3a] hover:text-[#777] hover:border-[#2a2a2a]'
              }`}
          >
            {item.phase && (
              <span className={`text-[10px] font-mono min-w-[22px] tabular-nums
                ${isActive ? 'text-[#f97316]' : 'text-[#2a2a2a] group-hover:text-[#3a3a3a]'}`}>
                {item.phase}
              </span>
            )}
            <span className="truncate leading-tight">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
