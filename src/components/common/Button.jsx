import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * Supports variants: primary, secondary, outline, ghost
 * Handles internal routing via 'to' prop or external links via 'href'
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  isLoading = false,
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 font-semibold',
    md: 'px-5 py-2.5 text-sm gap-2 font-semibold',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-bold tracking-wide'
  };

  const variantStyles = {
    primary:
      'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98]',
    secondary:
      'bg-slate-900 text-white hover:bg-slate-800 border border-slate-700/80 active:scale-[0.98]',
    outline:
      'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-950 font-bold active:scale-[0.98]',
    dark:
      'bg-slate-950 text-white hover:bg-slate-900 border border-slate-800 active:scale-[0.98]',
    ghost:
      'text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-[0.98]'
  };

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!isLoading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!isLoading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled || isLoading} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
