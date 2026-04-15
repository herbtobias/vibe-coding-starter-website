import { Printer } from 'lucide-react';

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      title="Guide drucken"
      className="flex items-center gap-1.5 text-[11px] font-mono text-[#94a3b8] hover:text-[#00d4ff] border border-[#122035] hover:border-[#00d4ff]/40 px-2.5 py-1 uppercase tracking-widest transition-colors duration-150"
    >
      <Printer size={12} />
      <span className="hidden sm:inline">Drucken</span>
    </button>
  );
}
