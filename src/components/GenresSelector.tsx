"use client";

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/utils";

type Genre = {
  id: number;
  name: string;
};

export const GenresSelector = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const router = useRouter();

  const handleOnclick = (id: number) => {
    router.push(`/searchFilter?genres=${id}&page=1`);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axiosInstance.get(
          "genre/movie/list?language=en"
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="pl-20 w-[387px] text-[#09090B] dark:text-white">
      <div className="pb-5">
        <h3 className="text-[24px] font-semibold">Genres</h3>
        <p className="text-[16px] font-normal">See lists of movies by genre</p>
      </div>

      <div className="flex flex-wrap gap-4">
        {genres.length > 0 ? (
          genres.map((genre) => (
            <Badge
              onClick={() => handleOnclick(genre.id)}
              key={genre.id}
              variant="outline"
              className="flex items-center gap-1 px-3 py-2 text-[12px] border-[#D4D4D8] font-semibold hover:bg-gray-200"
            >
              {genre.name}
              <ChevronRight className="w-[16px] h-[16px]" />
            </Badge>
          ))
        ) : (
          <p className="text-[#71717A]">No genres available</p>
        )}
      </div>
    </div>
  );
};
