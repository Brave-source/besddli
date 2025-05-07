
"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from 'next/image';
import Button from '@/components/Button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SectorCard } from "@/components/SectorCard";
import type { SectorCardProps } from "@/components/SectorCard";
import { CategoryCard } from "@/components/CategoryCard";
import { FilterSortBar } from "@/components/FilterSortBar";
import { Building2, Sprout, Plane, Sun, Scale, HandCoins, Star, LineChart, Globe } from "lucide-react";
import  SectionHeading  from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";


const categories = [
  { label: "Infrastructure", icon: <Building2 className="w-6 h-6" /> },
  { label: "Agriculture", icon: <Sprout className="w-6 h-6" /> },
  { label: "Tourism", icon: <Plane className="w-6 h-6" /> },
  { label: "Renewable Energy", icon: <Sun className="w-6 h-6" /> },
];


const projectData: Record<string, SectorCardProps[]> = {
  Infrastructure: [
    {
      title: "Bridge Expansion",
      description: "Secure funding for regional bridge connections",
      image: "/hero.png",
      badge: "Infrastructure",
      price: "$100.00",
      oldPrice: "$140.00",
      rating: 2,
      tag: "hot"
    },
    {
      title: "Highway Project",
      description: "Invest in national toll road development",
      image: "/hero.png",
      badge: "Public Works",
      price: "$85.00",
      rating: 3,
      tag: "Growing",
    },
    {
      title: "Bridge Expansion",
      description: "Secure funding for regional bridge connections",
      image: "/hero.png",
      badge: "Infrastructure",
      price: "$100.00",
      oldPrice: "$140.00",
      rating: 2,
      tag: "hot"
    },
    {
      title: "Highway Project",
      description: "Invest in national toll road development",
      image: "/hero.png",
      badge: "Public Works",
      price: "$85.00",
      rating: 3,
      tag: "Growing",
    },
  ],
  Agriculture: [
    {
      title: "CassavaFarming",
      description: "More than 60% returns on investment in....... Learn cassava farming now!",
      image: "/hero.png",
      badge: "Top Investment",
      price: "",
      oldPrice: "",
      rating: 4.5,
      tag: "(Trending)",
    },
    {
      title: "Poultry Farming",
      description: "More than 80% returns on investments. Learn how to become a professional poultry farmer now!",
      image: "/hero.png",
      badge: "Top Investment",
      price: "",
      oldPrice: "",
      rating: 4.5,
      tag: "(Top)",
    },
    {
      title: "Snail Farming",
      description: "More than 70% returns on investments. Learn how to become a professional snail farmer now!",
      image: "/hero.png",
      badge: "Best Investment",
      price: "From $24.92",
      oldPrice: "$32.90",
      rating: 3,
      tag: "(Trusted)",
    },
    {
      title: "Palm Oil Farming",
      description: "More than 80% returns on investments. Experience how to become an investor on palm trading",
      image: "/hero.png",
      badge: "Growing Investments",
      price: "From $24.92",
      oldPrice: "$32.90",
      rating: 4.5,
      tag: "Hot",
    },
    
  ],
  Tourism: [
    {
      title: "Safari Lodges",
      description: "Eco-lodges in prime African safari zones",
      image: "/hero.png",
      badge: "Tourism",
      price: "$40.00",
      rating: 4,
      tag: "(Trending)",
    },
    {
      title: "Beach Resort",
      description: "Luxury coastal resort investment",
      image: "/hero.png",
      badge: "Resort",
      price: "$70.00",
      rating: 4.5,
      tag: "Popular",
    },
  ],
  "Renewable Energy": [
    {
      title: "Renewable energy",
      description: "Fund renewable energy project.",
      image: "/hero.png",
      badge: "energy",
      price: "$110.00",
      rating: 5,
      tag: "Key Project",
    },

    {
      title: "Renewable energy",
      description: "Fund renewable energy project.",
      image: "/hero.png",
      badge: "energy",
      price: "$110.00",
      rating: 5,
      tag: "Key Project",
    },
  ],
  
};

export default function InvestmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("Infrastructure");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("recent");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

const handlePrev = () => {
  scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
};

const handleNext = () => {
  scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
};

