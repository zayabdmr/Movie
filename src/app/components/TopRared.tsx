"use client";
import { Slide } from "./Slide";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type myTypes = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default function TopRated() {
  const [movieData, setMovieData] = useState<myTypes[]>();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((res) => setMovieData(res.data.results));
  });
  return (
    <div className="w-screen px-[80px] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Top Rated </h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[32px]">
        {movieData?.slice(0, 10).map((value, index) => (
          <Slide
            key={value.id}
            title={value.title}
            image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
            rating={value.vote_average}
          />
        ))}
      </div>
    </div>
  );
}
