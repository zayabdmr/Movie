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
    router.push(`/details/${id}`);
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
        setMovieResults(res.data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    fetchMovies();
  }, [debouncedSearch]);

  return (
    <div className="w-fit h-fit border border-[#E4E4E7] rounded-sm">
      {movieResults.slice(0, 5).map((value, index) => (
        <div key={value.id} className="p-3 hover:bg-gray-100 rounded-lg">
          <div className="w-[550px] px-3 rounded-[8px] flex gap-4 bg-white h-fit">
            <Image
              src={imageUrl(value.poster_path)}
              alt={`searchImage`}
              width={70}
              height={100}
              className="rounded-[6px] w-[87px] h-[100px]"
            />
            <div className="flex flex-col justify-between w-full">
              <div>
                <h4 className="text-[20px] text-[#09090B] font-semibold">
                  {value.title}
                </h4>

                <div className="flex gap-1 items-center">
                  <Star
                    fill="yellow"
                    color="yellow"
                    className="pt-[2px] w-4 h-4"
                  />

                  <p className="text-[14px] text-[#09090B] font-medium">
                    {value.vote_average &&
                      `${(Math.round(value.vote_average * 10) / 10).toFixed(
                        1
                      )}`}
                    <span className="text-[12px] text-[#71717A] font-normal">
                      /10
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-[14px] text-[#09090B] font-medium">
                  {value.release_date.slice(0, 4)}
                </p>
                <Button
                  className="text-[14px] font-medium text-[#09090B] gap-[8px]"
                  variant="link"
                  onClick={() => handleOnClick(value.id)}
                >
                  See more <ArrowRight />
                </Button>
              </div>
            </div>
          </div>

          <div className="pt-2 border-b border-gray-300"></div>
        </div>
      ))}
      {movieResults.length > 5 && (
        <p className="text-[14px] text-[#09090B] font-medium py-4 px-8">
          See all results for "{inputValue}"
        </p>
      )}
    </div>
  );
};
