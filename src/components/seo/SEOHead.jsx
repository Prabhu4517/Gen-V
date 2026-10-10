import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import {
  getCanonicalUrl,
  getAbsoluteImageUrl,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema
} from '../../utils/seoUtils';

/**
 * SEOHead Component
 * Manages document head metadata dynamically during client-side React Router navigation.
 */
export default function SEOHead({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
  noindex = false,
  schemaData = null,
  breadcrumbs = null,
  articleData = null
}) {
  const location = useLocation();

  const pageTitle = title
    ? (title.includes(siteConfig.companyName) ? title : `${title} | ${siteConfig.companyName}`)
    : siteConfig.routes.home.title;

  const pageDescription = description || siteConfig.description;
  const canonicalUrl = canonical ? getCanonicalUrl(canonical) : getCanonicalUrl(location.pathname);
  const imageUrl = getAbsoluteImageUrl(ogImage || siteConfig.defaultOgImage);
  const robotsValue = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  useEffect(() => {
    // 1. Update Title
    document.title = pageTitle;

    // Helper to safely set/update meta tags
    const setMeta = (attributeName, attributeValue, content) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Standard Search Metadata
    setMeta('name', 'description', pageDescription);
    setMeta('name', 'robots', robotsValue);
    setMeta('name', 'author', siteConfig.companyName);

    // 3. Open Graph Metadata
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDescription);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', imageUrl);
    setMeta('property', 'og:site_name', siteConfig.companyName);
    setMeta('property', 'og:locale', siteConfig.locale);

    if (articleData && ogType === 'article') {
      if (articleData.publishedAt) {
        setMeta('property', 'article:published_time', articleData.publishedAt);
      }
      if (articleData.author) {
        setMeta('property', 'article:author', articleData.author.name || articleData.author);
      }
      if (articleData.category) {
        setMeta('property', 'article:section', articleData.category);
      }
    }

    // 4. Twitter / X Cards
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDescription);
    setMeta('name', 'twitter:image', imageUrl);

    // 5. Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 6. JSON-LD Structured Data
    let schemaScript = document.getElementById('genv-structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'genv-structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    // Assemble unified Schema.org graph
    const schemaGraph = [];
    schemaGraph.push(generateOrganizationSchema());
    schemaGraph.push(generateWebSiteSchema());

    if (breadcrumbs && breadcrumbs.length > 0) {
      const bcSchema = generateBreadcrumbSchema(breadcrumbs);
      if (bcSchema) schemaGraph.push(bcSchema);
    }

    if (schemaData) {
      if (Array.isArray(schemaData)) {
        schemaGraph.push(...schemaData);
      } else {
        schemaGraph.push(schemaData);
      }
    }

    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemaGraph
    });
  }, [pageTitle, pageDescription, canonicalUrl, imageUrl, robotsValue, ogType, articleData, schemaData, breadcrumbs]);

  return null;
}
