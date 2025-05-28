import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-r from-yellow-600 to-yellow-800 py-12 text-center relative overflow-hidden mb-12"
>
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTAgMGgxMDB2MTAwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTUwIDI1YzEzLjggMCAyNSAxMS4yIDI1IDI1cy0xMS4yIDI1LTI1IDI1LTI1LTExLjItMjUtMjUgMTEuMi0yNSAyNS0yNXoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')" }}></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.h1 
      className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg"
    >
      {t('about.title')}
    </motion.h1>
    <motion.p 
      className="text-xl md:text-2xl text-yellow-100 font-medium max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      {t('about.overview')}
    </motion.p>
    <motion.div 
      className="mt-8 flex justify-center space-x-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
        Our Story
      </div>
    </motion.div>
  </div>
</motion.div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-amber-600"
        >
          {t('about.title')}
          <p className="text-lg text-gray-700 mt-8 max-w-4xl mx-auto">
            {t('about.overview')}
          </p>
        </motion.h1> */}
{/* Growth Story - New Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-amber-50 rounded-2xl p-8 shadow-inner"
        >
          <h2 className="text-3xl font-bold mb-6 text-amber-700 text-center">{t('about.growth.title')}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Founding */}
            {/* <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400">
              <h3 className="text-xl font-bold text-amber-600 mb-3">{t('about.growth.founding.title')}</h3>
              <p className="text-gray-600">{t('about.growth.founding.description')}</p>
            </div> */}
<div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300">
  <h3 className="text-xl font-bold text-amber-600 mb-3 flex items-center">
    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
    {t('about.growth.founding.title')}
  </h3>
  
  <p className="text-gray-600 mb-4">
    {t('about.growth.founding.description')}
  </p>

  {/* Additional Elements */}
  <div className="mt-4 pt-4 border-t border-amber-100">
    <div className="flex items-start space-x-3">
      <div className="bg-amber-100 p-2 rounded-full">
        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{t('about.growth.founding.fact1.title')}</h4>
        <p className="text-sm text-gray-600">{t('about.growth.founding.fact1.detail')}</p>
      </div>
    </div>

    <div className="flex items-start space-x-3 mt-3">
      <div className="bg-amber-100 p-2 rounded-full">
        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{t('about.growth.founding.fact2.title')}</h4>
        <p className="text-sm text-gray-600">{t('about.growth.founding.fact2.detail')}</p>
      </div>
    </div>
  </div>
</div>
            {/* Expansion */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400">
              <h3 className="text-xl font-bold text-amber-600 mb-3">{t('about.growth.expansion.title')}</h3>
              <p className="text-gray-600">{t('about.growth.expansion.description')}</p>
              <ul className="mt-3 space-y-2">
                {Object.values(t('about.growth.expansion.branches', { returnObjects: true })).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AUM Achievement */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400">
              <h3 className="text-xl font-bold text-amber-600 mb-3">{t('about.growth.aum.title')}</h3>
              <p className="text-gray-600">{t('about.growth.aum.description')}</p>
              <div className="mt-4 p-4 bg-amber-100 rounded-lg">
                <p className="text-amber-800 font-bold text-lg">₹230+ Crores AUM</p>
                <p className="text-amber-700 text-sm">{t('about.growth.aum.subtext')}</p>
              </div>
            </div>
          </div>
        </motion.div>
       

        {/* Our Journey */}
        <motion.div
          id="journey"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-amber-700">{t('about.journey.title')}</h2>
          <p className="text-gray-600 mb-8 text-lg">{t('about.journey.description')}</p>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(t('about.journey.milestones', { returnObjects: true })).map(([year, milestone]) => (
              <motion.div 
                key={year} 
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-500 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-amber-600 mb-2">{year}</h3>
                <p className="text-gray-600">{milestone}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-700">{t('about.whyUs.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t('about.whyUs.points', { returnObjects: true })).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600 pl-14">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          id="values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-700">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(t('about.values.list', { returnObjects: true })).map(([key, value]) => (
              <motion.div 
                key={key}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-amber-50 transition-colors"
              >
                <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {value.icon === 'integrity' && (
                    <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {/* Add other icons for different values */}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          id="leadership"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-amber-700">{t('about.leadership.title')}</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 text-lg mb-6">{t('about.leadership.description')}</p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {Object.entries(t('about.leadership.team', { returnObjects: true })).map(([key, member]) => (
                <div key={key} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-amber-100 overflow-hidden border-4 border-amber-200">
                    {/* Placeholder for team member photo */}
                    <div className="w-full h-full flex items-center justify-center text-amber-600">
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;