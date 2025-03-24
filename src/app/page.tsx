"use client";
import * as React from "react";
import { Nav } from "./components/Nav";
import { Poster } from "./components/Poster";
import Upcoming from "./components/Upcoming";
import { Popular } from "./components/Popular";
import TopRated from "./components/TopRared";
import { Footer } from "./components/Footer";

// import { Nav } from "./components/Nav";
// import { Footer } from "./components/Footer";
// import { MovieDetail } from "./components/MovieDetail";

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

// export default function Home() {
//   return (
//     <div>
//       <Nav />
//       <MovieDetail />
//       <Footer />
//     </div>
//   );
// }
