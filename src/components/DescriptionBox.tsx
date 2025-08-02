import React from "react";
import { Star } from "lucide-react";

interface DescriptionBoxProps {
  original_title: string;
  vote_average: string;
  overview: string;
}

export const DescriptionBox: React.FC<DescriptionBoxProps> = ({
  original_title,
  vote_average,
  overview,
}) => {
  return (
    <div className="w-full pt-[178px] pl-[140px]">
      <div className="flex flex-col max-w-xl gap-4 text-white">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-light text-neutral-300">Now Playing:</p>
          <h1 className="text-4xl font-bold">{original_title}</h1>
        </div>

        <div className="flex items-center gap-1 text-sm text-yellow-400">
          <Star className="w-4 h-4 fill-yellow-400" />
          <span className="font-medium">{vote_average}</span>
          <span className="text-neutral-400">/ 10</span>
        </div>

        <p className="text-sm leading-relaxed text-neutral-100">{overview}</p>
      </div>
    </div>
  );
};
