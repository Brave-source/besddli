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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
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

  // Common calendar icon for all events
  const calendarIcon = (
    <div className="flex flex-col justify-center self-stretch overflow-hidden text-black text-center font-['Roboto'] text-[3.875rem] leading-[100px]">
      📅
    </div>
  );

  // Check scroll position to update navigation arrows
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Initial check
      checkScroll();
      
      // Check again after images might have loaded
      window.addEventListener('resize', checkScroll);
      
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  // Handle scrolling
  const scrollToDirection = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector('.event-card-container')?.clientWidth || 300;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="upcoming-events-section py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Upcoming Events
        </h2>
        
        <div className="relative px-10 md:px-20">
          {canScrollLeft && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <NavigationArrow 
                direction="left" 
                onNavigate={() => scrollToDirection('left')} 
              />
            </div>
          )}
          
          {/* Scrollable container with events in a row */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 pb-6 snap-x hide-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {events.map((event) => (
              <div 
                key={event.id} 
                className="event-card-container flex-shrink-0 w-80 snap-center"
              >
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  icon={calendarIcon}
                />
              </div>
            ))}
          </div>
          
          {canScrollRight && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <NavigationArrow 
                direction="right" 
                onNavigate={() => scrollToDirection('right')} 
              />
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default UpcomingEventsSection;