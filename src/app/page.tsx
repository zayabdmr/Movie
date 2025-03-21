import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import Popular from "./components/Popular";
import { Poster } from "./components/Poster";
import TopRated from "./components/TopRared";
import Upcoming from "./components/Upcoming";

// import { Footer } from "./components/Footer";
// import { Nav } from "./components/Nav";
// import { Skeleton } from "./components/Skeleton";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="w-full min-h-screen">
        <Poster />
      </div>
      <div className="pt-[52px]">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
      <div className="pt-[51px]">
        <Footer />
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <Nav />
//       <div className="pt-[24px]">
//         <Skeleton />
//       </div>
//       <div className="pt-[51px]">
//         <Footer />
//       </div>
//     </div>
//   );
// }
