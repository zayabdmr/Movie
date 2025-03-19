"use client";
import * as React from "react";
import { Star } from "lucide-react";
import { Play } from "lucide-react";

type Poster_wordProps = {
  image: string;
  rating: number;
  description: string;
  title: string;
};

export const Poster_word = ({
  image,
  rating,
  description,
  title,
}: Poster_wordProps) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-start pl-[130px] text-white">
      <div className="absolute inset-0">
        <img src={image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-lg">
        <p className="text-[16px]">Now Playing:</p>
        <h1 className="text-[36px] font-bold">{title}</h1>

        <div className="flex items-center pt-[8px] gap-[4px]">
          <Star className="text-yellow-400 fill-yellow-400" />
          <span className="text-[18px] font-semibold">{rating}</span>
          <span className="text-gray-300">/10</span>
        </div>

        <p className="text-gray-200 text-[12px] mt-[26px] w-[302px]">
          {description}
        </p>

        <button className="mt-[16px] px-[16px] py-[8px] text-[14px] bg-white text-black font-medium rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition">
          <Play />
          <span>Watch Trailer</span>
        </button>
      </div>
    </div>
  );
};
