"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { axiosInstance, imageUrl } from "@/lib/utils";
import { MovieCard } from "./MovieCard";

type MovieType = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
};

export const MoreLikeList = () => {
  const { movieId } = useParams();
  const router = useRouter();

  const [similarMovies, setSimilarMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchSimilarMovies = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${movieId}/similar?language=en-US&page=1`
        );
        setSimilarMovies(data.results);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    };

    fetchSimilarMovies();
  }, [movieId]);

  const handleSeeMore = () => {
    router.push(`/similarMovieSuggestions/${movieId}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-[#18181B] dark:text-white">
          More like this
        </h2>

        <Button
          variant="ghost"
          onClick={handleSeeMore}
          className="group flex items-center gap-1 text-sm font-medium text-[#4B5563] dark:text-[#E4E4E7] hover:text-[#4338CA] dark:hover:text-white transition-colors duration-200"
        >
          See more
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={1.5}
          />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {similarMovies.slice(0, 5).map((movie, index) => (
          <div
            key={movie.id}
            className="cursor-pointer rounded-xl overflow-hidden
              bg-white dark:bg-[#18181B]
              shadow-md hover:shadow-lg dark:hover:shadow-blue-800
              transform transition-all duration-500 ease-out hover:scale-105
              fade-in"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            <MovieCard
              id={movie.id}
              title={movie.title}
              image={
                movie.poster_path
                  ? imageUrl(movie.poster_path)
                  : "/no-image.png"
              }
              rating={movie.vote_average}
              className="relative z-10 h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
