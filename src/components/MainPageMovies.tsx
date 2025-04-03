import { Popular } from "./Popular";
import { TopRated } from "./TopRated";
import { Upcoming } from "./Upcoming";

export const MainPageMovies = () => {
  return (
    <div>
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
};
