"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { Poster_word } from "./Poster_word";
import { axiosInstance } from "@/lib/utils";

type myTypes = {
  overview: string;
  poster_path: string | null;
  title: string;
  vote_average: number;
};

export function Poster() {
  const [movieData, setMovieData] = useState<myTypes[]>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "movie/now_playing?language=en-US&page=1"
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full h-[900px] flex items-center justify-center overflow-hidden pt-[24px]">
      <div className="w-full h-full">
        <Carousel className="w-full ">
          <CarouselContent className="h-full">
            {movieData?.slice(0, 3).map((value, index) => (
              <CarouselItem key={index} className="w-full h-[800px]">
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
          <CarouselPrevious className="left-[44px] w-[40px] h-[40px]" />
          <CarouselNext className="right-[44px] w-[40px] h-[40px]" />
        </Carousel>
      </div>
    </div>
  );
}
