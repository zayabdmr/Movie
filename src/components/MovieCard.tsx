import { Star } from "lucide-react";
import Link from "next/link";

type MovieCardProps = {
  image: string;
  rating: number;
  title: string;
  id: number;
  className?: string;
};

export const MovieCard = ({
  image,
  title,
  rating,
  id,
  className = "",
}: MovieCardProps) => {
  return (
    <Link href={`/detail/${id}`} passHref>
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition cursor-pointer ${className}`}
      >
        <img
          src={image}
          alt={`Poster for ${title}`}
          className="w-full h-auto object-cover"
        />

        <div className="p-2">
          <div className="flex items-center gap-[4px] mb-1">
            <Star fill="yellow" color="yellow" className="w-4 h-4" />
            <p className="text-[#09090B] text-[14px] font-medium">
              {rating}
              <span className="text-[#71717A] text-[12px]"> /10</span>
            </p>
          </div>

          <h3 className="text-[16px] text-[#09090B] font-semibold line-clamp-2 h-[48px]">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
