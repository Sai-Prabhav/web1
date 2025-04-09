import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { Landmark, GraduationCap, Briefcase, Users, PiggyBank, Shield, TreeDeciduous, Calculator } from 'lucide-react';
export const BankServices = () => {
  const services = [{
    title: 'Savings Accounts',
    description: 'Secure and flexible savings accounts designed for women entrepreneurs.',
    icon: <PiggyBank className="h-8 w-8" />,
    features: ['Zero minimum balance for self-help group members', 'Higher interest rates on savings', 'Free mobile banking and SMS alerts', 'Special benefits for regular transactions']
  }, {
    title: 'Business Loans',
    description: 'Empower your business dreams with our tailored loan solutions.',
    icon: <Briefcase className="h-8 w-8" />,
    features: ['Loans up to ₹10 lakhs for small businesses', 'Flexible repayment options', 'No collateral for loans up to ₹3 lakhs', 'Quick approval process']
  }, {
    title: 'Education Loans',
    description: 'Support for higher education and skill development programs.',
    icon: <GraduationCap className="h-8 w-8" />,
    features: ['Special rates for women in STEM fields', 'Coverage for vocational courses', 'Extended repayment tenure', 'Interest subsidy for meritorious students']
  }, {
    title: 'Self-Help Group Loans',
    description: 'Specialized loans for women self-help groups.',
    icon: <Users className="h-8 w-8" />,
    features: ['Group loans up to ₹5 lakhs', 'No collateral requirement', 'Lower interest rates', 'Flexible repayment schedules']
  }, {
    title: 'Fixed Deposits',
    description: 'Secure investment options with attractive returns.',
    icon: <Landmark className="h-8 w-8" />,
    features: ['Higher interest rates than commercial banks', 'Flexible tenure options', 'Monthly interest payout facility', 'Special rates for senior citizens']
  }, {
    title: 'Insurance Services',
    description: 'Protect yourself and your business with our insurance plans.',
    icon: <Shield className="h-8 w-8" />,
    features: ['Health insurance for family', 'Business insurance', 'Life insurance', 'Accident coverage']
  }, {
    title: 'Micro Finance',
    description: 'Small loans for big dreams.',
    icon: <TreeDeciduous className="h-8 w-8" />,
    features: ['Loans starting from ₹10,000', 'Weekly/Monthly repayment options', 'Group lending program', 'Business development support']
  }, {
    title: 'Investment Advisory',
    description: 'Expert guidance for your financial growth.',
    icon: <Calculator className="h-8 w-8" />,
    features: ['Personal financial planning', 'Investment consultation', 'Retirement planning', 'Wealth management advice']
  }];
  return <div className="w-full bg-[#f5f0ff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3a0ca3] mb-4">
            Bank Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of banking services designed
            specifically for women entrepreneurs and self-help groups. We offer
            flexible, accessible, and empowering financial solutions.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} features={service.features} icon={service.icon} />)}
        </div>
        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 border-2 border-[#7209b7]">
            <h2 className="text-2xl font-semibold text-[#3a0ca3] mb-4">
              Why Choose Our Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-[#7209b7] mb-2">
                  Easy Access
                </h3>
                <p className="text-gray-600">
                  Simple documentation and quick processing for all services
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#7209b7] mb-2">
                  Better Rates
                </h3>
                <p className="text-gray-600">
                  Competitive interest rates and flexible repayment options
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#7209b7] mb-2">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Dedicated relationship managers for personalized assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};