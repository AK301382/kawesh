import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../../components/common/SEO';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { 
  Target, Eye, Heart, Users, Rocket, Shield, 
  Lightbulb, Award, TrendingUp, Globe, Zap, CheckCircle 
} from 'lucide-react';

const AboutUs = () => {
  const { t } = useTranslation(['about']);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: t('about:stats.projectsCompleted'), value: '500+', icon: Rocket },
    { label: t('about:stats.happyClients'), value: '200+', icon: Users },
    { label: t('about:stats.teamMembers'), value: '50+', icon: Heart },
    { label: t('about:stats.countriesServed'), value: '25+', icon: Globe }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t('about:values.innovation.title'),
      description: t('about:values.innovation.description'),
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: t('about:values.trust.title'),
      description: t('about:values.trust.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: t('about:values.excellence.title'),
      description: t('about:values.excellence.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: t('about:values.collaboration.title'),
      description: t('about:values.collaboration.description'),
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: t('about:team.members.ceo.name'),
      role: t('about:team.members.ceo.role'),
      image: 'SJ',
      bio: t('about:team.members.ceo.bio'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: t('about:team.members.cto.name'),
      role: t('about:team.members.cto.role'),
      image: 'MC',
      bio: t('about:team.members.cto.bio'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: t('about:team.members.design.name'),
      role: t('about:team.members.design.role'),
      image: 'ER',
      bio: t('about:team.members.design.bio'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: t('about:team.members.engineering.name'),
      role: t('about:team.members.engineering.role'),
      image: 'DP',
      bio: t('about:team.members.engineering.bio'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const timeline = [
    { year: '2018', event: t('about:timeline.2018.event'), description: t('about:timeline.2018.description') },
    { year: '2019', event: t('about:timeline.2019.event'), description: t('about:timeline.2019.description') },
    { year: '2021', event: t('about:timeline.2021.event'), description: t('about:timeline.2021.description') },
    { year: '2023', event: t('about:timeline.2023.event'), description: t('about:timeline.2023.description') },
    { year: '2024', event: t('about:timeline.2024.event'), description: t('about:timeline.2024.description') }
  ];

  return (
    <>
      <SEO
        title="About Us - Kawesh"
        description="Learn about Kawesh's mission, values, and the team behind innovative software solutions. Building tomorrow's technology today."
        keywords="about kawesh, software agency, team, mission, values"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-600 text-white text-sm px-4 py-2 animate-fade-in-down">
              {t('about:hero.badge')}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              {t('about:hero.title1')}
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t('about:hero.title2')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
              {t('about:hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center transform hover:scale-110 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 transform hover:rotate-12 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div id="story" data-animate className={`transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t('about:story.title')}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t('about:story.paragraph1')}
                </p>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {t('about:story.paragraph2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <Card 
              id="mission" 
              data-animate 
              className={`group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-blue-500 dark:hover:border-cyan-500 ${isVisible.mission ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('about:mission.title')}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about:mission.description')}
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card 
              id="vision" 
              data-animate 
              className={`group hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-500 dark:hover:border-pink-500 ${isVisible.vision ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {t('about:vision.title')}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t('about:vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about:values.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('about:values.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  id={`value-${index}`}
                  data-animate
                  className={`group transition-all duration-500 ${isVisible[`value-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                    <CardContent className="p-6 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about:team.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('about:team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                id={`team-${index}`}
                data-animate
                className={`group transition-all duration-500 ${isVisible[`team-${index}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600">
                  <CardContent className="p-6 text-center">
                    {/* Avatar */}
                    <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-3xl">
                        {member.image}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about:timeline.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('about:timeline.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block"></div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  id={`timeline-${index}`}
                  data-animate
                  className={`relative mb-12 transition-all duration-700 ${isVisible[`timeline-${index}`] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className="md:w-1/2 md:px-8">
                      <Card className="hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {item.event}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about:cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {t('about:cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-transform">
                  {t('about:cta.startProject')}
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all">
                  {t('about:cta.viewWork')}
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
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
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
      `}</style>
    </>
  );
};

export default AboutUs;
