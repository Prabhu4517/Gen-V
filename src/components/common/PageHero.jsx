import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default function PageHero({
  breadcrumbs = [],
  badge,
  title,
  highlight,
  description,
  children,
  className = ''
}) {
  return (
    <section className={`relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800/60 ${className}`}>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-600/15 via-blue-600/15 to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              {badge}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            {title}{' '}
            {highlight && <span className="tech-gradient-text">{highlight}</span>}
          </h1>

          {description && (
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
