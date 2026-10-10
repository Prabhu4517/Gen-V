# GEN V SOLUTIONS — Social Media Integration & SEO Setup Guide

**Project:** GEN V SOLUTIONS (`https://genv.tech`)  
**Scope:** Open Graph Protocols, Twitter Cards, Social Share Component, and Platform Cache Invalidation  
**Date:** October 2026  

---

## 1. Executive Summary

When links to GEN V SOLUTIONS are shared across social messaging platforms (WhatsApp, Slack, Discord, iMessage) and professional networks (LinkedIn, X, Facebook), the platform's preview crawler reads Open Graph and Twitter Card metadata to generate link cards.

This document serves as the implementation and operational reference for:
1. Social media meta tags and Open Graph compliance.
2. The interactive `<SocialShare />` and `<SEOHead />` React component suite.
3. Steps to test, validate, and clear social platform crawler caches after deployments.

---

## 2. Meta Tag Architecture & Specifications

All social meta tags are dynamically managed by `src/components/seo/SEOHead.jsx` and injected directly into the document `<head>`.

### 2.1 Open Graph Protocol (Facebook, LinkedIn, WhatsApp, Discord, Slack)
```html
<!-- Open Graph Primary Tags -->
<meta property="og:site_name" content="GEN V SOLUTIONS" />
<meta property="og:title" content="Page Title | GEN V SOLUTIONS" />
<meta property="og:description" content="Concise, compelling page summary between 130 and 160 characters." />
<meta property="og:url" content="https://genv.tech/target-route" />
<meta property="og:type" content="website" /> <!-- or 'article' for insights -->
<meta property="og:locale" content="en_US" />

<!-- Open Graph Image Specification (1200x630, 1.91:1 ratio) -->
<meta property="og:image" content="https://genv.tech/og-image.png" />
<meta property="og:image:secure_url" content="https://genv.tech/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="GEN V SOLUTIONS — Enterprise Software, Cloud & AI Engineering" />
```

### 2.2 Twitter (X) Card Protocol
```html
<!-- Twitter Card Tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@genvsolutions" />
<meta name="twitter:creator" content="@genvsolutions" />
<meta name="twitter:title" content="Page Title | GEN V SOLUTIONS" />
<meta name="twitter:description" content="Concise, compelling page summary between 130 and 160 characters." />
<meta name="twitter:image" content="https://genv.tech/og-image.png" />
<meta name="twitter:image:alt" content="GEN V SOLUTIONS — Enterprise Software, Cloud & AI Engineering" />
```

---

## 3. Platform Preview Behavior

| Platform | Crawler User-Agent | Expected Preview Card Behavior |
| :--- | :--- | :--- |
| **WhatsApp** | `WhatsApp/2.x` | Large preview card with 1200x630 visual banner, bold title, and domain pill `genv.tech`. |
| **LinkedIn** | `LinkedInBot/1.0` | Large horizontal card with full image header, title, and publisher domain attribution. |
| **X (Twitter)** | `Twitterbot/1.0` | `summary_large_image` expansive card with bold headline and domain attribution. |
| **Facebook** | `facebookexternalhit/1.1` | Edge-to-edge 1200x630 banner card with site title and truncated meta description. |
| **Discord** | `Discordbot/2.0` | Rich color-accented embed containing thumbnail/banner, title link, and description. |
| **Slack** | `Slackbot-LinkExpanding` | Expandable card attachment showing rich title, summary snippet, and high-res media. |
| **Apple iMessage**| Apple-PubSub | Rich media thumbnail bubble with canonical site title. |

---

## 4. Component Usage Guide

### 4.1 `<SEOHead />` and `<SEO />`
The `<SEO />` component (`src/components/common/SEO.jsx`) serves as a convenient developer interface that forwards props to `SEOHead.jsx`.

```jsx
import React from 'react';
import SEO from '../components/common/SEO';

export default function CustomPage() {
  const breadcrumbs = [
    { label: 'Services', path: '/services' },
    { label: 'AI Automation', path: '/services/ai-automation' }
  ];

  return (
    <>
      <SEO
        title="AI & Intelligent Automation Services"
        description="Transform your enterprise workflows with custom LLMs, RAG pipelines, and intelligent process automation."
        canonical="/services/ai-automation"
        ogType="website"
        breadcrumbs={breadcrumbs}
      />
      {/* Page Content */}
    </>
  );
}
```

