import React from 'react';

/**
 * Reusable Section Header Component
 * Provides clean visual hierarchy with eyebrow pill, title, and descriptive subtitle
 */
export default function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) {
  const isCentered = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isDark ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' : 'bg-amber-500/15 text-amber-600 border border-amber-500/30'} mb-4 ${isCentered ? 'mx-auto' : ''}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-amber-400' : 'bg-amber-500'} animate-pulse`}></span>
          {badge}
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-950'} mb-4 leading-tight`}>
        {title}{' '}
        {highlight && <span className="text-amber-500">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'} leading-relaxed max-w-2xl ${isCentered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
