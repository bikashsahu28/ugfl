import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

function Services() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      <h1 className="text-3xl font-bold text-center mb-12 ">{t('services.title')}</h1>
            
      <div id="gold-loan" className="mb-16"> 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d"
                alt="Gold Loan"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">{t('services.goldLoan.title')}</h2>
              <p className="text-gray-600 mb-6">{t('services.goldLoan.description')}</p>
              <div className="mb-6">
                <h3 className="font-semibold mb-4">{t('services.goldLoan.features.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.goldLoan.features.feature1')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.goldLoan.features.feature2')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.goldLoan.features.feature3')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.goldLoan.features.feature4')}
                  </li>
                </ul>
              </div>
              <button className="primary-button flex items-center">
                {t('nav.applyNow')}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div id="silver-loan" className="mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1573500883684-2b6de7ffd8cd"
                alt="Silver Loan"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">{t('services.silverLoan.title')}</h2>
              <p className="text-gray-600 mb-6">{t('services.silverLoan.description')}</p>
              <div className="mb-6">
                <h3 className="font-semibold mb-4">{t('services.silverLoan.features.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.silverLoan.features.feature1')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.silverLoan.features.feature2')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.silverLoan.features.feature3')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.silverLoan.features.feature4')}
                  </li>
                </ul>
              </div>
              <button className="primary-button flex items-center">
                {t('nav.applyNow')}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div id="jewellery-loan">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
                alt="Jewellery Loan"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-bold mb-4">{t('services.jewelleryLoan.title')}</h2>
              <p className="text-gray-600 mb-6">{t('services.jewelleryLoan.description')}</p>
              <div className="mb-6">
                <h3 className="font-semibold mb-4">{t('services.jewelleryLoan.features.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.jewelleryLoan.features.feature1')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.jewelleryLoan.features.feature2')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.jewelleryLoan.features.feature3')}
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-primary mr-2" />
                    {t('services.jewelleryLoan.features.feature4')}
                  </li>
                </ul>
              </div>
              <button className="primary-button flex items-center">
                {t('nav.applyNow')}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default Services;