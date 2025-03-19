import { Film } from "lucide-react";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Moon } from "lucide-react";

export const Nav = () => {
  return (
    <div className="flex justify-between items-center w-full h-[59px] px-20">
      <div className="gap-2 flex text-[#4338CA]">
        <Film />
        <p className=" text-[16px] italic font-bold">Movie Z</p>
      </div>

      <div className="flex gap-3 items-center">
        <Button className="flex w-[97px] h-[36px] py-2 px-4 text-[14px] font-medium text-[#18181B] justify-center items-center gap-2 shadow-md rounded-sm border border-gray-300 bg-[#FFF] hover:bg-gray-300">
          <HiOutlineChevronDown /> Genre
        </Button>
        <div className="relative w-[379px]">
          <CiSearch className="absolute left-3 top-2.5 transform-translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search.."
            className="w-full pl-10 py-2 border border-gray-300 font-normal rounded-sm text-[14px] shadow-md"
          />
        </div>
      </div>

      <div>
        <button className="p-3 rounded-2xl border border-gray-300 shadow-md hover:bg-gray-100 transition">
          <Moon className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};
