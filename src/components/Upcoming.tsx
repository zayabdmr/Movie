"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MovieCard } from "../app/detail/[movieId]/components/MovieCard";
import { axiosInstance, imageUrl } from "@/lib/utils";

type MovieType = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export const Upcoming = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const res = await axiosInstance.get(
          "movie/upcoming?language=en-US&page=1"
        );
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    };

    fetchUpcomingMovies();
  }, []);

  const handleMovieClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  const handleSeeMoreClick = () => {
    router.push("/SeeMore/upcoming");
  };

  return (
    <div className="w-full px-6 py-12 md:px-20">
      <div className="flex items-center justify-between text-gray-900 dark:text-white">
        <h2 className="pb-6 text-2xl font-semibold md:text-3xl">Upcoming</h2>
        <Button
          variant="link"
          className="text-sm font-medium transition-colors duration-300 md:text-base group hover:text-blue-600 dark:hover:text-blue-400"
          onClick={handleSeeMoreClick}
        >
          See more
          <ArrowRight
            size={18}
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </div>

      <div className="flex flex-wrap gap-8">
        {movies.slice(0, 10).map((movie, index) => (
          <div
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
            className="
              cursor-pointer rounded-xl overflow-hidden
              bg-white dark:bg-[#18181B]
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
              className="w-[220px] md:w-[240px] lg:w-[250px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
