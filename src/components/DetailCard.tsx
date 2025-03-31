import { Star } from "lucide-react";
import { Play } from "lucide-react";
import { DetailNames } from "./DetailNames";

type CrewType = {
  name: string;
  job: string;
  department: string;
};

type DetailCardProps = {
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  release_date?: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
  overview?: string;
  vote_average?: number;
  vote_count?: number;
  directors?: CrewType[];
  writers?: CrewType[];
  stars?: CrewType[];
};

export const DetailCard = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  runtime,
  genres,
  overview,
  vote_average,
  vote_count,
  directors,
  writers,
  stars,
}: DetailCardProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[#09090B] text-[36px] font-bold">{title}</h1>
          <p className="text-[#09090B] text-[18px] font-normal">
            {release_date} · PG · {runtime} min
          </p>
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
                {vote_average}
                <span className="text-[#71717A] text-[16px] font-normal">
                  /10
                </span>
              </p>
              <p className="text-[#71717A] text-[12px] font-normal">
                {vote_count}k
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 pt-6">
        <img
          src={poster_path}
          alt="Movie Poster"
          className="w-[290px] h-[428px]"
        />
        <div className="relative w-[760px] h-[428px]">
          <img
            src={backdrop_path}
            alt="Trailer"
            className="rounded-lg w-full h-full"
          />

          <button className="absolute left-[24px] bottom-[24px] flex items-center gap-3 bg-transparent hover:bg-gray-200 transition">
            <div className="w-[40px] h-[40px] bg-[#FFF] rounded-full flex items-center justify-center">
              <Play size={16} color="black" />
            </div>
            <p className="text-[#FFF] text-4 font-norma">
              Play trailer <span className="pl-3">{runtime}</span>
            </p>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-8">
        <div className="flex gap-3">
          {genres?.map((genre) => (
            <span
              key={genre.id}
              className="px-[10px] py-[2px] rounded-full border text-[12px] font-semibold text-[#09090B]"
            >
              {genre.name}
            </span>
          ))}
        </div>
        <p className=" text-[#09090B] text-4 font-normal">{overview}</p>
        <div>
          <DetailNames title="Director" people={directors} />
          <DetailNames title="Writers" people={writers} />
          <DetailNames title="Stars" people={stars} />
        </div>
      </div>
    </div>
  );
};
