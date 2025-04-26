
import React from 'react';
import SectionHeading from './SectionHeading';


interface CallToActionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CallToAction({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CallToActionProps) {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <SectionHeading className='text-white'>{title}</SectionHeading>
        <p className="mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href={primaryButtonLink}>
            <button className=" w-full bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              {primaryButtonText}
            </button>
          </a>
          {secondaryButtonText && secondaryButtonLink && (
            <a href={secondaryButtonLink}>
              <button className=" w-full bg-transparent border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition">
                {secondaryButtonText}
              </button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
