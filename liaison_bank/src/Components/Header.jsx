import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Our Expertise",
      path: "/expertise",
      dropdown: [
        "Residential",
        "For Garment Manufacturing Units",
        "Hospitals & Nursing Homes",
        "Hospitality",
      ],
    },
    { name: "Our Clients", path: "/clients" },
    { name: "Process", path: "/process" },
    { name: "Contact Us", path: "/contact" },
    {
      name: "Associate Member",
      path: "https://liaisonbank.frappe.cloud/association-member-form/new",
    },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-white shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center cursor-pointer">
              <img
                src="/Logo.webp"
                alt="Liaison Bank Logo"
                className="w-14 h-14 object-contain"
              />
              <div className="ml-4">
                <div className="text-lg font-bold text-gray-800">LIAISON</div>
                <div className="text-xs font-semibold text-yellow-500 tracking-wider">
                  BANK
                </div>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {/* Parent item */}
                  <a
                    href={item.path}
                    className="flex items-center px-4 py-2 text-gray-700
                   hover:text-yellow-500 font-medium rounded-lg
                   hover:bg-yellow-50 transition"
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </a>

                  {/* Submenu */}
                  {item.dropdown && (
                    <div
                      className="
            absolute top-full left-0 mt-2 w-64
            bg-white shadow-xl rounded-xl py-2 border
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            z-50
          "
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-6 py-3 text-gray-700
                         hover:bg-yellow-50 hover:text-yellow-600 transition"
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <button
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE DRAWER */}
      <div
        className={`fixed inset-0 z-50 xl:hidden transition ${
          isMobileMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl
            transform transition-transform duration-300
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <span className="text-lg font-semibold text-gray-700">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Drawer Menu */}
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  className="w-full flex justify-between items-center py-3 px-3
                    text-gray-700 hover:text-yellow-500 hover:bg-yellow-50
                    rounded-lg transition font-medium"
                  onClick={() =>
                    item.dropdown
                      ? setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      : setIsMobileMenuOpen(false)
                  }
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block py-2 px-3 text-sm text-gray-600
                          hover:text-yellow-500 hover:bg-yellow-50 rounded-lg"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
