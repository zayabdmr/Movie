"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
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
  total_pages: number | undefined;
  results: dataTypes[];
};

type dataTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
};

export default function similarMovieList() {
  const [movieData, setMovieData] = useState<pageType>();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const params = useParams();

  const { id } = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `movie/${params.movieId}/similar?language=en-US&page=${currentPage}`
        );
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="font-semibold flex px-[80px] pt-[52px] pb-[32px] text-[30px]">
          More Like This
        </h1>

        <div className="flex flex-wrap justify-start gap-6 px-[80px]">
          {movieData?.results.slice(0, 10).map((value) => (
            <MovieCard
              key={value.id}
              title={value.title}
              id={value.id}
              image={imageUrl(value.poster_path)}
              rating={value.vote_average}
              className="w-[230px]"
            />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            {/* Өмнөх хуудас руу шилжих товч */}
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
              </PaginationItem>
            )}

            {/* Эхний хуудас болон "..." тэмдэглэгээ */}
            {currentPage > 4 && (
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

            {/* Одоогийн хуудас болон түүний өмнөх, дараагийн хуудаснууд */}
            {[...Array(3)].map((_, i) => {
              const page = currentPage - 1 + i;
              return (
                page > 0 &&
                page <= (movieData?.total_pages ?? 1) && (
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

            {/* Сүүлчийн хуудас болон "..." тэмдэглэгээ */}
            {currentPage < (movieData?.total_pages ?? 1) - 3 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => setCurrentPage(movieData?.total_pages ?? 1)}
                  >
                    {movieData?.total_pages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {/* Дараагийн хуудас руу шилжих товч */}
            {currentPage < (movieData?.total_pages ?? 1) && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
