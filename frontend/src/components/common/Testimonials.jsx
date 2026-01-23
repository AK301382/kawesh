import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '../ui/card';
import { Star, ChevronLeft, ChevronRight, Send, CheckCircle2 } from 'lucide-react';
 

const Testimonials = () => {
  const { t } = useTranslation(['testimonials']);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  
  // Get testimonials from translations
  const testimonials = useMemo(() => {
    const items = [];
    for (let i = 1; i <= 18; i++) {
      const testimonialData = {
        id: i,
        quote: t(`testimonials:items.${i}.quote`),
        author: t(`testimonials:items.${i}.author`),
        role: t(`testimonials:items.${i}.role`),
        company: t(`testimonials:items.${i}.company`),
        rating: 5,
        projectType: t(`testimonials:items.${i}.projectType`)
      };
      items.push(testimonialData);
    }
    return items;
  }, [t]);
  
  const totalTestimonials = testimonials.length;
  
  // State for review form
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    review: '',
    rating: 5
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalTestimonials]);

  // Get visible testimonials (3 items in view)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      const index = (currentIndex + i) % totalTestimonials;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalTestimonials) % totalTestimonials);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalTestimonials);
  };

  const visibleTestimonials = getVisibleTestimonials();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle star rating click
  const handleRatingClick = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      role: '',
      company: '',
      review: '',
      rating: 5
    });
    
    // Hide form and success message after 3 seconds
    setTimeout(() => {
      setShowForm(false);
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 dark:text-cyan-400 font-semibold text-sm uppercase tracking-wide">{t('testimonials:title')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
            {t('testimonials:subtitle')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('testimonials:description')}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-7xl mx-auto">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>

          {/* Testimonials Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
            {visibleTestimonials.map((testimonial, idx) => (
              <Card 
                key={`${testimonial.id}-${idx}`}
                className="group hover:shadow-2xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 relative overflow-hidden"
                data-testid={`testimonial-card-${testimonial.id}`}
              >
                <CardContent className="pt-6 relative z-10">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm line-clamp-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.author}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="mt-4">
                    <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 text-xs font-semibold rounded-full">
                      {testimonial.projectType}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[...Array(totalTestimonials)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'bg-blue-600 dark:bg-cyan-500 w-8 h-3'
                  : 'bg-gray-300 dark:bg-gray-600 w-3 h-3 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Add Your Review Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          {!showForm && !showSuccess && (
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                data-testid="add-review-button"
              >
                <Send className="w-5 h-5" />
                {t('testimonials:shareExperience')}
              </button>
            </div>
          )}

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-500 dark:border-green-600 rounded-2xl p-8 text-center animate-fade-in">
              <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                {t('testimonials:form.success')}
              </h3>
              <p className="text-green-700 dark:text-green-400">
                {t('testimonials:form.thankYou')}
              </p>
            </div>
          )}

          {/* Review Form */}
          {showForm && !showSuccess && (
            <Card className="border-2 border-blue-200 dark:border-blue-800 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {t('testimonials:form.title')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t('testimonials:form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('testimonials:form.namePlaceholder')}
                      data-testid="review-name-input"
                    />
                  </div>

                  {/* Role Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t('testimonials:form.role')} *
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('testimonials:form.rolePlaceholder')}
                      data-testid="review-role-input"
                    />
                  </div>

                  {/* Company Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t('testimonials:form.company')} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t('testimonials:form.companyPlaceholder')}
                      data-testid="review-company-input"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t('testimonials:form.rating')} *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(star)}
                          className="transition-transform hover:scale-110"
                          data-testid={`rating-star-${star}`}
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= formData.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      {t('testimonials:form.review')} *
                    </label>
                    <textarea
                      name="review"
                      value={formData.review}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={t('testimonials:form.reviewPlaceholder')}
                      data-testid="review-text-input"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                      data-testid="review-cancel-button"
                    >
                      {t('testimonials:form.cancel')}
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      data-testid="review-submit-button"
                    >
                      <Send className="w-5 h-5" />
                      {t('testimonials:form.submit')}
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
