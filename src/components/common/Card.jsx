import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 ${
        hoverEffect
          ? 'hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
