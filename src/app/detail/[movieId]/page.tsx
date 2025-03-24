import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import axios from "axios";
import React from "react";

function Detail({ params: { movieId } }) {
  return (
    <div>
      <Nav />
      {movieId}
      <Footer />
    </div>
  );
}

export default Detail;
