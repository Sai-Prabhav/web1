import React from 'react';
import { NewsEventCard } from '../components/NewsEventCard';
export const NewsAndEvents = () => {
  const newsAndEvents = [{
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
  }, {
    title: 'Achievement: 1800+ Active Members',
    description: 'Celebrating our growing community of women entrepreneurs and achievers.',
    date: 'November 1, 2023',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80',
    category: 'news' as const
  }, {
    title: 'Financial Literacy Drive',
    description: 'Special workshop series on personal and business financial management.',
    date: 'December 20-22, 2023',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    category: 'event' as const,
    venue: 'Multiple Locations',
    isUpcoming: true
  }, {
    title: 'Women Entrepreneurs Meet 2023',
    description: 'Annual networking event for women entrepreneurs to share experiences and opportunities.',
    date: 'December 28, 2023',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
    category: 'event' as const,
    venue: 'Convention Center, MG Road',
    isUpcoming: true
  }];
  return <div className="w-full bg-[#f5f0ff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#3a0ca3] mb-4">
            News & Events
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news and upcoming events. Join us in
            our mission to empower women through financial independence and
            entrepreneurship.
          </p>
        </div>
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="px-4 py-2 rounded-lg bg-[#3a0ca3] text-white hover:bg-[#2a0979] transition-colors">
            All
          </button>
          <button className="px-4 py-2 rounded-lg bg-white text-[#3a0ca3] hover:bg-[#f0f0f0] transition-colors">
            Upcoming Events
          </button>
          <button className="px-4 py-2 rounded-lg bg-white text-[#3a0ca3] hover:bg-[#f0f0f0] transition-colors">
            News
          </button>
        </div>
        {/* News and Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsAndEvents.map((item, index) => <NewsEventCard key={index} {...item} />)}
        </div>
      </div>
    </div>;
};