import React, { lazy } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Building, Contact as ContactIcon } from 'lucide-react';
export const Contact = () => {
  return <div className="w-full bg-[#f5f0ff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3a0ca3] mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Visit Us */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
            <div className="flex items-center mb-4">
              <Building className="h-6 w-6 text-[#f72585] mr-2" />
              <h2 className="text-xl font-semibold text-[#3a0ca3]">Visit Us</h2>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">The Bangalore South Center</p>
              <p className="text-gray-600"># 2267, 1st Floor</p>
              <p className="text-gray-600">22nd Cross, K R Road</p>
              <p className="text-gray-600">Banshankari 2nd Stage</p>
              <p className="text-gray-600">Bangalore - 560070</p>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-[#f72585] hover:text-[#d91a70] transition-colors">
              View on Map
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
            <div className="flex items-center mb-4">
              <ContactIcon className="h-6 w-6 text-[#f72585] mr-2" />
              <h2 className="text-xl font-semibold text-[#3a0ca3]">
                Contact Info
              </h2>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 text-[#7209b7] mr-2" />
                  <span className="text-[#3a0ca3] font-medium">Phone</span>
                </div>
                <a href="tel:+918073556254" className="text-gray-600 hover:text-[#f72585] transition-colors pl-7">
                  +91 80735 56254
                </a>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-[#7209b7] mr-2" />
                  <span className="text-[#3a0ca3] font-medium">Email</span>
                </div>
                <a href="mailto:ContactUs@TheBangaloreSouthCenter.Org" className="text-gray-600 hover:text-[#f72585] transition-colors break-words pl-7">
                  ContactUs@TheBangaloreSouthCenter.Org
                </a>
              </div>
            </div>
          </div>
          {/* Office Hours */}
          <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#f72585] mr-2" />
              <h2 className="text-xl font-semibold text-[#3a0ca3]">
                Office Hours
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[#3a0ca3] font-medium mb-2">
                  Monday - Saturday
                </p>
                <p className="text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="text-[#3a0ca3] font-medium mb-2">Sunday</p>
                <p className="text-gray-600">Closed</p>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="bg-white rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200 overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965088866374!2d77.56693!3d12.941256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBanashankari%202nd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560070!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin" width="100%" height="100%" style={{
            border: 0,
            minHeight: '300px'
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" className="w-full h-full" />
          </div>
        </div>
        {/* Additional Information */}
        <div className="bg-white rounded-lg p-8 border-2 border-[#7209b7]">
          <h2 className="text-2xl font-semibold text-[#3a0ca3] mb-6 text-center">
            How Can We Help You?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-[#7209b7] mb-2">
                General Inquiries
              </h3>
              <p className="text-gray-600">
                Questions about our services or membership
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[#7209b7] mb-2">
                Business Hours Support
              </h3>
              <p className="text-gray-600">
                Available during office hours for immediate assistance
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-[#7209b7] mb-2">
                Visit Our Office
              </h3>
              <p className="text-gray-600">
                Meet us in person for detailed discussions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};