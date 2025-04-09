import React from 'react';
import { ArrowRight } from 'lucide-react';
export const BecomeAMember = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };
  return <div className="w-full bg-[#f5f0ff] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3a0ca3] mb-4">
            Become a Member
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our cooperative society and be part of a growing community of
            empowered women entrepreneurs.
          </p>
        </div>
        <div className="bg-white rounded-lg p-8 border-2 border-[#7209b7]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#3a0ca3] pb-2 border-b border-gray-200">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth *
                  </label>
                  <input type="date" id="dob" name="dob" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="caste" className="block text-sm font-medium text-gray-700 mb-1">
                    Caste *
                  </label>
                  <select id="caste" name="caste" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent">
                    <option value="">Select Caste</option>
                    <option value="kamma">Kamma</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#3a0ca3] pb-2 border-b border-gray-200">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input type="tel" id="phone" name="phone" required pattern="[0-9]{10}" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent" />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <textarea id="address" name="address" rows={3} required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7209b7] focus:border-transparent"></textarea>
              </div>
            </div>
            {/* Terms and Submit */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-[#7209b7] focus:ring-[#7209b7] border-gray-300 rounded" />
                </div>
                <div className="ml-3">
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-[#f72585] hover:text-[#d91a70]">
                      terms and conditions
                    </a>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full md:w-auto px-6 py-3 bg-[#f72585] text-white rounded-lg font-semibold hover:bg-[#d91a70] transition-colors duration-200 flex items-center justify-center">
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>;
};