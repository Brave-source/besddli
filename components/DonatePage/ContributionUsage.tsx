
import { Flag, Briefcase, HeartPulse } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const usageData = [
  {
    icon: <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>,
    title: 'Youth Empowerment',
    description: '500+ young people trained annually',
    progress: 75,
  },
  {
    icon: <Flag className="text-green-600" size={28} />,
    title: 'Cultural Promotion',
    description: '12 cultural programs worldwide',
    progress: 55,
  },
  {
    icon: <Briefcase className="text-green-600" size={28} />,
    title: 'Investment Facilitation',
    description: '1,000+ jobs created yearly',
    progress: 85,
  },
  {
    icon: <HeartPulse className="text-green-600" size={28} />,
    title: 'Healthcare',
    description: 'Rural clinic improvements',
    progress: 60,
  },
];

export default function ContributionUsage() {
  return (
    <section className="bg-green-50 py-16 px-4">
      <SectionHeading>
        How Your Contribution Will Be Used
      </SectionHeading>
      <div className="max-w-3xl mx-auto space-y-6">
        {usageData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm p-5 flex items-start space-x-4"
          >
            <div className="bg-green-100 p-3 rounded-full">
              {item.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="mt-3 h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-600 rounded-full"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
