"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MovieCard } from "./MovieCard";
import { ArrowRight } from "lucide-react";
import { axiosInstance, imageUrl } from "@/lib/utils";

type myTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
};

export const Popular = () => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();

  const handleOneClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  // const handleOnclick = (id: number) => {
  //   router.push(`/movieSuggestions?genres=${id}&page=1`);
  // };

  const handleOnclick = () => {
    router.push(`/movieSuggestions?page=1`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "movie/popular?language=en-US&page=1"
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-screen px-[80px] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Popular</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
          onClick={handleOnclick}
        >
          See more
          <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-wrap justify-start gap-6">
        {movieData.slice(0, 10).map((value) => (
          <MovieCard
            key={value.id}
            title={value.title}
            id={value.id}
            image={imageUrl(value.poster_path)}
            rating={value.vote_average}
          />
        ))}
      </div>
    </div>
  );
};
