import { navItems } from '../data/content';

export default function Sidebar({ activeSection }) {
  return (
    <nav className="space-y-px">
      <div className="mb-5 px-2">
        <div className="flex items-center gap-2">
          <div className="h-px w-3 bg-[#00d4ff]" />
          <span className="text-[9px] font-mono font-bold text-[#1e3a5f] uppercase tracking-[0.25em]">Inhalt</span>
        </div>
      </div>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isSubItem = (item.phase && item.phase.includes('.')) || item.sub;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2.5 px-2 py-1.5 text-[13px] transition-all duration-150 group border-l-2
              ${isSubItem ? 'pl-5' : ''}
              ${isActive
                ? 'border-[#00d4ff] text-[#e2e8f0] bg-[#00d4ff]/5'
                : 'border-transparent text-[#1e3a5f] hover:text-[#94a3b8] hover:border-[#1e3a5f]'
              }`}
          >
            {item.phase && (
              <span className={`text-[10px] font-mono min-w-[22px] tabular-nums
                ${isActive ? 'text-[#00d4ff]' : 'text-[#1e3a5f] group-hover:text-[#1e3a5f]'}`}>
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
