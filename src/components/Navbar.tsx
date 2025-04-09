import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };
  return <nav className="bg-[#3a0ca3] text-white w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold" onClick={closeMenu}>
              <span className="text-base md:text-xl">
                Kamma Mahila Souharda
              </span>
              <span className="block text-xs md:text-sm text-pink-200">
                Credit Co-operative Limited
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/about" className="hover:text-[#f72585] transition-colors">
                About Us
              </Link>
              <Link to="/committee" className="hover:text-[#f72585] transition-colors">
                Committee Members
              </Link>
              <Link to="/services" className="hover:text-[#f72585] transition-colors">
                Bank Services
              </Link>
              <Link to="/empowerment" className="hover:text-[#f72585] transition-colors">
                Empowerment Programs
              </Link>
              <Link to="/news" className="hover:text-[#f72585] transition-colors">
                News & Events
              </Link>
              <Link to="/contact" className="hover:text-[#f72585] transition-colors">
                Contact
              </Link>
              <Link to="/register" className="px-4 py-2 bg-[#f72585] text-white rounded-lg hover:bg-[#d91a70] transition-colors">
                Become a Member
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-lg hover:bg-[#4b1bc4] transition-colors" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-[#3a0ca3] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`} style={{
      top: '5rem'
    }}>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/about" className="px-4 py-3 hover:bg-[#4b1bc4] rounded-lg transition-colors" onClick={closeMenu}>
            About Us
          </Link>
          <Link to="/committee" className="px-4 py-3 hover:bg-[#4b1bc4] rounded-lg transition-colors" onClick={closeMenu}>
            Committee Members
          </Link>
          <Link to="/services" className="px-4 py-3 hover:bg-[#4b1bc4] rounded-lg transition-colors" onClick={closeMenu}>
            Bank Services
          </Link>
          <Link to="/empowerment" className="px-4 py-3 hover:bg-[#4b1bc4] rounded-lg transition-colors" onClick={closeMenu}>
            Empowerment Programs
          </Link>
          <Link to="/news" className="px-4 py-3 hover:bg-[#4b1bc4] rounded-lg transition-colors" onClick={closeMenu}>
            News & Events
          </Link>
          <Link to="/contact" className="px-4 py-3 hover:bg-[#4b1bc4] rounded-lg transition-colors" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/register" className="px-4 py-3 bg-[#f72585] text-white rounded-lg hover:bg-[#d91a70] transition-colors text-center" onClick={closeMenu}>
            Become a Member
          </Link>
        </div>
      </div>
    </nav>;
};