"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { axiosInstance } from "@/lib/utils";
import { VoteAverage } from "./components/VoteAverage";

type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
};

type MoviesResponse = {
  total_pages: number;
  results: MovieType[];
};

const Movies = () => {
  const [data, setData] = useState<MoviesResponse>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { datatype } = useParams();

  const pageParam = parseInt(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState<number>(pageParam);

  const titleMap: Record<string, string> = {
    upcoming: "Upcoming",
    top_rated: "Top Rated",
    popular: "Popular",
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axiosInstance.get(
          `movie/${datatype}?language=en-US&page=${currentPage}`
        );
        setData(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, [currentPage, datatype]);

  const handleMovieClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/SeeMore/${datatype}?page=${page}`);
  };

  return (
    <div className="flex flex-col gap-10 px-6 py-10 md:px-20">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl">
        {titleMap[datatype as string] || "Movies"}
      </h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data?.results?.slice(0, 10).map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
            className="cursor-pointer rounded-xl overflow-hidden bg-gray-100 dark:bg-[#18181B] shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${
                movie.poster_path || movie.backdrop_path
              }`}
              alt={movie.title}
              width={230}
              height={340}
              className="w-full h-[340px] object-cover transition-all duration-300 hover:brightness-90"
            />

            <div className="flex flex-col gap-1 p-3">
              <VoteAverage
                className="dark:text-white"
                voteAverage={movie.vote_average.toFixed(1)}
              />
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {movie.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Pagination className="flex justify-end">
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
          )}

          {currentPage > 4 && (
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

          {currentPage > 1 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>

          {currentPage < (data?.total_pages || 500) && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage < (data?.total_pages || 500) && (
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Movies;
