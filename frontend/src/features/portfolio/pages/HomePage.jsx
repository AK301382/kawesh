import React from 'react';
import SEO from '../../../components/common/SEO';
import Hero from '../../../components/common/Hero';
import Services from '../../services/components/Services';
import WhyUs from '../../../components/common/WhyUs';
import FeaturedProjects from '../../../components/common/FeaturedProjects';
import Process from '../../../components/common/Process';
import Testimonials from '../../../components/common/Testimonials';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Kawesh - Building Tomorrow's Software Today"
        description="Professional software development agency specializing in custom development, cloud architecture, and digital transformation. Build scalable solutions with our expert team."
        keywords="software development, web development, mobile apps, cloud architecture, digital transformation, custom software, agency"
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