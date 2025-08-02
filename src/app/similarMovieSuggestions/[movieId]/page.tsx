"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { axiosInstance, imageUrl } from "@/lib/utils";
import { MovieCard } from "@/app/detail/[movieId]/components/MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Star } from "lucide-react";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string | null;
};

type PageType = {
  results: Movie[];
  total_pages: number;
};

export default function SimilarMovieList() {
  const [movieData, setMovieData] = useState<PageType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { movieId } = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get(
          `movie/${movieId}/similar?language=en-US&page=${currentPage}`
        );
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching similar movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage, movieId]);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen px-6 py-10 text-black bg-white lg:px-20 dark:bg-black dark:text-white">
      <div className="flex flex-col gap-10">
        <h1 className="text-[28px] sm:text-[30px] font-semibold">
          More like this
        </h1>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {movieData?.results.map((movie) => (
            <div
              key={movie.id}
              onClick={() => router.push(`/detail/${movie.id}`)}
              className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg dark:hover:shadow-blue-800 transition-all transform hover:scale-[1.03] cursor-pointer bg-white dark:bg-neutral-900"
            >
              {movie.poster_path ? (
                <MovieCard
                  title={movie.title}
                  id={movie.id}
                  image={imageUrl(movie.poster_path)}
                  rating={movie.vote_average}
                  className="w-full h-full"
                />
              ) : (
                <div className="flex flex-col justify-between w-full h-[466px]">
                  <div className="flex items-center justify-center h-full text-sm text-gray-500 bg-gray-200 dark:text-gray-400 dark:bg-gray-800">
                    <span>No Image</span>
                  </div>

                  <div className="p-3">
                    <div className="flex items-center gap-1 mb-2">
                      <Star fill="yellow" color="yellow" className="w-4 h-4" />
                      <p className="text-sm font-medium text-[#09090B] dark:text-white">
                        {movie.vote_average.toFixed(1)}
                        <span className="ml-1 text-xs text-[#71717A]">/10</span>
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-[#09090B] dark:text-white">
                      {movie.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {movieData && movieData.total_pages > 1 && (
          <Pagination className="flex justify-end pt-4 pb-10">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
              )}

              {currentPage > 3 && (
                <>
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(1)}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </>
              )}

              {[currentPage - 1, currentPage, currentPage + 1].map((page) =>
                page > 0 && page <= movieData.total_pages ? (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ) : null
              )}

              {currentPage < movieData.total_pages - 2 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handlePageChange(movieData.total_pages)}
                    >
                      {movieData.total_pages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              {currentPage < movieData.total_pages && (
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
}
