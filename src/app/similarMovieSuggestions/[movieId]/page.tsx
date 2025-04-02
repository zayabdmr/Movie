"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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
  }, []);

  console.log(movieData, "data");

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
              className="w-[230px] "
            />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            {currentPage !== 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage(currentPage - 1)}
                />
              </PaginationItem>
            )}
            {currentPage > 4 && (
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
            )}
            {currentPage > 4 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            {currentPage !== 1 && (
              <PaginationItem>
                <PaginationLink>{currentPage - 1}</PaginationLink>
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink isActive={currentPage == currentPage}>
                {currentPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>{currentPage + 1}</PaginationLink>
            </PaginationItem>
            {(movieData?.total_pages as number) - 5 !== currentPage && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink>{movieData?.total_pages}</PaginationLink>
            </PaginationItem>
            {currentPage !== movieData?.total_pages && (
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
