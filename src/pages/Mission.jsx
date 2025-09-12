
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCircle } from 'react-icons/fa';
import { GoCheck, GoCheckCircleFill } from 'react-icons/go';

function Mission() {
  const { t } = useTranslation();
  // Core values data  
  const coreValues = [
    {
      title: "Create",
      subtitle: "Create emotions and experiences",
      description: "Craft memorable moments that build 'wow' and customer delight through personalized service.",
      icon: "✨"
    },
    {
      title: "Connect",
      subtitle: "Build personal connection",
      description: "Be genuinely curious about customers' lives to form meaningful relationships beyond transactions.",
      icon: "🤝"
    },
    {
      title: "Courtesy",
      subtitle: "Always be warm and courteous",
      description: "Greet every customer with a smile, eye contact, and genuine warmth in every interaction.",
      icon: "😊"
    },
    {
      title: "Convey",
      subtitle: "Share our story with pride",
      description: "Communicate UNIGOLD values and mission with conviction, passion, and authenticity.",
      icon: "📣"
    },
    {
      title: "Confidence",
      subtitle: "Lead with confidence",
      description: "Approach every opportunity with passion and the belief to win over new customers.",
      icon: "💪"
    },
    {
      title: "Chain of Reference",
      subtitle: "Build lasting networks",
      description: "Cultivate referrals from both customers and non-customers to grow trusted relationships.",
      icon: "🔗"
    },
    {
      title: "Comfort",
      subtitle: "Provide peace of mind",
      description: "Assure customers they're in the right place and will be treated fairly and transparently.",
      icon: "🏡"
    }
  ];

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
            {/* 7 C's Section */}
     <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">

       <div className="text-center mb-1">
            <h3 className="text-4xl font-bold text-center text-gray-800 mb-3">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                We are in the Mission of Building  Trust and Relationships
      </span>
      </h3>
          </div>
      
      <div className="max-w-3xl mx-auto">
        <p className="text-xl text-gray-700 leading-relaxed">
          At UNIGOLD, we believe in creating comfort that assures our customers 
          they're in the right place and will be treated in a fair and transparent manner.
        </p>
      </div>
    </div>

    {/* 7 C's Title */}
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-3 bg-red-100 px-6 py-1 rounded-full">
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
        <span className="text-2xl font-semibold text-red-700">7 C's: Unigold Standards for Customer Engagement</span>
      </div>
    </div>

    {/* Core Values Grid - Updated to match benefits style */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coreValues.map((value, index) => (
        <div
          key={index}
          className="
benefit-card group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100          "        >
          <div className="relative z-10">
            {/* Icon */}
            <div className="benefit-icon mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl text-white">{value.icon}</span>
              </div>
            </div>
            
            {/* Title and Subtitle */}
            <h4 className="text-xl font-bold  text-gray-900 mb-2">
              {value.title}
            </h4>
            <p className="text-amber-600 font-medium mb-4">
              {value.subtitle}
            </p>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {value.description}
            </p>
          </div>
          
          {/* Hover effect border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-red-500/0 group-hover:border-red-500/30 transition-all duration-500"></div>
        </div>
      ))}
    </div>
  </div>
    </section>
      {/* Mission Statement */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
      </section> */}
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