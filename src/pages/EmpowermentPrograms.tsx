import React from 'react';
import { ProgramCard } from '../components/ProgramCard';
export const EmpowermentPrograms = () => {
  const programs = [{
    name: 'Financial Literacy Workshop',
    date: 'Every Saturday',
    time: '10:00 AM - 1:00 PM',
    venue: 'Main Branch Training Hall, Bangalore',
    description: 'Learn essential financial management skills, including budgeting, savings, and investment strategies tailored for women entrepreneurs.'
  }, {
    name: 'Business Plan Development',
    date: 'First Monday of Every Month',
    time: '2:00 PM - 5:00 PM',
    venue: 'Business Center, Jayanagar',
    description: 'Hands-on workshop to help women entrepreneurs create effective business plans and financial projections for their ventures.'
  }, {
    name: 'Digital Marketing Skills',
    date: 'Every Wednesday',
    time: '11:00 AM - 2:00 PM',
    venue: 'Tech Hub, Koramangala',
    description: 'Master social media marketing, online business presence, and digital tools to grow your business in the digital age.'
  }, {
    name: 'Leadership Development Program',
    date: 'Last Sunday of Every Month',
    time: '9:00 AM - 4:00 PM',
    venue: 'Community Hall, Indiranagar',
    description: 'Comprehensive leadership training program focusing on management skills, decision-making, and team building.'
  }];
  return <div className="w-full bg-[#f5f0ff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3a0ca3] mb-4">
            Empowerment Programs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our comprehensive programs designed to empower women through
            skill development, financial literacy, and entrepreneurship
            training.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => <ProgramCard key={index} {...program} />)}
        </div>
      </div>
    </div>;
};