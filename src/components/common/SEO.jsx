import { useEffect } from 'react';
import { companyConfig } from '../../data/companyConfig';

/**
 * SEO Component
 * Dynamically configures title, meta tags, canonical link, and Schema.org structured data.
 */
export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/favicon.svg',
  schemaData = null
}) {
  const fullTitle = title
    ? `${title} | ${companyConfig.name}`
    : `${companyConfig.name} | Enterprise IT Solutions & Custom Software`;
  const metaDescription = description || companyConfig.description;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : companyConfig.meta.domain);

  useEffect(() => {
    // Document Title
    document.title = fullTitle;

    // Helper to update or set meta
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const parts = selector.replace(/meta\[(.*?)\]/, '$1').split('=');
        if (parts.length === 2) {
          element.setAttribute(parts[0], parts[1].replace(/['"]/g, ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMetaTag('meta[name="description"]', 'content', metaDescription);
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', metaDescription);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', metaDescription);

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Schema.org structured data
    let schemaScript = document.getElementById('seo-structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'seo-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": companyConfig.name,
      "url": companyConfig.meta.domain,
      "logo": `${companyConfig.meta.domain}/favicon.svg`,
      "description": companyConfig.description,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": companyConfig.contact.phone,
        "contactType": "sales",
        "email": companyConfig.contact.email,
        "areaServed": "Global",
        "availableLanguage": "English"
      }
    };

    schemaScript.textContent = JSON.stringify(schemaData || defaultSchema);
  }, [fullTitle, metaDescription, canonicalUrl, ogType, ogImage, schemaData]);

  return null;
}
