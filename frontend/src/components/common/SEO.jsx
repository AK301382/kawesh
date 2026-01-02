import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({
  title,
  description,
  keywords,
  ogImage = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop',
  url = window.location.href,
  type = 'website',
}) => {
  const { t, i18n } = useTranslation();
  const siteName = 'Kawesh';
  
  // Use translation keys as defaults if specific values not provided
  const finalTitle = title || t('seo.home.title');
  const finalDescription = description || t('seo.home.description');
  const finalKeywords = keywords || t('seo.home.keywords');
  
  const fullTitle = finalTitle.includes('Kawesh') ? finalTitle : `${finalTitle} | ${siteName}`;

  // Determine language direction and language code
  const currentLang = i18n.language || 'fa';
  const dir = currentLang === 'fa' ? 'rtl' : 'ltr';

  return (
    <Helmet>
      {/* HTML attributes */}
      <html lang={currentLang} dir={dir} />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="language" content={currentLang === 'fa' ? 'Persian' : currentLang === 'de' ? 'German' : 'English'} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Kawesh" />
      <meta name="geo.region" content="AF-HER" />
      <meta name="geo.placename" content="Herat" />
      <meta name="geo.position" content="34.3482;62.1997" />
      <meta name="ICBM" content="34.3482, 62.1997" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={currentLang === 'fa' ? 'fa_IR' : currentLang === 'de' ? 'de_DE' : 'en_US'} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={ogImage} />

      {/* Alternate Language Links for SEO */}
      <link rel="alternate" hrefLang="fa" href={url.replace(/\/(en|de)\//, '/fa/')} />
      <link rel="alternate" hrefLang="en" href={url.replace(/\/(fa|de)\//, '/en/')} />
      <link rel="alternate" hrefLang="de" href={url.replace(/\/(fa|en)\//, '/de/')} />
      <link rel="alternate" hrefLang="x-default" href={url.replace(/\/(fa|en|de)\//, '/')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Persian/RTL Specific Meta Tags */}
      {currentLang === 'fa' && (
        <>
          <meta name="theme-color" content="#0EA5E9" />
          <meta name="msapplication-TileColor" content="#0EA5E9" />
        </>
      )}
    </Helmet>
  );
};

export default SEO;
