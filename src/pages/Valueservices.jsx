import { useTranslation } from 'react-i18next';
import { FiShield, FiPieChart, FiTrendingUp, FiChevronRight, FiPhone, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaCircle } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';

function ValueAddedServices() {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <FiShield className="w-8 h-8" />,
      title: t('services.insurance.title'),
      description: t('services.insurance.description'),
      features: [
        t('services.insurance.features.0'),
        t('services.insurance.features.1'),
        t('services.insurance.features.2'),
      ],
    },
    {
      id: 2,
      icon: <FiPieChart className="w-8 h-8" />,
      title: t('services.advisory.title'),
      description: t('services.advisory.description'),
      features: [
        t('services.advisory.features.0'),
        t('services.advisory.features.1'),
        t('services.advisory.features.2'),
      ],
    },
    {
      id: 3,
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: t('services.wealth.title'),
      description: t('services.wealth.description'),
      features: [
        t('services.wealth.features.0'),
        t('services.wealth.features.1'),
        t('services.wealth.features.2'),
      ],
    },
  ];

  const whyChoose = [
    t('whyChoose.trusted'),
    t('whyChoose.competitive'),
    t('whyChoose.digital'),
    t('whyChoose.oneStop'),
  ];

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.0.name'),
      feedback: t('testimonials.0.feedback'),
      highlight: t('testimonials.0.highlight'),
    },
    {
      id: 2,
      name: t('testimonials.1.name'),
      feedback: t('testimonials.1.feedback'),
      highlight: t('testimonials.1.highlight'),
    },
  ];

  const faqs = [
    {
      id: 1,
      question: t('faqs.0.question'),
      answer: t('faqs.0.answer'),
    },
    {
      id: 2,
      question: t('faqs.1.question'),
      answer: t('faqs.1.answer'),
    },
    {
      id: 3,
      question: t('faqs.2.question'),
      answer: t('faqs.2.answer'),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">

        {/* Hero Section */}
        <motion.div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 text-center relative overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="w-full h-full flex flex-wrap">
      {Array.from({ length: 120 }).map((_, i) => (
        <FaCircle
          key={i}
          className="text-white"
          style={{
            fontSize: "45px",
            margin: "18px",
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      {t("services.title")}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto">
      {t("services.subtitle")}
    </p>
  </div>
        </motion.div>

    <div className="max-w-7xl mx-auto px-4 py-16"> 
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FiChevronRight className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <button className="text-amber-600 font-medium flex items-center hover:text-amber-700 transition-colors">
                {t('services.learnMore')}
                <FiChevronRight className="ml-1" />
              </button> */}
            </motion.div>
          ))}
        </div>
<div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-16 container mx-auto px-4 max-w-7xl"
>
  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-xl overflow-hidden border border-amber-200 p-8">
    <div className="flex items-center mb-8">
      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4">
        <div className='text-white'>
          <BsGraphUpArrow />
        </div>

      </div>
      <div>
        <h2 className="text-3xl font-bold text-gray-800">{t('whyChoose.title')}</h2>
        <p className="text-gray-600 mt-1">Discover why we're the trusted choice for gold loans</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {whyChoose.map((reason, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-6 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-amber-200 group"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:from-amber-500 group-hover:to-yellow-600 transition-all duration-300">
            <FiChevronRight className="text-white text-xl" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2 text-lg">Advantage {index + 1}</h3>
          <p className="text-gray-600 leading-relaxed">{reason}</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
            <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full">Gold Loan</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
        {/* Customer Testimonials */}
        <div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-amber-700 text-center mb-8">
            {t('testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-amber-50 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
                <p className="text-amber-600 font-semibold mb-2">{testimonial.highlight}</p>
                <p className="text-gray-800 font-medium">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
{/* contacts / Support Info */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="my-20"
>  
  <h2 className="text-3xl font-bold text-amber-700 text-center mb-12">
    {t('contacts.title')}
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {/* Phone Card */}
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500"
    >
      <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
        <FiPhone className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
        {t('contacts.phone.title')}
      </h3>
      <p className="text-gray-600 text-center mb-6">
        {t('contacts.phone.number')}
      </p>
      <div className="text-center">
        <button className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
          {t('contacts.callNow')}
        </button>
      </div>
    </motion.div>
    
    {/* Email Card */}
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500"
    >
      <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
        <FiMail className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
        {t('contacts.email.title')}
      </h3>
      <p className="text-gray-600 text-center mb-6">
        {t('contacts.email.address')}
      </p>
      <div className="text-center">
        <button className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
          {t('contacts.sendMessage')}
        </button>
      </div>
    </motion.div>
    
    {/* Callback Card */}
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500"
    >
      <div className="bg-amber-50 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
        <IoCallOutline className='w-6 h-6' />
      </div>
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
        {t('contacts.callback.title')}
      </h3>
      <p className="text-gray-600 text-center mb-6">
        {t('contacts.callback.description')}
      </p>
      <div className="text-center">
        <button className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition w-full">
          {t('contacts.requestCallback')}
        </button>
      </div>
    </motion.div>
  </div>
</motion.div>
          {/* Enhanced CTA Section */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="relative overflow-hidden rounded-3xl p-10 md:p-16 my-20"
>
  <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 opacity-95"></div>
  <div className="relative z-10 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      {t('services.cta.title')}
    </h2>
    <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
      {t('services.cta.subtitle')}
    </p>
    <div className="flex flex-col md:flex-row justify-center gap-4">
      <motion.button 
        whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        className="bg-white text-amber-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-md"
      >
        {t('services.cta.getStarted')}
      </motion.button>
      <motion.button 
        whileHover={{ y: -2, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
        className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-md"
      >
        {t('services.cta.speakAdvisor')}
      </motion.button>
    </div>
  </div>
</motion.div>
      </div>
    </div>
  );
}

export default ValueAddedServices;