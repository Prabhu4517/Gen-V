import React from 'react';
import { Home } from 'lucide-react';
import SEO from '../components/common/SEO';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Page Not Found"
        description="The requested page could not be located."
      />

      <section className="min-h-[80vh] flex items-center justify-center py-24 text-center px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-md mx-auto">
          <div className="text-8xl font-black text-amber-500/30 mb-2 font-mono">
            404
          </div>
          <h1 className="text-3xl font-black text-slate-950 mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button to="/" icon={Home} iconPosition="left">
              Return to Homepage
            </Button>
            <Button to="/services" variant="secondary">
              Browse Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
