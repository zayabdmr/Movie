import { SkeletonMovieList } from "./SkeletonMovieList";

export const Skeleton = () => {
  return (
    <div>
      <div className="flex w-screen px-[80px] h-[600px] justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center gap-[32px] bg-[#F4F4F5] "></div>

      <div className="pt-[52px]">
        <SkeletonMovieList />
      </div>
      <div className="pt-[52px]">
        <SkeletonMovieList />
      </div>
      <div className="pt-[52px]">
        <SkeletonMovieList />
      </div>
    </div>
  );
};
