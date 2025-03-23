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
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import { useDebounce } from "@uidotdev/usehooks";

type genreTypes = {
  id: number;
  name: string;
};

export const Nav = ({}) => {
  const [genres, setGenres] = useState<genreTypes[]>();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((res) => setGenres(res.data.genres))
      .catch((err) => console.log(`error`, err));
  }, []);

  const [inputValue, setInputValue] = useState("");
  const debounceInputValue = useDebounce(inputValue, 500);

  const handleOneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  console.log("rerendering ...", debounceInputValue);

  const debounce = (callback: any) => {
    setTimeout(() => {
      callback();
    }, 500);
  };

  return (
    <div className="flex justify-between items-center w-full h-[59px] px-20">
      <div className="flex gap-2 items-center text-[#4338CA]">
        <Film />
        <p className="text-[16px] italic font-bold">Movie Z</p>
      </div>

      <div className="flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-[97px] h-[36px] py-[8px] px-[16px] font-medium justify-center items-center gap-2 rounded-md border border-[#E4E4E7] bg-white shadow-sm">
            <ChevronDown className="w-4 h-4 stroke-[#18181B]" /> Genre
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[577px] p-4 flex flex-col gap-4 rounded-md border border-[#E4E4E7] bg-white shadow-lg">
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
              {genres?.map((genre) => (
                <Badge
                  key={genre.id}
                  variant="outline"
                  className="flex items-center gap-1 px-3 py-2 text-[12px] text-[#18181B] border-[#D4D4D8]"
                >
                  {genre.name}
                  <ChevronRight className="w-[14px] h-[14px] opacity-60" />
                </Badge>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center w-[400px] h-[36px] px-3 py-2 rounded-md border border-[#E4E4E7]">
          <Search className="w-4 h-4 opacity-50 text-[#09090B]" />

          <Input
            placeholder="Search.."
            value={inputValue}
            onChange={handleOneChange}
            className="w-full h-[24px] pl-2 bg-transparent border-none focus:ring-0 focus:outline-none text-[14px] text-[#09090B]"
          />
        </div>
      </div>

      <Button className="w-[40px] h-[40px] flex items-center justify-center rounded-md border border-[#E4E4E7] bg-white shadow-md hover:bg-gray-100 transition">
        <Moon className="w-5 h-5 text-[#18181B] opacity-70" />
      </Button>
    </div>
  );
};
