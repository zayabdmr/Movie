import { count } from "console";
import { Star } from "lucide-react";

type DetailCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  runtime: number;
};

export const DetailCard = ({
  adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
  genres,
  runtime,
}: DetailCardProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">{original_title}</h1>
          <p className="text-[18px] font-normal">{adult}</p>
        </div>
        <div>
          <p className="text-[#09090B] text-[12px] font-medium">Rating</p>
          <div className="flex gap-1">
            <Star
              fill="yellow"
              color="yellow"
              className="pt-[6px] size-[28px]"
            />
            <div>
              <p className="text-[#09090B] text-[18px] font-semibold">
                {}
                <span className="text-[#71717A] text-[16px] font-normal">
                  /10
                </span>
              </p>
              <p className="text-[#71717A] text-[12px] font-normal">{t}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pt-6">
        <img
          src={}
          alt="Movie Poster"
          className="rounded-lg w-[290px] h-[428px]"
        />

        <div className="relative w-[760px] h-[428px]">
          <img
            src={}
            alt="Trailer"
            className="rounded-lg w-[760px] h-[428px]"
          />

          <button className="absolute left-10 bottom-10 flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200">
            ▶ Play trailer <span className="text-gray-300">{}</span>
          </button>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {["Fairy Tale", "Pop Musical", "Fantasy", "Musical", "Romance"].map(
          () => (
            <span
              key={}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-[#09090B] font-semibold "
            >
              {}
            </span>
          )
        )}
      </div>

      <p className="mt-4 text-[#09090B] text-4 font-normal">{}</p>

      <div className="mt-6">
        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Director:</p>
          <p className="text-[16px] font-normal">{}</p>
        </div>
        <div className="border-b border-[#E4E4E7] w-full pt-[6px] pb-[20px]"></div>

        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Writers:</p>
          <p className="text-[16px] font-normal">{}</p>
        </div>
        <div className="border-b border-[#E4E4E7] w-full"></div>

        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Stars:</p>
          <p className="text-[16px] font-normal">{}</p>
        </div>
        <div className="border-b border-[#E4E4E7] w-full"></div>
      </div>
    </div>
  );
};
