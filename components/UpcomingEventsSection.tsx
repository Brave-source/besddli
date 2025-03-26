'use client';

import React, { useRef, useState, useEffect } from 'react';
import EventCard from './EventCard';
import NavigationArrow from './NavigationArrow';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
}

const UpcomingEventsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  
  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: "Annual Diaspora Conference",
      date: "April 15, 2025",
      location: "Makurdi",
    },
    {
      id: 2,
      title: "Investment Summit",
      date: "May 2, 2025",
      location: "Virtual",
    },
    {
      id: 3,
      title: "Cultural Showcase",
      date: "June 10, 2025",
      location: "Abuja",
    },
    {
      id: 4,
      title: "Tech Meetup",
      date: "July 8, 2025",
      location: "Lagos",
    },
    {
      id: 5,
      title: "Agricultural Expo",
      date: "August 22, 2025",
      location: "Gboko",
    },
  ];

  // Calculate total pages
  useEffect(() => {
    setTotalPages(Math.ceil(events.length / 3));
  }, [events.length]);

  // Common calendar icon for all events
  const calendarIcon = (
    <div className="flex flex-col justify-center self-stretch overflow-hidden text-black text-center font-['Roboto'] text-[3.875rem] leading-[100px]">
      📅
    </div>
  );

  // Handle scrolling
  const scrollToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex);
      const el = scrollContainerRef.current;
      if (el) {
        const scrollAmount = el.offsetWidth * pageIndex;
        el.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const nextPage = () => {
    scrollToPage(currentPage + 1);
  };

  const prevPage = () => {
    scrollToPage(currentPage - 1);
  };

  return (
    <section className="upcoming-events-section py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Upcoming Events
        </h2>
        
        <div className="relative px-20">
          {/* Left arrow navigation */}
          {currentPage > 0 && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <NavigationArrow direction="left" onNavigate={prevPage} />
            </div>
          )}
          
          {/* Scrollable container limited to 3 cards on large screens */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Group events into pages of 3 */}
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div 
                key={pageIndex} 
                className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-3 gap-8 snap-start"
              >
                {events.slice(pageIndex * 3, (pageIndex + 1) * 3).map((event) => (
                  <div key={event.id} className="p-3">
                    <EventCard
                      title={event.title}
                      date={event.date}
                      location={event.location}
                      icon={calendarIcon}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Right arrow navigation */}
          {currentPage < totalPages - 1 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <NavigationArrow direction="right" onNavigate={nextPage} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;