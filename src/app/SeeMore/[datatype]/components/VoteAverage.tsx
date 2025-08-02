import { Star } from "lucide-react";
import React from "react";

type VoteAverageProps = {
  voteAverage?: string;
  className?: string;
};

export const VoteAverage = ({
  voteAverage,
  className = "",
}: VoteAverageProps) => {
  return (
    <div className="flex items-center gap-2">
      <Star className="size-[16px] text-[#FDE047] fill-[#FDE047]" />

      <div className="flex items-center space-x-1">
        <span
          className={`text-sm font-semibold text-[#09090B] dark:text-white ${className}`}
        >
          {voteAverage}
        </span>
        <span className="text-xs font-normal text-[#71717A]">/10</span>
      </div>
    </div>
  );
};
