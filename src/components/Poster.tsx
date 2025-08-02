"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PlayIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { axiosInstance } from "@/lib/utils";
import { DescriptionBox } from "./DescriptionBox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Movie = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  original_title: string;
};

type Video = {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
};

type MovieResponse = { results: Movie[] };
type VideoResponse = { results: Video[] };

export const Poster = () => {
  const [posterData, setPosterData] = useState<MovieResponse>();
  const [selectedMovieId, setSelectedMovieId] = useState<string>("278");
  const [videoData, setVideoData] = useState<VideoResponse>();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axiosInstance.get(
          "movie/now_playing?language=en-US&page=1"
        );
        setPosterData(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch movies:", err);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axiosInstance.get(
          `movie/${selectedMovieId}/videos?language=en-US`
        );
        setVideoData(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch videos:", err);
      }
    };
    fetchVideos();
  }, [selectedMovieId]);

  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      className="w-full h-[600px]"
    >
      <CarouselContent className="w-full h-[600px]">
        {posterData?.results.slice(0, 3).map((movie) => (
          <CarouselItem key={movie.id} className="relative w-full h-[600px]">
            <div className="absolute z-20 flex flex-col gap-4">
              <DescriptionBox
                overview={movie.overview}
                vote_average={movie.vote_average.toFixed(1)}
                original_title={movie.original_title}
              />
              <div className="flex pl-[140px]">
                <Dialog>
                  <DialogTrigger
                    onClick={() => setSelectedMovieId(movie.id.toString())}
                    className="flex items-center gap-2 px-4 py-2 text-black bg-white border rounded-md cursor-pointer hover:bg-gray-200 active:bg-black"
                  >
                    <PlayIcon className="size-4" />
                    <span>Watch Trailer</span>
                  </DialogTrigger>
                  <DialogContent className="max-w-[820px] p-0 border-none bg-transparent shadow-none justify-center">
                    <DialogHeader>
                      <DialogTitle className="hidden" />
                      <DialogDescription className="flex items-center justify-center w-full h-full">
                        {videoData?.results.length ? (
                          <iframe
                            key={videoData.results[0].id}
                            className="w-[760px] h-[428px] rounded-md"
                            src={`https://www.youtube.com/embed/${videoData.results[0].key}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
                          <p className="text-lg font-semibold text-white">
                            No trailer available.
                          </p>
                        )}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Image
              className="absolute w-screen h-[600px] object-cover brightness-80"
              height={600}
              width={1440}
              src={`https://image.tmdb.org/t/p/original${
                movie.backdrop_path || movie.poster_path
              }`}
              alt={`${movie.original_title} poster`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-[44px]" />
      <CarouselNext className="right-[44px]" />
    </Carousel>
  );
};
