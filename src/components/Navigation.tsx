"use client";

import { Film } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useDebounce } from "@uidotdev/usehooks";
import { SearchMovie } from "./SearchMovie";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";

type genreTypes = {
  id: number;
  name: string;
};

export const Navigation = ({}) => {
  const [genres, setGenres] = useState<genreTypes[]>([]);

  const [inputValue, setInputValue] = useState<string>("");
  const debounceInputValue = useDebounce(inputValue, 500);
  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const router = useRouter();
  const handleOnclick = (id: number) => {
    router.push(`/searchFilter?genres=${id}&page=1`);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "genre/movie/list?language=en"
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="flex justify-between items-center w-full h-[59px] px-20">
      <div className="flex gap-2 items-center text-[#4338CA]">
        <Film />
        <p className="text-4 italic font-bold">Movie Z</p>
      </div>

      <div className="flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-[97px] h-[36px] py-[8px] px-[16px] font-medium justify-center items-center gap-2 rounded-md border border-[#E4E4E7] bg-white shadow-sm ">
            <ChevronDown className="w-4 h-4 stroke-[#18181B] text-white" />{" "}
            Genre
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[577px] pl-[300px] p-4 flex flex-col gap-4 rounded-md border border-[#E4E4E7] bg-white shadow-lg">
            <div>
              <DropdownMenuLabel className="text-[24px] font-semibold text-[#09090B]">
                Genres
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-[#71717A] text-[16px] font-normal">
                See lists of movies by genre
              </DropdownMenuLabel>
            </div>

            <div className="border-b border-[#E4E4E7] w-full"></div>

            <div className="flex flex-wrap gap-2">
              {genres?.map((searchFilter) => (
                <Badge
                  onClick={() => handleOnclick(searchFilter.id)}
                  key={searchFilter.id}
                  variant="outline"
                  className="flex items-center gap-1 px-3 py-2 text-[12px] text-[#18181B] border-[#D4D4D8] hover:bg-gray-200"
                >
                  {searchFilter.name}
                  <ChevronRight className="w-[14px] h-[14px] opacity-60" />
                </Badge>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center w-[400px] h-[36px] px-3 py-2 rounded-md border border-[#E4E4E7]">
          <Search className="w-4 h-4 opacity-50 text-[#09090B] dark:text-white" />

          <Input
            placeholder="Search.."
            value={inputValue}
            onChange={handleInputValue}
            className="w-full h-[24px] pl-3 bg-transparent border-none focus:ring-0 focus:outline-none text-[14px] text-[#09090B]"
          />
          <div className="flex flex-col h-fit w-fit absolute top-[52px] left-[566px] z-20 bg-white rounded-[8px]">
            <SearchMovie inputValue={inputValue} />
          </div>
        </div>
      </div>

      {/* <Button className="w-[40px] h-[40px] flex items-center justify-center rounded-md border border-[#E4E4E7] bg-white shadow-md hover:bg-gray-100 transition">
        <Moon className="w-5 h-5 text-[#18181B] opacity-70" />
      </Button> */}

      <DarkModeToggle />
    </div>
  );
};
