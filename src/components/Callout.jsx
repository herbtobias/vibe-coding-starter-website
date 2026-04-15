import { TriangleAlert as AlertTriangle, Info, Lightbulb, Star } from 'lucide-react';

const variants = {
  warning: {
    icon: AlertTriangle,
    border: 'border-[#f59e0b]',
    bg: 'bg-[#f59e0b]/5',
    iconColor: 'text-[#f59e0b]',
    titleColor: 'text-[#f59e0b]',
    label: 'Achtung',
  },
  danger: {
    icon: AlertTriangle,
    border: 'border-[#ef4444]',
    bg: 'bg-[#ef4444]/5',
    iconColor: 'text-[#ef4444]',
    titleColor: 'text-[#ef4444]',
    label: 'Warnung',
  },
  info: {
    icon: Info,
    border: 'border-[#00d4ff]',
    bg: 'bg-[#00d4ff]/5',
    iconColor: 'text-[#00d4ff]',
    titleColor: 'text-[#00d4ff]',
    label: 'Info',
  },
  tip: {
    icon: Lightbulb,
    border: 'border-[#10b981]',
    bg: 'bg-[#10b981]/5',
    iconColor: 'text-[#10b981]',
    titleColor: 'text-[#10b981]',
    label: 'Tipp',
  },
  pro: {
    icon: Star,
    border: 'border-[#00d4ff]',
    bg: 'bg-[#00d4ff]/5',
    iconColor: 'text-[#00d4ff]',
    titleColor: 'text-[#00d4ff]',
    label: 'Profi-Trick',
  },
};

export default function Callout({ type = 'info', title, children }) {
  const v = variants[type];
  const Icon = v.icon;

  return (
    <div className={`my-6 rounded-xl border-l-4 ${v.border} ${v.bg} p-5`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className={v.iconColor} />
        <span className={`text-sm font-semibold ${v.titleColor} uppercase tracking-wide`}>
          {title || v.label}
        </span>
      </div>
      <div className="text-[#94a3b8] text-sm leading-relaxed">{children}</div>
    </div>
  );
}
