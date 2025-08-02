"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { PlayIcon, Star } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { axiosInstance, imageUrl } from "@/lib/utils";
import { DetailNames } from "./DetailNames";

type CrewType = {
  name: string;
  job: string;
  department: string;
};

type DetailCardProps = {
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  release_date?: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  directors?: CrewType[];
  writers?: CrewType[];
  stars?: CrewType[];
  adult?: boolean;
};

type TrailerTypes = {
  key: string;
  site: string;
  type: string;
};

export const DetailCard = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  runtime,
  genres,
  overview,
  vote_average,
  vote_count,
  directors,
  writers,
  stars,
  adult,
}: DetailCardProps) => {
  const { movieId } = useParams();
  const [trailers, setTrailers] = useState<TrailerTypes[]>([]);

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailers = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${movieId}/videos?language=en-US`
        );
        setTrailers(data.results);
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailers();
  }, [movieId]);

  const trailerKey = trailers.find(
    (t) => t.site === "YouTube" && t.type === "Trailer"
  )?.key;

  const rating = (vote_average ?? 0).toFixed(1);
  const ratingCount = Math.floor((vote_count ?? 0) / 1000);
  const formattedDate = release_date?.replace(/-/g, ".") ?? "Unknown";
  const durationHours = Math.floor(Number(runtime) / 60);
  const durationMinutes = Number(runtime) % 60;

  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl dark:text-white">
            {title}
          </h1>
          <p className="mt-1 text-sm text-gray-600 sm:text-base dark:text-gray-300">
            {formattedDate} · {adult ? "NC-17" : "G"} · {durationHours}h{" "}
            {durationMinutes}m
          </p>
        </div>

        <div>
          <p className="text-lg font-medium text-gray-800 dark:text-white">
            Rating
          </p>
          <div className="flex items-center gap-2">
            <Star fill="yellow" color="yellow" className="size-6" />
            <div>
              <p className="text-xl font-semibold dark:text-white">
                {rating}
                <span className="text-sm text-gray-500"> /10</span>
              </p>
              <p className="text-sm text-gray-500">{ratingCount}k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-8 lg:flex-row">
        <img
          src={imageUrl(poster_path ?? "/fallback-image.jpg")}
          alt="Poster"
          className="w-full lg:w-[290px] h-auto rounded-md object-cover"
        />

        <div className="relative w-full">
          <img
            src={imageUrl(backdrop_path ?? "/fallback-image.jpg")}
            alt="Backdrop"
            className="object-cover w-full h-auto rounded-md"
          />

          {trailerKey && (
            <div className="absolute flex items-center gap-3 bottom-4 left-4">
              <Dialog>
                <DialogTrigger className="p-2 bg-white rounded-full shadow-md">
                  <PlayIcon color="black" />
                </DialogTrigger>
                <DialogContent className="!p-0 !pt-8 !max-w-6xl w-full">
                  <DialogHeader>
                    <DialogTitle />
                    <DialogDescription>
                      <iframe
                        width="100%"
                        height="561"
                        src={`https://www.youtube.com/embed/${trailerKey}`}
                        className="rounded-md"
                        allowFullScreen
                      ></iframe>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <p className="text-sm text-white sm:text-base">Play Trailer</p>
              <p className="text-xs text-white sm:text-sm">2:35</p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {genres?.map((genre) => (
            <span
              key={genre.id}
              className="px-3 py-1 text-sm font-medium border rounded-full dark:text-white"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className="text-base">{overview}</p>

        <div className="space-y-2">
          <DetailNames title="Director" people={directors} />
          <DetailNames title="Writers" people={writers} />
          <DetailNames title="Stars" people={stars} />
        </div>
      </div>
    </div>
  );
};
