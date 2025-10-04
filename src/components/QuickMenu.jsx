// import React, { useState } from 'react';
import { Menu, X, Home, Settings, User, Bell, Search, HelpCircle, Star, MessageSquare } from 'lucide-react';

const QuickMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Dashboard', color: 'bg-blue-500' },
    { id: 'profile', icon: User, label: 'Profile', color: 'bg-green-500' },
    { id: 'notifications', icon: Bell, label: 'Notifications', color: 'bg-red-500' },
    { id: 'messages', icon: MessageSquare, label: 'Messages', color: 'bg-purple-500' },
    { id: 'favorites', icon: Star, label: 'Favorites', color: 'bg-yellow-500' },
    { id: 'help', icon: HelpCircle, label: 'Help & Support', color: 'bg-indigo-500' },
    { id: 'settings', icon: Settings, label: 'Settings', color: 'bg-gray-500' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      {/* Main Toggle Button */}
      <button
        onClick={toggleMenu}
        className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Quick Menu */}
      {isOpen && (
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-64">
            {/* Menu Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
              <h3 className="text-white font-semibold text-lg">Quick Menu</h3>
              <p className="text-indigo-100 text-sm">Access your tools quickly</p>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 mb-2 last:mb-0 ${
                      activeItem === item.id
                        ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeItem === item.id ? item.color : 'bg-gray-100'}`}>
                      <IconComponent size={18} className={activeItem === item.id ? 'text-white' : ''} />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Click outside to close menu
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Close Menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default QuickMenu;