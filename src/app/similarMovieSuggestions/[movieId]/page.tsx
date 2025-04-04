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

        <Pagination className="flex justify-end pr-[80px] pb-[100px]">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
              </PaginationItem>
            )}

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

            {[...Array(3)].map((_, i) => {
              const page = currentPage - 1 + i;
              return (
                page > 0 &&
                page <= 500 && (
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

            {currentPage < 500 - 3 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => setCurrentPage(500)}>
                    {500}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {currentPage < 500 && (
              <PaginationItem>
                <PaginationNext onClick={() => setCurrentPage(500)} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
