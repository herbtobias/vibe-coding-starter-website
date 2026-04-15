export default function SectionHeader({ phase, title, icon: Icon, iconColor = 'text-[#00d4ff]' }) {
  return (
    <div className="mb-8">
      {phase && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 rounded-full border border-[#00d4ff]/20 uppercase tracking-widest">
            Phase {phase}
          </span>
        </div>
      )}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-1 p-2 rounded-lg bg-[#0d1f3c] border border-[#1e3a5f]">
            <Icon size={20} className={iconColor} />
          </div>
        )}
        <h2 className="text-2xl font-bold text-[#e2e8f0] leading-tight">{title}</h2>
      </div>
      <div className="mt-4 h-px bg-gradient-to-r from-[#1e3a5f] via-[#00d4ff]/20 to-transparent" />
    </div>
  );
}
