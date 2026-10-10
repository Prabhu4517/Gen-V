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
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div className={`max-w-3xl ${isCentered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4 ${isCentered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          {badge}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
        {title}{' '}
        {highlight && <span className="tech-gradient-text">{highlight}</span>}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
