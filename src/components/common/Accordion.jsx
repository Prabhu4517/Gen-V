import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Accordion({ items = [], allowMultiple = false, className = '' }) {
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-colors overflow-hidden ${
              isOpen
                ? 'bg-slate-900/90 border-indigo-500/40 shadow-lg shadow-indigo-500/5'
                : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              <span className="text-base sm:text-lg font-medium text-slate-100 pr-4">
                {item.question || item.title}
              </span>
              <span
                className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 bg-indigo-600 text-white' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 mt-1">
                {item.answer || item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
