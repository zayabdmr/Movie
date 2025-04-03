"use client";
import * as React from "react";
import { Star, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";

type Poster_CardProps = {
  image: string;
  rating: number;
  description: string;
  title: string;
  id: string;
};

type TrailerTypes = {
  key: string;
  site: string;
  type: string;
};

export const PosterCard = ({
  image,
  rating,
  description,
  title,
  id,
}: Poster_CardProps) => {
  const [Trailer, setTrailer] = useState<TrailerTypes[]>([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${id}/videos?language=en-US`
        );
        setTrailer(data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-start text-[#FAFAFA] pl-[180px]">
      <div className="absolute inset-0">
        <img src={image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-lg">
        <p className="text-[16px]">Now Playing:</p>
        <h1 className="text-[36px] font-bold w-[404px]">{title}</h1>

        <div className="flex items-center pt-[8px] gap-[4px]">
          <Star size={28} fill="yellow" color="yellow" />
          <span className="text-[18px] font-semibold">
            {rating && `${(Math.round(rating * 10) / 10).toFixed(1)}`}
          </span>
          <span className="text-[#71717A] text-[16px]">/10</span>
        </div>

        <p className="text-[12px] mt-[26px] w-[302px]">{description}</p>

        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-[16px] px-[16px] py-[8px] text-[14px] bg-[#F4F4F5] text-[#18181B] font-medium rounded-[6px] flex items-center space-x-2 hover:bg-gray-200 transition cursor-pointer">
              <Play />
              <span>Watch Trailer</span>
            </button>
          </DialogTrigger>
          <DialogContent className="!w-[993px] !max-w-6xl h-auto !p-0 !pt-4">
            <DialogHeader>
              <DialogTitle>{title} - Trailer</DialogTitle>
              <DialogDescription>
                {Trailer.length > 0 && Trailer[0]?.key ? (
                  <iframe
                    width="100%"
                    height="561"
                    src={`https://www.youtube.com/embed/${Trailer[0]?.key}`}
                    title="YouTube video player"
                    style={{ borderRadius: 8 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="text-center">No trailer available</p>
                )}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
