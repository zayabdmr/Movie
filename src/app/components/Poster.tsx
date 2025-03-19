"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Poster() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex items-center justify-center">
        <Carousel className="w-[90%] h-full">
          <CarouselContent className="w-full h-full">
            <CarouselItem className="h-full">
              <div className="w-full h-[600px]">
                <img src="wicked.png" alt="wicked" />
              </div>
            </CarouselItem>
            <CarouselItem className="h-full">
              <div className="w-full h-[600px]">
                <img src="gladiator.png" alt="gladiator" />
              </div>
            </CarouselItem>
            <CarouselItem className="h-full">
              <div className="w-full h-[600px]">
                <img src="moana.png" alt="moana" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
