"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DetailCard } from "@/components/DetailCard";
import { get } from "http";

type DetailCardProps = {
  title: string;
  rating: number;
  watched: number;
  poster_path: string | null;
  count: number;
  genres: string;
  description: string;
  overview: string;
  writersName: string;
  starsName: string;
  id: number;
  time: number;
};

export default function Detail() {
  const [movieDetailData, setMovieDetailData] = useState<DetailCardProps>({});

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
  console.log(movieDetailData, "Data");

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
