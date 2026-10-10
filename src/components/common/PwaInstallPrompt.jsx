import React, { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already in standalone display mode
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;

    if (isStandalone) {
      return;
    }

    // Check if user previously dismissed prompt
    const isDismissed = localStorage.getItem('genv_pwa_dismissed');
    if (isDismissed) {
      return;
    }

    const handleBeforeInstall = (e) => {
      // Prevent browser default mini-infobar
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('genv_pwa_dismissed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="p-4 rounded-2xl bg-slate-950 text-white shadow-2xl border-2 border-amber-500/80 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/pwa-192x192.png"
            alt="GEN V Icon"
            className="w-10 h-10 rounded-xl bg-white p-0.5 object-contain shrink-0 shadow-sm"
          />
          <div className="min-w-0">
            <h4 className="text-sm font-black text-white truncate">Install GEN V App</h4>
            <p className="text-[11px] text-slate-300 truncate">Fast access & offline caching</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Dismiss install banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
