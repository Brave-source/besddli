'use client';

import React from 'react';

interface NavigationArrowProps {
  direction?: 'left' | 'right';
  onNavigate?: () => void;
}

const NavigationArrow: React.FC<NavigationArrowProps> = ({ 
  direction = 'right',
  onNavigate 
}) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate();
    } else {
      // Default scroll behavior if no callback provided
      console.log(`Navigate ${direction}`);
      // You can implement default scroll behavior here
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="cursor-pointer focus:outline-none"
      role="button"
      tabIndex={0}
      aria-label={`Scroll ${direction}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <svg 
        width={60} 
        height={61} 
        viewBox="0 0 80 81" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={direction === 'left' ? 'rotate-180' : ''}
      >
        <g opacity="0.6">
          <circle cx={40} cy="40.2" r={40} fill="#D9D9D9" fillOpacity="0.8" />
          <path d="M25 13.2L61 43.319L25 68.2" stroke="black" strokeOpacity="0.5" strokeWidth={7} />
        </g>
      </svg>
    </div>
  );
};

export default NavigationArrow;