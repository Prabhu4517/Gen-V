import { siteConfig } from '../config/siteConfig';

/**
 * Normalizes a relative path or URL into an absolute canonical URL on the verified production domain.
 * Avoids trailing slashes and ensures localhost URLs are never emitted.
 */
export function getCanonicalUrl(path = '/') {
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  if (!path || path === '/') {
    return `${base}/`;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Ensures an image URL is absolute for social crawlers (Facebook, X, LinkedIn, etc.)
 */
export function getAbsoluteImageUrl(imagePath) {
  if (!imagePath) {
    return `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`;
  }
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  const base = siteConfig.siteUrl.replace(/\/+$/, '');
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${base}${cleanPath}`;
}

/**
 * Organization Schema (Schema.org)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.companyName,
    "legalName": siteConfig.legalName,
    "url": siteConfig.siteUrl,
    "logo": getAbsoluteImageUrl(siteConfig.logoUrl),
    "description": siteConfig.description,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phone,
        "contactType": "sales",
        "email": siteConfig.contact.email,
        "areaServed": "Global",
        "availableLanguage": ["English"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "addressRegion": siteConfig.contact.address.state,
      "postalCode": siteConfig.contact.address.postalCode,
      "addressCountry": siteConfig.contact.address.country
    },
    "sameAs": Object.values(siteConfig.socials).filter(Boolean)
  };
}

/**
 * WebSite Schema (Schema.org)
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.companyName,
    "url": siteConfig.siteUrl,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.companyName,
      "logo": getAbsoluteImageUrl(siteConfig.logoUrl)
    }
  };
}

/**
 * BreadcrumbList Schema (Schema.org)
 */
export function generateBreadcrumbSchema(items = []) {
  if (!items || items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label || item.name,
      "item": item.path ? getCanonicalUrl(item.path) : undefined
    }))
  };
}

/**
 * Service Schema (Schema.org)
 */
export function generateServiceSchema(service) {
  if (!service) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.tagline || service.summary || service.description,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.companyName,
      "url": siteConfig.siteUrl
    },
    "areaServed": "Global",
    "serviceType": service.badge || "IT Software Engineering"
  };
}

/**
 * Article Schema (Schema.org)
 */
export function generateArticleSchema(article) {
  if (!article) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt || article.summary,
    "image": article.image ? getAbsoluteImageUrl(article.image) : getAbsoluteImageUrl(siteConfig.defaultOgImage),
    "datePublished": article.publishedAt,
    "author": {
      "@type": "Person",
      "name": article.author?.name || "GEN V Engineering Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.companyName,
      "logo": {
        "@type": "ImageObject",
        "url": getAbsoluteImageUrl(siteConfig.logoUrl)
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": getCanonicalUrl(`/insights/${article.slug}`)
    }
  };
}

/**
 * Social Sharing URL generators with full URI encoding
 */
export function getSocialShareUrls({ url, title, description = '' }) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(description || title);

  return {
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A%0A${encodedUrl}`,
    instagram: siteConfig.socials.instagram,
    discord: url // Discord does not have a public web intent; users copy the link
  };
}
