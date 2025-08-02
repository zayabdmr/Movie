"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@uidotdev/usehooks";
import { Film, ChevronDown, ChevronRight, Search } from "lucide-react";
import { axiosInstance } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchMovie } from "./SearchMovie";
import DarkModeToggle from "./DarkModeToggle";

type Genre = {
  id: number;
  name: string;
};

export const Navigation = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [inputValue, setInputValue] = useState("");
  const debouncedInput = useDebounce(inputValue, 500);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data } = await axiosInstance.get(
          "genre/movie/list?language=en"
        );
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const handleGenreClick = (id: number) => {
    router.push(`/searchFilter?genres=${id}&page=1`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <nav className="flex justify-between items-center w-full h-[59px] px-6 md:px-20">
      <div
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-[#4338CA] cursor-pointer"
      >
        <Film />
        <p className="text-lg italic font-bold">Movie Z</p>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-[97px] h-[36px] px-4 py-2 justify-center items-center gap-2 rounded-md border border-[#E4E4E7] shadow-sm text-gray-600">
            <ChevronDown color="gray" />
            Genre
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[577px] p-4 flex flex-col gap-4 rounded-md border border-[#E4E4E7] bg-white shadow-lg dark:bg-[#1F1F1F] dark:border-[#3F3F46]">
            <div>
              <DropdownMenuLabel className="text-2xl font-semibold text-[#09090B] dark:text-white">
                Genres
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-sm text-[#71717A] font-normal dark:text-gray-400">
                See lists of movies by genre
              </DropdownMenuLabel>
            </div>

            <div className="border-b border-[#E4E4E7] w-full dark:border-[#3F3F46]" />

            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <Badge
                  key={genre.id}
                  onClick={() => handleGenreClick(genre.id)}
                  variant="outline"
                  className="flex items-center gap-1 px-3 py-2 text-xs text-[#18181B] border-[#D4D4D8] hover:bg-gray-200 cursor-pointer dark:text-white dark:border-[#52525B] dark:hover:bg-[#27272A]"
                >
                  {genre.name}
                  <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                </Badge>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative flex items-center w-[400px] h-[36px] px-3 py-2 rounded-md border border-[#E4E4E7]">
          <Search size={16} color="grey" />
          <Input
            placeholder="Search.."
            value={inputValue}
            onChange={handleInputChange}
            className="w-full h-[24px] pl-3 bg-transparent border-none focus:ring-0 focus:outline-none text-[14px]"
          />
          {inputValue && (
            <div className="absolute top-full left-0 w-full z-20 bg-white rounded-[8px] shadow-md">
              <SearchMovie inputValue={debouncedInput} />
            </div>
          )}
        </div>
      </div>

      <DarkModeToggle />
    </nav>
  );
};
