import React from "react";

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      icon: (
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
      ),
      title: "Engagement Programs",
      description:
        "Connect with fellow diaspora members through networking events and volunteering opportunities.",
      link: "#",
    },
    {
      icon: (
        <svg
          width={38}
          height={31}
          viewBox="0 0 38 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 15.6001C22.3137 15.6001 25 12.9138 25 9.6001C25 6.28639 22.3137 3.6001 19 3.6001C15.6863 3.6001 13 6.28639 13 9.6001C13 12.9138 15.6863 15.6001 19 15.6001ZM19 18.6001C14.5817 18.6001 6 20.8138 6 25.2001V27.6001H32V25.2001C32 20.8138 23.4183 18.6001 19 18.6001Z"
            fill="#15803D"
          />
        </svg>
      ),
      title: "Support Services",
      description:
        "Access a range of services tailored to diaspora needs, from legal assistance to cultural events.",
      link: "#",
    },
    {
      icon: (
        <svg
          width={38}
          height={31}
          viewBox="0 0 38 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.875 7.48926V23.1118C31.875 24.1489 31.0371 24.9868 30 24.9868H7.5C6.46289 24.9868 5.625 24.1489 5.625 23.1118V7.48926L18.75 16.7627L31.875 7.48926ZM7.5 5.61426L18.75 14.8877L30 5.61426H7.5Z"
            fill="#15803D"
          />
        </svg>
      ),
      title: "Communication Support",
      description:
        "Bridge communication gaps with language support and cultural exchange programs.",
      link: "#",
    },
    {
      icon: (
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
      ),
      title: "Cultural Resources",
      description:
        "Explore a rich repository of cultural resources, including literature, art, and heritage materials.",
      link: "#",
    },
  ];

  return (
    <section className="programs-section container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Our Programs
      </h2>
      <div className="flex justify-end mb-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 pr-1 text-green-700 hover:text-green-800 transition-colors"
        >
          <span className="font-['Inter'] leading-normal">
            Explore Programs
          </span>
          <div className="flex justify-center items-center h-4">
            <svg
              width={15}
              height={17}
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_83_404)">
                <path
                  d="M14.1438 9.30637C14.5344 8.91575 14.5344 8.28137 14.1438 7.89075L9.14375 2.89075C8.75313 2.50012 8.11875 2.50012 7.72813 2.89075C7.3375 3.28137 7.3375 3.91575 7.72813 4.30637L11.025 7.60012H1.4375C0.884375 7.60012 0.4375 8.047 0.4375 8.60012C0.4375 9.15325 0.884375 9.60012 1.4375 9.60012H11.0219L7.73125 12.8939C7.34062 13.2845 7.34062 13.9189 7.73125 14.3095C8.12187 14.7001 8.75625 14.7001 9.14688 14.3095L14.1469 9.3095L14.1438 9.30637Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_83_404">
                  <path
                    d="M0.4375 0.600098H14.4375V16.6001H0.4375V0.600098Z"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
        {programs.map((program, index) => (
          <div
            key={index}
            className="flex flex-col w-full max-w-72 h-full rounded-xl bg-white p-4 shadow-sm mx-auto"
          >
            <div className="flex justify-center items-center w-9 h-9 mb-2">
              {program.icon}
            </div>
            <h3 className="mt-2 text-xl font-bold text-black">
              {program.title}
            </h3>
            <p className="mt-2 text-gray-600">{program.description}</p>
            <div className="mt-2">
              <a
                href={program.link}
                className="inline-flex items-center gap-2 pr-1 text-green-700 hover:text-green-800 transition-colors"
              >
                <span className="font-['Inter'] leading-normal">
                  Learn More →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
