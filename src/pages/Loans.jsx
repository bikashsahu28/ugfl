import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Loan() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t('loanServices.title')}
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 font-medium max-w-3xl mx-auto leading-relaxed">
            {t('loanServices.subtitle')}
          </p>
          <div className="mt-8">
            <button 
              onClick={() => navigate('/LoanApplicationForm')}
              className="bg-white text-amber-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105"
            >
              {t('loanServices.cta.buttonText')}
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
                <svg className="w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                <svg className="w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                <svg className="w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
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
                <svg className="w-7 h-7 text-amber-600 group-hover:text-amber-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.quickApproval.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.quickApproval.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.interestRates.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.interestRates.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.repayment.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.repayment.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.vaultStorage.detail1')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p>{t('loanServices.vaultStorage.detail2')}</p>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1 mr-3 text-amber-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
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
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
          </div>
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