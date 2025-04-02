"use client";

import { GenresSelector } from "@/components/GenresSelector";

import { Navigation } from "@/components/Navigation";

export default function searchFilter() {
  return (
    <div>
      <Navigation />
      <h2 className="text-[#09090B] text-[30px] font-semibold px-20 pt-[52px] pb-8">
        Search filter
      </h2>
      <GenresSelector />
      {/* <div className="border-r border-gray-800 h-[1189px]"></div> */}
    </div>
  );
}
