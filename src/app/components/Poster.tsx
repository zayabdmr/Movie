"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Poster_word } from "./Poster_word";
import axios from "axios";
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

export function Poster() {
  const [movieData, setMovieData] = useState<myTypes[]>();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((res) => setMovieData(res.data.results));
  });
  return (
    <div className="w-full h-[700px] flex items-center justify-center overflow-hidden pt-[24px]">
      <div className="w-full h-full">
        <Carousel className="w-full h-full">
          <CarouselContent className="h-full">
            {movieData?.slice(0, 3).map((value, index) => (
              <CarouselItem key={index} className="w-full h-screen">
                <div className="w-full h-screen">
                  <Poster_word
                    title={value.title}
                    image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                    rating={value.vote_average}
                    description={value.overview}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[44px]" />
          <CarouselNext className="right-[44px]" />
        </Carousel>
      </div>
    </div>
  );
}
