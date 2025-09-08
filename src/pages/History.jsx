import { useTranslation } from 'react-i18next';
import { BsCheckCircle, BsStars } from 'react-icons/bs';
import { FaBullseye, FaCircle, FaEye, FaGlobe, FaHeart } from 'react-icons/fa';
import { FaBoltLightning } from 'react-icons/fa6';

function History() {
  const { t } = useTranslation();

   const itemConfig = {
    vision: {
      icon: <FaEye className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-800"
    },
    mission: {
      icon: <FaBullseye className="w-6 h-6 text-green-600" />,
      bgColor: "bg-green-100",
      textColor: "text-green-800"
    },
    values: {
      icon: <FaHeart className="w-6 h-6 text-amber-600" />,
      bgColor: "bg-amber-100",
      textColor: "text-amber-800"
    }
  };

  return (
    // <div className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
          <div className="bg-gradient-to-b min-h-screen">
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
            margin: "24px",
          }}
        />
      ))}
    </div>
  </div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
      {t("overview.title")}
    </h1>
    <p className="text-xl md:text-2xl text-yellow-100 font-medium max-w-3xl mx-auto leading-relaxed">
      {t("overview.description")}
    </p>
  </div>
</div>


      {/* Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-4">
        {/* Key Features */}
         <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t('intro.title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('intro.description')}
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {['vision', 'mission', 'values'].map((item) => (
          <div 
            key={item} 
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 ${itemConfig[item].bgColor} rounded-full flex items-center justify-center mb-4`}>
              {itemConfig[item].icon}
            </div>
            <h3 className={`text-xl font-semibold ${itemConfig[item].textColor} mb-3`}>
              {t(`intro.${item}.title`)}
            </h3>
            <p className="text-gray-600">
              {t(`intro.${item}.description`)}
            </p>
          </div>
        ))}
      </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 bg-white rounded-xl shadow-sm mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">{t('timeline.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('timeline.subtitle')}</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 to-yellow-600 transform -translate-x-1/2"></div>
          {/* Timeline Items */}
          <div className="space-y-16 md:space-y-0">
            {['founding', 'milestone1', 'expansion', 'present'].map((item, index) => (
              <div key={item} className={`relative md:flex items-center w-full ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} mb-8 md:mb-0`}>
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                    {t(`history.${item}.year`)}
                  </span>
                  <h3 className="text-2xl font-semibold text-amber-800 mt-2">{t(`history.${item}.title`)}</h3>
                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {t(`history.${item}.description`)}
                  </p>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500 text-white absolute left-1/2 transform -translate-x-1/2 shadow-lg border-4 border-white">
                  {index === 0 && (
                    <FaBoltLightning />
                  )}
                  {index === 1 && (
                    <BsCheckCircle />
                  )}
                  {index === 2 && (
                    <FaGlobe />
                  )}
                  {index === 3 && (
                    <BsStars />
                  )}
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-lg h-64">
                    <img 
                      src={`../image/img${(index % 3) + 1}.jpeg`} 
                      alt={t(`history.${item}.title`)} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('stats.title')}</h2>
            <p className="text-yellow-100 text-lg max-w-2xl mx-auto">{t('stats.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {['customers', 'branches', 'employees', 'loans'].map((stat) => (
              <div key={stat} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">{t(`stats.${stat}.value`)}</p>
                <p className="text-yellow-100 font-medium">{t(`stats.${stat}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default History;