import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// Hook to get services data with i18n support
export const useServicesData = () => {
  const { t } = useTranslation(['servicesData']);
  
  const servicesData = useMemo(() => {
    return [
      {
        id: '1',
        slug: 'web-design-development',
        title: t('servicesData:services.0.title'),
        headline: t('servicesData:services.0.headline'),
        shortDesc: t('servicesData:services.0.shortDesc'),
        introduction: t('servicesData:services.0.introduction'),
        detailedDescription: t('servicesData:services.0.detailedDescription'),
        icon: 'Code',
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
        features: t('servicesData:services.0.features', { returnObjects: true }),
        rating: {
          average: 4.9,
          total: 127,
          breakdown: { 5: 112, 4: 12, 3: 2, 2: 1, 1: 0 }
        }
      },
      {
        id: '2',
        slug: 'mobile-app-development',
        title: t('servicesData:services.1.title'),
        headline: t('servicesData:services.1.headline'),
        shortDesc: t('servicesData:services.1.shortDesc'),
        introduction: t('servicesData:services.1.introduction'),
        detailedDescription: t('servicesData:services.1.detailedDescription'),
        icon: 'Smartphone',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
        features: t('servicesData:services.1.features', { returnObjects: true }),
        rating: {
          average: 4.8,
          total: 89,
          breakdown: { 5: 78, 4: 8, 3: 2, 2: 1, 1: 0 }
        }
      },
      {
        id: '3',
        slug: 'digital-marketing',
        title: t('servicesData:services.2.title'),
        headline: t('servicesData:services.2.headline'),
        shortDesc: t('servicesData:services.2.shortDesc'),
        introduction: t('servicesData:services.2.introduction'),
        detailedDescription: t('servicesData:services.2.detailedDescription'),
        icon: 'TrendingUp',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        features: t('servicesData:services.2.features', { returnObjects: true }),
        rating: {
          average: 4.9,
          total: 156,
          breakdown: { 5: 142, 4: 11, 3: 2, 2: 1, 1: 0 }
        }
      },
      {
        id: '4',
        slug: 'graphic-design-branding',
        title: t('servicesData:services.3.title'),
        headline: t('servicesData:services.3.headline'),
        shortDesc: t('servicesData:services.3.shortDesc'),
        introduction: t('servicesData:services.3.introduction'),
        detailedDescription: t('servicesData:services.3.detailedDescription'),
        icon: 'Palette',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
        features: t('servicesData:services.3.features', { returnObjects: true }),
        rating: {
          average: 5.0,
          total: 94,
          breakdown: { 5: 91, 4: 2, 3: 1, 2: 0, 1: 0 }
        }
      },
      {
        id: '5',
        slug: 'video-production',
        title: t('servicesData:services.4.title'),
        headline: t('servicesData:services.4.headline'),
        shortDesc: t('servicesData:services.4.shortDesc'),
        introduction: t('servicesData:services.4.introduction'),
        detailedDescription: t('servicesData:services.4.detailedDescription'),
        icon: 'Video',
        image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
        features: t('servicesData:services.4.features', { returnObjects: true }),
        rating: {
          average: 4.9,
          total: 73,
          breakdown: { 5: 67, 4: 5, 3: 1, 2: 0, 1: 0 }
        }
      },
      {
        id: '6',
        slug: 'hosting-technical-support',
        title: t('servicesData:services.5.title'),
        headline: t('servicesData:services.5.headline'),
        shortDesc: t('servicesData:services.5.shortDesc'),
        introduction: t('servicesData:services.5.introduction'),
        detailedDescription: t('servicesData:services.5.detailedDescription'),
        icon: 'Server',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
        features: t('servicesData:services.5.features', { returnObjects: true }),
        rating: {
          average: 4.9,
          total: 218,
          breakdown: { 5: 203, 4: 12, 3: 2, 2: 1, 1: 0 }
        }
      }
    ];
  }, [t]);
  
  return servicesData;
};
