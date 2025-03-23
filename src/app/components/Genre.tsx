import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

type GenreType = {
  id: number;
  name: string;
};

export const Genre = () => {
  const [genres, setGenres] = useState<GenreType[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((res) => setGenres(res.data.genres))
      .catch((error) => console.error("Error fetching genres:", error));
  }, []);

  return (
    <div className="flex w-full max-w-[600px] p-5 flex-col items-start border border-[#E4E4E7] rounded-2xl bg-[#FFF] text-[#09090B]">
      <div>
        <h3 className="text-[24px] font-semibold">Genres</h3>
        <p className="text-[16px] font-normal">See lists of movies by genre</p>
      </div>

      <div>
        <img src="Separator.png" alt="" />
      </div>

      <div className="w-full bg-gray-200 py-3"></div>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="flex py-[2px] px-[10px] rounded-2xl border border-[#E4E4E7] items-center justify-center gap-2 cursor-pointer hover:bg-gray-100 transition"
          >
            <p className="text-[12px] font-semibold">{genre.name}</p>
            <ChevronRight className="w-[16px] h-[16px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
