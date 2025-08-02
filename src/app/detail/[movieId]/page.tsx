"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { axiosInstance, imageUrl } from "@/lib/utils";
import { DetailCard } from "./components/DetailCard";
import { MoreLikeList } from "./components/MoreLikeList";

type CrewType = {
  name: string;
  job: string;
  department: string;
};

type MovieDetailProps = {
  backdrop_path?: string;
  poster_path?: string;
  title?: string;
  release_date?: string;
  runtime?: number;
  genres?: { id: number; name: string }[];
  overview?: string;
  vote_average?: number;
  vote_count?: number;
};

type MovieCreditsProps = {
  cast?: CrewType[];
  crew?: CrewType[];
};

export default function Detail() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetailProps | null>(null);
  const [movieCredits, setMovieCredits] = useState<MovieCreditsProps | null>(
    null
  );

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieData = async () => {
      try {
        const [detailRes, creditsRes] = await Promise.all([
          axiosInstance.get(`movie/${movieId}?language=en-US`),
          axiosInstance.get(`movie/${movieId}/credits?language=en-US`),
        ]);

        setMovieDetail(detailRes.data);
        setMovieCredits(creditsRes.data);
      } catch (error) {
        console.error("Failed to fetch movie data:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const directors =
    movieCredits?.crew?.filter((member) => member.job === "Director") || [];

  const writers =
    movieCredits?.crew?.filter((member) => member.department === "Writing") ||
    [];

  const stars = movieCredits?.cast?.slice(0, 3) || [];

  return (
    <main className="w-full bg-white h-fit dark:bg-neutral-900 dark:text-white">
      <div className="px-6 py-10 mx-auto space-y-10 pb-30 max-w-screen-2xl sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
        {movieDetail ? (
          <DetailCard
            {...movieDetail}
            backdrop_path={
              movieDetail.backdrop_path
                ? imageUrl(movieDetail.backdrop_path)
                : ""
            }
            poster_path={
              movieDetail.poster_path ? imageUrl(movieDetail.poster_path) : ""
            }
            directors={directors}
            writers={writers}
            stars={stars}
          />
        ) : (
          <p className="text-lg text-center text-gray-500 dark:text-gray-400">
            Loading movie details...
          </p>
        )}

        <MoreLikeList />
      </div>
    </main>
  );
}
