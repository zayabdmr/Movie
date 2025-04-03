"use client";
import * as React from "react";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
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
import { useParams } from "next/navigation";

type Poster_wordProps = {
  image: string;
  rating: number;
  description: string;
  title: string;
};

type TrailerTypes = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export const Poster_word = ({
  image,
  rating,
  description,
  title,
  id,
}: Poster_wordProps) => {
  const [Trailer, setTrailer] = useState<TrailerTypes[]>([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${id}/videos?language=en-US`
        );
        console.log(data, "data");
        setTrailer(data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-start pl-[130px] text-white">
      <div className="absolute inset-0">
        <img src={image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-lg">
        <p className="text-[16px]">Now Playing:</p>
        <h1 className="text-[36px] font-bold">{title}</h1>

        <div className="flex items-center pt-[8px] gap-[4px]">
          <Star className="text-yellow-400 fill-yellow-400" />
          <span className="text-[18px] font-semibold">
            {rating && `${(Math.round(rating * 10) / 10).toFixed(1)}`}
          </span>
          <span className="text-gray-300">/10</span>
        </div>

        <p className="text-gray-200 text-[12px] mt-[26px] w-[302px]">
          {description}
        </p>

        <div>
          <button className="mt-[16px] px-[16px] py-[8px] relative text-[14px] bg-white text-black font-medium rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition">
            <Play />
            <span>Watch Trailer</span>
            <div className="absolute">
              <Dialog>
                <DialogTrigger className=" bg-white px-2 py-1 rounded-full"></DialogTrigger>
                <DialogContent className="!w-[993px] !max-w-6xl h-auto !p-0 !pt-10">
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
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
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
