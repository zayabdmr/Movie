"use client";
import { Slide } from "./Slide";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { log } from "node:console";

type myTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string | null;
};

export const Popular = ({}: any) => {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const router = useRouter();

  const handleOneClick = (movieId: number) => {
    router.push(`/detail/${movieId}`);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  console.log(movieData, "Popular MOVIES");

  return (
    <div className="w-screen px-[80px] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Popular</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[32px]">
        {movieData?.slice(0, 10).map((value: any) => (
          <Slide
            key={value.title}
            title={value.title}
            id={value.id}
            image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
            rating={value.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

// "use client";
// import { Slide } from "./Slide";
// import { Button } from "@/components/ui/button";
// import axios from "axios";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";

// type myTypes = {
//   id: number;
//   poster_path: string | null;
//   title: string;
//   video: boolean;
//   vote_average: number;
// };

// export default function Popular() {
//   const [movieData, setMovieData] = useState<myTypes[]>();

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
//       )
//       .then((res) => setMovieData(res.data.results));
//   });
//   return (
//     <div className="w-screen px-[80px] pt-[52px]">
//       <div className="flex justify-between items-center">
//         <h2 className="text-[24px] font-semibold pb-[32px]">Popular</h2>
//         <Button
//           className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
//           variant="link"
//         >
//           See more <ArrowRight />
//         </Button>
//       </div>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[32px]">
//         {movieData?.slice(0, 10).map((value, index) => (
//           <Slide
//             key={value.id}
//             title={value.title}
//             image={`https://image.tmdb.org/t/p/original${value.poster_path}`}
//             rating={value.vote_average}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
