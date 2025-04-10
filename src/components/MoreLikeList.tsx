"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MovieCard } from "./MovieCard";
import { ArrowRight } from "lucide-react";
import { axiosInstance, imageUrl } from "@/lib/utils";

type myTypes = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
};

export const MoreLikeList = () => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();
  const params = useParams();
  const movieId = params.movieId;

  const handleSeeMore = () => {
    router.push(`/similarMovieSuggestions/${movieId}`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `movie/${movieId}/similar?language=en-US&page=1`
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    };

    if (movieId) {
      fetchMovies();
    }
  }, [movieId]);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">More like this</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-white"
          variant="link"
          onClick={handleSeeMore}
        >
          See more
          <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-wrap justify-start gap-10">
        {movieData.slice(0, 5).map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            id={movie.id}
            image={
              movie.poster_path ? imageUrl(movie.poster_path) : "/no-image.png"
            }
            rating={movie.vote_average}
            className="w-[200px] h-[450px]"
          />
        ))}
      </div>
    </div>
  );
};
