"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MovieCard } from "./MovieCard";

type myTypes = {
  id: number;
  poster_path: string | null;
  title: string;
  video: boolean;
  vote_average: number;
};

export const TopRated = ({}: any) => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();

  const handleOneClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  console.log(movieData, "Popular MOVIES");

  return (
    <div className="w-[100pz] px-[80px] py-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Top Rated</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>

      <div className="flex flex-wrap justify-start gap-8">
        {movieData?.slice(0, 10).map((value: any) => (
          <MovieCard
            key={value.title}
            title={value.title}
            id={value.id}
            image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
            rating={value.vote_average}
          />
        ))}
      </div>
    </div>
  );
};
