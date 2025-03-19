import { Nav } from "./components/Nav";
import { Poster } from "./components/Poster";
import { Upcoming } from "./components/Upcoming";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Poster />
      </div>
      <div className="pt-[52px]">
        <Upcoming />
      </div>
    </div>
  );
}
