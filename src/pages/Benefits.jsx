import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle, FiStar } from 'react-icons/fi';
import { MdOutlineSecurity } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
 const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
 
      {/* Hero Section */}
 <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden mb-16"
    >
      {/* Background pattern using icons */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full flex flex-wrap">
          {Array.from({ length: 150 }).map((_, i) => (
            <FaCircle
              key={i}
              className="text-white"
              style={{
                fontSize: "50px",
                margin: "20px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          {t("benefits.title")}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("benefits.subtitle")}
        </motion.p>

        {/* Highlight Badge */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-medium flex items-center space-x-2 shadow-lg">
            <MdOutlineSecurity className="h-6 w-6" />
            <span>Key Benefits</span>
          </div>
        </motion.div>
      </div>
    </motion.div>

   <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Benefits Grid */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
      </motion.div>

      {/* Key Features Section */}
      
<motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
       className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12 mb-16 shadow-lg border border-amber-200">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
      <span className="relative inline-block">
        <span className="relative z-10">{t('benefits.featuresTitle')}</span>
        <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-300 opacity-30 -rotate-1"></span>
      </span>
    </h2>
    
    <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
      Discover how our solution delivers exceptional value and transforms your experience
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature,index) => (
        <div 
          key={index} 
          className="group flex items-start bg-white/80 hover:bg-white transition-all duration-300 rounded-xl p-5 shadow-sm hover:shadow-md border border-amber-100"
        >
          <div className="bg-amber-100 p-2 rounded-lg mr-4 group-hover:bg-amber-200 transition-colors duration-300">
            <FiCheckCircle className="text-amber-700 text-xl" />
          </div>
          <div>
            <p className="text-gray-600">{feature}</p>
          </div>
        </div>
      ))}
    </div>
     
    <div className="mt-12 text-center">
      <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        Get Started Today
      </button>
    </div>
  </div>
</motion.div>


      {/* Testimonials Section */}
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
      className="mb-16">
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
      </motion.div>

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