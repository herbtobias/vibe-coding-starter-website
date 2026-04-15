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
    <div className="relative my-4 rounded-xl overflow-hidden border border-[#1e3a5f] group">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0a1628] border-b border-[#1e3a5f]">
        <span className="text-xs text-[#475569] font-mono uppercase tracking-wider">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#475569] hover:text-[#00d4ff] transition-colors duration-200 cursor-pointer"
        >
          {copied ? <Check size={12} className="text-[#10b981]" /> : <Copy size={12} />}
          {copied ? 'Kopiert!' : 'Kopieren'}
        </button>
      </div>
      <div className="bg-[#060d1a] px-5 py-4 overflow-x-auto">
        <pre className="text-sm font-mono text-[#94a3b8] leading-relaxed whitespace-pre">{code}</pre>
      </div>
    </div>
  );
}
