import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GiTireIronCross } from 'react-icons/gi';

Modal.setAppElement('#root');

function LoanPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <Modal
    //   isOpen={isOpen}
    //   onRequestClose={() => setIsOpen(false)}
    //   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-0 outline-none max-w-4xl w-full"
    //   overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    // >
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     className="flex"
    //   >
    //     <div className="w-1/2">
    //       <img
    //         src="../image/img1.jpeg"
    //         alt="Gold Loan"
    //         className="w-full h-full object-cover rounded-l-lg"
    //       />
    //     </div>
    //     <div className="w-1/2 p-8">
    //       <button
    //         onClick={() => setIsOpen(false)}
    //         className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    //       >
            
    //       </button>
    //       <h2 className="text-3xl font-bold mb-4">{t('loanPopup.title')}</h2>
    //       <div className="mb-6">
    //         <h3 className="text-xl font-semibold mb-2">{t('loanPopup.benefits.title')}</h3>
    //         <ul className="list-disc list-inside space-y-2">
    //           <li>{t('loanPopup.benefits.point1')}</li>
    //           <li>{t('loanPopup.benefits.point2')}</li>
    //           <li>{t('loanPopup.benefits.point3')}</li>
    //           <li>{t('loanPopup.benefits.point4')}</li>
    //         </ul>
    //       </div>
    //       <div className="mb-6">
    //         <h3 className="text-xl font-semibold mb-2">{t('loanPopup.scheme.title')}</h3>
    //         <p className="text-gray-600">{t('loanPopup.scheme.description')}</p>
    //       </div>
    //       <button
    //         className="primary-button w-full"onClick={() => navigate('/LoanApplicationForm')}
    //       >
    //         {t('loanPopup.applyNow')}
    //       </button>
    //     </div>
    //   </motion.div>
    // </Modal>
    <Modal
  isOpen={isOpen}
  onRequestClose={() => setIsOpen(false)}
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-0 outline-none w-[calc(100%-2rem)] max-w-4xl mx-4"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 backdrop-blur-sm"
  ariaHideApp={false}
>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col md:flex-row"
  >
    {/* Close Button */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-2 right-2 z-10 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      aria-label="Close modal"
    >
      <GiTireIronCross className="h-6 w-6" />

    </button>

    {/* Image Section */}
    <div className="w-full md:w-1/2 h-48 md:h-auto">
      <img
        src="../image/img1.jpeg"
        alt="Gold Loan"
        className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
      />
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 p-6 md:p-8 relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold-800">
        {t('loanPopup.title')}
      </h2>
      
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gold-700">
          {t('loanPopup.benefits.title')}
        </h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li className="text-gray-700">{t('loanPopup.benefits.point1')}</li>
          <li className="text-gray-700">{t('loanPopup.benefits.point2')}</li>
          <li className="text-gray-700">{t('loanPopup.benefits.point3')}</li>
          <li className="text-gray-700">{t('loanPopup.benefits.point4')}</li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gold-700">
          {t('loanPopup.scheme.title')}
        </h3>
        <p className="text-gray-600">{t('loanPopup.scheme.description')}</p>
      </div>
      
      <button
        className="bg-amber-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-amber-600 transition to-red-700 w-full py-3 px-6 bg-gradient-to-r from-gold-600 to-gold-800 text-white font-medium rounded-lg
          transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={() => navigate('/LoanApplicationForm')}
      >
        {t('loanPopup.applyNow')}
      </button>
    </div>
  </motion.div>
</Modal>
  );
}

export default LoanPopup;