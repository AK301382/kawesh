import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Shield, Users, Zap, TrendingUp, Heart, Clock, Target, CheckCircle, Star } from 'lucide-react';

const WhyUs = () => {
  const { t } = useTranslation(['whyUs', 'home']);
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      icon: Award,
      title: t('whyUs:expertise.title'),
      description: t('whyUs:expertise.description'),
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      iconColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      icon: Zap,
      title: t('whyUs:agile.title'),
      description: t('whyUs:agile.description'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      title: t('whyUs:localExpertise.title'),
      description: t('whyUs:localExpertise.description'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Shield,
      title: t('whyUs:quality.title'),
      description: t('whyUs:quality.description'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: TrendingUp,
      title: t('whyUs:scalable.title'),
      description: t('whyUs:scalable.description'),
      color: 'from-rose-500 to-red-500',
      bgColor: 'bg-rose-50 dark:bg-rose-900/20',
      iconColor: 'text-rose-600 dark:text-rose-400'
    },
    {
      icon: Heart,
      title: t('whyUs:support.title'),
      description: t('whyUs:support.description'),
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      iconColor: 'text-pink-600 dark:text-pink-400'
    },
    {
      icon: Target,
      title: t('whyUs:innovative.title'),
      description: t('whyUs:innovative.description'),
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconColor: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      icon: Clock,
      title: t('whyUs:modernTech.title'),
      description: t('whyUs:modernTech.description'),
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      iconColor: 'text-teal-600 dark:text-teal-400'
    }
  ];

  const stats = [
    { number: '500+', label: t('home:hero.stats.projects') },
    { number: '98%', label: t('home:hero.stats.satisfaction') },
    { number: '300+', label: t('home:hero.stats.clients') },
    { number: '50+', label: t('whyUs:expertise.title') }
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-testid="why-us-header">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wide">
              {t('whyUs:title')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            {t('whyUs:title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('whyUs:subtitle')}
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
              data-testid={`stat-${index}`}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="why-us-cards-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative ${reason.bgColor} rounded-2xl p-6 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 ${
                  isHovered ? 'shadow-2xl transform -translate-y-3 scale-105' : 'shadow-md hover:shadow-xl'
                }`}
                data-testid={`why-us-card-${index}`}
              >
                {/* Icon Container */}
                <div className={`relative mb-4 inline-block`}>
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${reason.color} transform transition-all duration-500 ${
                      isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  {isHovered && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl opacity-20 blur-xl animate-pulse"></div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`font-bold text-gray-900 dark:text-white text-lg transition-colors duration-300 ${
                    isHovered ? 'text-blue-600 dark:text-blue-400' : ''
                  }`}>
                    {reason.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 text-sm transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-80'
                  }`}>
                    {reason.description}
                  </p>
                </div>

                {/* Hover Check Icon */}
                <div
                  className={`absolute top-4 right-4 transform transition-all duration-300 ${
                    isHovered ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-180'
                  }`}
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color} rounded-b-2xl transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2"
              data-testid="why-us-cta-button"
            >
              {t('home:hero.startProject')}
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-md hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-1 transition-all duration-300"
              data-testid="why-us-portfolio-button"
            >
              {t('home:hero.viewWork')}
            </a>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyUs;
