"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
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

type PageType = {
  results: DataTypes[];
};

type DataTypes = {
  id: number;
  title: string;
  video: boolean;
  vote_average: number;
  poster_path: string;
};

export const GenresMovie = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const genreId = searchParams.get("genre") || "16";
  const [movieData, setMovieData] = useState<PageType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const { data } = await axiosInstance(
          `/discover/movie?with_genres=${genreId}&language=en-US&page=${currentPage}`
        );
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieList();
  }, [currentPage, genreId]);

  return (
    <div className="pt-[122px]">
      <h4 className="text-[#09090B] text-[20px] font-semibold">
        {movieData
          ? `${movieData.results.length} titles in “Animation”`
          : "Loading..."}
      </h4>

      <div className="flex flex-col">
        <div className="flex flex-wrap justify-start gap-6 px-[80px]">
          {movieData?.results.map((value) => (
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

            {currentPage < 497 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => setCurrentPage(500)}>
                    500
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {currentPage < 500 && (
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
};
