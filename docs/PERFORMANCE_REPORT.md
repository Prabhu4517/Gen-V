# GEN V SOLUTIONS — Web Performance & Core Web Vitals Report

**Project:** GEN V SOLUTIONS (`https://genv.tech`)  
**Build Tool:** Vite 8.3.4  
**Framework:** React 19 + Tailwind CSS  
**Date:** October 2026  

---

## 1. Executive Summary

This performance report outlines the frontend architecture improvements executed to optimize Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift) and minimize initial JavaScript execution overhead for the GEN V SOLUTIONS website.

The primary architectural enhancement is the migration from a monolithic single-bundle architecture to **route-level code splitting via `React.lazy()` and `React.Suspense`**, combined with asset preloading, image priority hints, and Progressive Web App (PWA) client-side caching.

---

## 2. Core Web Vitals Optimization Strategy

### 2.1 Largest Contentful Paint (LCP)
- **Problem:** In single-page applications, the LCP element (typically the Hero section headline or background image) cannot render until the entire main bundle is fetched, parsed, and executed.
- **Interventions:**
  1. **Route-Level Splitting:** Non-critical routes (Portfolio details, Insights, Legal pages, Services details) are excluded from the initial route payload, reducing the initial JavaScript blocking time.
  2. **Fetch Priority Hinting:** Hero visual graphics feature `fetchPriority="high"` to inform browser resource schedulers to prioritize banner downloads ahead of non-critical sub-resources.
  3. **Zero Layout Shifts:** Explicit container dimensions prevent render thrashing during hero content hydration.

### 2.2 Cumulative Layout Shift (CLS)
- **Target:** `< 0.05` (Google "Good" threshold is `< 0.1`).
- **Interventions:**
  1. Strict aspect ratios across all dynamic visual containers (`aspect-video`, `aspect-[16/10]`).
  2. Fallback loader (`PageLoadingFallback.jsx`) uses a centered, layout-isolated amber spinner with zero DOM reflow upon route swapping.
  3. CSS-driven marquee carousel with pre-calculated keyframe transforms prevents DOM insertion shifts.

### 2.3 Interaction to Next Paint (INP) & First Input Delay (FID)
- **Target:** `< 100ms` (Google "Good" threshold is `< 200ms`).
- **Interventions:**
  1. Lightweight component logic with no heavy blocking synchronous loops.
  2. Micro-interactions (copy-to-clipboard, filter tabs, modal prompts) utilize local component state and debounced triggers.
  3. Form submissions in `ContactForm.jsx` provide immediate visual feedback (loading spinners and disable states).

---

## 3. Production Build & Bundle Breakdown

Following the implementation of dynamic imports in `src/App.jsx`, running `npm run build` generated 45 decoupled asset chunks, ensuring users only download the code required for the current view.

### 3.1 Primary Entry Assets
| Asset File | Raw Size | Gzip Size | Role / Description |
| :--- | :--- | :--- | :--- |
| `dist/index.html` | 1.57 kB | 0.76 kB | HTML entry document with PWA & preconnect tags |
| `dist/assets/index-BZvlLFxv.css` | 78.41 kB | 11.99 kB | Compiled & purged Tailwind CSS stylesheet |
| `dist/assets/index-BemVE_AN.js` | 286.01 kB | 91.20 kB | Main vendor runtime (React 19, React Router, core layout) |

### 3.2 Route-Level Code-Split Chunks
| Route Component Chunk | Raw Size | Gzip Size | Dynamic Route |
| :--- | :--- | :--- | :--- |
| `Home-DcZsnmoh.js` | 40.21 kB | 9.20 kB | `/` (Home landing page) |
| `Process-BC5_W1ox.js` | 11.97 kB | 4.55 kB | `/process` |
| `Industries-B66c__LH.js` | 11.28 kB | 4.57 kB | `/industries` |
| `ProjectDetail-DRbwG59u.js` | 10.09 kB | 2.92 kB | `/portfolio/:slug` |
| `About-CF8up6Fp.js` | 9.58 kB | 3.52 kB | `/about` |
| `Services-CLPmzoK6.js` | 9.38 kB | 3.03 kB | `/services` |
| `ServiceDetail-fv1s1h6N.js` | 6.35 kB | 2.11 kB | `/services/:slug` |
| `Contact-CQkVt9m8.js` | 5.87 kB | 1.77 kB | `/contact` |
| `Insights-DHh96Dlh.js` | 5.11 kB | 1.88 kB | `/insights` |
| `InsightDetail-EYZlhwMk.js` | 5.10 kB | 1.78 kB | `/insights/:slug` |
| `Portfolio-CTELm8aL.js` | 4.40 kB | 1.90 kB | `/portfolio` |
| `PrivacyPolicy-BuWm6-C_.js` | 4.26 kB | 1.74 kB | `/privacy-policy` |
| `TermsOfService-DqjjBin4.js`| 3.58 kB | 1.42 kB | `/terms-of-service` |
| `NotFound-DpNuj0G0.js` | 1.18 kB | 0.62 kB | `*` (404 Page) |

### 3.3 Dynamic On-Demand Shared Utilities
| Utility Chunk | Raw Size | Gzip Size | Usage |
| :--- | :--- | :--- | :--- |
| `SocialShare-D2jD2OOX.js` | 9.20 kB | 3.14 kB | Multi-channel social sharing drawer |
| `SEO-CQOJqU8s.js` | 7.29 kB | 2.91 kB | SEO head manager & JSON-LD schema builder |
| `ContactForm-ZaOiWBxH.js` | 11.97 kB | 3.63 kB | Interactive lead capture & contact form |
| `projects-D6Z0rVpb.js` | 12.70 kB | 4.86 kB | Portfolio case studies dataset |
| `services-B2kBtgkd.js` | 11.01 kB | 4.58 kB | Services offerings catalog |

---

## 4. Progressive Web App (PWA) & Offline Caching

The site is configured as a production Progressive Web App with service worker caching:
1. **Service Worker (`public/sw.js`):**
   - Implements Cache-First caching strategy for static assets (CSS, JS bundles, images, icons).
   - Network-First with cache fallback for HTML navigation requests.
   - Cache versioning (`genv-solutions-v1`) to invalidate and flush stale revisions on new deployments.
2. **App Manifest (`public/manifest.json`):**
   - High-contrast white and dark iconography (`/favion.png`, `/icon-192.png`, `/icon-512.png`).
   - Theme color set to `#f59e0b` (Amber brand accent) and background set to `#020617` (Obsidian dark).
   - Display mode configured as `standalone` with orientation `any`.
3. **PWA Install Prompt (`PwaInstallPrompt.jsx`):**
   - Listens to `beforeinstallprompt` event and presents a non-intrusive bottom banner allowing users to install the web application on Android, Windows, and desktop browsers.

---

## 5. Summary of Engineering Gains

1. **Initial Route Payload Reduction:** Visiting the home page now loads only ~91 kB (gzip vendor) + ~9.2 kB (Home component) rather than bundling all 14 routes.
2. **Instant Subpage Navigation:** Secondary routes are cached in memory upon first navigation, delivering sub-second transitions.
3. **Total Production Build Time:** 2.93 seconds with 0 warnings and 0 errors.
