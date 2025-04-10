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
  const [trailer, setTrailer] = useState<TrailerTypes[]>([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${id}/videos?language=en-US`
        );
        setTrailer(data.results || []);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const officialTrailer = trailer.find(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
  );

  return (
    <div className="relative w-full h-screen flex items-center justify-start text-[#FAFAFA] pl-[180px]">
      <div className="absolute inset-0">
        <img
          src={image || "/fallback.jpg"}
          alt={`${title} poster`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-lg">
        <p className="text-base">Now Playing:</p>
        <h1 className="text-4xl font-bold max-w-md">{title}</h1>

        <div className="flex items-center pt-2 gap-1">
          <Star size={28} fill="yellow" color="yellow" />
          <span className="text-lg font-semibold">
            {rating ? rating.toFixed(1) : "N/A"}
          </span>
          <span className="text-[#71717A] text-base">/10</span>
        </div>

        <p className="text-xs mt-6 max-w-sm">{description}</p>

        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 px-4 py-2 text-sm bg-[#F4F4F5] text-[#18181B] font-medium rounded-[6px] flex items-center space-x-2 hover:bg-gray-200 transition cursor-pointer">
              <Play />
              <span>Watch Trailer</span>
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl p-6">
            <DialogHeader>
              <DialogTitle>{title} - Trailer</DialogTitle>
              <DialogDescription>
                {officialTrailer?.key ? (
                  <iframe
                    width="100%"
                    height="561"
                    src={`https://www.youtube.com/embed/${officialTrailer.key}`}
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
