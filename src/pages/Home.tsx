import React from 'react';
import { Hero } from '../components/Hero';
import { ArrowRight, Book, Briefcase, GraduationCap, Users, Target, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NewsEventCard } from '../components/NewsEventCard';
export const Home = () => {
  const featuredEvents = [{
    title: 'Annual General Meeting 2023',
    description: 'Join us for our annual shareholders meeting and celebration of another successful year.',
    date: 'December 15, 2023',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80',
    category: 'event' as const,
    venue: 'Main Branch Auditorium, Bangalore',
    isUpcoming: true
  }, {
    title: 'Entrepreneurship Workshop Series',
    description: 'Monthly workshop series for aspiring entrepreneurs covering business fundamentals.',
    date: 'Every First Saturday',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
    category: 'event' as const,
    venue: 'Training Center, Jayanagar',
    isUpcoming: true
  }, {
    title: 'New Branch Opening - Mysore',
    description: 'Expanding our services to Mysore region to serve more women entrepreneurs.',
    date: 'January 5, 2024',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80',
    category: 'news' as const,
    isUpcoming: true
  }];
  return <div className="w-full bg-[#f5f0ff]">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
            <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
              Financial Support
            </h3>
            <p className="text-gray-600">
              Low-interest loans and financial services tailored for women
              entrepreneurs
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
            <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
              Skill Development
            </h3>
            <p className="text-gray-600">
              Training programs and workshops to enhance business capabilities
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
            <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
              Community Growth
            </h3>
            <p className="text-gray-600">
              Building a network of successful women entrepreneurs across
              Karnataka
            </p>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3a0ca3] mb-6">
              About Kamma Mahila Bank
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Kamma Mahila Souharda Credit Co-operative Limited is a registered
              society established in 2011, dedicated to empowering women through
              financial independence. Our women-managed cooperative serves the
              entire state of Karnataka, providing essential financial services
              and support to help women entrepreneurs thrive.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3a0ca3] mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
              <Briefcase className="h-8 w-8 text-[#f72585] mb-4" />
              <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
                Business Loans
              </h3>
              <p className="text-gray-600">
                Low-interest loans for women entrepreneurs with flexible
                repayment options
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
              <Users className="h-8 w-8 text-[#f72585] mb-4" />
              <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
                Self Help Groups
              </h3>
              <p className="text-gray-600">
                Support for women's self-help groups with special loan
                provisions
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
              <Book className="h-8 w-8 text-[#f72585] mb-4" />
              <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
                Financial Advisory
              </h3>
              <p className="text-gray-600">
                Expert guidance on financial planning and business management
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#3a0ca3] mb-12 text-center">
            Empowerment Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white border-2 border-[#7209b7] rounded-lg hover:border-[#f72585] transition-all duration-200">
              <GraduationCap className="h-8 w-8 text-[#f72585] mb-4" />
              <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
                Skill Development Workshops
              </h3>
              <p className="text-gray-600">
                Regular workshops on business skills, financial literacy, and
                entrepreneurship
              </p>
            </div>
            <div className="p-6 border-2 border-[#7209b7] rounded-lg hover:border-[#f72585] transition-all duration-200">
              <Target className="h-8 w-8 text-[#f72585] mb-4" />
              <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">
                Business Mentorship
              </h3>
              <p className="text-gray-600">
                One-on-one mentoring from successful women entrepreneurs
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#3a0ca3]">
              Latest News & Events
            </h2>
            <Link to="/news" className="text-[#f72585] font-semibold flex items-center hover:text-[#d91a70]">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => <NewsEventCard key={index} {...event} />)}
          </div>
        </div>
      </div>
    </div>;
};