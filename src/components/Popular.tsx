"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MovieCard } from "../app/detail/[movieId]/components/MovieCard";
import { axiosInstance, imageUrl } from "@/lib/utils";

type MovieType = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export const Popular = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const router = useRouter();

  const handleSeeMore = (type: string) => {
    router.push(`/SeeMore/${type}`);
  };

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const res = await axiosInstance.get(
          "movie/popular?language=en-US&page=1"
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="w-full px-6 pb-12 md:px-20">
      <div className="flex items-center justify-between text-gray-900 dark:text-white">
        <h2 className="pb-6 text-xl font-semibold md:text-2xl">Popular</h2>
        <Button
          variant="link"
          className="gap-1 text-sm font-medium transition-colors duration-300 group md:text-base hover:text-blue-600 dark:hover:text-blue-400"
          onClick={() => handleSeeMore("popular")}
        >
          See more
          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </div>

      <div className="flex flex-wrap gap-6 transition-all duration-300">
        {movies.slice(0, 10).map((movie, index) => (
          <div
            key={movie.id}
            className="
              bg-white dark:bg-[#18181B]
              rounded-xl overflow-hidden
              shadow-md hover:shadow-lg dark:hover:shadow-blue-800
              transform transition-all duration-500 ease-out hover:scale-105
              animate-fadeIn
            "
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <MovieCard
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              image={imageUrl(movie.poster_path)}
              className="w-[180px] md:w-[220px] lg:w-[250px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
