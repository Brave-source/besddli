
import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionHeading = ({ children, className = '' }: SectionHeadingProps) => {
  return (
    <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;