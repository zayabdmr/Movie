import { Star } from "lucide-react";

type SlideProps = {
  image: string;
  rating: number;
  title: string;
};

export const Slide = ({ image, title, rating }: SlideProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} className="w-full h-auto" />

      <div className="pt-2 px-2 gap-[3px]">
        <div className="flex items-center gap-[4px]">
          <Star className="text-yellow-400 fill-yellow-400" />
          <p className="text-[14px] text-[#09090B] font-medium">{rating}</p>
          <p className="text-[12px] text-[#71717A] font-normal">/10</p>
        </div>
        <h3 className="w-[100%] h-[60px] text-[18px] text-[#09090B] font-normal">
          {title}
        </h3>
      </div>
    </div>
  );
};
