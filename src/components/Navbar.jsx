import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import NavDropdown from './NavDropdown';
import LanguageDropdown from './LanguageDropdown';
import Button from './Button';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navItems = [
    {
      title: t('nav.about'),
      path: '/about',
      dropdown: [
        { title: t('Company'), path: '/about/company' },
        { title: t('History'), path: '/about/history' },
        { title: t('Mission'), path: '/about/mission' },
        { title: t('Leadership'), path: '/about/leadership' }
      ]
    },
    {
      title: t('nav.services'),
      path: '/services',
      dropdown: [
        { title: t('Gold Loan Services '), path: '/services/loans' },
        { title: t('Loan Application Process'), path: '/services/process' },
        { title: t('Benefits of Gold Loans'), path: '/services/benefits' },
        { title: t('Value-Added Services'), path: '/services/valueservices' }
      ]
    },
    { title: t('nav.gallery'), path: '/gallery' },
    { title: t('nav.team'), path: '/team' },
    { title: t('nav.career'), path: '/career' },
    // { title: t('nav.contact'), path: '/contact' },
    { title: t('nav.support'), path: '/support' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`bg-white shadow-lg transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
      

<div className="flex items-center space-x-2">
  <img
    src="../image/Logo1.jpg"
    alt="Unigold Finance Logo"
    className="h-10 w-auto object-contain rounded-lg"
  />

  <Link to="/" className="flex flex-col items-center text-center">
  <span className="text-xl sm:text-2xl font-bold text-primary leading-tight">
    UNIGOLD FINANCE
    <span className="align-super text-[10px] sm:text-xs">™</span>
  </span>
  {/* <span className="text-xs sm:text-sm text-secondary font-bold -mt-0.5 sm:-mt-1">
    GOLD LOAN
  </span> */}
<span className="text-sm sm:text-base text-yellow-500 font-bold -mt-0.5 sm:-mt-1">
  GOLD LOAN
</span>

</Link>

</div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center font-bold space-x-1 xl:space-x-2">
{navItems.map((item, index) => (
    <div
      key={item.path}
      className="text-gray-700 hover:text-primary px-1 py-2 rounded-md text-sm transition-colors duration-200 border-r border-gray-300 last:border-r-0"     
    >
      {item.dropdown ? (
        <NavDropdown
          className="font-bold"
          item={{
            ...item,
            title: <span className="font-bold">{item.title}</span>,
          }}
        />
      ) : (
        <Link
          to={item.path}
          className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm transition-colors duration-200"
        >
          {item.title}
        </Link>
      )}
    </div>
  ))}

      <div className="ml-2">
        <LanguageDropdown />
      </div>
      <Button />
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageDropdown />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <div className="font-medium px-3 py-2 text-gray-700">{item.title}</div>
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          to={dropItem.path}
                          className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-6 py-2 rounded-md text-sm"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <button className="primary-button w-full mt-2">{t('nav.applyNow')}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;