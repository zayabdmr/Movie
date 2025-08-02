import Link from "next/link";
import { Star } from "lucide-react";

type MovieCardProps = {
  id: number;
  title: string;
  rating: number;
  image: string;
  className?: string;
};

export const MovieCard = ({
  id,
  title,
  rating,
  image,
  className = "",
}: MovieCardProps) => {
  return (
    <Link href={`/detail/${id}`} passHref>
      <div
        className={`bg-white dark:bg-[#18181B] rounded-lg shadow-md overflow-hidden transition hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer ${className}`}
      >
        <img
          src={image}
          alt={`Poster for ${title}`}
          className="object-cover w-full h-auto"
        />

        <div className="p-2">
          <div className="flex items-center gap-1 mb-1">
            <Star fill="yellow" color="yellow" className="w-4 h-4" />
            <p className="text-sm font-medium text-[#09090B] dark:text-white">
              {rating}
              <span className="ml-1 text-xs text-[#71717A]">/10</span>
            </p>
          </div>

          <h3 className="text-sm font-semibold text-[#09090B] dark:text-white line-clamp-2 h-[48px]">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
