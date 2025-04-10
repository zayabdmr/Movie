"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";
import { useDebounce } from "@uidotdev/usehooks";
import { axiosInstance, imageUrl } from "@/lib/utils";

type MovieTypes = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

export const SearchMovie = ({ inputValue }: { inputValue: string }) => {
  const [movieResults, setMovieResults] = useState<MovieTypes[]>([]);
  const debouncedSearch = useDebounce(inputValue, 500);
  const router = useRouter();

  const handleOnClick = (id: number) => {
    router.push(`/detail/${id}`);
    setMovieResults([]);
  };

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setMovieResults([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const res = await axiosInstance.get(
          `search/movie?query=${debouncedSearch}&language=en-US&page=1`
        );
        setMovieResults(res.data?.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [debouncedSearch]);

  return (
    <div className="w-[550px] border border-[#E4E4E7] rounded-sm bg-white">
      {movieResults.slice(0, 5).map((value, index) => (
        <div
          key={value.id}
          className={`p-3 hover:bg-gray-100 rounded-lg ${
            index !== movieResults.slice(0, 5).length - 1
              ? "border-b border-gray-300"
              : ""
          }`}
        >
          <div className="flex gap-4">
            <Image
              src={imageUrl(value.poster_path)}
              alt={`Poster for ${value.title}`}
              width={87}
              height={100}
              className="rounded-[6px] w-[87px] h-[100px]"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <h4 className="text-[20px] text-[#09090B] font-semibold">
                  {value.title}
                </h4>

                <div className="flex gap-1 items-center mt-1">
                  <Star fill="yellow" color="yellow" className="w-4 h-4" />
                  <p className="text-[14px] text-[#09090B] font-medium">
                    {value.vote_average
                      ? `${(Math.round(value.vote_average * 10) / 10).toFixed(
                          1
                        )}`
                      : "N/A"}
                    <span className="text-[12px] text-[#71717A] font-normal">
                      /10
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <p className="text-[14px] text-[#09090B] font-medium">
                  {value.release_date?.slice(0, 4)}
                </p>
                <Button
                  className="text-[14px] font-medium text-[#09090B] gap-[8px]"
                  variant="link"
                  onClick={() => handleOnClick(value.id)}
                >
                  See more <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {movieResults.length > 5 && (
        <div className="py-4 text-center">
          <p className="text-[14px] text-[#09090B] font-medium">
            See all results for "
            <span className="font-semibold">{inputValue}</span>"
          </p>
        </div>
      )}
    </div>
  );
};
