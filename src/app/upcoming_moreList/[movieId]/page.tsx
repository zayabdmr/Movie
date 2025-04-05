"use client";

import { axiosInstance } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function upcoming_moreList() {
  const { movieId } = useParams();
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    const fetchMovieList = async () => {
      const { data } = await axiosInstance(
        `movie/${movieId?.toString()}?language=en-US&page=1`
      );
      setMovieList(data);
    };
    fetchMovieList();
  }, []);

  return <div>a</div>;
}
