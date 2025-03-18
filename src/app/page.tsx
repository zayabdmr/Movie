import { Nav } from "./components/Nav";
import { Poster } from "./components/Poster";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Poster />
      </div>
      <h3 className="text-[24px] font-semibold pl-20 pt-[52px]">Upcoming </h3>
    </div>
  );
}
