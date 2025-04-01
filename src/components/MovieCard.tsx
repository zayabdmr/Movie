import { Star } from "lucide-react";
import Link from "next/link";

type MovieCardProps = {
  image: string;
  rating: number;
  title: string;
  id: number;
};

export const MovieCard = ({ image, title, rating, id }: MovieCardProps) => {
  return (
    <Link href={`/detail/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-[230px] hover:bg-gray-100 transition">
        <img src={image} className="w-full h-auto" />

        <div className="p-2">
          <div className="flex items-center gap-[4px]">
            <Star fill="yellow" color="yellow" />
            <p className="text-[#09090B] text-[14px] font-medium">
              {rating}

              <span className="text-[#71717A] text-[12px] font-normal">
                /10
              </span>
            </p>
          </div>

          <h3 className="w-[100%] h-[60px] text-[18px] text-[#09090B] font-normal">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
