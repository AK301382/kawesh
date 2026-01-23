// Internationalized Services Data Hook
import { useTranslation } from 'react-i18next';

export const useServicesData = () => {
  const { t, i18n } = useTranslation(['servicesData']);
  
  const servicesData = t('servicesData:services', { returnObjects: true }) || [];
  
  // Add additional data that doesn't need translation
  const enrichedServicesData = servicesData.map((service, index) => ({
    ...service,
    icon: ['Code', 'Smartphone', 'TrendingUp', 'Palette', 'Video', 'Server'][index] || 'Code',
    image: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
    ][index] || 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
    rating: {
      average: [4.9, 4.8, 4.9, 5.0, 4.9, 4.9][index] || 4.9,
      total: [127, 89, 156, 94, 73, 218][index] || 100,
      breakdown: { 5: 112, 4: 12, 3: 2, 2: 1, 1: 0 }
    },
    technologies: [
      ['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'PostgreSQL', 'MongoDB', 'AWS'],
      ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS', 'iOS SDK', 'Android SDK'],
      ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp', 'HubSpot', 'Hootsuite', 'Ahrefs'],
      ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Figma', 'Sketch', 'After Effects'],
      ['Cinema Cameras', 'DJI Drones', 'Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Pro Tools'],
      ['AWS', 'Google Cloud', 'DigitalOcean', 'Cloudflare', 'cPanel', 'Linux', 'Nginx', 'MySQL']
    ][index] || [],
    // Mock testimonials (you can add these to i18n later if needed)
    testimonials: []
  }));

  return enrichedServicesData;
};

export default useServicesData;
