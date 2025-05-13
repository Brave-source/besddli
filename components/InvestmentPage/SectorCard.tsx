
"use client";
import Image from "next/image";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export type SectorCardProps = {
  title: string;
  description: string;
  image: string;
  badge: string;
  price?: string;
  oldPrice?: string;
  rating?: number; // out of 5
  tag?: string;
};

export const SectorCard = ({
  title,
  description,
  image,
  badge,
  price,
  oldPrice,
  rating = 4.5,
  tag,
  
}: SectorCardProps) => {
  
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rounded-2xl overflow-hidden w-full max-w-sm">
      {/* Image + badges */}
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
        <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} className="w-4 h-4" />
          ))}
          {hasHalfStar && <FaStarHalfAlt className="w-4 h-4" />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="w-4 h-4" />
          ))}
          {tag && (
          <span className="ml-2 text-xs text-gray-500">{tag}</span>
        )}
        </div>

        {/* Pricing */}
        <div className="text-sm mt-2">
          <span className="font-bold text-lg text-gray-800 mr-2">
            {price}
          </span>
          {oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              {oldPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
