import React from 'react';

/**
 * Reusable Badge Component
 */
export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = ''
}) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full';

  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[11px]',
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3.5 py-1.5 text-sm'
  };

  const variantStyles = {
    default: 'bg-slate-800 text-slate-300 border border-slate-700/60',
    primary: 'bg-indigo-950/80 text-indigo-300 border border-indigo-700/50',
    accent: 'bg-blue-950/80 text-blue-300 border border-blue-700/50',
    success: 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50',
    warning: 'bg-amber-950/80 text-amber-300 border border-amber-700/50',
    purple: 'bg-purple-950/80 text-purple-300 border border-purple-700/50'
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
