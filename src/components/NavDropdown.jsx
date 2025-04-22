import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-gray-700 hover:text-primary px-3 py-2">
        {item.title}
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          {item.dropdown.map((dropItem) => (
            <Link
              key={dropItem.path}
              to={dropItem.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {dropItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavDropdown;