import { HiOutlineChevronDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Moon } from "lucide-react";

export const Nav = ({}) => {
  return (
    <div className="w-[1440px] h-[59px] py-4 flex justify-between items-center">
      <div className="flex w-[1280px] max-w-[1280px] items-center gap-2">
        <img src="film.png" />
        <p className="text-[#4338CA] text-[16px] font-bold italic">Movie Z</p>
      </div>
      <div className="flex justify-between items-center">
        <Button className="flex w-[97px] h-[36px] px-2 py-4 justify-center items-center gap-2 rounded-[6px] border-2 bg-[#FFF] text-black">
          <HiOutlineChevronDown /> Genre
        </Button>
        <CiSearch />
        <Input
          type="search"
          placeholder=" Search..."
          className="w-[379px] h-[36px] py-[12px] items-center rounded-2xl bg-[#FFF]"
        ></Input>
      </div>
      <div className="flex">
        <Moon />
      </div>
    </div>
  );
};
