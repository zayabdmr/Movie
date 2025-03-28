"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DetailCard } from "@/components/DetailCard";
import { writer } from "repl";

type crewType = {
  name: string;
  job: string;
  department: string;
};

type DetailCardProps = {
  adult?: boolean;
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
  character: string;
  director: string;
  cast: crewType[];
  crew: crewType[];
};

export default function Detail() {
  const [movieDetailData, setMovieDetailData] = useState<DetailCardProps>();
  const [movieDetailCredits, setMovieDetailCredits] =
    useState<DetailCardProps>();
  const router = useRouter();

  const directors = movieDetailCredits?.crew.filter(
    (member) => member.job === "Director"
  );
  console.log(directors, "DIRECTOR");

  const writers = movieDetailCredits?.crew.filter(
    (member) => member.department === "Writing"
  );

  // const stars = movieDetailCredits?.cast.filter(
  //   member) => member.character === ""
  // )

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
      .then((res) => setMovieDetailCredits(res.data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);
  console.log(movieDetailData, "data");
  console.log(movieDetailCredits, "credits");

  return (
    <div>
      <DetailCard
        adult={movieDetailData?.adult}
        backdrop_path={`https://image.tmdb.org/t/p/original${movieDetailData?.backdrop_path}`}
        genre_ids={movieDetailData?.genre_ids}
        id={movieDetailData?.id}
        original_language={movieDetailData?.original_language}
        original_title={movieDetailData?.original_title}
        overview={movieDetailData?.overview}
        popularity={movieDetailData?.popularity}
        poster_path={`https://image.tmdb.org/t/p/original${movieDetailData?.poster_path}`}
        release_date={movieDetailData?.release_date}
        title={movieDetailData?.title}
        video={movieDetailData?.video}
        vote_average={movieDetailData?.vote_average}
        vote_count={movieDetailData?.vote_count}
        genres={movieDetailData?.genres}
        runtime={movieDetailData?.runtime}
        directors={directors}
        writers={writers}
        stars={[]}
      />
    </div>
  );
}
