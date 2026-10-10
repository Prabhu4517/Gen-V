import React from 'react';

/**
 * GEN V Custom Vector Logo Component
 * Clean, scalable, futuristic SVG emblem for "GEN V"
 */
export default function Logo({ size = 'md', showText = true, className = '' }) {
  const sizeMap = {
    sm: { icon: 'w-8 h-8', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-10 h-10', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', text: 'text-3xl', sub: 'text-xs' }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* GEN V Geometric Emblem */}
      <div className={`${currentSize.icon} relative shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(99,102,241,0.4)]"
        >
          <defs>
            <linearGradient id="genv-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="genv-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="genv-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Hexagonal Tech Shield Background */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="24"
            fill="url(#genv-bg)"
            stroke="url(#genv-grad-1)"
            strokeWidth="3.5"
          />

          {/* Futuristic Circuit Nodes */}
          <circle cx="26" cy="30" r="3.5" fill="#38bdf8" />
          <circle cx="74" cy="30" r="3.5" fill="#c084fc" />
          <circle cx="50" cy="76" r="4" fill="#6366f1" />

          {/* Connecting Track Lines */}
          <path
            d="M26 30L38 46M74 30L62 46"
            stroke="url(#genv-grad-2)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Sharp Stylized "V" Monogram with High-Tech Wings */}
          <path
            d="M22 34L44 68C47 73 53 73 56 68L78 34"
            stroke="url(#genv-grad-1)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner Accent Floating Core */}
          <path
            d="M36 34L50 56L64 34"
            stroke="#38bdf8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Power Core Spark */}
          <circle cx="50" cy="40" r="2.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`${currentSize.text} font-black tracking-tight text-white uppercase`}>
              GEN
            </span>
            <span
              className={`${currentSize.text} font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 uppercase`}
            >
              V
            </span>
          </div>
          <span className={`${currentSize.sub} font-bold text-slate-400 uppercase tracking-[0.22em] mt-1`}>
            TECHNOLOGIES
          </span>
        </div>
      )}
    </div>
  );
}
