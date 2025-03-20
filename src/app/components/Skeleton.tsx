import { SkeletonMovieList } from "./SkeletonMovieList";

export const Skeleton = () => {
  return (
    <div>
      <div className="flex w-screen h-[600px] justify-center items-center bg-[#F4F4F5] "></div>

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
