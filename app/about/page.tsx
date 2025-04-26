// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoreValues from '@/components/CoreValues';
import ImpactSection from '@/components/ImpactSection';
import CallToAction from "@/components/CallToAction";
import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';


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
          <div className="container mx-auto px-4 relative z-9">
            <div className="text-center  mx-auto">
              <h1 className="text-4xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Bridging Continents, Empowering Benue: Uniting Diaspora for Growth
              </h1>
              <p className="text-md text-white/90 mb-12">
                Connecting our global family for the development of Benue State
              </p>
              <a href="/joinUs">
              <Button variant="primary" rounded="full" className="px-20 py-3">
                Join Us
              </Button>
              </a>
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
                The Benue State Directorate for Diaspora Linkages and Investments (BESDDLI) stands as a vanguard of innovative governance, bridging continents and generations to unlock unprecedented growth opportunities for our beloved state. Established under the visionary leadership of Governor Rev. Fr. Hyacinth Alia, we are not merely a government agency, but a dynamic catalyst for transformative change.
              </p>
              
              <div className="flex items-center space-x-4 pt-2">
                <div className="flex items-center">
                <svg
          width={38}
          height={31}
          viewBox="0 0 38 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.3125 3.6001C21.1641 3.6001 18.4219 6.98535 18.4219 10.8501C18.4219 15.3501 25.3125 22.3501 25.3125 22.3501C25.3125 22.3501 32.1797 15.3501 32.1797 10.8501C32.1797 6.98535 29.4609 3.6001 25.3125 3.6001ZM25.3125 13.3501C23.7188 13.3501 22.4531 12.0844 22.4531 10.4907C22.4531 8.89697 23.7188 7.6313 25.3125 7.6313C26.9062 7.6313 28.1719 8.89697 28.1719 10.4907C28.1719 12.0844 26.9062 13.3501 25.3125 13.3501ZM6 8.1001V14.8877H10.0547L15.9375 20.1118V5.61426L10.0547 8.1001H6Z"
            fill="#15803D"
          />
        </svg>
      <span className="font-semibold text-gray-900">Global Network</span>
    </div>

      <div className="flex items-center">     
        <svg
          width={38}
          height={31}
          viewBox="0 0 38 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_358)">
            <path
              d="M18.9492 5.59229L13.2773 10.186C12.334 10.9478 12.1523 12.3188 12.8672 13.2974C13.623 14.3403 15.0938 14.5454 16.1074 13.7544L21.9258 9.23096C22.3359 8.91455 22.9219 8.98486 23.2441 9.39502C23.5664 9.80518 23.4902 10.3911 23.0801 10.7134L21.8555 11.6626L30 19.1626V8.1001H29.959L29.7305 7.95361L25.4766 5.229C24.5801 4.65479 23.5312 4.3501 22.4648 4.3501C21.1875 4.3501 19.9453 4.78955 18.9492 5.59229ZM20.2852 12.8813L17.2559 15.2368C15.4102 16.6782 12.7324 16.3032 11.3496 14.4048C10.0488 12.6177 10.377 10.1216 12.0938 8.73291L16.9688 4.78955C16.2891 4.50244 15.5566 4.35596 14.8125 4.35596C13.7109 4.3501 12.6387 4.67822 11.7188 5.2876L7.5 8.1001V21.2251H9.15234L14.5078 26.1118C15.6562 27.1606 17.4316 27.0786 18.4805 25.9302C18.8027 25.5728 19.0195 25.1567 19.1309 24.7231L20.127 25.6372C21.2695 26.686 23.0508 26.6099 24.0996 25.4673C24.3633 25.1802 24.5566 24.8462 24.6797 24.5005C25.8164 25.2622 27.3633 25.104 28.3184 24.061C29.3672 22.9185 29.291 21.1372 28.1484 20.0884L20.2852 12.8813ZM0.9375 8.1001C0.421875 8.1001 0 8.52197 0 9.0376V21.2251C0 22.2622 0.837891 23.1001 1.875 23.1001H3.75C4.78711 23.1001 5.625 22.2622 5.625 21.2251V8.1001H0.9375ZM31.875 8.1001V21.2251C31.875 22.2622 32.7129 23.1001 33.75 23.1001H35.625C36.6621 23.1001 37.5 22.2622 37.5 21.2251V9.0376C37.5 8.52197 37.0781 8.1001 36.5625 8.1001H31.875Z"
              fill="#15803D"
            />
          </g>
        </svg>
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
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Image 
                      src="/icons/target-icon.png" 
                      alt="Mission icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  To engage the Benue diaspora, attract investments, and foster cultural and economic transformation through sustainable partnerships and innovative programs.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-green-50 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Image 
                      src="/icons/eye.png" 
                      alt="Vision icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
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
                <h3 className="text-xl text-gray-800 font-semibold mb-4">USA Office</h3>
                <p className="text-gray-500">123 Global Avenue</p>
                <p className="text-gray-500">Washington, DC 20001</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-gray-800 font-semibold mb-4">Abuja Office</h3>
                <p className="text-gray-500">Prof. 45, Central Business District</p>
                <p className="text-gray-500">Abuja, Nigeria</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow">
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

      <Footer />
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
];