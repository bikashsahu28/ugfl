import { useTranslation } from 'react-i18next';
import { FaCircle, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';

function Leadership() {
  const { t } = useTranslation();
  const testimonialsl = [
    { id: 1, image: '../image/img1.jpeg' },
    { id: 2, image: '../image/img3.jpeg' },
    { id: 3, image: '../image/img5.jpeg' },
    { id: 4, image: '../image/img3.jpeg' },
    { id: 5, image: '../image/img3.jpeg' },
  ];
  
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      {/* hero Section */}

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
            margin: "20px",
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
      {t("leadership.heros.title")}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
      {t("leadership.heros.subtitle")}
    </p>
  </div>
</div>
    {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('leadership.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('leadership.subtitle')}</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {['ceo', 'cto', 'cfo', 'coo'].map((leader) => (
            <div key={leader} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden h-64">
                <img 
                  // src={`../image/leader-${leader}.jpg`}// ../image/img3.jpeg
                  src={t(`leadership.${leader}.picture`)} 
                  alt={t(`leadership.${leader}.name`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{t(`leadership.${leader}.name`)}</h3>
                <p className="text-yellow-600 font-medium mb-3">{t(`leadership.${leader}.position`)}</p>
                <p className="text-gray-600 text-sm">{t(`leadership.${leader}.bio`)}</p>
                <div className="mt-4 flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                    <FaTwitter className='w-5 h-5' />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                    <FaLinkedin className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('testimonialsl.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('testimonialsl.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IoMdStar key={star} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6 italic">
                "{t(`testimonialsl.testimonial${testimonial}.quote`)}"
              </blockquote>
              <div className="flex items-center">
                    <img 
                     src={`/images/client-${testimonial}.jpeg`}  // Updated path
                     alt={t(`testimonialsl.testimonial${testimonial}.name`)}
                     className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                <div>
                  <p className="font-semibold text-gray-800">{t(`testimonialsl.testimonial${testimonial}.name`)}</p>
                  <p className="text-sm text-gray-500">{t(`testimonialsl.testimonial${testimonial}.position`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">{t('cta.description')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-yellow-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md">
              {t('cta.primary')}
            </button>
            <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              {t('cta.secondary')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Leadership;