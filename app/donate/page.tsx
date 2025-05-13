import Image from 'next/image';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from "lucide-react";
import WhyYourDonationMatters from '@/components/DonatePage/WhyYourDonationMatters';
import ContributionUsage from '@/components/DonatePage/ContributionUsage';
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from '@/components/SectionHeading';
import HowToDonate from '@/components/DonatePage/HowToDonate';
import DonationSection from '@/components/DonatePage/DonationSection';


export default function DonatePage() {

return (
  <>
    <Header/>
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
                Your Contribution Matters
              </h1>
                  <p className="text-md text-white/90 mb-12">
                    Together, we can make a difference. Join us in building a prosperous Benue through impactful
                    donations and investments.
                  </p>
                 <div className="flex flex-col sm:flex-row justify-center items-center">
                    <Button variant="primary" href="/donate-now" className="px-8 py-3 font-semibold flex items-center">
                       Donate Now <Heart className="text-white ml-2"/>
                    </Button>
                 </div>
                </div>
              </div>
        </section>

        <WhyYourDonationMatters />

        <ContributionUsage />

        <TestimonialCard 
            heading="Real Impact Stories"
            testimonials={[
              {
                name: "Grace Terhemba",
                title: "Parent",
                image: "/grace.png",
                quote:
                  "Thanks to BESDDLI's scholarship program, my son completed his engineering degree. He now works with a team innovating sustainable energy solutions in Benue.",
                cardClassName: "bg-gray-300",
              },
              {
                name: "Dr. Amina Ochoga",
                title: "Diaspora Investor",
                image: "/amina.png",
                quote:
                  "My investment in a local agribusiness wasn't just profitable; it created 300 jobs in my village. Seeing the impact firsthand is priceless.",
                cardClassName: "bg-gray-300",
              },
            ]}
          />


        {/* Be Part of Benue's Transformation Today Section */}
        <section className="py-16 bg-white text-gray-800">
                <div className="container mx-auto px-4 max-w-2xl text-center">
                  <SectionHeading>Be Part of Benue&apos;s Transformation Today</SectionHeading>
                  <p className="mb-8">Your contribution is more than a donation-it&apos;s a lagacy. 
                    Together, we create a thriving Benue, one program at a time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                  <a href="/make-your-impact-now">
                    <Button variant="primary" className="px-8 py-3 font-semibold flex items-center">
                       Make Your Impact Now <span className="ml-1">→</span>
                    </Button>
                  </a>
                  </div>
                </div>
        </section>

        <HowToDonate/>

        <DonationSection/>
    <Footer/>
   </>
  );
}

