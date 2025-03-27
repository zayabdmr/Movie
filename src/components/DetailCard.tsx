import { count } from "console";
import { Star } from "lucide-react";

type DetailCardProps = {
  title: string;
  rating: number;
  watched: number;
  poster_path: string | undefined;
  count: number;
  genres: string;
  description: string;
  directorName: string;
  writersName: string;
  starsName: string;
  id: number;
  time: number;
};

export const DetailCard = ({
  title,
  rating,
  count,
  poster_path,
  overview,
  genres,
  description,
  directorName,
  writersName,
  starsName,
  id,
  time,
}: DetailCardProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-[18px] font-normal">2024.11.26 · PG · 2h 40m</p>
        </div>
        <div>
          <p className="text-[#09090B] text-[12px] font-medium">Rating</p>
          <div className="flex gap-1">
            <Star
              fill="yellow"
              color="yellow"
              width={28}
              height={28}
              className="pt-[6px]"
            />
            <div>
              <p className="text-[#09090B] text-[18px] font-semibold">
                {rating}
                <span className="text-[#71717A] text-[16px] font-normal">
                  /10
                </span>
              </p>
              <p className="text-[#71717A] text-[12px] font-normal">{count}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pt-6">
        <img
          src={poster_path}
          alt="Movie Poster"
          width={290}
          height={428}
          className="rounded-lg"
        />

        <div className="relative w-[760px] h-[428px]">
          <img
            src={poster_path}
            alt="Trailer"
            width={760}
            height={428}
            className="rounded-lg"
          />

          <button className="absolute left-10 bottom-10 flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200">
            ▶ Play trailer <span className="text-gray-300">{time}</span>
          </button>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {["Fairy Tale", "Pop Musical", "Fantasy", "Musical", "Romance"].map(
          (genres) => (
            <span
              key={genres}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-[#09090B] font-semibold "
            >
              {genres}
            </span>
          )
        )}
      </div>

      <p className="mt-4 text-[#09090B] text-4 font-normal">{description}</p>

      <div className="mt-6">
        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Director:</p>
          <p className="text-[16px] font-normal">{directorName}</p>
        </div>
        <div className="border-b border-[#E4E4E7] w-full pt-[6px] pb-[20px]"></div>

        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Writers:</p>
          <p className="text-[16px] font-normal">{writersName}</p>
        </div>
        <div className="border-b border-[#E4E4E7] w-full"></div>

        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Stars:</p>
          <p className="text-[16px] font-normal">{starsName}</p>
        </div>
        <div className="border-b border-[#E4E4E7] w-full"></div>
      </div>
    </div>
  );
};
