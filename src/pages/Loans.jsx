import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Loan() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t('loanServices.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('loanServices.subtitle')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
           {/* Quick Approval Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
  <div className="p-6">
    <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors duration-300">
      <svg className="w-6 h-6 text-yellow-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
      {t('loanServices.quickApproval.title')}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
      {t('loanServices.quickApproval.description')}
    </p>
  </div>
</div>
        {/* Interest Rates Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
  <div className="p-6">
    <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors duration-300">
      <svg className="w-6 h-6 text-yellow-600 group-hover:text-red-600 transition-colors duration-300 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
    {t('loanServices.interestRates.title')}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
    {t('loanServices.interestRates.description')}
    </p>
  </div>
</div>
        {/* Repayment Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
  <div className="p-6">
    <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors duration-300">
    <svg className="w-6 h-6 text-yellow-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
    {t('loanServices.repayment.title')}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
    {t('loanServices.repayment.description')}
    </p>
  </div>
</div> 
        {/* Vault Storage Card */}

             <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
  <div className="p-6">
    <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors duration-300">
    <svg className="w-6 h-6 text-yellow-600 group-hover:text-red-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
    {t('loanServices.vaultStorage.title')}
    </h3>
    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
    {t('loanServices.vaultStorage.description')}
    </p>
  </div>
</div>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-16">
        {/* Quick Approval Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('loanServices.quickApproval.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('loanServices.quickApproval.detail1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('loanServices.quickApproval.detail2')}
              </p>
              <p className="text-gray-700">
                {t('loanServices.quickApproval.detail3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="../image/img1.jpeg" 
                alt={t('loanServices.quickApproval.title')}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Interest Rates Section */}
        <div className="bg-gradient-to-r from-white to-yellow-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('loanServices.interestRates.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('loanServices.interestRates.detail1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('loanServices.interestRates.detail2')}
              </p>
              <p className="text-gray-700">
                {t('loanServices.interestRates.detail3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="../image/APP.jpeg"
                alt={t('loanServices.interestRates.title')}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Repayment Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-white rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('loanServices.repayment.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('loanServices.repayment.detail1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('loanServices.repayment.detail2')}
              </p>
              <p className="text-gray-700">
                {t('loanServices.repayment.detail3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
               src="../image/Repayment1.jpeg"
                alt={t('loanServices.repayment.title')}
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>

        {/* Vault Storage Section */}
        <div className="bg-gradient-to-r from-white to-yellow-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('loanServices.vaultStorage.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('loanServices.vaultStorage.detail1')}
              </p>
              <p className="text-gray-700 mb-6">
                {t('loanServices.vaultStorage.detail2')}
              </p>
              <p className="text-gray-700">
                {t('loanServices.vaultStorage.detail3')}
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="../image/secure1.jpeg" 
                alt={t('loanServices.vaultStorage.title')}
                className="rounded-lg shadow-md w-full max-h-[400px] "
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-yellow-600 rounded-2xl p-12 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <h2 className="text-3xl font-bold text-white mb-6">
          {t('loanServices.cta.title')}
        </h2>
        <p className="text-yellow-100 text-xl mb-8 max-w-2xl mx-auto">
          {t('loanServices.cta.description')}
        </p>
        <button onClick={() => navigate('/LoanApplicationForm')} 
        className="bg-white text-yellow-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
          {t('loanServices.cta.buttonText')}
        </button>
      </div>
    </div>
  );
}
 
export default Loan;