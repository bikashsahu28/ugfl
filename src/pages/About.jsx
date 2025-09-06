import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GiNewShoot, GiTransparentTubes } from 'react-icons/gi';
import { AiFillCustomerService } from 'react-icons/ai';
import { MdOutlineSecurity } from 'react-icons/md';
import { FaBuilding, FaCircle } from 'react-icons/fa';
import { BsGraphUpArrow, BsPersonCircle } from 'react-icons/bs';
import { LuCalendar1 } from 'react-icons/lu';
import { IoMdEye } from 'react-icons/io';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

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
  <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full flex flex-wrap">
            {Array.from({ length: 150 }).map((_, i) => (
              <FaCircle
                key={i}
                className="text-white "
                style={{
                  fontSize: "55px",
                  margin: "22px",
                }}
              />
            ))}
          </div>
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
        <FaBuilding className='h-8 w-8 text-white-100' />

        Our Story
      </div>
    </motion.div>
  </div>
</motion.div>

      <div className="max-w-7xl mx-auto px-4 py-3">

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
          
<div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-shadow duration-300">
  <h3 className="text-xl font-bold text-amber-600 mb-3 flex items-center">
    <BsGraphUpArrow className='h-6 w-6 mr-2' />
    {t('about.growth.founding.title')}
  </h3>
  
  <p className="text-gray-600 mb-4">
    {t('about.growth.founding.description')}
  </p>

  {/* Additional Elements */}
  <div className="mt-4 pt-4 border-t border-amber-100">
    <div className="flex items-start space-x-3">
      <div className="bg-amber-100 p-2 rounded-full">
        <LuCalendar1 className='h-6 w-6 text-amber-600' />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{t('about.growth.founding.fact1.title')}</h4>
        <p className="text-sm text-gray-600">{t('about.growth.founding.fact1.detail')}</p>
      </div>
    </div>

    <div className="flex items-start space-x-3 mt-3">
      <div className="bg-amber-100 p-2 rounded-full">
        <IoMdEye className='h-6 w-6 text-amber-600' />
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
                    <IoCheckmarkCircleSharp className='h-5 w-5 text-amber-500 mr-2 mt-0.5' />
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
          <h2 className="text-3xl font-bold mb-6 text-center text-amber-700">{t('about.journey.title')}</h2>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-700">{t('about.whyUs.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t('about.whyUs.points', { returnObjects: true })).map(([key, value]) => (
              <div key={key} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <IoCheckmarkCircleSharp className='h-6 w-6 text-amber-600' />
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
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-700">{t('about.values.title')}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(t('about.values.list', { returnObjects: true })).map(([key, value]) => (
              <motion.div 
                key={key}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-amber-50 transition-colors"
              >
                <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  {value.icon === 'integrity' && (
  <MdOutlineSecurity className="w-8 h-8 text-amber-600 flex-shrink-0" />
)}
          {value.icon === 'transparency' && (
  <GiTransparentTubes className="w-8 h-8 text-amber-600 flex-shrink-0" />
)}
{value.icon === 'customer' && (
  <AiFillCustomerService className="w-8 h-8 text-amber-600 flex-shrink-0" />
)}
{value.icon === 'innovation' && (
  <GiNewShoot className="w-8 h-8 text-amber-600 flex-shrink-0" />
)}

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
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-700">{t('about.leadership.title')}</h2>
          <div className="bg-white rounded-xl shadow-lg p-2 ">
            <p className="text-gray-600 text-center text-lg mb-6">{t('about.leadership.description')}</p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {Object.entries(t('about.leadership.team', { returnObjects: true })).map(([key, member]) => (
                <div key={key} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-amber-100 overflow-hidden border-4 border-amber-200">
                    {/* Placeholder for team member photo */}
                    <div className="w-full h-full flex items-center justify-center text-amber-600">
                      <BsPersonCircle className='h-16 w-16 text-amber-600' />
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