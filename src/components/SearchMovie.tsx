"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
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
  const [isClient, setIsClient] = useState(false);
  const [movieResults, setMovieResults] = useState<MovieTypes[]>([]);
  const debouncedSearch = useDebounce(inputValue, 500);
  const router = useRouter();

  const handleOnClick = (id: number) => {
    router.push(`/detail/${id}`);
    setMovieResults([]);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) return null;

  return (
    <div className="w-[550px] rounded-sm bg-white dark:bg-[#27272a]">
      {movieResults.slice(0, 5).map((value, index) => (
        <div
          key={value.id}
          className={`p-3 hover:bg-gray-100 dark:hover:bg-[#3f3f46] rounded-lg ${
            index !== movieResults.slice(0, 5).length - 1
              ? "border-b border-gray-300 dark:border-[#3f3f46]"
              : ""
          }`}
        >
          <div className="flex gap-4">
            {value.poster_path ? (
              <Image
                src={imageUrl(value.poster_path)}
                alt={`Poster for ${value.title}`}
                width={87}
                height={100}
                className="rounded-[6px] w-[87px] h-[100px] object-cover"
              />
            ) : (
              <div className="w-[87px] h-[100px] bg-gray-300 dark:bg-gray-700 rounded-[6px] flex items-center justify-center text-xs text-gray-600 dark:text-gray-300">
                No Image
              </div>
            )}

            <div className="flex flex-col justify-between w-full">
              <div>
                <h4 className="text-[20px] text-[#09090B] dark:text-white font-semibold">
                  {value.title}
                </h4>

                <div className="flex items-center gap-1 mt-1">
                  <Star fill="yellow" color="yellow" className="w-4 h-4" />
                  <p className="text-[14px] text-[#09090B] dark:text-white font-medium">
                    {value.vote_average
                      ? Number(value.vote_average.toFixed(1))
                      : "N/A"}
                    <span className="text-[12px] text-[#71717A] dark:text-gray-400 font-normal">
                      /10
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <p className="text-[14px] text-[#09090B] dark:text-white font-medium">
                  {value.release_date?.slice(0, 4) || "N/A"}
                </p>
                <Button
                  className="text-[14px] font-medium text-[#09090B] dark:text-white gap-[8px]"
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
        <div
          className="py-4 pl-4 text-start cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3f3f46] rounded-b-[6px]"
          onClick={() => {
            setMovieResults([]);
            router.push(
              `/seeSearchAll?search=${encodeURIComponent(debouncedSearch)}`
            );
          }}
        >
          <p className="text-[14px] text-[#09090B] dark:text-white font-medium">
            See all results for "
            <span className="font-semibold">{inputValue}</span>"
          </p>
        </div>
      )}
    </div>
  );
};
