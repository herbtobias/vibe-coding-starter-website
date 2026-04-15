export default function SectionHeader({ phase, title, icon: Icon }) {
  return (
    <div className="mb-10">
      {phase && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono font-bold text-[#f97316] uppercase tracking-[0.2em]">
            Phase {phase}
          </span>
          <div className="h-px flex-1 bg-[#1a1a1a]" />
        </div>
      )}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-1 shrink-0 w-8 h-8 border border-[#1f1f1f] flex items-center justify-center bg-[#111]">
            <Icon size={16} className="text-[#f97316]" />
          </div>
        )}
        <h2
          className="font-black text-[#f0ede8] uppercase leading-none"
          style={{
            fontFamily: "'Bebas Neue', 'Inter', sans-serif",
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            letterSpacing: '0.02em',
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
