import React from "react";
import Image from "next/image";
import Button from "./Button";
import ProgramsSection from "./ProgramsSection";

const MainContent: React.FC = () => {
  return (
    <section className="container mx-auto py-2 px-4">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between max-w-screen-xl">
        <div className="flex flex-col space-y-2 mb-8 lg:mb-0 lg:mr-12 w-full lg:w-auto">
          <div className="relative w-[162px] h-[138px]">
            <Image
              src="/images/flower1.png"
              alt="Feature image 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[162px] h-[138px]">
            <Image
              src="/images/flower2.png"
              alt="Feature image 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-[162px] h-[138px]">
            <Image
              src="/images/flower3.png"
              alt="Feature image 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col max-w-4xl items-center text-center space-y-16">
          <h2 className="text-4xl font-bold text-black leading-tight">
            Empowering Global Linkages for Local Growth
          </h2>

          <p className="text-xl text-black leading-relaxed">
            We are dedicated to empowering the diaspora to reconnect with their
            roots and invest in Benue’s sustainable future. Through our
            platform, you can engage in valuable projects that promote
            development, mentorship, and cultural preservation.
          </p>

          <div className="flex justify-end w-full">
            <Button className="bg-green-700 text-white font-sm py-3 px-6 rounded-lg hover:bg-green-800 transition-colors">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <ProgramsSection />
    </section>
  );
};

export default MainContent;
