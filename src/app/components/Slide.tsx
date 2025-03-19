import { Star } from "lucide-react";

type SlideProps = {
  image: string;
  rating: number;
  title: string;
};

export const Slide = ({ image, title, rating }: SlideProps) => {
  return (
    <div>
      <div className="w-[230px] h-[340px]">
        <img src={image} />
      </div>
      <div className="pt-2 px-2 ">
        <div className="flex items-center gap-[2px]">
          <Star className="text-yellow-400 fill-yellow-400" />
          <p className="text-[14px] text-[#09090B] font-medium">{rating}</p>
          <p className="text-[12px] font-normal">/10</p>
        </div>
        <div className="w-[100%] h-[60px] text-[18px] text-[#09090B] font-normal">
          {title}
        </div>
      </div>
    </div>
  );
};