const updateArrows = () => {
  const el = scrollRef.current;
  if (!el) return;

  setShowLeftArrow(el.scrollLeft > 0);
  setShowRightArrow(el.scrollLeft + el.clientWidth < el.scrollWidth - 1); 
};

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  updateArrows(); // Initial check
  el.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);

  return () => {
    el.removeEventListener("scroll", updateArrows);
    window.removeEventListener("resize", updateArrows);
  };
}, []);

  const parsePrice = (priceStr: string) => parseFloat(priceStr.replace(/[^0-9.]/g, ''));

  const visibleData = useMemo(() => {
    let data: SectorCardProps[] = projectData[selectedCategory] || [];
  
    if (filter === "top") {
      data = data.filter((item) => item.rating! >= 4.5);
    } else if (filter === "4plus") {
      data = data.filter((item) => item.rating! >= 4);
    } else if (filter === "3plus") {
      data = data.filter((item) => item.rating! >= 3);
    }
  
    if (sort === "lowPrice") {
      data.sort((a, b) => parsePrice(a.price!) - parsePrice(b.price!));
    } else if (sort === "highPrice") {
      data.sort((a, b) => parsePrice(b.price!) - parsePrice(a.price!));
    } else if (sort === "recent") {
      data.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "rating") {
      data.sort((a, b) => b.rating! - a.rating!);
    }
  
    return data;
  }, [filter, sort, selectedCategory]);
  

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
                Empowering Benue&apos;s Future Through Global Investments
              </h1>
                  <p className="text-md text-white/90 mb-12">
                    Join us in building sustainable growth and development <br/> through strategic investments and diaspora partnerships.
                  </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                    <Button variant="primary" className="px-14 py-3 font-semibold">
                       Explore Opportunities
                    </Button>
                    <Button variant="primary" className="focus:ring-white bg-yellow-400 px-12 py-3 hover:bg-yellow-300 text-green-900 font-semibold transition">
                       Get Investment Support
                    </Button>
                 </div>
                </div>
              </div>
        </section>

             <section className="py-12 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                      <SectionHeading className='tracking-tight'>Why Invest in Benue?</SectionHeading>                 
                        <div className="space-y-4">
                          <p className="text-gray-700  leading-relaxed text-center">
                           Benue State is rich in opportunities across agriculture, tourism, and renewable energy.
                           with our streaming processes, tailored support,and trusted guidance, we ensure your investment
                           journey is seamless and rewarding.
                          </p>
                        </div>
                    </div>
             </section>
    
  
        <section className="py-16 px-4 bg-gray-100">
          <SectionHeading className='tracking-tight'>Top Investment Sector</SectionHeading>
            {/* Navigation Arrows for Category Cards */}
              <div className="relative overflow-x-auto mb-6 scrollbar-hide">
                {showLeftArrow && (
                      <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-8 md:hidden"
                        aria-label="Scroll left"
                      >
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}

                    {showRightArrow && (
                      <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all z-8 md:hidden"
                        aria-label="Scroll right"
                      >
                        <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}

            {/* Category Cards */}
            <div
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide flex gap-2 px-2 lg:justify-center md:justify-center"
              style={{ scrollBehavior: "smooth" }}
            >
              {categories.map((cat) => (
                <div key={cat.label} className="w-[180px] flex-shrink-0">
                  <CategoryCard
                    icon={cat.icon}
                    label={cat.label}
                    active={cat.label === selectedCategory}
                    onClick={() => setSelectedCategory(cat.label)}
                  />
                </div>
              ))}
            </div>
          </div>
    
          {/* Filter/Sort */}
            <FilterSortBar
              filter={filter}
              sort={sort}
              onFilterChange={setFilter}
              onSortChange={setSort}
            />
                
          {/* Filtered Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleData.map((project, i) => (
                <SectorCard key={i} {...project} />
                  ))}
            </div>
        </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Our 3-Step Investment Success Plan</SectionHeading>
    
                <div className="grid md:grid-cols-3 gap-8 text-gray-500">
                {[
              {
                title: 'Discover Opportunities',
                checks: [
                'Explore curated project pipelines',
                'Access market research',
                'Real-time insights'
                ],
                transfers: 'Immediate',
                role: 'Select your area of interest'
              },
              {
                title: 'Get Personalized Guidance',
                checks: [
                'Navigate regulatory landscape',
                'Access tax incentives',
                'Receive advisory services'
              ],
                transfers: '2-4 weeks',
                role: 'Collaborate with experts'
              },
              {
                title: 'Launch & Thrive',
                checks: [
                'Full setup support',
                'Local partner collaboration',
                'Regular impact updates'
              ],
                transfers: '3-6 months',
                role: 'Oversee implementation'
              }
            ].map((step, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
        
          {/* Step Number Circle */}
            <div className="w-8 h-8 rounded-full bg-blue-100 text-green-600 font-semibold flex items-center justify-center mb-4">
              {index + 1}
            </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>

          {/* Checkmarks */}
        <ul className="space-y-4 mb-8">
          {step.checks.map((check, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {check}
            </li>
          ))}
        </ul>

          {/* Timeline & Role */}
              <div className="font-semibold text-gray-500 text-sm">
                <p><span className="text-black">Timeline:</span> {step.transfers}</p>
                <p><span className="text-black">Your Role:</span> {step.role}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>


    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-stretch gap-8">
        {/* Text Column */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-green-600">You have an Investment Idea?</span><br />
                <span className="text-gray-900">
                Submit Your Proposal
                <span className="ml-1 text-yellow-400">!</span>
                <span className="text-red-500">!</span>
                </span>
              </h2>
            <p className="text-gray-700 mb-6">
              Have an innovative idea? We&apos;re here to help turn it into reality. Submit your proposal and get expert feedback.
            </p>

            <ul className="space-y-4 mb-6">
              {[
                'Expert evaluation and feedback',
                'Legal and regulatory guidance',
                'Access to investment incentives'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-800">
                  <span className="w-4 h-4 flex items-center justify-center bg-green-500 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a href="/submit-proposal">
            <Button variant="primary" className="px-6 py-3 bg-green-500">
              Submit Proposal
            </Button>
          </a>
        </div>

        {/* Image Column */}
        <div className="lg:w-1/2 w-full h-auto">
          <div className="relative w-full h-64 lg:h-full rounded-xl overflow-hidden">
            <Image
              src="/hero.png" 
              alt="Team discussing investment proposal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <SectionHeading className="mb-4">
          We Are Always There to Support
        </SectionHeading>
        <p className="text-gray-600">
          We provide comprehensive support for your investment journey
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col md:items-start mb-4 text-green-600">
        <Scale className="w-8 h-8 mb-2" />
        <h3 className="text-lg font-bold text-black">Legal and Tax Guidance</h3>
      </div>
          <p className="text-gray-700 mb-6">
            Expert assistance with legal compliance and tax optimization for your investments.
          </p>
              <ul className="space-y-3">
                {['Legal consultation', 'Tax planning', 'Regulatory compliance'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-800">    
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg> 
                  {item}
                </li>
                ))}
              </ul>
            </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:items-start mb-4 text-green-600">
          <HandCoins className="w-8 h-8 mb-2" />
          <h3 className="text-lg font-bold text-black">Access Incentives</h3>
        </div>
          <p className="text-gray-700 mb-6">
            Explore available incentives and support programs for investors.
          </p>
          <ul className="space-y-3">
            {['Tax incentives', 'Grant programs', 'Investment protection'].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <TestimonialCard 
            className="!bg-gray-100"
            heading="Real Stories, Real Impact"
            testimonials={[
              {
                name: "Dr. Darius Akor",
                title: "Diaspora Investor",
                image: "/darius.png",
                quote:
                  "My agribusiness in Benue has not only delivered exeptional returns but also transformed local communities. BESDDLI made the entire process seamless!",
                cardClassName: "bg-white",
              },
              {
                name: "Peter Jam Mfe",
                title: "Tourism Entrepreneur",
                image: "/peter.png",
                quote:
                  "With BESDDLI's support, I launched a hospitality venture that has become a regional success story. Their market insights were a game-changer.",
                cardClassName: "bg-white",
              },
            ]}
          />

          {/* FAQs Section */}
          <section className="bg-gray-100 py-20 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
              <SectionHeading>
                Frequently Asked Questions
              </SectionHeading>
          
              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h4 className="font-semibold mb-2 text-gray-900">What sectors are best for investments?</h4>
                  <p className="text-gray-600">
                    Agriculture, tourism, and renewable energy are high-potential areas. <a href="/learn-more-here" className="text-green-500">Learn more here</a>.
                  </p>
                </div>
          
                {/* FAQ 2 */}
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h4 className="font-semibold mb-2 text-gray-900">Are there tax benefits for investors?</h4>
                  <p className="text-gray-600">
                    Yes, investors enjoy tax holidays, grants, and expedited approvals. <a href="/see-incentives-here" className="text-green-500">See incentives here</a>.
                  </p>
                </div>
          
                {/* FAQ 3 */}
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h4 className="font-semibold mb-2 text-gray-900">How long does it take to set up an investment?</h4>
                  <p className="text-gray-600">
                    Timelines vary, but we aim to reduce setup time by 30 percent through our streamlined processes.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white shadow-md rounded-xl p-6">
                  <h4 className="font-semibold mb-2 text-gray-900">What kind of returns can I expect?</h4>
                  <p className="text-gray-600">
                    Diaspora-led projects report an average ROI of 20 percent within the first two years.
                  </p>
                </div>
              </div>
            </div>
          </section>

        <section className="bg-green-700 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <SectionHeading className="text-white">
                Take the First Step Today
               </SectionHeading>

          {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {/* Column 1 */}
                <div className="flex flex-col items-center text-center">
                  <Star className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="font-bold">Join the Movement</h3>
                  <p className="text-sm text-yellow-100 mt-1">
                    Explore opportunities that<br/>
                    create meaningful change
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center text-center">
                  <LineChart className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="font-bold">See Real Impact</h3>
                  <p className="text-sm text-yellow-100 mt-1">
                    Transform Benue&apos;s<br/>
                    economic landscape
                  </p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center text-center">
                  <Globe className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="font-bold">Build a Legacy</h3>
                  <p className="text-sm text-yellow-100 mt-1">
                    Drive sustainable growth
                  </p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
                Explore Opportunities
              </button>
              <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition">
                Get Investment Support
              </button>
            </div>
          </div>
        </section>
    <Footer/>
   </>
  );
}

