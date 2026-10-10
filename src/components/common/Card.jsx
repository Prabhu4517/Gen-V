import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  variant = 'light',
  ...props
}) {
  const variantStyles = {
    light: 'bg-white border-slate-200 text-slate-900 shadow-sm hover:border-amber-500/60 hover:shadow-md',
    dark: 'bg-slate-900 border-slate-800 text-white shadow-xl hover:border-amber-500/60 hover:shadow-amber-500/5'
  };

  return (
    <div
      className={`rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
        variantStyles[variant] || variantStyles.light
      } ${
        hoverEffect ? 'hover:-translate-y-1' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
