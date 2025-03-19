"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Poster_word } from "./Poster_word";

export function Poster() {
  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full">
        <Carousel className="w-full h-full">
          <CarouselContent className="h-full">
            <CarouselItem className="w-full h-screen">
              <div className="w-full h-screen">
                <Poster_word
                  title={"Wicked"}
                  image={"wicked.png"}
                  rating={6.9}
                  description={
                    "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
                  }
                />
              </div>
            </CarouselItem>
            <CarouselItem className="h-full">
              <div className="w-full h-screen">
                <Poster_word
                  title={"Gladiator II"}
                  image={"gladiator.png"}
                  rating={6.9}
                  description={
                    "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people."
                  }
                />
              </div>
            </CarouselItem>
            <CarouselItem className="h-full">
              <div className="w-full h-screen">
                <Poster_word
                  title={"Moana 2"}
                  image={"moana.png"}
                  rating={6.9}
                  description={
                    "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced."
                  }
                />
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
