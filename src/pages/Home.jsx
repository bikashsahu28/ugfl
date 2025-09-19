import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeCarousel from '../components/HomeCarousel';
import LoanPopup from '../components/LoanPopup';
import LiveChat from '../components/LiveChat';
import GoldLoanCalculator from '../components/CalculatorComponent';
import FAQSections from '../components/mainfaq';
import { GrNext } from 'react-icons/gr';
import { IoCallOutline, IoChevronBack } from 'react-icons/io5';
import { GiTakeMyMoney } from 'react-icons/gi';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import PastMentors from '../components/PastMentors';
import { FaArrowRight, FaRegClock, FaStar } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import UnigoldComponent from '../components/UnigoldComponent';
import SubNavbar from '../components/SubNavBar';

function Home() {
  const [goldPrice, setGoldPrice] = useState(null);

  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  // Adding these scroll effects at the component level

  useEffect(() => {
    setGoldPrice(6810.50);
    
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 3;
      setGoldPrice(prev => +(prev + randomChange).toFixed(2));
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  // Calculate loan amount estimate
  const testimonials = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Got my loan within 30 minutes. Excellent service!",
    location: "Bhubaneswar"
  },
  {
    name: "Priya Sharma",
    rating: 4,
    review: "Very transparent process and good interest rates.",
    location: "Cuttack"
  },
  {
    name: "Amit Patel",
    rating: 5,
    review: "My gold was kept safely and returned without any issues.",
    location: "Puri"
  },
  {
    name: "Sneha Mohanty",
    rating: 5,
    review: "Best gold loan service in town with competitive rates.",
    location: "Rourkela"
  },
  {
    name: "Deepak Singh",
    rating: 4,
    review: "Friendly staff and quick processing. Highly recommended!",
    location: "Sambalpur"
  },
  {
    name: "Ananya Das",
    rating: 5,
    review: "Got higher value for my gold than other finance companies.",
    location: "Balasore"
  }
];

const [currentIndex, setCurrentIndex] = useState(0);
const testimonialsPerPage = 3;
const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

const nextTestimonials = () => {
  setCurrentIndex((prev) => (prev + 1) % totalPages);
};

const prevTestimonials = () => {
  setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
};

const visibleTestimonials = testimonials.slice(
  currentIndex * testimonialsPerPage,
  (currentIndex + 1) * testimonialsPerPage
);


  const processSteps = [
    {
      title: "Bring your gold",
      description: "Visit our branch with your gold ornaments"
    },
    {
      title: "Get it evaluated",
      description: "Our experts will evaluate your gold purity and weight"
    },
    {
      title: "Receive money",
      description: "Get cash transferred to your account instantly"
    },
    {
      title: "Repay & reclaim",
      description: "Pay back the loan and get your gold back"
    }
  ];
 const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className="min-h-screen ">
                  <SubNavbar />
            {/* Carousel Section */}
            <section className="py-3 bg-gray-50 bg-gradient-to-b from-amber-50 to-white">
              <div className="max-w-7xl mx-auto px-4">
                <HomeCarousel />
              </div>
            </section>

     
      <LoanPopup />

      <UnigoldComponent />
      {/* Why Choose Us Section */}
      <section className="py-5 bg-gray-50 bg-gradient-to-b from-amber-50 to-white">
  <div className="max-w-7xl mx-auto px-4">

<h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          {t('whyChooseUs.title')}
        </span>
      </h1>

     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="text-center rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all 
      duration-300 hover:-translate-y-1 group p-6 rounded-lg bg-white shadow-lg">
        <div className="text-4xl mb-4">💸</div>
        <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.features.lowInterest.title')}</h3>
        <p className="text-gray-600">{t('whyChooseUs.features.lowInterest.desc')}</p>
      </div>
      <div className="rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group
      text-center p-6 rounded-lg bg-white shadow-lg">
        <div className="text-4xl mb-4">⚡</div>
        <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.features.instantDisbursal.title')}</h3>
        <p className="text-gray-600">{t('whyChooseUs.features.instantDisbursal.desc')}</p>
      </div>
      <div className="rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group
      text-center p-6 rounded-lg bg-white shadow-lg">
        <div className="text-4xl mb-4">🔒</div>
        <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.features.safeStorage.title')}</h3>
        <p className="text-gray-600">{t('whyChooseUs.features.safeStorage.desc')}</p>
      </div>
      <div className="rounded-xl shadow-lg overflow-hidden border-t-4 border-amber-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group
      text-center p-6 rounded-lg bg-white shadow-lg">
        <div className="text-4xl mb-4">🔄</div>
        <h3 className="text-xl font-semibold mb-2">{t('whyChooseUs.features.flexibleRepayment.title')}</h3>
        <p className="text-gray-600">{t('whyChooseUs.features.flexibleRepayment.desc')}</p>
      </div>
    </div>
    <div className="mt-12 text-center">
      <p className="text-xl font-medium">
        {t('whyChooseUs.trusted')} <span className="text-primary font-bold">30,000+</span> {t('whyChooseUs.customers')}
      </p>
    </div>
  </div>
</section>
      {/* Hero Section (Updated) */}
      <section className="relative bg-gradient-to-r from-primary to-red-700 text-white py-6 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
    <motion.div 
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="w-64 h-64 rounded-full bg-white"></div>
    </motion.div>
  </div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
    className="text-center"
  >
    {/* Main headline with gold text effect */}
    <motion.h1 
      className="text-4xl md:text-6xl font-bold mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
        {t('hero1.mainTitle')}
      </span>
      <br className="md:hidden" /> {t('hero1.subTitle')}
    </motion.h1>

    {/* USP badges with staggered animation */}
    <motion.div 
      className="flex flex-wrap justify-center gap-2 mb-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.6
          }
        }
      }}
    >
      {t('hero1.badges', { returnObjects: true }).map((item, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <span className="mr-2">✓</span>
          {item}
        </motion.span>
      ))}
    </motion.div>

    {/* Gold price ticker with animation */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="inline-block px-6 py-3 mb-10 bg-black/20 rounded-full backdrop-blur-sm border border-yellow-400/30"
    >
      <div className="flex items-center">
        <div className='text-yellow-400 w-195 h-19'><GiTakeMyMoney />
</div>
        <span className="text-xl font-medium">
          {t('hero1.goldRate')} <span className="text-yellow-400 font-bold">₹{goldPrice}/g</span>
        </span>
      </div>
    </motion.div>

    {/* CTA buttons with hover effects */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <button 
    onClick={() => {
      const calculatorSection = document.getElementById('gold-loan-calculator');
      if (calculatorSection) {
        calculatorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="relative overflow-hidden group bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:text-primary-dark transition-all duration-300 text-lg shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white/30"
  >
    <span className="relative z-10">{t('hero1.cta.checkEligibility')}</span>
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
      <Link
        to="/branch-locator"
        className="relative overflow-hidden  bg-secondary text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
      >
        <span className="relative text-amber-900 z-10">Visit Nearest Branch</span>
      </Link>
    </motion.div>
  </motion.div>
</div>

  {/* Floating gold coins animation */}
  {[...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      initial={{ 
        y: 0, 
        x: Math.random() * 100 - 50, 
        opacity: 0,
        scale: 0.8 + Math.random() * 0.7 // Random initial scale between 0.8-1.5
      }}
      animate={{ 
        y: [0, -30, 0],
        opacity: [0, 0.6, 0],
        x: Math.random() * 100 - 50,
        rotate: [0, 180, 360] // Added rotation for more dynamic effect
      }}
      transition={{
        duration: 7 + Math.random() * 8, // More varied duration (7-15 seconds)
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3 // Increased max delay to 3 seconds
      }}
      className="absolute text-yellow-400"
      style={{
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 100}%`,
        fontSize: `${2 + Math.random() * 3}rem`, // Random size between 2-5rem
        filter: `brightness(${0.8 + Math.random() * 0.5})` // Slightly varied brightness
      }}
    >
      {['🪙', '💰', '💵', '💴', '💶', '💷'][Math.floor(Math.random() * 6)]} {/* Random money emoji */}
    </motion.div>
))}
</section>
{/* Gold Loan Calculator Section */}
<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          transition={{ duration: 0.6 }} className="py-0  " id="gold-loan-calculator">
  <GoldLoanCalculator />
</motion.div>
      {/* How It Works Section */}

<motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          transition={{ duration: 0.6 }} className="py-16 bg-gray-50 " ref={ref}>
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >      
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          How It Works
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id || index}  // Added key prop here - use step.id if available, otherwise fallback to index
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-amber-500 hover:shadow-xl transition-all hover:-translate-y-1 duration-300 relative"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-gray-300">
                <MdOutlineDoubleArrow className="absolute inset-0 m-auto h-8 w-8" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.div>
      {/* Trust & Security Section */}
      <section className="py-16 bg-primary text-white ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trust & Security</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-2">RBI Registered</h3>
              <p>Registered NBFC under RBI guidelines</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">ISO Certified</h3>
              <p>ISO 9001:2015 certified processes</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Bank-Grade Vaults</h3>
              <p>24/7 monitored with biometric access</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Bank Partnerships</h3>
              <p>Tied up with leading national banks</p>
            </div>
          </div>
        </div>
      </section>

  {/* mentor section  */}
  <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          transition={{ duration: 0.6 }} className="py-16 bg-gray-50 " ref={ref}>
          <PastMentors />
          </motion.div>

      {/* Testimonials Section */}
      <section className="py-10 bg-white relative bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          What Our Customers Say
        </span>
      </h1>
          
          <div className="relative">
            <button 
              onClick={prevTestimonials}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark z-10"
              aria-label="Previous testimonials"
            >
              <IoChevronBack />
              
            </button>

            <div className="grid md:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-white rounded-xl border border-amber-300 p-6 shadow-sm hover:shadow-2xl hover:bg-amber-100 transition-all duration-300 transform "

                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.review}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={nextTestimonials}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-primary text-white p-2 rounded-full shadow-md hover:bg-primary-dark z-10"
              aria-label="Next testimonials"
            >
              
              <GrNext />
            </button>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>


      {/* FAQ Section */}
              <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          transition={{ duration: 0.6 }} className="py-1 bg-white relative bg-gradient-to-b from-amber-50 to-white"><FAQSections /></motion.div>

      {/* Map Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
          Visit Us
        </span>
      </h1>
    
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Contact Info Card */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
      >
        <h3 className="text-2xl font-semibold text-primary mb-6">Contact Details</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 text-primary">
              <FaLocationDot className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Corporate Office</h4>
              <p className="text-gray-600">1st Floor, Ridge Residency Complex,
              Baramunda, Bhubaneswar<br/>Odisha 751024, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-primary">
              <IoCallOutline className="h-6 w-6"  />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Contact Us</h4>
              <p className="text-gray-600">
                Phone: <a href="tel:+919777700511" className="hover:text-primary">+91 97777 00511</a><br/>
                Email: <a href="mailto:care@unigoldfinance.com" className="hover:text-primary">care@unigoldfinance.com</a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 text-primary">
              <FaRegClock className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Working Hours</h4>
              <p className="text-gray-600">
                Monday - Saturday: 9:00 AM - 6:00 PM<br/>
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="https://maps.google.com?q=Unigold+Finance+Bhubaneswar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            Get Directions
            <FaArrowRight className="h-5 w-5 ml-2"  />
          </a>          
        </div>
        
      </motion.div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px]"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.4060636512837!2d85.79586770048316!3d20.27708020764988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a70b5d56721d%3A0x433fa09f1676349e!2sUnigold%20Finance!5e1!3m2!1sen!2sin!4v1745214771097!5m2!1sen!2sin"

          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[400px]"
        ></iframe>
      </motion.div>
    </div>
  </div>

     {/* Live Chat Button (fixed position) */}
        <LiveChat />
</section>
    </div>
  );
}

export default Home;