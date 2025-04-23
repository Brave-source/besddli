
'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const CoreValues = () => {
  const values = [
    {
      title: "Innovative Excellence",
      description: "Pioneering solutions for transformative impact",
      image: "/hero.png",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Integrity, Transparency & Accountability",
      description: "Accountability in all our operations",
      image: "/hero.png",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Inclusive Collaborations",
      description: "Uniting diverse perspectives for growth",
      image: "/hero.png",
      icon: (
        <svg className="w-8 h-8 mx-auto mb-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = useCallback(() => {
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex <values.length - 1);
  }, [currentIndex, values.length]);

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const card = containerRef.current.children[index] as HTMLElement;
      card.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < values.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  useEffect(() => {
    updateArrows();
  }, [updateArrows]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Core Values
        </h2>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {values.map((value, index) => (
              <div 
                key={index}
                className="snap-center flex-shrink-0 w-80 h-64 rounded-xl shadow-md overflow-hidden relative"
              >
                {/* Background Image */}
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover brightness-50"
                  priority={index < 3}
                />
                
                {/* Card Content */}
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-center text-center p-6">
                  <div className="icon-container">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                  <p className="text-white/90">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous value"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
              aria-label="Next value"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;