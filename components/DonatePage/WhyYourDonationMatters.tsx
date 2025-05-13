
import {
  Sprout,
  GraduationCap,
  Globe,
  LineChart,
} from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/SectionHeading';

const impactData = [
  {
    title: 'Empower Rural Communities',
    icon: <Sprout className="w-8 h-8 text-green-600 mb-1" />,
    image: '/hero.png',
    points: ['Support modern farming initiatives', 'Improve farmer livelihoods'],
  },
  {
    title: 'Transform Education',
    icon: <GraduationCap className="w-8 h-8 text-green-600 mb-1" />,
    image: '/hero.png',
    points: ['Fund vocational training', 'Equip learning centers'],
  },
  {
    title: 'Preserve Culture',
    icon: <Globe className="w-8 h-8 text-green-600 mb-1" />,
    image: '/hero.png',
    points: ['Showcase rich heritage', 'Support local artisans'],
  },
  {
    title: 'Drive Economic Growth',
    icon: <LineChart className="w-8 h-8 text-green-600 mb-1" />,
    image: '/hero.png',
    points: ['Create local jobs', 'Support entrepreneurs'],
  },
];

export default function WhyYourDonationMatters() {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <SectionHeading>
        Why Your Donation Matters
      </SectionHeading>

      <div className="space-y-6">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
          >
            {/* Left Side - Text */}
            <div className="z-10 w-full md:w-2/5 p-6 flex flex-col justify-center bg-white bg-opacity-90">
              <div className="flex flex-col items-start mb-4">
                  {item.icon}
                <div className="text-lg font-semibold text-gray-800">
                  {item.title}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-gray-700">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Image */}
            <div className="absolute inset-0 md:relative md:w-3/5 h-48">
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
              />
              <div className="absolute inset-0 z-10 lg:bg-gradient-to-r md:bg-gradient-to-r from-transparent to-white md:to-transparent md:from-white md:via-white/5 md:to-transparent" />
            </div>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
