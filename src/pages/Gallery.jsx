import { useTranslation } from 'react-i18next';

function Gallery() {
  const { t } = useTranslation();

  // Gallery images data
  const galleryItems = [
    { id: 1, title: t('gallery.officeOpening'), image: '../image/img1.jpeg', category: 'facilities' },
    { id: 2, title: t('gallery.teamRetreat'), image: '/../image/img2.jpeg', category: 'events' },
    { id: 3, title: t('gallery.awardCeremony'), image: '../image/img3.jpeg', category: 'achievements' },
    { id: 4, title: t('gallery.clientEvent'), image: '/../image/img4.jpeg', category: 'events' },
    { id: 5, title: t('gallery.charityWork'), image: '../image/img5.jpeg', category: 'csr' },
    { id: 6, title: t('gallery.newProduct'), image: '../image/img6.jpeg', category: 'products' },
  ];

  // News data
  const newsItems = [
    { 
      id: 1, 
      title: t('news.newBranch.title'), 
      excerpt: t('news.newBranch.excerpt'),
      date: '2023-11-15',
      image: '../image/img1.jpeg'
    },
    { 
      id: 2, 
      title: t('news.quarterlyResults.title'), 
      excerpt: t('news.quarterlyResults.excerpt'),
      date: '2023-10-30',
      image: '../image/img1.jpeg'
    }
  ];

  // Events data
  const eventsItems = [
    {
      id: 1,
      title: t('events.investmentSeminar.title'),
      date: '2023-12-15',
      location: t('events.investmentSeminar.location'),
      image: '../image/img1.jpeg'
    },
    {
      id: 2,
      title: t('events.annualMeeting.title'),
      date: '2024-01-20',
      location: t('events.annualMeeting.location'),
      image: '../image/img1.jpeg'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Main Gallery Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('gallery.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-gold-600 text-white text-sm rounded-full mb-2">
                    {t(`categories.${item.category}`)}
                  </span>
                  <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-50 rounded-xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('news.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('news.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover min-h-48"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="text-sm text-gray-500 mb-2">{new Date(item.date).toLocaleDateString()}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className="text-gold-600 hover:text-gold-700 font-medium">
                    {t('news.readMore')} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('events.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eventsItems.map((event) => (
            <div key={event.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-3 py-1 bg-gold-100 text-gold-800 text-sm rounded-full">
                    {t('events.upcoming')}
                  </span>
                  <div className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </p>
                <button className="w-full bg-gold-600 hover:bg-gold-700 text-white py-2 px-4 rounded-lg transition-colors">
                  {t('events.register')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* testiment Section */}
<section className="bg-gold-50 rounded-xl p-12">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('testiment.title')}</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      {t('testiment.subtitle')}
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      { id: 1, img: 'img1.jpeg' },
      { id: 2, img: 'img2.jpeg' },
      { id: 3, img: 'img3.jpeg' }
    ].map((client) => (
      <div key={client.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden flex-shrink-0">
            <img 
              src={`../image/${client.img}`} 
              alt={t(`testiment.client${client.id}.name`)}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '../image/default-profile.jpg';
                e.currentTarget.alt = 'Default profile';
              }}
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">
              {t(`testiment.client${client.id}.name`)}
            </h4>
            <p className="text-sm text-gray-500">
              {t(`testiment.client${client.id}.designation`)}
            </p>
          </div>
        </div>
        <p className="text-gray-600 italic mb-4">
          "{t(`testiment.client${client.id}.quote`)}"
        </p>
        <div className="flex text-gold-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
    </div>
    </div>   
  );
}

export default Gallery;