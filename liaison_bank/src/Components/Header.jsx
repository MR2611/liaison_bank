import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Clients', path: '/clients' },
    {
      name: 'Our Expertise',
      path: '/expertise',
      dropdown: [
        'Residential',
        'For Garment Manufacturing Units',
        'Hospitals & Nursing Homes',
        'Hospitality'
      ]
    },
    { name: 'Process', path: '/process' },
    { name: 'Contact Us', path: '/contact' },
    {
      name: 'Associate Member',
      path: 'https://liaisonbank.frappe.cloud/association-member-form/new'
    }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
        : 'bg-white shadow-md py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-400/30 transition-all"></div>
              <img
                src="/Logo.webp"
                alt="Liaison Bank Logo"
                className="relative w-14 h-14 object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="ml-4">
              <div className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                LIAISON
              </div>
              <div className="text-xs font-semibold text-yellow-500 tracking-wider">
                BANK
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.path}
                  className="flex items-center px-4 py-2 text-gray-700 hover:text-yellow-500 font-medium rounded-lg hover:bg-yellow-50 transition-all duration-200"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </a>

                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl rounded-2xl py-2 border border-gray-100 animate-fade-in"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((sub, index) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-yellow-600 transition-all duration-200 font-medium"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                          {sub}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-700" size={24} />
            ) : (
              <Menu className="text-gray-700" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.path}
                  className="block py-3 px-4 text-gray-700 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-yellow-500 hover:bg-yellow-50 rounded-lg transition-all duration-200"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;