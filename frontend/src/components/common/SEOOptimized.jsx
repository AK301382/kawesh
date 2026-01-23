import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * SEO Component optimized for React 19
 * Uses both react-helmet-async (for compatibility) and direct DOM manipulation
 * to ensure meta tags are always properly set
 */
const SEOOptimized = ({
  title = 'Kawesh - Building Tomorrow\'s Software Today',
  description = 'Professional software development agency specializing in custom development, cloud architecture, and digital transformation. Build scalable solutions with our expert team.',
  keywords = 'software development, web development, mobile apps, cloud architecture, digital transformation, custom software, Kawesh',
  ogImage = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  author = 'Kawesh',
  twitterHandle = '@kawesh',
}) => {
  const { i18n } = useTranslation();
  const siteName = 'Kawesh';
  const fullTitle = title.includes('Kawesh') ? title : `${title} | ${siteName}`;

  useEffect(() => {
    // Direct DOM manipulation to ensure meta tags are set
    // This works reliably with React 19's concurrent features
    
    // Update document title
    document.title = fullTitle;
    
    // Helper function to set or update meta tag
    const setMetaTag = (attribute, attributeValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Get language-specific metadata
    const languageNames = {
      fa: 'Persian',
      en: 'English',
      de: 'German'
    };
    const currentLanguageName = languageNames[i18n.language] || 'English';
    // Primary Meta Tags
    setMetaTag('name', 'title', fullTitle);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'author', author);
    setMetaTag('name', 'robots', 'index, follow');
    setMetaTag('name', 'language', currentLanguageName);
    setMetaTag('name', 'revisit-after', '7 days');
    
    // Geographic and regional targeting for Herat, Afghanistan
    setMetaTag('name', 'geo.region', 'AF-HER');
    setMetaTag('name', 'geo.placename', 'Herat');
    setMetaTag('name', 'geo.position', '34.3482;62.1989');
    setMetaTag('name', 'ICBM', '34.3482, 62.1989');

    // Open Graph / Facebook
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', siteName);
    setMetaTag('property', 'og:locale', i18n.language === 'fa' ? 'fa_AF' : i18n.language === 'de' ? 'de_DE' : 'en_US');

    // Twitter Card
    setMetaTag('property', 'twitter:card', 'summary_large_image');
    setMetaTag('property', 'twitter:url', url);
    setMetaTag('property', 'twitter:title', fullTitle);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:image', ogImage);
    if (twitterHandle) {
      setMetaTag('property', 'twitter:site', twitterHandle);
      setMetaTag('property', 'twitter:creator', twitterHandle);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }

    // Add alternate language links for SEO
    const alternateLangs = ['fa', 'en', 'de'];
    alternateLangs.forEach(lang => {
      const hreflangSelector = `link[rel="alternate"][hreflang="${lang}"]`;
      let hreflangLink = document.querySelector(hreflangSelector);
      if (hreflangLink) {
        hreflangLink.setAttribute('href', url);
      } else {
        hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('rel', 'alternate');
        hreflangLink.setAttribute('hreflang', lang);
        hreflangLink.setAttribute('href', url);
        document.head.appendChild(hreflangLink);
      }
    });

  }, [fullTitle, description, keywords, ogImage, url, type, author, twitterHandle, siteName, i18n.language]);

  // Return null as this component only manages meta tags
  return null;
};

export default SEOOptimized;
