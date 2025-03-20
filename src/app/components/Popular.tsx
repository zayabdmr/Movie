"use client";
import { Slide } from "./Slide";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const movies = [
  { title: "The Shawshank Redemption", image: "popular1.png", rating: 6.9 },
  {
    title: "The Godfather",
    image: "popular2.png",
    rating: 6.9,
  },
  { title: "The Dark Knight", image: "popular3.png", rating: 6.9 },
  { title: "12 Angry Men", image: "popular4.png", rating: 6.9 },
  {
    title: "The Lord of the Rings: The  Return of the Kin",
    image: "popular5.png",
    rating: 6.9,
  },
  { title: "Internstellar", image: "popular6.png", rating: 6.9 },
  { title: "Se7en", image: "popular7.png", rating: 6.9 },
  {
    title: "It’s a Wonderful life",
    image: "popular8.png",
    rating: 6.9,
  },
  { title: "Seven samurai", image: "popular9.png", rating: 6.9 },
  {
    title: "The Silence of the Lambs",
    image: "popular10.png",
    rating: 6.9,
  },
];

export default function Popular() {
  return (
    <div className="max-w-6xl mx-auto px-[80px] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Popular</h2>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[32px]">
        {movies.map((movie, index) => (
          <Slide
            key={index}
            title={movie.title}
            image={movie.image}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}
