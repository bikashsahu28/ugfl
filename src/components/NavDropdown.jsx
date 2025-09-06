import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const NavDropdown = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => window.innerWidth > 1024 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth > 1024 && setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200"
      >
        {item.title}
        <HiChevronDown className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />

      </button>

      {isOpen && (
        <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
          {item.dropdown.map((dropItem) => (
            <Link
              key={dropItem.path}
              to={dropItem.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              {dropItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;