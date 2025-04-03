"use client";
import { PlayIcon, Star } from "lucide-react";
import { DetailNames } from "./DetailNames";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosInstance, imageUrl } from "@/lib/utils";

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
  const [Trailer, setTrailer] = useState<TrailerTypes[]>([]);

  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${params.movieId}/videos?language=en-US`
        );
        setTrailer(data.results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div className="w-screen ">
      <div className="flex justify-between items-center">
        <div className="text-[#09090B]">
          <h1 className="text-[36px] font-bold">{title}</h1>

          <div className="flex gap-1">
            <p className="text-[18px] font-normal">
              {`${release_date?.replace(/-/g, ".")} · ${
                adult ? "NC-17" : "G"
              } · ${Math.floor(Number(runtime) / 60)}h ${
                Number(runtime) % 60
              }m`}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[#09090B] text-3 font-medium">Rating</p>
          <div className="flex gap-1">
            <Star
              fill="yellow"
              color="yellow"
              className="pt-[6px] size-[28px]"
            />

            <div>
              <p className="text-[#09090B] text-[18px] font-semibold">
                {vote_average &&
                  `${(Math.round(vote_average * 10) / 10).toFixed(1)}`}
                <span className="text-[#71717A] text-4 font-normal">/10</span>
              </p>

              {vote_count && (
                <p className="text-[#71717A] text-3 font-normal">
                  {Math.floor(vote_count / 1000)}k
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-[32px]">
        <img
          src={imageUrl(poster_path ?? "/fallback-image.jpg")}
          alt={`detailPoster`}
          width={290}
          height={428}
          className=" !static rounded-[8px] !h-[428px]"
        />

        <div className="relative">
          <img
            src={imageUrl(backdrop_path ?? "/fallback-image.jpg")}
            alt="detailTrailer"
            width={760}
            height={428}
            className="!static rounded-[8px] !h-[428px]"
          />

          <div className="flex gap-3 absolute bottom-[24px] left-[24px] items-center ">
            <Dialog>
              <DialogTrigger className=" bg-white px-2 py-2 rounded-full">
                <PlayIcon />
              </DialogTrigger>
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

            <p className="text-[16px] text-white">Play trailer</p>
            <p className="text-[14px] text-white">2:35</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-3">
          {genres?.map((genre) => (
            <span
              key={genre.id}
              className="px-[10px] py-[2px] rounded-full border text-[12px] font-semibold text-[#09090B]"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <p className=" text-[#09090B] text-4 font-normal">{overview}</p>
        <div>
          <DetailNames title="Director" people={directors} />
          <DetailNames title="Writers" people={writers} />
          <DetailNames title="Stars" people={stars} />
        </div>
      </div>
    </div>
  );
};
