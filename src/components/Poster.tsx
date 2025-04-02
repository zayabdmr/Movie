// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import { useEffect, useState } from "react";
// import { Poster_word } from "./Poster_word";
// import { axiosInstance, imageUrl } from "@/lib/utils";

// type myTypes = {
//   overview: string;
//   poster_path: string;
//   title: string;
//   vote_average: number;
// };

// export function Poster() {
//   const [movieData, setMovieData] = useState<myTypes[]>();

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axiosInstance.get(
//           "movie/now_playing?language=en-US&page=1"
//         );
//         setMovieData(response.data.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <div className="w-full h-[900px] flex items-center justify-center overflow-hidden pt-[24px]">
//       <div className="w-full h-full">
//         <Carousel className="w-full ">
//           <CarouselContent className="h-full">
//             {movieData?.slice(0, 3).map((value, index) => (
//               <CarouselItem key={index} className="w-full h-[800px]">
//                 <div className="w-full h-screen">
//                   <Poster_word
//                     title={value.title}
//                     image={imageUrl(value.poster_path)}
//                     rating={value.vote_average}
//                     description={value.overview}
//                   />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           <div className="flex justify-center">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <input type="ratio" id={`$index`} name="carousel"></input>
//             ))}
//           </div>

//           <CarouselPrevious className="left-[44px] w-[40px] h-[40px]" />
//           <CarouselNext className="right-[44px] w-[40px] h-[40px]" />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import { Poster_word } from "./Poster_word";
import { axiosInstance, imageUrl } from "@/lib/utils";

type myTypes = {
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
};

export function Poster() {
  const [movieData, setMovieData] = useState<myTypes[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          "movie/now_playing?language=en-US&page=1"
        );
        setMovieData(response.data.results.slice(0, 3));
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movieData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="w-full h-[900px] flex items-center justify-center overflow-hidden pt-[24px]">
      <div className="w-full h-full">
        <Carousel className="w-full">
          <CarouselContent
            className="h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {movieData.map((value, index) => (
              <CarouselItem key={index} className="w-full h-[800px]">
                <div className="w-full h-screen">
                  <Poster_word
                    title={value.title}
                    image={imageUrl(value.poster_path)}
                    rating={value.vote_average}
                    description={value.overview}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-2 mt-4">
            {movieData.map((_, index) => (
              <input
                key={index}
                type="radio"
                name="carousel"
                checked={currentIndex === index}
                onChange={() => setCurrentIndex(index)}
                className="w-4 h-4 cursor-pointer"
              />
            ))}
          </div>

          {currentIndex > 0 && (
            <CarouselPrevious
              className="left-[44px] w-[40px] h-[40px]"
              onClick={handlePrev}
            />
          )}
          {currentIndex < movieData.length - 1 && (
            <CarouselNext
              className="right-[44px] w-[40px] h-[40px]"
              onClick={handleNext}
            />
          )}
        </Carousel>
      </div>
    </div>
  );
}
