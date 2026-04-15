import { ExternalLink } from 'lucide-react';

export default function ToolLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-[#00d4ff] hover:text-[#00bcd4] underline decoration-[#00d4ff]/30 hover:decoration-[#00d4ff] underline-offset-2 transition-colors duration-150 ${className}`}
    >
      {children}
      <ExternalLink size={11} className="shrink-0 opacity-60" />
    </a>
  );
}
