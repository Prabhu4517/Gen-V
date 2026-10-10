import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Route-level Code Splitting for Performance Optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const Process = lazy(() => import('./pages/Process'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Full-screen brand loading fallback with Favicon animation
function PageLoadingFallback() {
  return (
    <div
      className="fixed inset-0 z-[9999] min-h-screen w-full flex flex-col items-center justify-center bg-white"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Favicon with animated spinner ring */}
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Subtle outer pulsing aura */}
          <div className="absolute inset-0 rounded-full bg-amber-500/15 animate-ping" />

          {/* Rotating amber spinner border */}
          <div className="absolute inset-0 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />

          {/* Favicon in center */}
          <div className="w-16 h-16 rounded-full bg-white p-2 shadow-sm flex items-center justify-center z-10">
            <img
              src="/favicon.png"
              alt="GEN V Logo"
              className="w-full h-full object-contain animate-pulse"
              onError={(e) => {
                // Fallback if needed
                if (!e.currentTarget.src.includes('favion.png')) {
                  e.currentTarget.src = '/favion.png';
                }
              }}
            />
          </div>
        </div>

        {/* Brand label & indicator dots */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-black tracking-widest text-slate-900 uppercase">
            Loading GEN V Solutions
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/:slug" element={<ProjectDetail />} />
            <Route path="industries" element={<Industries />} />
            <Route path="process" element={<Process />} />
            <Route path="insights" element={<Insights />} />
            <Route path="insights/:slug" element={<InsightDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
