import { Globe, Building2, } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

const donationOptions = [
  {
    icon: <Globe size={28} className="text-green-600" />,
    title: 'Online Donations',
    description: 'Make a secure donation in minutes through our donation portal.',
    buttonText: 'Donate Online',
    buttonLink: '/donate-online',
  },
  {
    icon: <Building2 size={28} className="text-green-600" />,
    title: 'Corporate Contributions',
    description: 'Contact us to explore partnerships or sponsorships for major programs.',
    buttonText: 'Partner With Us',
    buttonLink: '/partner-with-us',
  },
  {
    icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>, 
    title: 'Diaspora Giving',
    description: 'Join our global campaign and rally your network to contribute.',
    buttonText: 'Join Campaign',
    buttonLink: '/join-campaign',
  },
];

export default function HowToDonate() {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-8">
      <SectionHeading>
        How to Donate
      </SectionHeading>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {donationOptions.map((option, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[190px]"
          >
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {option.icon}
                <h3 className="text-md font-semibold text-gray-900">
                  {option.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>

            <div className="mt-4">
              <Button variant="primary" href={option.buttonLink} className="px-4 py-3">
                {option.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
