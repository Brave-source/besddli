
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoreValues from '@/components/AboutUsPage/CoreValues';
import ImpactSection from '@/components/AboutUsPage/ImpactSection';
import CallToAction from "@/components/CallToAction";
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';
import { Globe, Target, Eye, Building, Handshake } from "lucide-react";


export default function AboutPage() {
  return (
    <>
      <Header />
        <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50">
            <Image
              src="/hero.png"
              alt="Benue landscape"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-8">
            <div className="text-center  mx-auto">
              <h1 className="text-4xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Bridging Continents, Empowering Benue: Uniting Diaspora for Growth
              </h1>
              <p className="text-md text-white/90 mb-12">
                Connecting our global family for the development of Benue State
              </p> 
              <Button variant="primary" href="/join-us" rounded="full" className="px-14 py-3">
                Join Us
              </Button>
            </div>
          </div>
        </section>


      {/* Who We Are Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-6">
            <SectionHeading className='tracking-tight'>Who We Are</SectionHeading>
              </div>
                <div className="space-y-4">
                  <p className="text-gray-700 text-base leading-relaxed">
                    The Benue State Directorate for Diaspora Linkages and Investments (BESDDLI) stands as a vanguard of innovative governance, 
                    bridging continents and generations to unlock unprecedented growth opportunities for our beloved state. Established under the visionary leadership of Governor Rev. Fr. Hyacinth Alia, 
                    we are not merely a government agency, but a dynamic catalyst for transformative change.
                  </p>
              
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center">  
                    <Globe className="w-6 h-6 text-green-600"/> 
                    <span className="font-semibold text-gray-900 ml-2">Global Network</span>
                  </div>

                <div className="flex items-center">     
                  <Handshake className="w-6 h-6 text-green-600"/> 
                  <span className="font-semibold text-gray-900 ml-2">Partnership</span>
                </div>
            </div>
            <div className="text-center w-full ">
              <Link
                href="/global-network"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-base no-underline transition-colors duration-150 group">
                  <span>
                    Learn more
                  </span>
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
        {/* Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mission Card */}
              <div className="bg-green-50 p-8 rounded-lg shadow-lg ">
                <div className="flex items-center mb-6">
                  <Target className="w-6 h-6 text-green-600"/> 
                  <h3 className="text-2xl font-bold text-gray-900 ml-2">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  To engage the Benue diaspora, attract investments, and foster cultural and economic transformation through sustainable partnerships and innovative programs.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-green-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <Eye className="w-6 h-6 text-green-600"/> 
                  <h3 className="text-2xl font-bold text-gray-900 ml-2">Our Vision</h3>
                </div>
                <p className="text-gray-700">
                  To position Benue as a global model for diaspora-driven development, creating sustainable growth and prosperity for all citizens.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CoreValues />

        <ImpactSection />

        {/* Team Section */}
        <section className="max-w-full mx-auto px-12 py-12 bg-gray-100">
          <SectionHeading>Meet Our Team</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-600">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading>Our Global Presence</SectionHeading>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <Building className="w-6 h-6 mb-2 text-green-600"/>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">USA Office</h3>
                <p className="text-gray-500">123 Global Avenue</p>
                <p className="text-gray-500">Washington, DC 20001</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <Building className="w-6 h-6 mb-2 text-green-600"/>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">Abuja Office</h3>
                <p className="text-gray-500">Prof. 45, Central Business District</p>
                <p className="text-gray-500">Abuja, Nigeria</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <Building className="w-6 h-6 mb-2 text-green-600"/>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">Makurdi Office</h3>
                <p className="text-gray-500">Government House Complex</p>
                <p className="text-gray-500">Makurdi, Benue State</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Global Movement Section */}
         <CallToAction
            title="Join Our Global Movement"
            subtitle="Be part of Benue's transformation story. Connect with fellow diaspora members and explore investment opportunities."
            primaryButtonText="Register Now"
            primaryButtonLink="/register"
            secondaryButtonText="Explore Opportunities"
            secondaryButtonLink="/opportunities"
            />

        {/* Partners Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading>Our Sponsors and Partners</SectionHeading>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="w-32 h-16 relative">
                  <Image
                    src={`/images/${partner.toLowerCase()}.png`}
                    alt={partner}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    <Footer/>
  </>
  );
};

const teamMembers = [
  { id: 1, name: "John Doe", position: "Position", image: "/hero.png" },
  { id: 2, name: "Jane Smith", position: "Position", image: "/hero.png" },
  { id: 3, name: "John Doe", position: "Position", image: "/hero.png" },
  { id: 4, name: "Jane Smith", position: "Position", image: "/hero.png" },
  { id: 5, name: "John Doe", position: "Position", image: "/hero.png" },
  { id: 6, name: "Jane Smith", position: "Position", image: "/hero.png" },
  { id: 7, name: "John Doe", position: "Position", image: "/hero.png" },
  { id: 8, name: "Jane Smith", position: "Position", image: "/hero.png" },
 
];

const partners = [
  "google-logo",
  "benue-logo",
  "netflix-logo",
  "world-bank-logo",
  "slack-logo",
  "spotify-logo",
  "stripe-logo",
];