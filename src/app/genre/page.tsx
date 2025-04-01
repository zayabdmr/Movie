"use client";

import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Badge, ChevronRight } from "lucide-react";
import { useState } from "react";

type genreTypes = {
  id: number;
  name: string;
};

export default function Genre() {
  const [genres, setGenres] = useState<genreTypes[]>([]);

  return (
    <div>
      <Navigation />
      <div>
        <h1 className="text-[#09090B] text-[30px] font-semibold px-[80px]">
          Search filter
        </h1>

        <div>
          <h3 className="text-[#09090B] text-6 font-semibold">Genres</h3>
        </div>

        <div className="gap-8">
          <div className="flex flex-wrap gap-2">
            {genres?.map((genre) => (
              <Badge
                onClick={() => handleOnclick(genre.id)}
                key={genre.id}
                variant="outline"
                className="flex items-center gap-1 px-3 py-2 text-[12px] text-[#18181B] border-[#D4D4D8]"
              >
                {genre.name}
                <ChevronRight className="w-[14px] h-[14px] opacity-60" />
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
