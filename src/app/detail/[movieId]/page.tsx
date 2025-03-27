"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DetailCard } from "@/components/DetailCard";

type DetailCardProps = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  runtime: number;
};

export default function Detail() {
  const [movieDetailData, setMovieDetailData] =
    useState<DetailCardProps | null>(null);

  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/278?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setMovieDetailData(res.data))
      .catch((err) => console.error("Error fetching movies:", err));
    axios
      .get(
        `https://api.themoviedb.org/3/movie/278/credits?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((res) => setMovieDetailData(res.data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);
  console.log(movieDetailData);

  return (
    <div>
      <DetailCard
        title={movieDetailData.title}
        rating={movieDetailData.vote_average}
        watched={movieDetailData.vote_count}
        poster_path={`https://image.tmdb.org/t/p/original${movieDetailData.poster_path}`}
        count={10}
        genres={movieDetailData.genres}
        overview={movieDetailData.overview}
        time={12}
        directorName={"asd"}
        writersName={""}
        starsName={""}
        id={movieDetailData.id}
      />
    </div>
  );
}
