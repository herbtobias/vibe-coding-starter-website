import { useState, useEffect } from 'react';
import { navItems } from '../data/content';

export default function Sidebar({ activeSection }) {
  return (
    <nav className="space-y-0.5">
      <div className="mb-4 px-3">
        <span className="text-xs font-semibold text-[#475569] uppercase tracking-widest">Inhaltsverzeichnis</span>
      </div>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isSubItem = item.phase && item.phase.includes('.');

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200 group
              ${isSubItem ? 'pl-6' : ''}
              ${isActive
                ? 'bg-[#00d4ff]/10 text-[#00d4ff] border-r-2 border-[#00d4ff]'
                : 'text-[#475569] hover:text-[#94a3b8] hover:bg-[#0d1f3c]'
              }`}
          >
            {item.phase && (
              <span className={`text-xs font-mono font-medium min-w-[24px]
                ${isActive ? 'text-[#00d4ff]/70' : 'text-[#1e3a5f] group-hover:text-[#475569]'}`}>
                {item.phase}
              </span>
            )}
            <span className="truncate">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
