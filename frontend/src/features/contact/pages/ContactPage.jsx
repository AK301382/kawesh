import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/common/SEO';
import ContactCTA from '../components/ContactCTA';

const ContactPage = () => {
  const { t } = useTranslation(['contact']);

  return (
    <>
      <SEO
        title={t('contact:seo.title')}
        description={t('contact:seo.description')}
        keywords={t('contact:seo.keywords')}
      />
      <div className="min-h-screen bg-white dark:bg-gray-950 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-cyan-950/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-semibold">
                {t('contact:hero.badge')}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
                <span className="text-gray-900 dark:text-white">{t('contact:hero.title1')}</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  {t('contact:hero.title2')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('contact:hero.description')}
              </p>
            </div>
          </div>
        </section>

        <ContactCTA />
      </div>
    </>
  );
};

export default ContactPage;
