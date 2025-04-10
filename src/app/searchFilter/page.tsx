"use client";

import { GenresMovie } from "@/components/GenresMovie";
import { GenresSelector } from "@/components/GenresSelector";

export default function SearchFilter() {
  return (
    <div className="flex gap-[40px] px-4 pt-[52px] pb-8">
      <div className="flex flex-col w-full max-w-[300px]">
        <h2 className="text-[#09090B] text-[30px] font-semibold mb-8">
          Search filter
        </h2>
        <GenresSelector />
      </div>

      {/* Optional: Border for separation */}
      {/* <div className="border-r border-gray-800 h-[1189px]"></div> */}

      <div className="flex-1">
        <GenresMovie />
      </div>
    </div>
  );
}
