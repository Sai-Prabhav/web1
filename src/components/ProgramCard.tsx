import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ProgramProps {
  name: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}
export const ProgramCard: React.FC<ProgramProps> = ({
  name,
  date,
  time,
  venue,
  description
}) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#3a0ca3] mb-4">{name}</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 text-[#7209b7] mr-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 text-[#7209b7] mr-3" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 text-[#7209b7] mr-3" />
            <span>{venue}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to="/contact" className="inline-flex items-center px-4 py-2 bg-[#f72585] text-white rounded-lg font-medium hover:bg-[#d91a70] transition-colors duration-200">
          Contact for Details
        </Link>
      </div>
    </div>;
};