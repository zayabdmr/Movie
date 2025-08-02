"use client";

import { GenresMovie } from "./GenresMovie";
import { GenresSelector } from "./GenresSelector";

export default function SearchFilter() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 px-6 sm:px-10 lg:px-20 py-12 min-h-screen bg-[#f9fafb] dark:bg-[#09090B]">
      <aside className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0">
        <h2 className="mb-4 lg:mb-6 text-2xl font-bold text-[#09090B] dark:text-white">
          Search Filters
        </h2>

        <div className="sticky top-12 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#18181B] shadow-lg p-6">
          <GenresSelector />
        </div>
      </aside>

      <div className="hidden border-l border-gray-300 lg:flex dark:border-gray-700" />

      <section className="flex-1">
        <GenresMovie />
      </section>
    </div>
  );
}
