import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import { GoCheckCircleFill } from 'react-icons/go';
import { HiCurrencyDollar } from 'react-icons/hi';
import { HiArrowPath } from 'react-icons/hi2';
import { IoIosLock, IoMdTime } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Loan() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
<div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 py-20 text-center overflow-hidden">
  {/* Background pattern using icons */}
  <div className="absolute inset-0 opacity-10">
    <div className="w-full h-full flex flex-wrap">
      {Array.from({ length: 150 }).map((_, i) => (
        <FaCircle
          key={i}
          className="text-white"
          style={{
            fontSize: "50px",
            margin: "21px",
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
      {t("loanServices.title")}
    </h1>
    <p className="text-xl md:text-2xl text-amber-100 font-medium max-w-3xl mx-auto leading-relaxed">
      {t("loanServices.subtitle")}
    </p>

    {/* CTA Button */}
    <div className="mt-8">
      <button
        onClick={() => navigate("/LoanApplicationForm")}
        className="bg-white text-amber-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105"
      >
        {t("loanServices.cta.buttonText")}
      </button>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {/* Quick Approval Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="p-8">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300 mx-auto">
                <IoMdTime className='w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300' />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-amber-700 transition-colors duration-300">
                {t('loanServices.quickApproval.title')}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                {t('loanServices.quickApproval.description')}
              </p>
            </div>
          </div>

          {/* Interest Rates Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="p-8">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300 mx-auto">
                <HiCurrencyDollar className='w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300' />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-amber-700 transition-colors duration-300">
                {t('loanServices.interestRates.title')}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                {t('loanServices.interestRates.description')}
              </p>
            </div>
          </div>

          {/* Repayment Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="p-8">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300 mx-auto">
                <HiArrowPath className='w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300' />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-amber-700 transition-colors duration-300">
                {t('loanServices.repayment.title')}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                {t('loanServices.repayment.description')}
              </p>
            </div>
          </div>

          {/* Vault Storage Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="p-8">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300 mx-auto">
              <IoIosLock className='w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300' />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center group-hover:text-amber-700 transition-colors duration-300">
                {t('loanServices.vaultStorage.title')}
              </h3>
              <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">
                {t('loanServices.vaultStorage.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
       
        
        <div className="space-y-12">
  {/* Quick Approval Section */}
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full mb-4 uppercase">
            {t('loanServices.quickApproval.title')}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 leading-snug">
            Streamlined Loan Approval
          </h2>
        </div>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.quickApproval.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.quickApproval.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.quickApproval.detail3')}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-80">
        <img 
          src="../image/img1.jpeg" 
          alt={t('loanServices.quickApproval.title')}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Interest Rates Section */}
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full mb-4 uppercase">
            {t('loanServices.interestRates.title')}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 leading-snug">
            Competitive Rates
          </h2>
        </div>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.interestRates.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.interestRates.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.interestRates.detail3')}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-80">
        <img 
          src="../image/APP.jpeg"
          alt={t('loanServices.interestRates.title')}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Repayment Section */}
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full mb-4 uppercase">
            {t('loanServices.repayment.title')}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 leading-snug">
            Flexible Payments
          </h2>
        </div>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.repayment.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.repayment.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.repayment.detail3')}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-80">
        <img 
          src="../image/Repayment1.jpeg"
          alt={t('loanServices.repayment.title')}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>

  {/* Vault Storage Section */}
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
    <div className="flex flex-col lg:flex-row-reverse">
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full mb-4 uppercase">
            {t('loanServices.vaultStorage.title')}
          </span>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 leading-snug">
            Secure Storage
          </h2>
        </div>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.vaultStorage.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.vaultStorage.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <GoCheckCircleFill className='w-4 h-4 text-amber-600' />
            </div>
            <p>{t('loanServices.vaultStorage.detail3')}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 relative min-h-80">
        <img 
          src="../image/secure1.jpeg" 
          alt={t('loanServices.vaultStorage.title')}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</div>                              
        {/* Final CTA Section */}
        <div className="mt-24 text-center bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('loanServices.cta.title')}
            </h2>
            <p className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('loanServices.cta.description')}
            </p>
            <button 
              onClick={() => navigate('/LoanApplicationForm')}
              className="bg-white text-amber-700 font-semibold px-10 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('loanServices.cta.buttonText')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loan;