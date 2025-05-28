import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Benefits() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const benefits = [
    {
      id: 1,
      icon: '💰',
      title: t('benefits.lowInterest.title'),
      description: t('benefits.lowInterest.description'),
      stats: t('benefits.lowInterest.stats')
    },
    {
      id: 2,
      icon: '⚡',
      title: t('benefits.quickAccess.title'),
      description: t('benefits.quickAccess.description'),
      stats: t('benefits.quickAccess.stats')
    },
    {
      id: 3,
      icon: '📈',
      title: t('benefits.highLTV.title'),
      description: t('benefits.highLTV.description'),
      stats: t('benefits.highLTV.stats')
    },
    {
      id: 4,
      icon: '🔒',
      title: t('benefits.security.title'),
      description: t('benefits.security.description'),
      stats: t('benefits.security.stats')
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: t('benefits.testimonials.1.name'),
      role: t('benefits.testimonials.1.role'),
      quote: t('benefits.testimonials.1.quote'),
      rating: 5
    },
    {
      id: 2,
      name: t('benefits.testimonials.2.name'),
      role: t('benefits.testimonials.2.role'),
      quote: t('benefits.testimonials.2.quote'),
      rating: 5
    }
  ];

  const features = [
    t('benefits.features.1'),
    t('benefits.features.2'),
    t('benefits.features.3'),
    t('benefits.features.4')
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
 
      {/* Hero Section */}
      {/* <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-amber-700 mb-4">{t('benefits.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('benefits.subtitle')}
        </p>
      </div> */}
      <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 text-center relative overflow-hidden mb-16">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      {t('benefits.title')}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto">
      {t('benefits.subtitle')}
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
        Key Benefits
      </div>
    </div>
  </div>
</div>
   <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {benefits.map((benefit) => (
          <div 
            key={benefit.id} 
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-3">{benefit.description}</p>
            <p className="text-amber-600 font-semibold">{benefit.stats}</p>
          </div>
        ))}
      </div>

      {/* Key Features Section */}
      <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t('benefits.featuresTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <FiCheckCircle className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {t('benefits.testimonialsTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t('benefits.cta.title')}
        </h2>
        <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
          {t('benefits.cta.subtitle')}
        </p>
        <button onClick={() => navigate('/LoanApplicationForm')}
         className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition flex items-center mx-auto">
          {t('benefits.cta.button')} <FiArrowRight className="ml-2" />
        </button>
      </div>
    </div>
    </div>
  );
}

export default Benefits;