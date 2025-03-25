// "use client";
// import { Footer } from "@/components/Footer";
// import { Nav } from "@/components/Nav";
// import { Star } from "lucide-react";
// import React from "react";
// import { Play } from "lucide-react";
// import { MoreLikeList } from "@/components/MoreLikeList";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { title } from "process";

// type myTypes = {
//   id: number;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   poster_path: string | null;
// };

// export const Detail = ({}: any) => {
//   const [movieData, setMovieData] = useState<myTypes[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/278/similar?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
//       )
//       .then((res) => setMovieData(res.data.results))
//       .catch((err) => console.error("Error fetching movies:", err));
//   }, []);

// function Detail({ params: { movieId } }: { params: { movieId: string } }) {
//   return (
//     <div>
//       <Nav />
//       {movieId}
//       <div className="px-[180px] flex flex-col">
//         <div className="flex justify-between">
//           <div className="text-[#09090B]">
//             <h1 className="text-[36px] font-bold">{ title }</h1>
//             <p className="text-[18px] font-normal">2024.11.26 · PG · 2h 40m</p>
//           </div>
//           <div>
//             <p className="text-[#09090B] text-[12px] font-medium">Rating</p>
//             <div className="flex gap-1">
//               <Star
//                 fill="yellow"
//                 color="yellow"
//                 width={28}
//                 height={28}
//                 className="pt-[6px]"
//               />
//               <div>
//                 <p className="text-[#09090B] text-[18px] font-semibold">
//                   {rating}
//                   <span className="text-[#71717A] text-[16px] font-normal">
//                     /10
//                   </span>
//                 </p>
//                 <p className="text-[#71717A] text-[12px] font-normal">{ watchCount}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-[32px] pt-[24px]">
//           <img
//             src="{image}"
//             className="w-[290px] h-[428px] rounded-lg"
//           />
//           <div className="relative w-[760px] h-[428px]">
//             <img
//               src="{imageVideo}"
//               alt="Wicked Movie Poster"
//               className="rounded-lg max-w-[80%]"
//             />
//             <button className="absolute left-10 bottom-10 bg-translate text-black rounded-lg flex items-center shadow-lg hover:bg-gray-200 gap-[8px]">
//               <div className="w-[40px] h-[40px] rounded-full bg-[#FFF] flex justify-center items-center">
//                 <Play size={16} className="flex" />
//               </div>
//               <p className="text-[#FFF] text-[16px] font-normal">
//                 Play trailer
//               </p>
//               <p className="text-[#FFF] text-[16px] font-normal">2:35</p>
//             </button>
//           </div>
//         </div>

//         <div className="flex gap-[12px] text-[#09090B] text-[12px] font-semibold pt-[32px] pb-[20px]">
//           <p className="h-[20] border border-[#E4E4E7] rounded-lg py-[2px] px-[10px] justify-center items-center flex">
//             Fairy Tale
//           </p>
//           <p className=" h-[20] border border-[#E4E4E7] rounded-lg py-[2px] px-[10px] justify-center items-center flex">
//             Pop Musical
//           </p>
//           <p className=" h-[20] border border-[#E4E4E7] rounded-lg py-[2px] px-[10px] justify-center items-center flex">
//             Fantasy
//           </p>
//           <p className=" h-[20] border border-[#E4E4E7] rounded-lg py-[2px] px-[10px] justify-center items-center flex">
//             Musical
//           </p>
//           <p className=" h-[20] border border-[#E4E4E7] rounded-lg py-[2px] px-[10px] justify-center items-center flex">
//             Romance
//           </p>
//         </div>

//         <div className="font-normal text-[16px] pt-[20px]">
//           {description}
//         </div>

//         <div className="text-[#09090B] text-[16px] py-[20px]">
//           <div className="gap-[53px] flex">
//             <p className="font-bold">Director</p>
//             <p className="font-normal">{ directorName}</p>
//           </div>
//           <div className="border-b border-[#E4E4E7] w-full"></div>
//           <div className="gap-[53px] flex pt-[20px]">
//             <p className="font-bold">Writers</p>
//             <p className="font-normal">
//               { writersName}
//             </p>
//           </div>
//           <div className="border-b border-[#E4E4E7] w-full "></div>
//           <div className="gap-[53px] flex pt-[20px]">
//             <p className="font-bold">Stars</p>
//             <p className="font-normal">
//              {starsName}
//             </p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
