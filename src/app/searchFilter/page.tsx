"use client";

import { GenresMovie } from "@/components/GenresMovie";
import { GenresSelector } from "@/components/GenresSelector";

export default function searchFilter() {
  return (
    <div className="flex gap-[100px]">
      <div>
        {" "}
        <h2 className="text-[#09090B] text-[30px] font-semibold px-20 pt-[52px] pb-8">
          Search filter
        </h2>
        <GenresSelector />
      </div>
      {/* <div className="border-r border-gray-800 h-[1189px]"></div> */}
      <GenresMovie />
    </div>
  );
}
