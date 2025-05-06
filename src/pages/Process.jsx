import { useTranslation } from 'react-i18next';

function Process() {
  const { t } = useTranslation();

  const faqItems = [
    {
      question: t('process.faq.maxLoanQuestion'),
      answer: t('process.faq.maxLoanAnswer')
    },
    {
      question: t('process.faq.valuationQuestion'),
      answer: t('process.faq.valuationAnswer')
    },
    {
      question: t('process.faq.earlyRepaymentQuestion'),
      answer: t('process.faq.earlyRepaymentAnswer')
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('process.title')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('process.subtitle')}
        </p>
      </div>

      {/* Process Steps */}
      <div className="space-y-20">
        {/* Eligibility Section */}
       
        <section className="bg-gradient-to-r from-yellow-50 to-red-200 rounded-xl shadow-md p-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="../image/img1.jpeg" 
                alt={t('process.eligibility.title')}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gold-600 mb-4">
                {t('process.eligibility.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('process.eligibility.description')}
              </p>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="h-6 w-6 text-gold-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{t(`process.eligibility.point${item}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Documents Section */}     
        <section className="bg-gradient-to-r from-red-200 to-yellow-100 rounded-xl shadow-md p-8">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="../image/img1.jpeg" 
                alt={t('process.documents.title')}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gold-600 mb-4">
                {t('process.documents.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('process.documents.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['idProof', 'addressProof', 'goldDetails'].map((doc) => (
                  <div key={doc} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gold-700 mb-2">
                      {t(`process.documents.${doc}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t(`process.documents.${doc}.examples`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gold-600 mb-8 text-center">
            {t('process.steps.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="bg-gold-100 text-gold-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t(`process.steps.step${step}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`process.steps.step${step}.description`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        {/* <section className="bg-gray-50 rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-gold-600 mb-8 text-center">
            {t('process.faq.title')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section> */}
        <section className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-lg p-10">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-amber-700 mb-4">
      {t('process.faq.title')}
    </h2>
    <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
  </div>
  
  <div className="max-w-4xl mx-auto space-y-6">
    {faqItems.map((item, index) => (
      <div 
        key={index} 
        className="bg-white p-8 rounded-xl shadow-md border-l-4 border-amber-500 hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start">
          <div className="bg-amber-100 p-2 rounded-full mr-4">
            <svg 
              className="w-6 h-6 text-amber-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="mr-2">{item.question}</span>
            </h3>
            <div className="flex">
              <div className="w-1 bg-amber-200 mr-4 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  <div className="text-center mt-12">
    <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
      {t('proces.faq.cta')}
    </button>
  </div>
</section>
      </div>
    </div>
  );
}

export default Process;