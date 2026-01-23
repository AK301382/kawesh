import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Zap, Award, ExternalLink } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

const FeaturedProjects = () => {
  const { t } = useTranslation('home');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      client: 'RetailMax',
      industry: 'Retail & E-commerce',
      description: 'Built a modern e-commerce platform handling 10M+ monthly visitors with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200',
      duration: '8 months',
      teamSize: 12,
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis', 'Docker'],
      results: {
        performance: 65,
        users: '10M+',
        revenue: '300%',
        conversion: '45%'
      },
      testimonial: 'The platform exceeded our expectations. Sales increased by 300% in the first quarter.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      description: 'Developed HIPAA-compliant healthcare platform connecting 500+ doctors with 100K+ patients',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200',
      duration: '10 months',
      teamSize: 15,
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'HIPAA Compliance'],
      results: {
        performance: 80,
        users: '100K+',
        satisfaction: '98%',
        efficiency: '60%'
      },
      testimonial: 'This system revolutionized how we deliver patient care. Efficiency improved by 60%.',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      id: 3,
      title: 'FinTech Payment Gateway',
      client: 'PayFlow Systems',
      industry: 'Financial Technology',
      description: 'Created secure payment processing system handling $50M+ monthly transactions',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
      duration: '12 months',
      teamSize: 18,
      technologies: ['Node.js', 'Go', 'PostgreSQL', 'Kubernetes', 'Security'],
      results: {
        performance: 99.99,
        transactions: '$50M+',
        security: 'PCI-DSS',
        uptime: '99.99%'
      },
      testimonial: 'Bank-level security with lightning-fast processing. A game-changer for our business.',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Platform',
      client: 'DataInsight Corp',
      industry: 'Data Analytics',
      description: 'Built real-time analytics dashboard processing 1TB+ data daily with ML predictions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
      duration: '9 months',
      teamSize: 10,
      technologies: ['React', 'Python', 'TensorFlow', 'BigQuery', 'Kubernetes'],
      results: {
        performance: 75,
        dataProcessed: '1TB+',
        accuracy: '95%',
        insights: '10x faster'
      },
      testimonial: 'The ML predictions are incredibly accurate. Decision-making is now 10x faster.',
      gradient: 'from-orange-600 to-red-500'
    },
    {
      id: 5,
      title: 'Social Media Mobile App',
      client: 'ConnectHub',
      industry: 'Social Networking',
      description: 'Developed mobile-first social platform with 5M+ users and real-time messaging',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200',
      duration: '7 months',
      teamSize: 14,
      technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'AWS'],
      results: {
        performance: 70,
        users: '5M+',
        engagement: '85%',
        rating: '4.8/5'
      },
      testimonial: 'Amazing user experience! Our engagement rates increased by 85%.',
      gradient: 'from-indigo-600 to-purple-600'
    }
  ];

  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentProject = projects[currentIndex];

  return (
    <section 
      id="featured-projects" 
      className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="featured-projects-header">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-blue-500/30">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
              {t('featuredProjects.badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {t('featuredProjects.title')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {t('featuredProjects.description')}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Slide */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="relative"
            >
              {/* Project Image with Overlay */}
              <div 
                className={`relative h-[500px] md:h-[600px] ${
                  direction === 'next' ? 'animate-slide-in-right' : 'animate-slide-in-left'
                }`}
                key={currentIndex}
              >
                <img 
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${currentProject.gradient} opacity-60 dark:opacity-80`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/70 dark:to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-end">
                  <div className="p-8 md:p-12 lg:p-16 w-full">
                    <div className="max-w-4xl">
                      {/* Industry Badge */}
                      <Badge className="mb-4 bg-white/20 backdrop-blur-md text-gray-900 dark:text-white border-gray-300/30 dark:border-white/30 hover:bg-white/30">
                        {currentProject.industry}
                      </Badge>

                      {/* Title */}
                      <h3 
                        key={`title-${currentIndex}`}
                        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up"
                      >
                        {currentProject.title}
                      </h3>

                      {/* Client */}
                      <p 
                        key={`client-${currentIndex}`}
                        className="text-xl text-blue-700 dark:text-blue-200 mb-4 animate-fade-in-up" 
                        style={{ animationDelay: '100ms' }}
                      >
                        {currentProject.client}
                      </p>

                      {/* Description */}
                      <p 
                        key={`desc-${currentIndex}`}
                        className="text-lg text-gray-700 dark:text-gray-200 mb-6 max-w-3xl animate-fade-in-up" 
                        style={{ animationDelay: '200ms' }}
                      >
                        {currentProject.description}
                      </p>

                      {/* Stats Grid */}
                      <div 
                        key={`stats-${currentIndex}`}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 animate-fade-in-up" 
                        style={{ animationDelay: '300ms' }}
                      >
                        {Object.entries(currentProject.results).map(([key, value], idx) => (
                          <div 
                            key={key}
                            className="bg-white/50 dark:bg-white/10 backdrop-blur-md rounded-xl p-4 border border-gray-300/30 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/20 transition-all duration-300 hover:scale-105"
                          >
                            <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                              {value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div 
                        key={`tech-${currentIndex}`}
                        className="flex flex-wrap gap-2 mb-6 animate-fade-in-up" 
                        style={{ animationDelay: '400ms' }}
                      >
                        {currentProject.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline"
                            className="bg-white/50 dark:bg-white/10 backdrop-blur-md text-gray-900 dark:text-white border-gray-300/30 dark:border-white/30 hover:bg-white/70 dark:hover:bg-white/20 hover:scale-110 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <blockquote 
                        key={`testimonial-${currentIndex}`}
                        className="border-l-4 border-gray-400 dark:border-white/50 pl-4 mb-6 animate-fade-in-up" 
                        style={{ animationDelay: '500ms' }}
                      >
                        <p className="text-lg italic text-gray-700 dark:text-gray-200">
                          "{currentProject.testimonial}"
                        </p>
                      </blockquote>

                      {/* CTA Button */}
                      <Button 
                        key={`cta-${currentIndex}`}
                        className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: '600ms' }}
                        data-testid="view-case-study-button"
                      >
                        {t('featuredProjects.viewCaseStudy')}
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-white/20 backdrop-blur-md hover:bg-white/90 dark:hover:bg-white/30 text-gray-900 dark:text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-20 group"
            aria-label="Previous project"
            data-testid="carousel-prev-button"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-white/20 backdrop-blur-md hover:bg-white/90 dark:hover:bg-white/30 text-gray-900 dark:text-white rounded-full p-3 transition-all duration-300 hover:scale-110 z-20 group"
            aria-label="Next project"
            data-testid="carousel-next-button"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-blue-600 dark:bg-white'
                    : 'w-3 h-3 bg-gray-400 dark:bg-white/40 hover:bg-gray-600 dark:hover:bg-white/60'
                }`}
                aria-label={`Go to project ${index + 1}`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 dark:border-white/30 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 backdrop-blur-md px-8 py-6 text-lg font-semibold rounded-xl"
          >
            {t('featuredProjects.viewAllProjects')}
          </Button>
        </div>
      </div>

    </section>
  );
};

export default FeaturedProjects;
