import React from "react";
import Image from "next/image";
import Button from "./Button";
import ProgramsSection from "./ProgramsSection";
import { MetricCard, ProjectCard } from "./Card";
import UpcomingEventsSection from "./UpcomingEventsSection";

interface Project {
  id: number;
  title: string;
  description: string;
  amount: string;
  category: string;
  categoryColor: "green" | "blue" | "yellow";
  image: string;
}

const MainContent: React.FC = () => {
  const metrics = [
    {
      value: "5,000+",
      label: "Registered Members",
      icon: (
        <svg
          width={46}
          height={37}
          viewBox="0 0 46 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_327)">
            <path
              d="M10.9531 0.800049C12.445 0.800049 13.8757 1.39268 14.9306 2.44757C15.9855 3.50247 16.5781 4.93321 16.5781 6.42505C16.5781 7.91689 15.9855 9.34763 14.9306 10.4025C13.8757 11.4574 12.445 12.05 10.9531 12.05C9.46128 12.05 8.03054 11.4574 6.97565 10.4025C5.92076 9.34763 5.32812 7.91689 5.32812 6.42505C5.32812 4.93321 5.92076 3.50247 6.97565 2.44757C8.03054 1.39268 9.46128 0.800049 10.9531 0.800049ZM36.8281 0.800049C38.32 0.800049 39.7507 1.39268 40.8056 2.44757C41.8605 3.50247 42.4531 4.93321 42.4531 6.42505C42.4531 7.91689 41.8605 9.34763 40.8056 10.4025C39.7507 11.4574 38.32 12.05 36.8281 12.05C35.3363 12.05 33.9055 11.4574 32.8507 10.4025C31.7958 9.34763 31.2031 7.91689 31.2031 6.42505C31.2031 4.93321 31.7958 3.50247 32.8507 2.44757C33.9055 1.39268 35.3363 0.800049 36.8281 0.800049ZM0.828125 21.8024C0.828125 17.661 4.18906 14.3 8.33047 14.3H11.3328C12.4508 14.3 13.5125 14.5461 14.4688 14.9821C14.3773 15.4883 14.3352 16.0157 14.3352 16.55C14.3352 19.236 15.5164 21.6477 17.3797 23.3C17.3656 23.3 17.3516 23.3 17.3305 23.3H2.32578C1.50312 23.3 0.828125 22.625 0.828125 21.8024ZM29.3258 23.3C29.3117 23.3 29.2977 23.3 29.2766 23.3C31.1469 21.6477 32.3211 19.236 32.3211 16.55C32.3211 16.0157 32.2719 15.4954 32.1875 14.9821C33.1437 14.5391 34.2055 14.3 35.3234 14.3H38.3258C42.4672 14.3 45.8281 17.661 45.8281 21.8024C45.8281 22.6321 45.1531 23.3 44.3305 23.3H29.3258ZM16.5781 16.55C16.5781 14.7598 17.2893 13.0429 18.5552 11.7771C19.821 10.5112 21.5379 9.80005 23.3281 9.80005C25.1183 9.80005 26.8352 10.5112 28.1011 11.7771C29.367 13.0429 30.0781 14.7598 30.0781 16.55C30.0781 18.3403 29.367 20.0571 28.1011 21.323C26.8352 22.5889 25.1183 23.3 23.3281 23.3C21.5379 23.3 19.821 22.5889 18.5552 21.323C17.2893 20.0571 16.5781 18.3403 16.5781 16.55ZM9.82812 34.9227C9.82812 29.7477 14.0258 25.55 19.2008 25.55H27.4555C32.6305 25.55 36.8281 29.7477 36.8281 34.9227C36.8281 35.9563 35.9914 36.8 34.9508 36.8H11.7055C10.6719 36.8 9.82812 35.9633 9.82812 34.9227Z"
              fill="#15803D"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_327">
              <path
                d="M0.828125 0.800049H45.8281V36.8H0.828125V0.800049Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "$25M+",
      label: "Investments Facilitated",
      icon: (
        <svg
          width={41}
          height={37}
          viewBox="0 0 41 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_336)">
            <path
              d="M22.4297 2.48755V3.22583C22.8797 3.3102 23.3156 3.41567 23.7094 3.52114C24.6094 3.76021 25.1438 4.68833 24.9047 5.58833C24.6656 6.48833 23.7375 7.02271 22.8375 6.78364C22.0711 6.57974 21.3539 6.43911 20.7141 6.43208C20.2008 6.42505 19.6805 6.55161 19.35 6.74146C19.2023 6.83286 19.132 6.9102 19.1039 6.95239C19.0828 6.98755 19.0547 7.03677 19.0547 7.14927C19.0547 7.17036 19.0547 7.18442 19.0547 7.19146C19.0688 7.20552 19.118 7.27583 19.2867 7.37427C19.6945 7.62036 20.2992 7.8102 21.2133 8.08442L21.2766 8.10552C22.057 8.33755 23.0977 8.65395 23.9414 9.1813C24.9047 9.78599 25.7766 10.7915 25.7977 12.3383C25.8188 13.9204 24.9961 15.0735 23.9203 15.7485C23.4492 16.0368 22.943 16.2407 22.4227 16.3672V17.1125C22.4227 18.0477 21.6703 18.8 20.7352 18.8C19.8 18.8 19.0477 18.0477 19.0477 17.1125V16.311C18.3797 16.1493 17.768 15.9383 17.2477 15.7625C17.1 15.7133 16.9594 15.6641 16.8258 15.6219C15.9398 15.3266 15.4617 14.3704 15.757 13.4844C16.0523 12.5985 17.0086 12.1204 17.8945 12.4157C18.0773 12.479 18.2461 12.5352 18.4078 12.5915C19.3641 12.9149 20.0531 13.1469 20.7914 13.175C21.3539 13.1961 21.8531 13.0625 22.1414 12.8868C22.275 12.8024 22.3383 12.7321 22.3664 12.6829C22.3945 12.6407 22.4297 12.5563 22.4227 12.3946V12.3805C22.4227 12.3102 22.4227 12.2329 22.1414 12.0571C21.7406 11.804 21.1359 11.6071 20.2359 11.3329L20.1023 11.2907C19.343 11.0657 18.3445 10.7633 17.543 10.2782C16.5938 9.70864 15.6797 8.7313 15.6727 7.17739C15.6656 5.56724 16.5797 4.46333 17.6203 3.84458C18.0703 3.57739 18.5555 3.39458 19.0406 3.26802V2.48755C19.0406 1.55239 19.793 0.800049 20.7281 0.800049C21.6633 0.800049 22.4156 1.55239 22.4156 2.48755H22.4297ZM40.4438 24.4461C41.3648 25.6977 41.0977 27.4555 39.8461 28.3766L30.9445 34.9368C29.2992 36.1461 27.3164 36.8 25.2703 36.8H13.9922H2.74219C1.49766 36.8 0.492188 35.7946 0.492188 34.55V30.05C0.492188 28.8055 1.49766 27.8 2.74219 27.8H5.32969L8.48672 25.2688C10.0828 23.9891 12.0656 23.3 14.1117 23.3H19.6172H20.7422H25.2422C26.4867 23.3 27.4922 24.3055 27.4922 25.55C27.4922 26.7946 26.4867 27.8 25.2422 27.8H20.7422H19.6172C18.9984 27.8 18.4922 28.3063 18.4922 28.925C18.4922 29.5438 18.9984 30.05 19.6172 30.05H28.0969L36.5133 23.8485C37.7648 22.9274 39.5227 23.1946 40.4438 24.4461ZM14.1047 27.8H14.0414C14.0625 27.8 14.0836 27.8 14.1047 27.8Z"
              fill="#15803D"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_336">
              <path
                d="M0.492188 0.800049H40.9922V36.8H0.492188V0.800049Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "200+",
      label: "Events Hosted",
      icon: (
        <svg
          width={33}
          height={37}
          viewBox="0 0 33 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_83_345)">
            <path
              d="M9.65625 0.800049C10.9008 0.800049 11.9062 1.80552 11.9062 3.05005V5.30005H20.9062V3.05005C20.9062 1.80552 21.9117 0.800049 23.1562 0.800049C24.4008 0.800049 25.4062 1.80552 25.4062 3.05005V5.30005H28.7812C30.6445 5.30005 32.1562 6.81177 32.1562 8.67505V12.05H0.65625V8.67505C0.65625 6.81177 2.16797 5.30005 4.03125 5.30005H7.40625V3.05005C7.40625 1.80552 8.41172 0.800049 9.65625 0.800049ZM0.65625 14.3H32.1562V33.425C32.1562 35.2883 30.6445 36.8 28.7812 36.8H4.03125C2.16797 36.8 0.65625 35.2883 0.65625 33.425V14.3ZM23.7891 22.2454C24.45 21.5844 24.45 20.5157 23.7891 19.8618C23.1281 19.2079 22.0594 19.2008 21.4055 19.8618L14.7258 26.5415L11.4211 23.2368C10.7602 22.5758 9.69141 22.5758 9.0375 23.2368C8.38359 23.8977 8.37656 24.9665 9.0375 25.6204L13.5375 30.1204C14.1984 30.7813 15.2672 30.7813 15.9211 30.1204L23.7891 22.2454Z"
              fill="#15803D"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_345">
              <path
                d="M0.65625 0.800049H32.1562V36.8H0.65625V0.800049Z"
                fill="15803D"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Sustainable Farming Initiative",
      description:
        "Large-scale agricultural project focusing on sustainable farming practices.",
      amount: "$250,000",
      category: "Agriculture",
      categoryColor: "green",
      image: "/images/agriculture-project.jpg",
    },
    {
      id: 2,
      title: "Tech Innovation Hub",
      description: "State-of-the-art technology innovation center in Makurdi.",
      amount: "$500,000",
      category: "Technology",
      categoryColor: "blue",
      image: "/images/tech-hub.jpg",
    },
    {
      id: 3,
      title: "Renewable Energy Project",
      description: "Solar power installation project for rural communities.",
      amount: "$750,000",
      category: "Energy",
      categoryColor: "yellow",
      image: "/images/renewable-energy.jpg",
    },
  ];

  return (
    <main>
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between max-w-screen-xl">
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
            roots and invest in Benue`s sustainable future. Through our
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

      <section className="ourimpact-section py-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="programs-section py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-8">
            Investment Projects Opportunities
          </h2>
          <div className="flex justify-end mb-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 pr-1 text-green-700 hover:text-green-800 transition-colors"
            >
              <span className="font-['Inter'] leading-normal">
                View All Projects →
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                amount={project.amount}
                category={project.category}
                categoryColor={project.categoryColor}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <UpcomingEventsSection />
    </main>
  );
};

export default MainContent;