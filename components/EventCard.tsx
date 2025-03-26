import React, { ReactNode } from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  icon: ReactNode;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  icon,
  className = "",
}) => {
  return (
    <div
      className={`
        flex flex-col justify-center items-center gap-5 py-5 px-4 
        bg-white rounded-lg h-full
        ${className}
      `}
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(35, 35, 35, 0.1), 0 6px 10px -1px rgba(0, 0, 0, 0.08), 0 10px 20px -2px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="flex flex-col items-center gap-2 self-stretch">
        <div className="flex justify-center items-center w-[5.25rem] h-[5.25rem] rounded-[50px] bg-[#F2F2F2]">
          {icon}
        </div>
        <div className="self-stretch text-black text-center font-['Roboto'] text-xl leading-7 font-semibold">
          {title}
        </div>
        <div className="self-stretch text-black/50 text-center font-['Roboto'] leading-6">
          {date}
        </div>
      </div>
      <div className="self-stretch text-black text-center font-['Roboto'] text-[1.75rem] font-medium leading-9">
        {location}
      </div>
    </div>
  );
};

export default EventCard;
