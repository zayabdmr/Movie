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

  const handleGenreClick = (genreId: number) => {
    router.push(`/searchFilter?genre=${genreId}&page=1`);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axiosInstance.get(
          "genre/movie/list?language=en"
        );
        setGenres(response.data.genres || []);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <section className="text-[#09090B] dark:text-white">
      <header className="pb-4">
        <h3 className="text-lg font-semibold">Genres</h3>
        <p className="text-sm text-muted-foreground dark:text-gray-400">
          See lists of movies by genre
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        {genres.length > 0 ? (
          genres.map((genre) => (
            <Badge
              key={genre.id}
              onClick={() => handleGenreClick(genre.id)}
              variant="outline"
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
            >
              {genre.name}
              <ChevronRight className="w-4 h-4" />
            </Badge>
          ))
        ) : (
          <p className="text-sm text-gray-400">No genres available</p>
        )}
      </div>
    </section>
  );
};
