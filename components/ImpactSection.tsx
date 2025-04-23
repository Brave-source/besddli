// components/ImpactSection.tsx
'use client';

import { useRef, useState, useEffect, useCallback } from 'react';

const ImpactSection = () => {
  // Impact data matching your reference
  const impactStats = [
    {
      value: "10,000+",
      label: "Diaspora Members Engaged",
    },
    {
      value: "$50M+",
      label: "Diaspora-led Investments",
    },
    {
      value: "15%",
      label: "Annual Growth in Cultural Tourism",
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = useCallback(() => {
    setShowLeftArrow(currentIndex > 0);
    setShowRightArrow(currentIndex < impactStats.length - 1);
  }, [currentIndex, impactStats.length]);

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
    if (currentIndex < impactStats.length - 1) {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Through strategic partnerships and innovative programs, we{"'"}re making a significant impact on Benue{"'"}s development.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 px-8"
            style={{ scrollbarWidth: 'none' }}
          >
            {impactStats.map((stat, index) => (
              <div 
                key={index}
                className="snap-center flex-shrink-0 w-65 bg-white p-8 rounded-xl shadow-md text-center px-8"
              >
                
                <p className="text-3xl font-bold text-green-800 mb-4">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Previous stat"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all z-10"
              aria-label="Next stat"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

