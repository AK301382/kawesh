import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOOptimized from '../../../components/common/SEOOptimized';
import LazyImage from '../../../components/common/LazyImage';
import ServiceCardSkeleton from '../components/ServiceCardSkeleton';
import Testimonials from '../../../components/common/Testimonials';
import { servicesData } from '../../../lib/config/servicesData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  Award,
  TrendingUp,
  Star,
  MessageSquare,
  Rocket,
  Target,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';
import * as Icons from 'lucide-react';

const ServicesPage = () => {
  // State for FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Stats data
  const stats = [
    { number: "200+", label: "Projects Completed", icon: Rocket },
    { number: "150+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  // Value propositions
  const valueProps = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Every project starts with deep research and strategic planning aligned with your business goals"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Delivery",
      description: "Agile methodology ensures rapid development without compromising on quality"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your data and your customers"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Build for global audiences with comprehensive internationalization"
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Architecture designed to grow seamlessly with your business"
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your success is our priority with ongoing support and maintenance"
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services - Professional Digital Solutions | Kawesh</title>
        <meta name="description" content="Explore Kawesh's comprehensive digital services: Web Development, Mobile Apps, Cloud Solutions, UI/UX Design, Digital Marketing, and DevOps. Transform your business with our expert team." />
        <meta name="keywords" content="web development services, mobile app development, cloud solutions, UI/UX design, digital marketing, DevOps services, software development agency" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Services - Professional Digital Solutions | Kawesh" />
        <meta property="og:description" content="Explore Kawesh's comprehensive digital services. From web development to digital marketing, we deliver excellence." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Professional Digital Solutions | Kawesh" />
        <meta name="twitter:description" content="Explore Kawesh's comprehensive digital services. From web development to digital marketing, we deliver excellence." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop" />
      </Helmet>

      <SEOOptimized
        title="Our Services - Professional Digital Solutions"
        description="Explore Kawesh's comprehensive digital services: Web Development, Mobile Apps, Cloud Solutions, UI/UX Design, Digital Marketing, and DevOps. Transform your business with our expert team."
        keywords="web development services, mobile app development, cloud solutions, UI/UX design, digital marketing, DevOps services, software development agency"
        ogImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop"
      />

      <div className="min-h-screen bg-white dark:bg-gray-950 pt-20" data-testid="services-page">
        {/* Hero Section with Enhanced Introduction */}
        <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-cyan-950/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 border-0 text-sm font-semibold mb-6">
                Our Services
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900 dark:text-white">Transform Your Vision Into</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                At Kawesh, we don't just build software—we craft digital experiences that drive real business results. 
                With a perfect blend of strategic thinking, creative design, and technical excellence, we've helped over 
                150 businesses transform their digital presence and achieve measurable growth.
              </p>

              {/* Key Highlights */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-medium">8+ Years Excellence</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-medium">200+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-medium">98% Client Satisfaction</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20">
                    View Our Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Kawesh?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We're not just another agency. We're your strategic partner in digital transformation, 
                committed to your success every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {valueProps.map((prop, index) => {
                const IconComponent = prop.icon;
                return (
                  <Card key={index} className="p-6 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-testid={`value-prop-${index}`}>
                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-blue-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{prop.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{prop.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enhanced Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                End-to-end digital solutions tailored to your unique business needs. 
                From concept to deployment and beyond, we've got you covered.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {servicesData.map((service) => {
                const IconComponent = Icons[service.icon] || Icons.Code;
                return (
                  <Card
                    key={service.id}
                    className="group hover:shadow-2xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:-translate-y-2 flex flex-col"
                    data-testid={`service-card-${service.id}`}
                  >
                    {/* Service Image with Lazy Loading */}
                    <div className="relative h-56 overflow-hidden bg-gray-900">
                      <LazyImage
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-gray-900 border-0 flex items-center gap-1 px-3 py-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="font-bold">{service.rating.average}</span>
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-3">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                        {service.shortDesc}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-5 flex-grow flex flex-col">
                      {/* Persuasive Summary */}
                      {/* Key Features */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                          What's Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <Link to={`/services/${service.slug}`}>
                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white group/btn shadow-md hover:shadow-lg transition-all py-6"
                          data-testid={`service-cta-${service.id}`}
                        >
                          <span className="font-semibold">Explore Service</span>
                          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section - با تمام قابلیت‌ها از Home Page */}
        <Testimonials />

        {/* FAQ Section - Animated Accordion */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/20 to-cyan-50/20 dark:from-gray-950 dark:via-blue-950/10 dark:to-cyan-950/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6 shadow-lg">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Quick answers to common questions about our services
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div 
                  className="group border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-xl"
                  data-testid="faq-item-0"
                >
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    data-testid="faq-question-0"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      How long does a typical project take?
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaqIndex === 0 
                        ? 'bg-blue-600 dark:bg-cyan-500 rotate-180' 
                        : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-cyan-900/30'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-colors ${
                        openFaqIndex === 0 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqIndex === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    data-testid="faq-answer-0"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Project timelines vary based on complexity. A basic website takes 4-6 weeks, while complex applications 
                          may take 3-6 months. We provide detailed timelines during our initial consultation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div 
                  className="group border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-xl"
                  data-testid="faq-item-1"
                >
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    data-testid="faq-question-1"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      How do you approach project scoping?
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaqIndex === 1 
                        ? 'bg-blue-600 dark:bg-cyan-500 rotate-180' 
                        : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-cyan-900/30'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-colors ${
                        openFaqIndex === 1 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqIndex === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    data-testid="faq-answer-1"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          We begin with a detailed consultation to understand your specific needs and goals. 
                          Every project receives a custom proposal tailored to your requirements, timeline, and objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div 
                  className="group border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-xl"
                  data-testid="faq-item-2"
                >
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    data-testid="faq-question-2"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      Do you provide ongoing support and maintenance?
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaqIndex === 2 
                        ? 'bg-blue-600 dark:bg-cyan-500 rotate-180' 
                        : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-cyan-900/30'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-colors ${
                        openFaqIndex === 2 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqIndex === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    data-testid="faq-answer-2"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Absolutely! We offer comprehensive maintenance packages including updates, security patches, performance 
                          optimization, and 24/7 technical support to keep your digital assets running smoothly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div 
                  className="group border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-cyan-500 transition-all duration-300 shadow-sm hover:shadow-xl"
                  data-testid="faq-item-3"
                >
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    data-testid="faq-question-3"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      Can you work with our existing technology stack?
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openFaqIndex === 3 
                        ? 'bg-blue-600 dark:bg-cyan-500 rotate-180' 
                        : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-100 dark:group-hover:bg-cyan-900/30'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-colors ${
                        openFaqIndex === 3 
                          ? 'text-white' 
                          : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaqIndex === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    data-testid="faq-answer-3"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          Yes! Our team is experienced with a wide range of technologies. Whether you need integration with 
                          existing systems or a complete rebuild, we adapt to your technical requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA below FAQ */}
              <div className="mt-12 text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  Still have questions? We're here to help!
                </p>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                    Contact Our Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-700 dark:via-cyan-700 dark:to-blue-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
                <Rocket className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's turn your vision into reality. Book a free consultation today and discover how 
                Kawesh can help you achieve your digital goals.
              </p>

              {/* Benefits List */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>No Obligation Quote</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>24/7 Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all" data-testid="cta-consultation">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10" data-testid="cta-portfolio">
                    Explore Our Portfolio
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-sm mb-4">Trusted by leading businesses worldwide</p>
                <div className="flex justify-center items-center gap-8 flex-wrap opacity-80">
                  <div className="text-white font-semibold">Fortune 500 Companies</div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="text-white font-semibold">Startups & SMBs</div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="text-white font-semibold">Global Enterprises</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
