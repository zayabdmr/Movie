import { Slide } from "./Slide";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Upcoming = () => {
  return (
    <div className="flex w-full px-20 flex-col items-start gap-8">
      <div className="flex justify-between w-screen pr-20">
        <h3 className="text-[24px] font-semibold">Upcoming </h3>
        <Button
          className="text-[14px] font-medium text-[#18181B] bg-[#fff]"
          variant="link"
        >
          See more <ArrowRight />
        </Button>
      </div>
      <div className="flex gap-8">
        <Slide image={"Slide 4_3 - 1.png"} rating={6.9} title={"Dear Santa"} />
        <Slide
          image={"Slide 4_3 - 1 (1).png"}
          rating={6.9}
          title={"How To Train Your Dragon Live Action"}
        />
        <Slide
          image={"Slide 4_3 - 1 (2).png"}
          rating={6.9}
          title={"Alien Romulus"}
        />
        <Slide
          image={"Slide 4_3 - 1 (3).png"}
          rating={6.9}
          title={"From the Ashes"}
        />
        <Slide
          image={"Slide 4_3 - 1 (4).png"}
          rating={6.9}
          title={"Space Dogg"}
        />
      </div>
      <div className="flex gap-8 w-full">
        <Slide
          image={"Slide 4_3 - 1 (5).png"}
          rating={6.9}
          title={"The Order"}
        />
        <Slide image={"Slide 4_3 - 1 (6).png"} rating={6.9} title={"Y2K"} />
        <Slide
          image={"Slide 4_3 - 1 (7).png"}
          rating={6.9}
          title={"Solo Leveling: ReAwakening"}
        />
        <Slide
          image={"Slide 4_3 - 1 (8).png"}
          rating={6.9}
          title={"Get Away"}
        />
        <Slide
          image={"Slide 4_3 - 1 (9).png"}
          rating={6.9}
          title={"Sonic the Hedgehog 3"}
        />
      </div>
    </div>
  );
};
