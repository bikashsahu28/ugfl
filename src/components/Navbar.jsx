import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import NavDropdown from './NavDropdown';
import LanguageDropdown from './LanguageDropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    {
      title: t('nav.services'),
      path: '/services',
      // dropdown: [
      //   { title: t('nav.goldLoan'), path: '/services#gold-loan' },
      //   { title: t('nav.silverLoan'), path: '/services#silver-loan' },
      //   { title: t('nav.jewelleryLoan'), path: '/services#jewellery-loan' }
      // ]
    },
    {
      title: t('nav.about'),
      path: '/about',
      // dropdown: [
      //   { title: t('nav.journey'), path: '/about#journey' },
      //   { title: t('nav.leadership'), path: '/about#leadership' },
      //   { title: t('nav.values'), path: '/about#values' }
      // ]
    },
    { title: t('nav.gallery'), path: '/gallery' },
    { title: t('nav.support'), path: '/support' },
    { title: t('nav.career'), path: '/career' },
    { title: t('nav.contact'), path: '/contact' },
    { title: t('nav.team'), path: '/team' }
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">UniGold</span>
              <span className="text-secondary">Finance</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              item.dropdown ? (
                <NavDropdown key={item.path} item={item} />
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-700 hover:text-primary px-3 py-2"
                >
                  {item.title}
                </Link>
              )
            ))}
            <LanguageDropdown />
            <button className="primary-button">{t('nav.applyNow')}</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageDropdown />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="font-medium px-3 py-2">{item.title}</div>
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.path}
                          to={dropItem.path}
                          className="block text-gray-600 hover:text-primary px-6 py-1"
                        >
                          {dropItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-primary px-3 py-2"
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