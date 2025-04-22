import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQ from '../components/FAQ';
import HomeCarousel from '../components/HomeCarousel';
import LoanPopup from '../components/LoanPopup';

function Home() {
  const [goldPrice, setGoldPrice] = useState(null);
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    setGoldPrice(6245.50);
    
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 10;
      setGoldPrice(prev => +(prev + randomChange).toFixed(2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen">
      <HomeCarousel />
      <LoanPopup />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl mb-8">{t('hero.goldRate', { price: goldPrice })}</p>
            <Link to="/calculator" className="bg-secondary text-gray-900 px-8 py-3 rounded-lg font-semibold hover:opacity-90">
              {t('nav.calculator')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('features.quickProcessing.title')}</h3>
                <p>{t('features.quickProcessing.description')}</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('features.bestRates.title')}</h3>
                <p>{t('features.bestRates.description')}</p>
              </div>
              <div className="text-center p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">{t('features.safeStorage.title')}</h3>
                <p>{t('features.safeStorage.description')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Visit us</h2>
    <div className="rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.4060636512837!2d85.79586770048316!3d20.27708020764988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a70b5d56721d%3A0x433fa09f1676349e!2sUnigold%20Finance!5e1!3m2!1sen!2sin!4v1745214771097!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;