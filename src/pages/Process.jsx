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
    <div className="bg-gradient-to-b from-amber-50 to-white">
   
      {/* Hero Section */}
      
<div className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 text-center relative overflow-hidden">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      {t('process.title')}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto">
      {t('process.subtitle')}
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        24/7 Loan Support
      </div>
    </div>
  </div>
</div>

 <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Process Steps */}
      <div className="space-y-20">
        {/* Eligibility Section */}
       <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl shadow-lg overflow-hidden p-0 border border-yellow-200 hover:shadow-xl transition-shadow duration-300">
  <div className="flex flex-col md:flex-row gap-0 items-stretch min-h-[400px]">
    {/* Image Section (Left) */}
    <div className="md:w-1/2 relative overflow-hidden group">
      <img 
        src="../image/img1.jpeg" 
        alt={t('process.eligibility.title')}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>

    {/* Content Section (Right) */}
    <div className="md:w-1/2 p-8 flex flex-col justify-center bg-white">
      <div className="mb-6">
        <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
          Eligibility Criteria
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
          {t('process.eligibility.title')}
        </h2>
        <p className="text-gray-600 mb-6">
          {t('process.eligibility.description')}
        </p>
      </div>

      <ul className="space-y-4">
        {[1, 2, 3].map((item) => (
          <li 
            key={item} 
            className="flex items-start bg-yellow-50/50 p-4 rounded-lg border-l-4 border-yellow-400 hover:bg-yellow-50 transition-colors duration-200"
          >
            <div className="flex-shrink-0 mt-0.5">
              <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="ml-3 text-gray-700 font-medium">
              {t(`process.eligibility.point${item}`)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
        {/* Documents Section */}  
        <section className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-2xl shadow-lg overflow-hidden border border-amber-200 hover:shadow-xl transition-all duration-300">
  <div className="flex flex-col md:flex-row-reverse gap-0 min-h-[450px]">
    {/* Image Section (Right) - Enhanced */}
    <div className="md:w-1/2 relative group overflow-hidden">
      <img 
        src="../image/img1.jpeg" 
        alt={t('process.documents.title')}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content Section (Left) - Premium Styling */}
    <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
      <div className="mb-8">
        <span className="inline-block bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider">
          REQUIRED DOCUMENTS
        </span>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t('process.documents.title')}
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          {t('process.documents.description')}
        </p>
      </div>

      {/* Document Cards Grid - Enhanced */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {['idProof', 'addressProof', 'goldDetails'].map((doc) => (
          <div 
            key={doc} 
            className="bg-gradient-to-br from-white to-amber-50 p-5 rounded-xl border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300 group"
          >
            <div className="flex items-start">
              <div className="bg-amber-100/80 p-2 rounded-lg mr-4 group-hover:bg-amber-200 transition-colors">
                <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {t(`process.documents.${doc}.title`)}
                </h3>
                <p className="text-sm text-gray-600 leading-snug">
                  {t(`process.documents.${doc}.examples`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>   


        {/* Application Steps */}

<section className=" bg-white rounded-2xl shadow-lg p-10 my-12">
  <h2 className="text-4xl font-bold text-gold-700 mb-10 text-center tracking-tight font-bold  text-center text-amber-700">
    {t('process.steps.title')}
  </h2>
  <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Connecting Line (visible on desktop) */}
    <div className=" hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gold-200"></div>
    {
    //[1, 2, 3, 4]
    [
      { step: 1, image: '../image/img1.jpeg' },
      { step: 2, image: '../image/img2.jpeg' },
      { step: 3, image: '../image/img3.jpeg' },
      { step: 4, image: '../image/img4.jpeg' }
    ]
    .map(({step, image}, index) => (
      <div
        key={step}
        className="bg-gradient-to-b from-amber-200 to-white rounded-2xl shadow-lg border-t-4 border-amber-500 relative bg-gray-50 p-8 rounded-xl shadow-sm text-center transform hover:scale-105 transition-transform duration-300"
      >
        {/* Icon Placeholder */}
        <div className="w-17 h-17 mx-auto mb-4">
          <img
            src={image} 
            alt={`Step ${step}`} 
            className="w-25 h-25 rounded-lg object-contain"
          />
        </div>
        {/* Step Number */}
<div className="bg-gradient-to-r from-gold-500 to-gold-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-md">
  <span className="text-red-700 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">
    {step}
  </span>
</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {t(`process.steps.step${step}.title`)}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {t(`process.steps.step${step}.description`)}
        </p>
      </div>
    ))}
  </div>
</section>

        {/* FAQ Section */}
        <section className="bg-gradient-to-br from-yellow-300 to-amber-50 rounded-2xl shadow-lg p-10">
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
    </div>
  );
}

export default Process;