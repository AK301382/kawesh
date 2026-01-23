import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/common/SEO';
import Hero from '../../../components/common/Hero';
import Services from '../../services/components/Services';
import WhyUs from '../../../components/common/WhyUs';
import FeaturedProjects from '../../../components/common/FeaturedProjects';
import Process from '../../../components/common/Process';
import Testimonials from '../../../components/common/Testimonials';

const HomePage = () => {
  const { t } = useTranslation(['home']);
  return (
    <>
      <SEO
        title={t('home:seo.title')}
        description={t('home:seo.description')}
        keywords={t('home:seo.keywords')}
      />
      <Hero />
      <Services />
      <WhyUs />
      <FeaturedProjects />
      <Process />
      <Testimonials />
    </>
  );
};

export default HomePage;
