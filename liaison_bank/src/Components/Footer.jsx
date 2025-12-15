import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Office Address */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Office Address
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                  <MapPin size={20} className="text-yellow-400" />
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  Plot No. 998, New Ayodh CHS, 14th road, near Link-us Infotel, Kher Nagar, Mumbai- 400052
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Phone size={16} className="text-yellow-400" />
                  </div>
                  <p className="font-semibold text-white">Phone</p>
                </div>
                <p className="text-gray-400 pl-11 hover:text-yellow-400 transition-colors cursor-pointer">
                  (+91) 9004574930
                </p>
                <p className="text-gray-400 pl-11 hover:text-yellow-400 transition-colors cursor-pointer">
                  (+91) 9819788930
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Mail size={16} className="text-yellow-400" />
                  </div>
                  <p className="font-semibold text-white">Email</p>
                </div>
                <p className="text-gray-400 pl-11 hover:text-yellow-400 transition-colors cursor-pointer">
                  ceo.desk@liaisonbank.com
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400 pl-11">
                <Clock size={16} className="text-yellow-400" />
                <span>Mon - Sat : 9:30am to 06:30pm</span>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Important Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', `CEO's Desk`, 'Careers', 'Client', 'Process', 'Article'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="group flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-all duration-200"
                  >
                    <ArrowRight
                      size={16}
                      className="opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-yellow-400"
                    />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Information
            </h3>
            <ul className="space-y-3">
              {['Testimonials', 'Contact Us', 'Privacy Policy', 'Terms and Conditions'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-all duration-200"
                  >
                    <ArrowRight
                      size={16}
                      className="opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-yellow-400"
                    />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-yellow-400/20">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates and insights</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Copyright 2024 Liaison Bank. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;