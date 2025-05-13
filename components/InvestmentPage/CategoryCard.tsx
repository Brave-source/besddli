"use client";

import { ReactNode } from "react";

type CategoryCardProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export const CategoryCard = ({ label, icon: Icon, active, onClick }: CategoryCardProps) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer w-36 sm:w-40"
    >
      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg w-full h-28">
        <div className="text-green-600 mb-2">{Icon}</div>
        <span className="text-sm font-semibold text-gray-800 text-center truncate">{label}</span>
      </div>
      {active && (
        <div className="w-full h-1 bg-green-600 mt-2 rounded-sm" />
      )}
    </div>
  );
};
