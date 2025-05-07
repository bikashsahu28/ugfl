import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();

  return (

    <div className="bg-gradient-to-b from-amber-50 to-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gold-600 mb-4">{t('history.title')}</h1>
        <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
      </div>
       */}
        {/* Company Overview */}
        <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('overview.title')}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">{t('overview.description')}</p>
      </section>

 {/* Hero Section */}
 {/* <section className="bg-gold-50 rounded-xl p-12 text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('hero.title')}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        <img
          src="../image/history-hero.jpg"
          alt="UniGold Finance Legacy"
          className="mt-6 rounded-lg mx-auto max-w-md shadow-md"
        />
      </section> */}

      {/* Timeline Section */}
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gold-200 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-0">
          {/* Item 1 - Founding */}
          <div className="relative md:flex items-center w-full">
            <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right">
              <h3 className="text-2xl font-semibold text-gold-700">{t('history.founding.year')}</h3>
              <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.founding.title')}</h4>
              <p className="text-gray-600 mt-2">{t('history.founding.description')}</p>
            </div>
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <img src="../image/img1.jpeg" alt={t('history.founding.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>

          {/* Item 2 - First Milestone */}
          <div className="relative md:flex items-center w-full flex-row-reverse">
            <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0 text-left">
              <h3 className="text-2xl font-semibold text-gold-700">{t('history.milestone1.year')}</h3>
              <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.milestone1.title')}</h4>
              <p className="text-gray-600 mt-2">{t('history.milestone1.description')}</p>
            </div>
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="md:w-1/2 md:pr-16">
              <img src="../image/img1.jpeg" alt={t('history.milestone1.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>

          {/* Item 3 - Expansion */}
          <div className="relative md:flex items-center w-full">
            <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right">
              <h3 className="text-2xl font-semibold text-gold-700">{t('history.expansion.year')}</h3>
              <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.expansion.title')}</h4>
              <p className="text-gray-600 mt-2">{t('history.expansion.description')}</p>
            </div>
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <div className="md:w-1/2 md:pl-16">
              <img src="../image/img1.jpeg" alt={t('history.expansion.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>

          {/* Item 4 - Present */}
          <div className="relative md:flex items-center w-full flex-row-reverse">
            <div className="md:w-1/2 md:pl-16 mb-8 md:mb-0 text-left">
              <h3 className="text-2xl font-semibold text-gold-700">{t('history.present.year')}</h3>
              <h4 className="text-xl font-medium text-gray-800 mt-2">{t('history.present.title')}</h4>
              <p className="text-gray-600 mt-2">{t('history.present.description')}</p>
            </div>
            <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-gold-500 text-white absolute left-1/2 transform -translate-x-1/2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <div className="md:w-1/2 md:pr-16">
              <img src="../image/img1.jpeg" alt={t('history.present.title')} className="rounded-lg shadow-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
       


     

    
      {/* Photo Gallery */}
      {/* <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('gallery.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
              onClick={() => setActiveImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg shadow-sm group-hover:opacity-75 transition-opacity"
              />
              <p className="text-center text-gray-600 mt-2">{image.alt}</p>
            </div>
          ))}
        </div>
        {activeImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-3xl">
              <img src={activeImage.src} alt={activeImage.alt} className="w-full rounded-lg" />
              <p className="text-white text-center mt-4">{activeImage.alt}</p>
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-2 right-2 text-white bg-gold-500 rounded-full p-2"
              >
                ✩
              </button>
            </div>
          </div>
        )}
      </section> */}

             {/* Statistics/Impact */}
       <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t('stats.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['customers', 'branches', 'loans'].map((stat) => (
            <div key={stat} className="bg-gold-50 p-6 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-gold-500">{t(`stats.${stat}.value`)}</p>
               <p className="text-gray-600">{t(`stats.${stat}.label`)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}

export default History;