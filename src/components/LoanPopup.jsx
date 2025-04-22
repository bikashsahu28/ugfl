import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

Modal.setAppElement('#root');

function LoanPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-0 outline-none max-w-4xl w-full"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex"
      >
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1601397922721-4326ae07bbc5"
            alt="Gold Loan"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="w-1/2 p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            
          </button>
          <h2 className="text-3xl font-bold mb-4">{t('loanPopup.title')}</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{t('loanPopup.benefits.title')}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>{t('loanPopup.benefits.point1')}</li>
              <li>{t('loanPopup.benefits.point2')}</li>
              <li>{t('loanPopup.benefits.point3')}</li>
              <li>{t('loanPopup.benefits.point4')}</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{t('loanPopup.scheme.title')}</h3>
            <p className="text-gray-600">{t('loanPopup.scheme.description')}</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="primary-button w-full"
          >
            {t('loanPopup.applyNow')}
          </button>
        </div>
      </motion.div>
    </Modal>
  );
}

export default LoanPopup;