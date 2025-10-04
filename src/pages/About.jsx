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

   const milestones = [
    {
      year: "2018",
      title: "Founding Vision",
      description: "Started with a simple idea to create meaningful digital experiences that connect people and brands.",
      icon: "🌱"
    },
    {
      year: "2019",
      title: "First Breakthrough",
      description: "Launched our flagship product, serving 500+ users and establishing our core technology stack.",
      icon: "🚀"
    },
    {
      year: "2020",
      title: "Global Expansion",
      description: "Expanded operations internationally, serving clients across 15 countries and building a diverse team.",
      icon: "🌍"
    },
    {
      year: "2021",
      title: "Award Recognition",
      description: "Received industry accolades for innovation and user experience design, recognized as Top Startup.",
      icon: "🏆"
    },
    {
      year: "2022",
      title: "Technology Leadership",
      description: "Pioneered AI-driven solutions that transformed our platform's capabilities and efficiency.",
      icon: "⚡"
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Launched educational initiatives and open-source projects, empowering 10,000+ developers worldwide.",
      icon: "🤝"
    },
    {
      year: "2024",
      title: "Sustainable Growth",
      description: "Achieved profitability while maintaining commitment to ethical practices and environmental sustainability.",
      icon: "🌳"
    }
  ];

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
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
      className="mb-16 px-4"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500">
          Our Journey
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          From a humble beginning to an industry leader, our path has been defined by innovation, perseverance, and a commitment to excellence.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-amber-200 to-transparent dark:from-amber-700 dark:to-transparent"></div>

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg z-10 border-4 border-white dark:border-gray-800"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 p-6 rounded-2xl shadow-xl bg-white dark:bg-gray-800 transform transition-all duration-300 hover:shadow-2xl ${
                index % 2 === 0 ? 'mr-8' : 'ml-8'
              }`}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{milestone.icon}</span>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {milestone.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {milestone.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="mt-12 flex justify-center">
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 bg-amber-300 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
        </motion.div>

        {/* Why Choose Us */}
      

        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeIn}
  transition={{ duration: 0.8, staggerChildren: 0.2 }}
  className="mb-20 py-12 px-4 bg-gradient-to-br from-amber-50 to-white"
>
  <div className="max-w-6xl mx-auto">
    {/* Enhanced Header */}
    <motion.div
      variants={fadeIn}
      className="text-center mb-12"
    >
      <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
      {t('about.whyUs.subtitle', { defaultValue: 'Our Advantages' })}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-amber-500 bg-clip-text text-transparent">
        {t('about.whyUs.title')}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        {t('about.whyUs.description', { defaultValue: 'Discover what sets us apart and why we are the right choice for your needs' })}
      </p>
    </motion.div>

    {/* Enhanced Cards Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(t('about.whyUs.points', { returnObjects: true })).map(([key, value], index) => (
        <motion.div
          key={key}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: index * 0.1 }
            }
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
          className="group relative"
        >
          {/* Card with enhanced styling */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            
            {/* Icon container with enhanced design */}
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-xl shadow-md mr-4 z-10 relative">
                  <IoCheckmarkCircleSharp className='h-7 w-7 text-white' />
                </div>
                {/* Subtle decorative element */}
                <div className="absolute -inset-2 bg-amber-200 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
            </div>
            
            {/* Description with improved typography */}
            <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
            
            {/* Optional decorative number */}
            <div className="absolute bottom-4 right-4 text-amber-100 text-6xl font-bold opacity-30 -z-10">
              {index + 1}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Optional CTA Section */}
    <motion.div
      variants={fadeIn}
      className="text-center mt-12"
    >
      <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-amber-600 hover:to-amber-700">
        {t('about.whyUs.cta', { defaultValue: 'Learn More About Us' })}
      </button>
    </motion.div>
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