
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import Image from "next/image";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import SectionHeading from '@/components/SectionHeading';
import { Globe, ChartLine, Users, Flag } from "lucide-react";

export default function WhyJoinUsPage() {

return (
    <>
    <Header/>
      <main className="bg-white text-gray-900">
        {/* Hero Section */}
          <section className="bg-gray-200 px-4 md:px-12 lg:pr-0">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-[3fr_2fr] items-center min-h-[28rem]">
            {/* Hero Left Content */}
            <div className="py-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Reconnect. Contribute. Transform.
              </h1>
              <p className="text-2xl mb-8 text-gray-700">
                Your Gateway to Benue&apos;s Future Starts Here.
              </p>
              <p className="text-md mb-8 text-gray-700">
                Benue&apos;s strength lies in its people—wherever they may be. <br/>
                BESDDLI bridges the gap between the global Benue diaspora and their homeland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" rounded="full" className="px-8 py-3">
                  Register as Diaspora Member
                </Button>
                <Button variant="outline" rounded="full" className="px-8 py-3">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Hero Right Image */}
            <div className="h-full w-full">
              <div className="relative w-full h-full min-h-[24rem]">
                <Image
                  src="/hero.png" 
                  alt="People Illustration"
                  fill
                  className="object-cover object-center rounded-left-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="bg-white py-20 px-4 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <SectionHeading> Why Join the Movement?</SectionHeading>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">Reconnect with Your Roots</h3>
                <p className="text-gray-500">Rediscover Benue through networking, mentorship, and cultural
                exchange programs designed to rekindle your connection to home.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">💼</div>
                <h3 className="text-xl text-gray-800 font-semibold mb-4">Contribute to Progress</h3>
                <p className="text-gray-500">Support impactful initiatives in agriculture, education,
                technology, and more. Your investment fuels growth and creates
                lasting change.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🎉</div>
                <h3 className="text-xl text-gray-800 font-semibold mb-4"> Preserve and Promote Culture</h3>
                <p className="text-gray-500"> Celebrate Benue&apos;s traditions and share its rich heritage with
                the world through events, festivals, and storytelling projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help You Section */}
        <section className="py-20 px-4 md:px-12 lg:px-24 bg-gray-100">
        <SectionHeading>
            How We Help You Make an Impact
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-xl p-6">
            <div className="flex items-center">
              <Globe className="w-6 h-6 mb-2" color='green'/>
              <h3 className="text-lg font-semibold mb-2 ml-2">
                Global Diaspora Network
              </h3>
              </div>
              <p className="text-gray-600 mb-1">
                Join a thriving community of Benue professionals, entrepreneurs,
                and changemakers.
              </p>
              <span className="text-green-600 font-medium">
                Impact: Build meaningful relationships.
              </span>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
            <div className="flex items-center">
            <Users className="w-6 h-6 mb-2" color='green'/>
              <h3 className="text-lg font-semibold mb-2 ml-2">
                Mentorship Programs
              </h3>
            </div>
              <p className="text-gray-600 mb-1">
                Share your expertise with local talent through guided mentorship
                and skills transfer.
              </p>
              <span className="text-green-600 font-medium">
                Impact: Empower the next generation of leaders.
              </span>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
            <div className="flex items-center">
            <ChartLine className="w-6 h-6 mb-2" color='green'/>
              <h3 className="text-lg font-semibold mb-2 ml-2">
                Investment Opportunities
              </h3>
            </div>
              <p className="text-gray-600 mb-1">
                Explore vetted projects in key sectors and receive tailored
                support for seamless investments.
              </p>
              <span className="text-green-600 font-medium">
                Impact: Create jobs and diversify the economy.
              </span>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
            <div className="flex items-center">
            <Flag className="w-6 h-6 mb-2" color='green'/>
              <h3 className="text-lg font-semibold mb-2 ml-2">
                Cultural Engagement
              </h3>
            </div>  
              <p className="text-gray-600 mb-1">
                Participate in cultural showcases, storytelling initiatives, and
                global festivals that celebrate Benue.
              </p>
              <span className="text-green-600 font-medium">
                Impact: Strengthen Benue&apos;s global identity.
              </span>
            </div>
          </div>
        </section>

        {/* Path to Engagement */}
        <section className="bg-blue-50 py-20 px-4 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
            <SectionHeading>
                Your Path to Engagement
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8">
              {([
                {
                  step: 'Step 1',
                  title: 'Register Your Interest',
                  checks: [
                    'Create your profile on our platform',
                    'Highlight your skills and interests',  
                  ],
                },
                {
                  step: 'Step 2',
                  title: 'Choose Your Initiative',
                  checks: [
                    'Explore opportunities',
                    'Select your areas of interest',  
                  ],
                },
                {
                  step: 'Step 3',
                  title: 'Make an Impact',
                  checks: [
                    'Collaborate with stakeholders',
                    'Track your contributions',  
                  ],
                }
              ] as const).map((path, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-green-600 text-xl font-bold mb-2">{path.step}</h3> 
                  <h4 className="text-gray-600 text-xl font-semibold mb-4">{path.title}</h4>
                  <ul className="text-gray-600 space-y-2 mb-8">
                    {path.checks.map((check, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {check}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>


      <TestimonialCard
        heading="Real Stories of Diaspora Impact"
        testimonials={[
          {
            name: "Roland Tyonongu",
            title: "Business Consultant",
            image: "/roland.png",
            quote:
              "I joined BESDDLI’s mentorship program, and it’s been life-changing. Guiding young entrepreneurs in Makurdi has allowed me to give back in a meaningful way.",
          },
          {
            name: "Ms Ene Apeh",
            title: "Event Organizer",
            image: "/ene.png",
            quote:
              "Hosting a Benue Cultural Festival in Canada with BESDDLI’s support connected me with others who share my pride in our heritage. Its been an unforgettable journey.",
          },
        ]}
      />

      <CallToAction
        title="Join Us and Be Part of Benue's Story"
        subtitle="Reconnect with your heritage, build a legacy, and drive sustainable development in Benue."
        primaryButtonText="Register as a Diaspora Member Today"
        primaryButtonLink="/register"
        secondaryButtonText="Explore Opportunities"
        secondaryButtonLink="/opportunities"
      />

     


      {/* FAQs Section */}
      <section className="bg-blue-50 py-20 px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>
            FAQs: Your Questions, Answered
          </SectionHeading>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h4 className="font-semibold mb-2">How can I register as a diaspora member?</h4>
              <p className="text-gray-600">
                Simply sign up through our Diaspora Engagement Portal and start exploring opportunities immediately.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h4 className="font-semibold mb-2">What are the investment opportunities available?</h4>
              <p className="text-gray-600">
                We offer pre-vetted projects across key sectors like agriculture, manufacturing, and tourism.
                Learn more on the Investment Page.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white shadow-md rounded-xl p-6">
              <h4 className="font-semibold mb-2">How do I participate in cultural programs?</h4>
              <p className="text-gray-600">
                Sign up for cultural exchange events or host your own with BESDDLI&apos;s support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  <Footer/>
  </>
  );
}
