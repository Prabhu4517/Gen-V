import React from 'react';
import SEOHead from '../seo/SEOHead';

/**
 * Backward-compatible SEO wrapper delegating to SEOHead
 */
export default function SEO(props) {
  return <SEOHead {...props} />;
}
