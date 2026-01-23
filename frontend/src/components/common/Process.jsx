import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Pencil, Code2, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const { t } = useTranslation(['process']);
  
  const steps = [
    {
      icon: Search,
      title: t('process:step1.title'),
      duration: t('process:step1.duration'),
      activities: [
        t('process:step1.activities.1'),
        t('process:step1.activities.2'),
        t('process:step1.activities.3')
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Pencil,
      title: t('process:step2.title'),
      duration: t('process:step2.duration'),
      activities: [
        t('process:step2.activities.1'),
        t('process:step2.activities.2'),
        t('process:step2.activities.3')
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: t('process:step3.title'),
      duration: t('process:step3.duration'),
      activities: [
        t('process:step3.activities.1'),
        t('process:step3.activities.2'),
        t('process:step3.activities.3')
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TestTube,
      title: t('process:step4.title'),
      duration: t('process:step4.duration'),
      activities: [
        t('process:step4.activities.1'),
        t('process:step4.activities.2'),
        t('process:step4.activities.3')
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: t('process:step5.title'),
      duration: t('process:step5.duration'),
      activities: [
        t('process:step5.activities.1'),
        t('process:step5.activities.2'),
        t('process:step5.activities.3')
      ],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wide">{t('process:ourProcess')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {t('process:howWeWork')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('process:description')}
          </p>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 via-orange-500 to-indigo-500"></div>

          <div className="grid grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow">
                    <div className="text-center">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{step.duration}</span>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-4">{step.title}</h3>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        {step.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                            <span className="text-left">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{step.duration}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-4">{step.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Process;
