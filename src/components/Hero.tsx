import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
export const Hero = () => {
  return <div className="relative bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#f72585]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px] px-4 py-16">
          <div className="text-white space-y-6 md:pr-8 relative z-10">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm mb-4">
              <p className="text-sm font-medium text-pink-200">
                Empowering Women Since 2011
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Kamma Mahila</span>
              <span className="block text-pink-200">Souharda</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-purple-100 opacity-90">
              Credit Co-operative Limited
            </h2>
            <p className="text-lg text-purple-50 max-w-xl">
              Join Karnataka's premier women-managed cooperative society
              providing financial services and entrepreneurship support.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/register" className="inline-flex items-center px-6 py-3 bg-[#f72585] text-white rounded-lg font-semibold hover:bg-[#d91a70] transition-colors duration-200 shadow-lg group">
                Become a Member
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold">1800+</p>
                <p className="text-sm text-purple-100">Active Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold">₹1Cr+</p>
                <p className="text-sm text-purple-100">Share Capital</p>
              </div>
              <div>
                <p className="text-3xl font-bold">12%</p>
                <p className="text-sm text-purple-100">Max Dividend</p>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" alt="Women entrepreneurs in meeting" className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-white text-sm font-medium">
                "Empowering women through financial independence and
                entrepreneurship"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};