// "use client";

// import { axiosInstance } from "@/lib/utils";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function seeMore() {
//   const { movieId } = useParams();
//   const [movieList, setMovieList] = useState();
//   useEffect(() => {
//     const fetchMovieList = async () => {
//       const { data } = await axiosInstance(
//         `movie/${movieId?.toString()}?language=en-US&page=1`
//       );
//       setMovieList(data);
//     };
//     fetchMovieList();
//   }, []);

//   return <div>amn</div>;
// }
"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { axiosInstance, imageUrl } from "@/lib/utils";
import { MovieCard } from "@/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type pageType = {
  results: dataTypes[];
  total_pages: number; // total_pages-г нэмсэн
};

type dataTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
};

export default function SeeMore() {
  const { movieId } = useParams(); // `movieId`-ийг шууд авч байна
  const [movieData, setMovieData] = useState<pageType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchMovieList = async () => {
      if (!movieId) return; // movieId байхгүй бол фетч хийнэ үү

      try {
        const { data } = await axiosInstance.get(
          `movie/${movieId}/similar?language=en-US&page=${currentPage}` // movieId-г хэрэглэж байна
        );
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieList();
  }, [currentPage, movieId]);

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold px-[80px] pt-[52px] pb-[32px] text-[30px]">
        More Like this
      </h1>

      <div className="flex flex-wrap justify-start gap-6 px-[80px]">
        {movieData?.results.slice(0, 10).map((value) => (
          <MovieCard
            key={value.id}
            title={value.title}
            id={value.id}
            image={imageUrl(value.poster_path)}
            rating={value.vote_average}
            className="w-[230px] h-[480px]"
          />
        ))}
      </div>

      {movieData && (
        <Pagination className="flex justify-end pr-[80px] pb-[100px]">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
              </PaginationItem>
            )}

            {currentPage > 3 && (
              <>
                <PaginationItem>
                  <PaginationLink onClick={() => setCurrentPage(1)}>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              </>
            )}

            {[...Array(3)].map((_, i) => {
              const page = currentPage - 1 + i;
              return (
                page > 0 &&
                page <= movieData.total_pages && (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              );
            })}

            {currentPage < movieData.total_pages - 3 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(movieData.total_pages)}
                  >
                    {movieData.total_pages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {currentPage < movieData.total_pages && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