#### Supported Props:
- `title` *(string)*: Page title (automatically formatted with site name).
- `description` *(string)*: Meta description and OG description.
- `canonical` *(string)*: Relative or absolute canonical path (e.g., `/services`).
- `ogType` *(string)*: `website` or `article`.
- `ogImage` *(string)*: Custom absolute or relative image URL. Defaults to `https://genv.tech/og-image.png`.
- `noindex` *(boolean)*: When true, injects `noindex, nofollow` (used on 404 pages).
- `articleData` *(object)*: Contains `publishedAt`, `author`, `tags` for Schema.org article generation.
- `breadcrumbs` *(array)*: Array of `{ label, path }` objects for Schema.org BreadcrumbList.

---

### 4.2 `<SocialShare />`
The `<SocialShare />` component (`src/components/common/SocialShare.jsx`) provides an accessible, mobile-responsive sharing drawer supporting 8 distinct platforms.

```jsx
import React from 'react';
import SocialShare from '../components/common/SocialShare';

export default function CaseStudyDetail({ project }) {
  return (
    <div className="sidebar-card">
      <SocialShare
        title={`${project.title} - Case Study by GEN V SOLUTIONS`}
        description={project.summary}
        path={`/portfolio/${project.slug}`}
      />
    </div>
  );
}
```

#### Supported Channels:
1. **WhatsApp**: Pre-fills encoded message text with headline and canonical link via `https://api.whatsapp.com/send?text=...`.
2. **LinkedIn**: Opens LinkedIn share dialog via `https://www.linkedin.com/sharing/share-offsite/?url=...`.
3. **X (Twitter)**: Opens tweet composer with text, url, and `@genvsolutions` handle via `https://twitter.com/intent/tweet?text=...&url=...`.
4. **Facebook**: Launches Facebook sharer dialog via `https://www.facebook.com/sharer/sharer.php?u=...`.
5. **Discord**: Discord does not support direct URL query sharing; the component copies the rich URL directly to the user's clipboard and provides a tooltip confirming it can be pasted into any Discord channel.
6. **Instagram**: Copies the link to clipboard with instructions to share via Instagram Bio, Direct Message, or Story stickers.
7. **Email**: Triggers native `mailto:` client with pre-filled subject line and recommendation text.
8. **Copy Link**: Copies the absolute canonical URL with visual copy feedback and a temporary 2.5s green checkmark.

---

## 5. Troubleshooting & Platform Cache Invalidation

Social networks aggressively cache Open Graph meta tags and images for 7 to 30 days. When updating pages or images, use the following official tools to force a cache refresh:

### 5.1 Facebook Sharing Debugger
- **URL:** [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
- **Instructions:**
  1. Paste the target URL (e.g., `https://genv.tech/portfolio/propflow-real-estate-crm`).
  2. Click **Debug**.
  3. Click **Scrape Again** to force Facebook crawlers to purge cached og:tags and fetch fresh assets.

### 5.2 LinkedIn Post Inspector
- **URL:** [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)
- **Instructions:**
  1. Enter the target URL.
  2. Click **Inspect**.
  3. LinkedIn immediately invalidates cached link data and displays the newly fetched image and title.

### 5.3 X (Twitter) Card Validator / Composer
- **Instructions:**
  1. Open [https://x.com](https://x.com) and begin drafting a new post.
  2. Paste the URL (`https://genv.tech`).
  3. The card preview will render inline.
  4. If a stale card persists, append a temporary cache-busting query parameter (e.g., `https://genv.tech?v=2`) to force a fresh scrape.

### 5.4 WhatsApp & Telegram Invalidation
- WhatsApp and Telegram crawl links upon first paste into a chat.
- If an old card appears in WhatsApp, append a query parameter (e.g., `https://genv.tech/services?refresh=1`). WhatsApp treats the query as a new URL and performs a fresh scrape.
