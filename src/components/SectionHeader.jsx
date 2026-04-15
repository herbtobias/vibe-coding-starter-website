export default function SectionHeader({ phase, title, icon: Icon }) {
  return (
    <div className="mb-10">
      {phase && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono font-bold text-[#00d4ff] uppercase tracking-[0.2em]">
            Phase {phase}
          </span>
          <div className="h-px flex-1 bg-[#122035]" />
        </div>
      )}
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="mt-1 shrink-0 w-8 h-8 border border-[#162840] flex items-center justify-center bg-[#0a1628]">
            <Icon size={16} className="text-[#00d4ff]" />
          </div>
        )}
        <h2
          className="font-black text-[#e2e8f0] uppercase leading-none"
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
