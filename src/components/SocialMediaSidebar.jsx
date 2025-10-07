import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaApple, FaFacebook, FaHandshake, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsAndroid2 } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoWhatsapp, IoPeopleSharp, IoPersonSharp } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';
import { AiOutlineLogin } from 'react-icons/ai';

const SocialMediaSidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const loginRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const socialMedia = [
    // { 
    //   name: 'Apple', 
    //   icon: <FaApple />,
    //   color: 'bg-black', 
    //   hoverColor: 'bg-gray-900',
    //   url: 'https://www.apple.com'
    // },
    { 
      name: 'Android', 
      icon: <BsAndroid2 />,
      color: 'bg-black', 
      hoverColor: 'bg-green-600',
      url: 'https://www.android.com'
    },
   
    // { 
    //   name: 'Twitter', 
    //   icon: <FaXTwitter />, 
    //   color: 'bg-black', 
    //   hoverColor: 'bg-gray-900',
    //   url: 'https://www.twitter.com'
    // },
    { 
      name: 'LinkedIn', 
      icon: <FaLinkedin />, 
      color: 'bg-blue-700', 
      hoverColor: 'bg-blue-800',
      url: 'https://www.linkedin.com/company/uni-gold-finance/'
    },
    
    { 
      name: 'Instagram', 
      icon: <FaInstagram />, 
      color: 'bg-pink-500', 
      hoverColor: 'bg-pink-600',
      url: 'https://www.instagram.com/financeunigold?igsh=MWN0bDZuZTc2am5kYg=='
    },
     { 
      name: 'Facebook', 
      icon: <FaFacebook />, 
      color: 'bg-blue-600', 
      hoverColor: 'bg-blue-700',
      url: 'https://www.facebook.com/profile.php?id=61572980673687'
    },
    { 
      name: 'YouTube', 
      icon: <FaYoutube />, 
      color: 'bg-red-600', 
      hoverColor: 'bg-red-700',
      url: 'https://youtube.com/@unigoldfinanceofficial?si=3SiqvIiIsOs1Ne7Z'
    },
    { 
      name: 'WhatsApp', 
      icon: <IoLogoWhatsapp />, 
      color: 'bg-green-600', 
      hoverColor: 'bg-green-700',
      url: 'https://wa.me/1234567890'
    }
  ];
  
  const loginOptions = [
    { role: 'User', icon: <IoPersonSharp />, color: 'bg-blue-500' },
    { role: 'Customer', icon: <IoPeopleSharp />, color: 'bg-green-500' },
    { role: 'Officer', icon: <FaHandshake /> , color: 'bg-purple-500' },
    { role: 'Admin', icon: <RiAdminFill />, color: 'bg-red-500' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setShowLoginOptions(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle social media icon click
  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:flex fixed inset-y-0 left-0 right-0 z-50 items-center justify-between pointer-events-none">
        {/* Social Media Icons - Left Side */}
        <div className="flex flex-col space-y-1 pointer-events-auto">
          {socialMedia.map((platform, index) => (
            <motion.div
              key={index}
              className={`w-12 h-12 ${platform.color} flex items-center justify-center cursor-pointer rounded-r-lg transition-all duration-300 ${
                hoveredIndex === index ? 'w-48' : ''
              }`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialMediaClick(platform.url)}
            >
              <div className="flex items-center justify-between w-full px-3">
                <span className="text-white text-xl">{platform.icon}</span>
                {hoveredIndex === index && (
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{platform.name}</span>
                    <span className="text-white text-xl">{platform.icon}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Login Button - Right Side */}
        <div className="relative pointer-events-auto" ref={loginRef}>
          <motion.button
            className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer rounded-l-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            // className="flex items-center gap-1 px-4 py-2 text-white font-semibold bg-amber-600 hover:bg-amber-700 rounded-full shadow transition-all"
            onClick={() => setShowLoginOptions(!showLoginOptions)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-lg "><AiOutlineLogin /></span>
          </motion.button>
          
          {/* Login Options Popup */}
          <AnimatePresence>
            {showLoginOptions && (
              <motion.div
                className="absolute right-12 top-0 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-2 min-w-48 z-50"
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
              >
                <div className="py-1">
                  {loginOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                        index === loginOptions.length - 1 ? '' : 'mb-1'
                      } hover:bg-gray-100 dark:hover:bg-gray-700`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        console.log(`Login as ${option.role}`);
                        setShowLoginOptions(false);
                      }}
                    >
                      <span className={`w-8 h-8 ${option.color} rounded-full flex items-center justify-center text-white`}>
                        {option.icon}
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">{option.role}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout - Left Side */}
      <div className="md:hidden fixed bottom-4 left-4 z-50" ref={mobileMenuRef}>
        {/* Mobile Menu Button */}
        <motion.button
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-2xl"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: showMobileMenu ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-xl">{showMobileMenu ? '✕' : '☰'}</span>
        </motion.button>

        {/* Mobile Social Media Options */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              className="absolute bottom-16 left-0 mb-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-3 min-w-48"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="space-y-2">
                {/* Social Media Options */}
                <div className="pb-2 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-2 mb-2">Social Media</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {socialMedia.map((platform, index) => (
                      <motion.button
                        key={index}
                        className={`w-12 h-12 ${platform.color} rounded-xl flex items-center justify-center text-white text-lg shadow-md hover:${platform.hoverColor} transition-colors duration-200`}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          handleSocialMediaClick(platform.url);
                          setShowMobileMenu(false);
                        }}
                        title={platform.name}
                      >
                        {platform.icon}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Login Options */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-2 mb-2">Login As</h3>
                  <div className="space-y-1">
                    {loginOptions.map((option, index) => (
                      <motion.button
                        key={index}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          console.log(`Login as ${option.role}`);
                          setShowMobileMenu(false);
                        }}
                      >
                        <span className={`w-8 h-8 ${option.color} rounded-full flex items-center justify-center text-white`}>
                          {option.icon}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white text-sm">{option.role}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMobileMenu(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialMediaSidebar;