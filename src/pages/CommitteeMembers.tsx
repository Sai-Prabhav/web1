import React from 'react';
import { CommitteeMemberCard } from '../components/CommitteeMemberCard';
export const CommitteeMembers = () => {
  const committeeMembers = [{
    name: 'Mrs. Padmavathi K',
    designation: 'President',
    occupation: 'Business Owner & Entrepreneur',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Lakshmi D',
    designation: 'Vice President',
    occupation: 'Financial Consultant',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Aruna S',
    designation: 'Secretary',
    occupation: 'Chartered Accountant',
    photo: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Bhavani R',
    designation: 'Treasurer',
    occupation: 'Banking Professional',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Satyavathi N',
    designation: 'Director',
    occupation: 'Business Strategist',
    photo: 'https://images.unsplash.com/photo-1578100044626-051e9e35f4cc?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Vijaya M',
    designation: 'Director',
    occupation: 'Investment Advisor',
    photo: 'https://images.unsplash.com/photo-1580894723150-0ff6e9b907ea?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Radha P',
    designation: 'Director',
    occupation: 'Financial Analyst',
    photo: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Gayathri S',
    designation: 'Director',
    occupation: 'Business Consultant',
    photo: 'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Kavitha R',
    designation: 'Director',
    occupation: 'Marketing Specialist',
    photo: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Suma N',
    designation: 'Director',
    occupation: 'Operations Manager',
    photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80'
  }, {
    name: 'Mrs. Geetha M',
    designation: 'Director',
    occupation: 'Risk Management Specialist',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80'
  }];
  const advisoryCommittee = [{
    name: 'Mrs. Anitha K',
    designation: 'Finance Management Expert',
    specialization: 'Corporate Finance'
  }, {
    name: 'Mrs. Shobha R',
    designation: 'Administration Head',
    specialization: 'Business Administration'
  }, {
    name: 'Mrs. Usha M',
    designation: 'Operations Specialist',
    specialization: 'Process Management'
  }, {
    name: 'Mrs. Prema S',
    designation: 'Legal Advisor',
    specialization: 'Corporate Law'
  }, {
    name: 'Mrs. Ramya N',
    designation: 'Property Valuator',
    specialization: 'Real Estate Assessment'
  }];
  return <div className="w-full bg-[#f5f0ff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3a0ca3] mb-4">
            Committee Members
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of directors and officers who lead Kamma
            Mahila Souharda Credit Co-operative Limited with vision and
            integrity.
          </p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-[#7209b7] mb-8 text-center">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {committeeMembers.map((member, index) => <CommitteeMemberCard key={index} name={member.name} designation={member.designation} occupation={member.occupation} photo={member.photo} />)}
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 border-2 border-[#7209b7]">
          <h2 className="text-2xl font-semibold text-[#7209b7] mb-6 text-center">
            Advisory Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCommittee.map((advisor, index) => <div key={index} className="bg-[#f5f0ff] p-6 rounded-lg border border-[#7209b7]">
                <h3 className="text-lg font-semibold text-[#3a0ca3] mb-2">
                  {advisor.name}
                </h3>
                <p className="text-[#7209b7] font-medium mb-1">
                  {advisor.designation}
                </p>
                <p className="text-gray-600 text-sm">
                  {advisor.specialization}
                </p>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};