import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 overflow-hidden border border-[#1a1a1a] group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#111] border-b border-[#1a1a1a]">
        <span className="text-[9px] font-mono text-[#333] uppercase tracking-widest">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[10px] font-mono text-[#333] hover:text-[#f97316] transition-colors duration-150 cursor-pointer uppercase tracking-wide"
        >
          {copied ? <Check size={11} className="text-[#22c55e]" /> : <Copy size={11} />}
          {copied ? 'Kopiert' : 'Kopieren'}
        </button>
      </div>
      <div className="bg-[#0a0a0a] px-5 py-4 overflow-x-auto border-l-2 border-[#f97316]/20">
        <pre className="text-sm font-mono text-[#666] leading-relaxed whitespace-pre">{code}</pre>
      </div>
    </div>
  );
}
