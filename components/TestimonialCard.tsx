
import React from 'react';
import Image from "next/image";
import SectionHeading from './SectionHeading';

interface TestimonialCard {
  name: string;
  title: string;
  image: string;
  quote: string;
  cardClassName?: string; // For individual card styling
}

interface TestimonialCardProps {
  heading: string;
  testimonials: TestimonialCard[];
  className?: string; // For section styling
  cardContainerClassName?: string; // For the grid container
}

export default function TestimonialCard({ 
  heading, 
  testimonials, 
  className = "",
  cardContainerClassName = ""
}: TestimonialCardProps) {
  return (
    <section className={`bg-white py-20 px-4 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading>{heading}</SectionHeading>

        <div className={`grid md:grid-cols-2 gap-8 ${cardContainerClassName}`}>
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className={`bg-gray-50 shadow-md rounded-xl p-6 ${testimonial.cardClassName || ""}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}