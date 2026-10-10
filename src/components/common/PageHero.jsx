import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default function PageHero({
  breadcrumbs = [],
  badge,
  title,
  highlight,
  description,
  backgroundImage = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
  children,
  className = ''
}) {
  return (
    <section className={`relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-slate-800/80 bg-slate-950 text-white ${className}`}>
      {/* Background photo overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src={backgroundImage}
            alt={title || 'Page Hero Background'}
            className="w-full h-full object-cover object-center opacity-65 brightness-100 contrast-110"
          />
          {/* Directional gradient: dark on left for text readability, open on right for image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
      )}

      {/* Ambient subtle amber lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-500/10 via-amber-600/10 to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              {badge}
            </div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            {title}{' '}
            {highlight && <span className="text-amber-500">{highlight}</span>}
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
