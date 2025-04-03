"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { axiosInstance, imageUrl } from "@/lib/utils";
import { PosterCard } from ".";

type myTypes = {
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  id: string;
};

export function Poster() {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "movie/now_playing?language=en-US&page=1"
        );
        setMovieData(response.data.results.slice(0, 3));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movieData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="w-full h-[700px] flex items-center justify-center overflow-hidden pt-[24px]">
      <div className="w-full h-full">
        <Carousel className="w-full relative">
          <CarouselContent
            className="h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {movieData.map((value, index) => (
              <CarouselItem key={index} className="w-full h-[700px]">
                <div className="w-full h-screen">
                  <PosterCard
                    id={value.id}
                    title={value.title}
                    image={imageUrl(value.poster_path)}
                    rating={value.vote_average}
                    description={value.overview}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 ">
            {movieData.map((_, index) => (
              <input
                key={index}
                type="radio"
                name="carousel"
                checked={currentIndex === index}
                onChange={() => setCurrentIndex(index)}
                className="w-4 h-4 cursor-pointer accent-white"
              />
            ))}
          </div>

          {currentIndex > 0 && (
            <CarouselPrevious
              className="left-[44px] w-[40px] h-[40px]"
              onClick={handlePrev}
            />
          )}
          {currentIndex < movieData.length - 1 && (
            <CarouselNext
              className="right-[44px] w-[40px] h-[40px]"
              onClick={handleNext}
            />
          )}
        </Carousel>
      </div>
    </div>
  );
}
