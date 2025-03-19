"use client";
import { Slide } from "./Slide";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const movies = [
  { title: "Pulp Fiction", image: "top1.png", rating: 6.9 },
  {
    title: "The Lord of the Rings: Fellowship of the Kings",
    image: "top2.png",
    rating: 6.9,
  },
  { title: "The Good, the Bad and the Ugly", image: "top3.png", rating: 6.9 },
  { title: "Forrest Gump", image: "top4.png", rating: 6.9 },
  { title: "Fight Club", image: "top5.png", rating: 6.9 },
  { title: "Saving Private Ryan", image: "top6.png", rating: 6.9 },
  { title: "City of God", image: "top7.png", rating: 6.9 },
  {
    title: "The Green Mile",
    image: "top8.png",
    rating: 6.9,
  },
  { title: "Life is Beautiful", image: "top9.png", rating: 6.9 },
  {
    title: "Terminator 2: Judgement Day",
    image: "top10.png",
    rating: 6.9,
  },
];

export default function TopRated() {
  return (
    <div className="max-w-6xl mx-auto px-[8opx] pt-[52px]">
      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-semibold pb-[32px]">Top Rated </h2>
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
