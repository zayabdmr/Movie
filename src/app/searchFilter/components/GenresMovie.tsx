"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

type PageType = {
  results: DataTypes[];
  total_results: number;
};

type DataTypes = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};

export const GenresMovie = () => {
  const searchParams = useSearchParams();
  const genreId = searchParams.get("genre") || "16";
  const [movieData, setMovieData] = useState<PageType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [genreName, setGenreName] = useState("Animation");

  useEffect(() => {
    const fetchGenreName = async () => {
      try {
        const { data } = await axiosInstance.get(
          "genre/movie/list?language=en"
        );
        const genre = data.genres.find((g: any) => g.id === Number(genreId));
        setGenreName(genre ? genre.name : "Movies");
      } catch (error) {
        console.error("Error fetching genre name:", error);
      }
    };
    fetchGenreName();
  }, [genreId]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/discover/movie?with_genres=${genreId}&language=en-US&page=${currentPage}`
        );
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    };
    fetchMovies();
  }, [currentPage, genreId]);

  const totalPages = 500;

  return (
    <section className="pt-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#09090B] dark:text-white">
        {movieData
          ? `${movieData.total_results.toLocaleString()} titles in ${genreName}`
          : "Loading..."}
      </h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {movieData?.results.map((movie, index) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            id={movie.id}
            image={imageUrl(movie.poster_path)}
            rating={movie.vote_average}
            className="cursor-pointer rounded-xl overflow-hidden
              bg-white dark:bg-[#18181B]
              shadow-md hover:shadow-lg dark:hover:shadow-blue-800
              transform transition-all duration-500 ease-out hover:scale-105
              fade-in"
          />
        ))}
      </div>

      {movieData && movieData.total_results > 0 && (
        <Pagination className="flex justify-end pb-20 mt-12">
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

            {[currentPage - 1, currentPage, currentPage + 1].map(
              (page) =>
                page > 0 &&
                page <= totalPages && (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
            )}

            {currentPage < totalPages - 2 && (
              <>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink onClick={() => setCurrentPage(totalPages)}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              </>
            )}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage(currentPage + 1)}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
};
