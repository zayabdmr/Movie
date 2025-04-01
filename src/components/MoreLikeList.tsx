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
  video: boolean;
  vote_average: number;
  poster_path: string | null;
};

export const MoreLikeList = ({}: any) => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();

  const handleOneClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  const handleOnclick = () => {
    router.push(`/similarMovieSuggestions?page=1`);
  };

  const params = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `movie/${params.movieId}/similar?language=en-US&page=1`
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-[1380px] mx-auto px-6 py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">More like this</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
          onClick={handleOnclick}
        >
          See more
          <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-wrap justify-start gap-11">
        {movieData?.slice(0, 5).map((value: any) => (
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
