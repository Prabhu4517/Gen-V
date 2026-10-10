import React from 'react';

/**
 * GEN V Solutions Official Brand Logo Component
 * Utilizes the official client asset from /logoMain.png.
 */
export default function Logo({ size = 'md', className = '', isLight = false, alt = 'GEN V Solutions' }) {
  const sizeMap = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16'
  };

  const currentHeight = sizeMap[size] || sizeMap.md;

  if (isLight) {
    // When rendered on a dark background (such as the footer),
    // provide a clean light backdrop so the dark navy lettering remains perfectly legible
    return (
      <div className={`inline-flex items-center bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 group-hover:scale-105 ${className}`}>
        <img
          src="/logoMain.png"
          alt={alt}
          className={`${currentHeight} w-auto object-contain select-none`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center transition-transform duration-300 group-hover:scale-105 ${className}`}>
      <img
        src="/logoMain.png"
        alt={alt}
        className={`${currentHeight} w-auto object-contain select-none`}
      />
    </div>
  );
}
