import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return <nav className="bg-[#3a0ca3] text-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-bold">
              <span className="text-xl">Kamma Mahila Souharda</span>
              <span className="block text-sm text-pink-200">
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
            </div>
          </div>
        </div>
      </div>
    </nav>;
};