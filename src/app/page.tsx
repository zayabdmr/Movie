"use client";

import React from "react";
import { Poster } from "@/components/Poster";
import { MainPageMovies } from "@/components/MainPageMovies";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Poster />
      <MainPageMovies />
    </main>
  );
}
