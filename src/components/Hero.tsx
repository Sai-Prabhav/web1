import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
export const Hero = () => {
  return <div className="relative bg-gradient-to-br from-[#3a0ca3] via-[#7209b7] to-[#f72585]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 md:pr-8">
            <div className="inline-block px-4 py-1 bg-white/10 rounded-full backdrop-blur-sm">
              <p className="text-sm font-medium text-pink-200">
                Empowering Women Since 2011
              </p>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Kamma Mahila</span>
                <span className="block text-pink-200">Souharda</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-purple-100 opacity-90">
                Credit Co-operative Limited
              </h2>
            </div>
            <p className="text-base md:text-lg text-purple-50 max-w-md">
              Join Karnataka's premier women-managed cooperative society
              providing financial services and entrepreneurship support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/register" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#f72585] text-white rounded-lg font-semibold hover:bg-[#d91a70] transition-colors duration-200 shadow-lg group text-sm md:text-base">
                Become a Member
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm text-sm md:text-base">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-md md:max-w-none">
              <div className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  1800+
                </p>
                <p className="text-xs md:text-sm text-purple-100">
                  Active Members
                </p>
              </div>
              <div className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  ₹1Cr+
                </p>
                <p className="text-xs md:text-sm text-purple-100">
                  Share Capital
                </p>
              </div>
              <div className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
                <p className="text-2xl md:text-3xl font-bold text-white">12%</p>
                <p className="text-xs md:text-sm text-purple-100">
                  Max Dividend
                </p>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-1 mt-8 md:mt-0 md:col-start-2">
            <div className="relative w-full max-w-sm mx-auto md:max-w-none">
              <div className="relative">
                <div className="absolute inset-0 -m-4 bg-gradient-to-r from-[#3a0ca3] to-[#7209b7] rounded-[2.5rem] blur-2xl opacity-30 transform rotate-3"></div>
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <div className="aspect-[4/3] md:aspect-[16/10]">
                    <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80" alt="Women entrepreneurs in meeting" className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a0ca3]/50 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
                  <p className="text-white text-sm md:text-base font-medium text-center">
                    "Empowering women through financial independence and
                    entrepreneurship"
                  </p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#f72585]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#3a0ca3]/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};