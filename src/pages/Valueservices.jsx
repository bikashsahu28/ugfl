// import { useTranslation } from 'react-i18next';

// function Valueaddedservices() {
//   const { t } = useTranslation();

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8">Valueaddedservices</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* Gallery content will be added here */}
//       </div>
//     </div>
//   );
// }

// export default Valueaddedservices;
import { useTranslation } from 'react-i18next';
import { FiShield, FiPieChart, FiTrendingUp, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
        t('services.insurance.features.2')
      ]
    },
    {
      id: 2,
      icon: <FiPieChart className="w-8 h-8" />,
      title: t('services.advisory.title'),
      description: t('services.advisory.description'),
      features: [
        t('services.advisory.features.0'),
        t('services.advisory.features.1'),
        t('services.advisory.features.2')
      ]
    },
    {
      id: 3,
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: t('services.wealth.title'),
      description: t('services.wealth.description'),
      features: [
        t('services.wealth.features.0'),
        t('services.wealth.features.1'),
        t('services.wealth.features.2')
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

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
              
              <button className="text-amber-600 font-medium flex items-center hover:text-amber-700 transition-colors">
                {t('services.learnMore')}
                <FiChevronRight className="ml-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('services.cta.title')}
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <button className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition shadow-lg">
            {t('services.cta.button')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default ValueAddedServices;