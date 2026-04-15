import { TriangleAlert as AlertTriangle, Info, Lightbulb, Star } from 'lucide-react';

const variants = {
  warning: {
    icon: AlertTriangle,
    accentColor: '#00d4ff',
    iconColor: 'text-[#00d4ff]',
    titleColor: 'text-[#00d4ff]',
    label: 'Achtung',
  },
  danger: {
    icon: AlertTriangle,
    accentColor: '#ef4444',
    iconColor: 'text-[#ef4444]',
    titleColor: 'text-[#ef4444]',
    label: 'Warnung',
  },
  info: {
    icon: Info,
    accentColor: '#00d4ff',
    iconColor: 'text-[#00d4ff]',
    titleColor: 'text-[#00d4ff]',
    label: 'Info',
  },
  tip: {
    icon: Lightbulb,
    accentColor: '#22c55e',
    iconColor: 'text-[#22c55e]',
    titleColor: 'text-[#22c55e]',
    label: 'Tipp',
  },
  pro: {
    icon: Star,
    accentColor: '#00d4ff',
    iconColor: 'text-[#00d4ff]',
    titleColor: 'text-[#00d4ff]',
    label: 'Profi-Trick',
  },
};

export default function Callout({ type = 'info', title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div className="my-6 border border-[#122035] border-l-2 p-5 bg-[#080f1e]" style={{ borderLeftColor: v.accentColor }}>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={13} className={v.iconColor} />
        <span className={"text-[10px] font-mono font-bold uppercase tracking-widest " + v.titleColor}>
          {title || v.label}
        </span>
      </div>
      <div className="text-[#666] text-sm leading-relaxed">{children}</div>
    </div>
  );
}
