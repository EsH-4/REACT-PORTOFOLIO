import React, { useState } from 'react'
import logo from '../assets/zLogo.png'
import { FaLinkedin, FaFacebook, FaSquareTwitter, FaInstagram } from 'react-icons/fa6'
import './Navbar.css' 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-12 w-auto transform hover:scale-110 transition-transform duration-300" src={logo} alt="Kevin Rush Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Beranda</a>
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tentang</a>
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Layanan</a>
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Kontak</a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <a href="https://www.youtube.com/watch?v=8ybW48rKBME" className="social-icon text-gray-400 hover:text-white mx-2"><FaLinkedin className="h-5 w-5" /></a>
              <a href="https://www.youtube.com/watch?v=8ybW48rKBME" className="social-icon text-gray-400 hover:text-white mx-2"><FaFacebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/kulantors?igsh=MW45M292djVreXhrdw%3D%3D&utm_source=qr" className="social-icon text-gray-400 hover:text-white mx-2"><FaInstagram className="h-5 w-5" /></a>
              <a href="https://x.com/Kulantors?lang=en" className="social-icon text-gray-400 hover:text-white mx-2"><FaSquareTwitter className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-300"
            >
              <span className="sr-only">Buka menu utama</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="" className="nav-link block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Beranda</a>
            <a href="#" className="nav-link block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Tentang</a>
            <a href="#" className="nav-link block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Layanan</a>
            <a href="#" className="nav-link block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">Kontak</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={logo} alt="Zamzam" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">Zamzam</div>
                <div className="text-sm font-medium leading-none text-gray-400">mzam.ibrahimovic@gmail.com</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="social-icon block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="social-icon block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="social-icon block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="social-icon block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;