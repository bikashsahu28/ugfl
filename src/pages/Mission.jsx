import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import { GoCheck, GoCheckCircleFill } from 'react-icons/go';

function Mission() {
  const { t } = useTranslation();

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
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
      {t("mission.hero.title")}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
      {t("mission.hero.subtitle")}
    </p>
  </div>
</div>


      {/* Mission Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-amber-700 text-center">{t('mission.statement.title')}</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t('mission.statement.content')}
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">{t('mission.purpose.title')}</h3>
            <p className="text-gray-600 mb-6">{t('mission.purpose.content')}</p>
            
            <h3 className="text-2xl font-semibold text-amber-800 mb-4 mt-8">{t('mission.difference.title')}</h3>
            <p className="text-gray-600">{t('mission.difference.content')}</p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
            <img 
              src="../image/img6.jpeg" 
               alt={t('mission.statement.title')} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-5 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-amber-700 text-center ">{t('mission.values.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('mission.values.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['integrity', 'innovation', 'community', 'excellence'].map((value) => (
              <div key={value} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <GoCheckCircleFill className='w-6 h-6 text-yellow-600' />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{t(`mission.values.${value}.title`)}</h3>
                <p className="text-gray-600">{t(`mission.values.${value}.content`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-xl overflow-hidden shadow-lg h-96">
            <img 
              src="../image/img7.jpeg"  
              alt={t('mission.approach.title')} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-amber-800 ">{t('mission.approach.title')}</h2>
            <p className="text-lg text-gray-600 mb-6">{t('mission.approach.content')}</p>
            
            <ul className="space-y-4">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start">
                  <GoCheck className='flex-shrink-0 w-6 h-6 text-yellow-500 mt-1 mr-3' />
                  <span className="text-gray-700">{t(`mission.approach.points.${item}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('mission.cta.title')}</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">{t('mission.cta.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-yellow-800 font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md">
              {t('mission.cta.primary')}
            </button>
            <button className="bg-transparent hover:bg-white/20 border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              {t('mission.cta.secondary')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;