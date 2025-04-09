import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
interface NewsEventCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'news' | 'event';
  venue?: string;
  isUpcoming?: boolean;
}
export const NewsEventCard: React.FC<NewsEventCardProps> = ({
  title,
  description,
  date,
  image,
  category,
  venue,
  isUpcoming
}) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#7209b7] hover:border-[#f72585] transition-all duration-200">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {isUpcoming && <div className="absolute top-2 right-2 bg-[#f72585] text-white px-3 py-1 rounded-full text-sm">
            Upcoming
          </div>}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-semibold text-[#3a0ca3]">{title}</h3>
          <span className="text-[#f72585] text-sm font-medium capitalize">
            {category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2 text-[#7209b7]" />
          <span>{date}</span>
        </div>
        {venue && <p className="text-gray-500 text-sm mb-4">Venue: {venue}</p>}
        <Link to="/contact" className="inline-flex items-center text-[#f72585] font-semibold hover:text-[#d91a70] transition-colors">
          Learn More →
        </Link>
      </div>
    </div>;
};