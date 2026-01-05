import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation(['home']);
  const [codeText, setCodeText] = useState('');
  const fullCode = `function buildAmazing() {
  const vision = getUserIdea();
  const solution = design(vision);
  const product = develop(solution);
  return deploy(product);
}`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullCode.length) {
        setCodeText(fullCode.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-cyan-950/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-start space-y-8" data-testid="hero-content">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full animate-bounce-slow">
              <span className="text-blue-600 dark:text-cyan-400 font-semibold text-sm">
                {t('home:hero.badge')}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900 dark:text-white">{t('home:hero.title1')}</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t('home:hero.title2')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {t('home:hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-testid="hero-cta-buttons">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                data-testid="start-project-btn"
              >
                {t('home:hero.startProject')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-cyan-500 px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                data-testid="view-work-btn"
              >
                <Play className="mr-2 w-5 h-5" />
                {t('home:hero.viewWork')}
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="text-center lg:text-start">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('home:hero.stats.projects')}</div>
              </div>
              <div className="text-center lg:text-start">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">300+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('home:hero.stats.clients')}</div>
              </div>
              <div className="text-center lg:text-start">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{t('home:hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>

          {/* Right: Code Animation */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gray-900 dark:bg-gray-950 rounded-3xl p-8 shadow-2xl border border-gray-800 dark:border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">app.js</span>
              </div>

              {/* Code Block */}
              <pre className="text-sm font-mono">
                <code className="text-cyan-400">
                  {codeText}
                  <span className="animate-blink">|</span>
                </code>
              </pre>

              {/* Floating Elements */}
              <div className="absolute top-20 right-10 w-20 h-20 bg-blue-500/20 rounded-lg animate-float"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-cyan-500/20 rounded-lg animate-float-delay"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
