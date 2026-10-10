import React, { useState } from 'react';
import {
  Share2,
  Copy,
  Check,
  Mail,
  MessageCircle
} from 'lucide-react';
import { getCanonicalUrl, getSocialShareUrls } from '../../utils/seoUtils';
import { siteConfig } from '../../config/siteConfig';

export default function SocialShare({
  title,
  description = '',
  path = '',
  className = ''
}) {
  const [copied, setCopied] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const canonicalUrl = getCanonicalUrl(path || (typeof window !== 'undefined' ? window.location.pathname : '/'));
  const shareUrls = getSocialShareUrls({
    url: canonicalUrl,
    title,
    description
  });

  const handleCopyLink = async (platformName = 'Link') => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(canonicalUrl);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = canonicalUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setFeedbackMessage(`${platformName} copied to clipboard!`);
      setTimeout(() => {
        setCopied(false);
        setFeedbackMessage('');
      }, 3000);
    } catch {
      setFeedbackMessage('Failed to copy. Please copy URL manually.');
    }
  };

  return (
    <div className={`p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Share This Content
          </span>
        </div>
        {feedbackMessage && (
          <span className="text-xs font-semibold text-emerald-600 animate-in fade-in flex items-center gap-1">
            <Check className="w-3.5 h-3.5" />
            {feedbackMessage}
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* 1. WhatsApp */}
        <a
          href={shareUrls.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Share via WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* 2. LinkedIn */}
        <a
          href={shareUrls.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Share on LinkedIn"
        >
          <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.27 1.64 1.64 0 0 0 0 3.27m1.4 9.74v-8.37H5.06v8.37z" />
          </svg>
          <span className="hidden sm:inline">LinkedIn</span>
        </a>

        {/* 3. X / Twitter */}
        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X"
          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Share on X"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="hidden sm:inline">X</span>
        </a>

        {/* 4. Facebook */}
        <a
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Share on Facebook"
        >
          <svg className="w-4 h-4 fill-current text-blue-700" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.76 5 14.4 5c1.26 0 2.39.09 2.7.13v3.13h-1.85c-1.42 0-1.7.67-1.7 1.67V12h3.5l-.5 3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
          </svg>
          <span className="hidden sm:inline">Facebook</span>
        </a>

        {/* 5. Discord (Copy Link Optimized) */}
        <button
          onClick={() => handleCopyLink('Discord link')}
          aria-label="Copy link for Discord"
          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Copy link to paste into Discord"
        >
          <svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
          <span className="hidden sm:inline">Discord</span>
        </button>

        {/* 6. Instagram Profile Link */}
        {siteConfig.socials.instagram && (
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GEN V on Instagram"
            className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
            title="Follow on Instagram"
          >
            <svg className="w-4 h-4 fill-current text-pink-600" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="hidden sm:inline">Instagram</span>
          </a>
        )}

        {/* 7. Email */}
        <a
          href={shareUrls.email}
          aria-label="Share via Email"
          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-300 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
          title="Share via Email"
        >
          <Mail className="w-4 h-4 text-amber-500" />
          <span className="hidden sm:inline">Email</span>
        </a>

        {/* 8. Copy Link */}
        <button
          onClick={() => handleCopyLink('Page link')}
          aria-label="Copy canonical link to clipboard"
          className={`p-2.5 rounded-xl border transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer ${
            copied
              ? 'bg-emerald-50 text-emerald-700 border-emerald-400'
              : 'bg-amber-50 text-amber-700 border-amber-300 hover:bg-amber-100'
          }`}
          title="Copy Link"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Copied' : 'Copy Link'}</span>
        </button>
      </div>
    </div>
  );
}
