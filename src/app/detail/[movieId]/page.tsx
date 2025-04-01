"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { DetailCard } from "@/components/DetailCard";
import { MoreLikeList } from "@/components/MoreLikeList";
import { axiosInstance, imageUrl } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
  const [movieDetailData, setMovieDetailData] =
    useState<MovieDetailProps | null>(null);
  const [movieDetailCredits, setMovieDetailCredits] =
    useState<MovieCreditsProps | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const [movieRes, creditsRes] = await Promise.all([
          axiosInstance.get(`movie/${params.movieId}?language=en-US`),
          axiosInstance.get(`movie/${params.movieId}/credits?language=en-US`),
        ]);
        setMovieDetailData(movieRes.data);
        setMovieDetailCredits(creditsRes.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  const directors =
    movieDetailCredits?.crew?.filter((member) => member.job === "Director") ||
    [];
  const writers =
    movieDetailCredits?.crew?.filter(
      (member) => member.department === "Writing"
    ) || [];
  const stars = movieDetailCredits?.cast?.slice(0, 3) || [];

  return (
    <div>
      <Navigation />
      {movieDetailData ? (
        <DetailCard
          {...movieDetailData}
          backdrop_path={
            movieDetailData.backdrop_path
              ? imageUrl(movieDetailData.backdrop_path)
              : ""
          }
          poster_path={
            movieDetailData.poster_path
              ? imageUrl(movieDetailData.poster_path)
              : ""
          }
          directors={directors}
          writers={writers}
          stars={stars}
        />
      ) : (
        <p className="text-center text-lg">Loading movie details...</p>
      )}

      <MoreLikeList />

      <Footer />
    </div>
  );
}
