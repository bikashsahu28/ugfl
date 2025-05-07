import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">{t('about.title')}</h1>

      <motion.div
        id="journey"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">{t('about.journey.title')}</h2>
        <p className="text-gray-600 mb-8">{t('about.journey.description')}</p>
        <div className="grid md:grid-cols-4 gap-6">
          {Object.entries(t('about.journey.milestones', { returnObjects: true })).map(([year, milestone]) => (
            <div key={year} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-primary mb-2">{year}</h3>
              <p className="text-gray-600">{milestone}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        id="leadership"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6">{t('about.leadership.title')}</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600">{t('about.leadership.description')}</p>
        </div>
      </motion.div>

      <motion.div
        id="values"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6">{t('about.values.title')}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-2">{t('about.values.integrity')}</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-2">{t('about.values.transparency')}</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-2">{t('about.values.customer')}</h3>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="font-semibold mb-2">{t('about.values.innovation')}</h3>
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}

export default About;