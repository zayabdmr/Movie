"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/utils";
import { VoteAverage } from "@/app/SeeMore/[datatype]/components/VoteAverage";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import GenresButton from "./GenresButton";

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  genre_ids: number[];
};

type MovieData = {
  total_pages?: number;
  total_results: number;
  results: Movie[];
};

const Movies = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState<string | null>(null);
  const [data, setData] = useState<MovieData>();
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);

  useEffect(() => {
    const page = parseInt(params.get("page") || "1");
    setCurrentPage(page);
    setSearch(params.get("search"));
  }, [params]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axiosInstance.get("genre/movie/list?language=en");
        setGenreList(res.data.genres || []);
      } catch (error) {
        console.error("Genre fetch error:", error);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search) return;
      try {
        const res = await axiosInstance.get(
          `search/movie?query=${search}&language=en-US&page=${currentPage}`
        );
        setData(res.data);
      } catch (error) {
        console.error("Movie fetch error:", error);
      }
    };
    fetchMovies();
  }, [search, currentPage]);

  const handleMovieClick = (id: number) => {
    router.push(`/detail/${id}`);
  };

  const filteredResults = data?.results?.filter((movie) =>
    selectedGenreId ? movie.genre_ids.includes(selectedGenreId) : true
  );

  return (
    <div className="flex flex-col w-full gap-10 px-6 py-10 lg:flex-row lg:px-20">
      <section className="flex flex-col flex-1 gap-6">
        <h1 className="text-2xl font-semibold text-black dark:text-white">
          Search results
        </h1>
        <p className="text-lg font-medium text-muted-foreground">
          {selectedGenreId
            ? `${filteredResults?.length || 0} filtered`
            : `${data?.total_results || 0}`}{" "}
          results for “{search}”
        </p>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
          {filteredResults?.slice(0, 12).map((movie) => (
            <div
              key={movie.id}
              onClick={() => handleMovieClick(movie.id)}
              className="cursor-pointer"
            >
              <div className="bg-white dark:bg-[#18181B] rounded-xl shadow-sm hover:shadow-lg transition-transform hover:scale-[1.02] overflow-hidden">
                {movie.poster_path || movie.backdrop_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${
                      movie.poster_path || movie.backdrop_path
                    }`}
                    alt={movie.title}
                    width={344}
                    height={240}
                    className="object-cover w-full h-[240px]"
                  />
                ) : (
                  <div className="w-full h-[240px] bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-300">
                    No Image
                  </div>
                )}
                <div className="flex flex-col gap-1 p-2">
                  <VoteAverage
                    voteAverage={
                      movie.vote_average
                        ? (Math.round(movie.vote_average * 10) / 10).toFixed(1)
                        : undefined
                    }
                  />
                  <p className="text-sm font-medium text-black truncate dark:text-white">
                    {movie.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Pagination className="justify-end">
            <PaginationContent>
              {currentPage > 1 && (
                <>
                  <PaginationItem>
                    <PaginationPrevious
                      href={`?search=${search}&page=${currentPage - 1}`}
                    />
                  </PaginationItem>
                  {currentPage > 4 && (
                    <>
                      <PaginationItem>
                        <PaginationLink href={`?search=${search}&page=1`}>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    </>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href={`?search=${search}&page=${currentPage - 1}`}
                    >
                      {currentPage - 1}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationLink
                  href={`?search=${search}&page=${currentPage}`}
                  isActive
                >
                  {currentPage}
                </PaginationLink>
              </PaginationItem>

              {currentPage < 499 && (
                <PaginationItem>
                  <PaginationLink
                    href={`?search=${search}&page=${currentPage + 1}`}
                  >
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              {currentPage <= 495 && (
                <>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href={`?search=${search}&page=500`}>
                      500
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}
              {currentPage < 500 && (
                <PaginationItem>
                  <PaginationNext
                    href={`?search=${search}&page=${currentPage + 1}`}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      <div className="hidden border-l border-gray-300 lg:flex dark:border-gray-700" />

      <aside className="w-full lg:w-[300px] xl:w-[400px] h-fit sticky top-20 bg-white dark:bg-[#1a1a1a] shadow-xl border border-gray-300 dark:border-gray-700 rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Search by Genre
          </h2>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            See lists of movies by genre
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {genreList.map((genre) => {
            const isSelected = selectedGenreId === genre.id;
            return (
              <GenresButton
                key={genre.id}
                onClick={() =>
                  setSelectedGenreId((prev) =>
                    prev === genre.id ? null : genre.id
                  )
                }
              >
                {genre.name}
              </GenresButton>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Movies;
