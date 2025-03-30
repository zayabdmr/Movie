"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";

type MovieTypes = {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
};

export const SearchMovie = ({ inputValue }: { inputValue: string }) => {
  const [movieResults, setMovieResults] = useState<MovieTypes[]>([]);

  const router = useRouter();

  const handleOnclick = (id: number) => {
    router.push(`/details/${id}`);
    setMovieResults([]);
  };

  useEffect(() => {
    if (inputValue.trim() === "") {
      setMovieResults([]);
      return;
    }

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setMovieResults(res.data.results || []))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [inputValue]);

  return (
    <div className="w-fit h-fit border border-[#E4E4E7] rounded-sm">
      {movieResults.slice(0, 5).map((value, index) => (
        <div key={value.id} className="p-3 hover:bg-gray-100 rounded-lg">
          <div className="w-[550px] px-3 rounded-[8px] flex gap-4 bg-white h-fit">
            <Image
              src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
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
                    {value.vote_average}
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
                  onClick={() => handleOnclick(value.id)}
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
