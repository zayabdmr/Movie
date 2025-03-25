"use client";
import * as React from "react";
import { Nav } from "../components/Nav";
import { Poster } from "../components/Poster";
import { Upcoming } from "../components/Upcoming";
import { Popular } from "../components/Popular";
import { TopRated } from "../components/TopRated";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Poster />
      <Upcoming />
      <Popular />
      <TopRated />
      <Footer />
    </div>
  );
}
