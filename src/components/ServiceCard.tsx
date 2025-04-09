import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}
export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon
}) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200 p-6">
      <div className="text-[#f72585] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#3a0ca3] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => <li key={index} className="flex items-start">
            <span className="text-[#7209b7] mr-2">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>)}
      </ul>
      <Link to="/contact" className="inline-flex items-center text-[#f72585] font-semibold hover:text-[#d91a70] transition-colors">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>;
};