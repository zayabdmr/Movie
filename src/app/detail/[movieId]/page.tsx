<<<<<<< HEAD
=======
// "use client";
>>>>>>> 701386fcd88df64edd7951b863c054cc68a0757f
// import { Footer } from "@/components/Footer";
// import { Nav } from "@/components/Nav";
// import { Star } from "lucide-react";
// import React from "react";
<<<<<<< HEAD

// function Detail({ params: { movieId } }: { params: { movieId: string } }) {
//   return (
//     <div>
//       <Nav />
//       {movieId}
//       <div className="px-[178px]">
//         <div className="flex justify-between">
//           <div className="text-[#09090B]">
//             <h1 className="text-[36px] font-bold">Wicked</h1>
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
//                   6.9
//                   <span className="text-[#71717A] text-[16px] font-normal">
//                     /10
//                   </span>
//                 </p>
//                 <p className="text-[#71717A] text-[12px] font-normal">37k</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-[32px] pt-[24px]">
//           <img
//             src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XV6TYPp5CvUJeqA546ms7YE5O1aXoe7TSanKtMdy-tvE3DGrlhnPLgXCqJETQKA4u7aSVyGKKgD7iM2OE~nJKsuIxbsvi-Q5EwXDerUMnCb~x48v9B2c5REtN6HebDK~ZadAU-1fo2dd8aNbivHB5-q1Kq9vOXenBVYC8O88rsoACytDZd5zCMoKl~Pi18qAM~zIdD9bc2XdCPOqtsyyReXtwiEuy2JCN1YvloAOy22Q0SlNx7VKWms~1qnv3ACWWPgq5sI3OTfSHs3b57AW75nUNm-TmbcrMvNplLqtEw7-W5Ol1qeDVTq02O2AypjAFDZ8IZHtUNsfTmhy518HoA__"
//             className="w-[290px] h-[428px]"
//           />
//           <div className="relative w-[760px] h-[428px]">
//             <img
//               src="https://s3-alpha-sig.figma.com/img/4160/aecb/034291669d5251d1faae7fc5d45790ba?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HJQvz8zm5mSj3pONDHisFFidUzedNZObrn1JzfNd6mPYKsV~FY~Ndqtho-hnYMP3VSrg5muR95rQTGYQaBoNniHBk6JGVkZoGGrJ3ymM-nQoHUrzj6cCj-4qQ22gJJroc5vfKgPfaoLO-BUIPAhw~eh70IMOslJ9b-FasRJZTy6~G6nFCIjyX2xXgC-um8CD4V8RUihAXSJc834li2vG8IHN7xUk1udbK7fJ8Q32xYD1zW1MkU-MLD1YcDDdTwtsdwzpD3bIxe2Y1YHQwXcSgKt~c0OW7F0bbSdi2bNoNhXk9nKZpPa-uCa-LQWCAk7~5fejDcUI1SiRgLvO0Khizw__"
//               alt="Wicked Movie Poster"
//               className="rounded-lg"
//             />
//             <button className="absolute left-10 bottom-10 bg-white text-black px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-200">
//               ▶ Play trailer
//             </button>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default Detail;

import { Star } from "lucide-react";
import Image from "next/image";

export default function Detail() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold">Wicked</h1>
          <p className="text-[18px] font-normal">2024.11.26 · PG · 2h 40m</p>
        </div>
        <div>
          <p className="text-[#09090B] text-[12px] font-medium">Rating</p>
          <div className="flex gap-1">
            <Star
              fill="yellow"
              color="yellow"
              width={28}
              height={28}
              className="pt-[6px]"
            />
            <div>
              <p className="text-[#09090B] text-[18px] font-semibold">
                6.9
                <span className="text-[#71717A] text-[16px] font-normal">
                  /10
                </span>
              </p>
              <p className="text-[#71717A] text-[12px] font-normal">37k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pt-6">
        <img
          src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XV6TYPp5CvUJeqA546ms7YE5O1aXoe7TSanKtMdy-tvE3DGrlhnPLgXCqJETQKA4u7aSVyGKKgD7iM2OE~nJKsuIxbsvi-Q5EwXDerUMnCb~x48v9B2c5REtN6HebDK~ZadAU-1fo2dd8aNbivHB5-q1Kq9vOXenBVYC8O88rsoACytDZd5zCMoKl~Pi18qAM~zIdD9bc2XdCPOqtsyyReXtwiEuy2JCN1YvloAOy22Q0SlNx7VKWms~1qnv3ACWWPgq5sI3OTfSHs3b57AW75nUNm-TmbcrMvNplLqtEw7-W5Ol1qeDVTq02O2AypjAFDZ8IZHtUNsfTmhy518HoA__"
          alt="Movie Poster"
          width={290}
          height={428}
          className="rounded-lg"
        />

        <div className="relative w-[760px] h-[428px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/4160/aecb/034291669d5251d1faae7fc5d45790ba?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HJQvz8zm5mSj3pONDHisFFidUzedNZObrn1JzfNd6mPYKsV~FY~Ndqtho-hnYMP3VSrg5muR95rQTGYQaBoNniHBk6JGVkZoGGrJ3ymM-nQoHUrzj6cCj-4qQ22gJJroc5vfKgPfaoLO-BUIPAhw~eh70IMOslJ9b-FasRJZTy6~G6nFCIjyX2xXgC-um8CD4V8RUihAXSJc834li2vG8IHN7xUk1udbK7fJ8Q32xYD1zW1MkU-MLD1YcDDdTwtsdwzpD3bIxe2Y1YHQwXcSgKt~c0OW7F0bbSdi2bNoNhXk9nKZpPa-uCa-LQWCAk7~5fejDcUI1SiRgLvO0Khizw__"
            alt="Trailer"
            width={760}
            height={428}
            className="rounded-lg"
          />

          <button className="absolute left-10 bottom-10 flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200">
            ▶ Play trailer <span className="text-gray-300">2:35</span>
          </button>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        {["Fairy Tale", "Pop Musical", "Fantasy", "Musical", "Romance"].map(
          (genre) => (
            <span
              key={genre}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-[#09090B] font-semibold text-3xl"
            >
              {genre}
            </span>
          )
        )}
      </div>

      <p className="mt-4 text-[#09090B] text-4 font-normal">
        Elphaba, a misunderstood young woman because of her green skin, and
        Glinda, a popular girl, become friends at Shiz University in the Land of
        Oz. After an encounter with the Wonderful Wizard of Oz, their friendship
        reaches a crossroads.
      </p>

      <div className="mt-6">
        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Director:</p>
          <p className="text-[16px] font-normal">Jon M. Chu</p>
        </div>

        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Writers:</p>
          <p className="text-[16px] font-normal">
            Winnie Holzman · Dana Fox · Gregory Maguire
          </p>
        </div>

        <div className="flex gap-[53px]">
          <p className="w-[64px] text-[16px] font-bold">Stars:</p>
          <p className="text-[16px] font-normal">
            Cynthia Erivo · Ariana Grande · Jeff Goldblum
          </p>
        </div>
      </div>
    </div>
  );
=======
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

// export default function Detail() {
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

//   return (
//     <div>
//       <Nav />
//       {movieId}
//       <div className="px-[180px] flex flex-col">
//         <div className="flex justify-between">
//           <div className="text-[#09090B]">
//             <h1 className="text-[36px] font-bold">{title}</h1>
//             <p className="text-[18px] font-normal">2024.11.26 · PG · 2h 40m</p>
//           </div>
//           <div>
//                       <p className="text-[#09090B] text-[12px] font-medium">{Rating}</p>
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
//                 <p className="text-[#71717A] text-[12px] font-normal">
//                   {watchCount}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-[32px] pt-[24px]">
//           <img src="{image}" className="w-[290px] h-[428px] rounded-lg" />
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

//         <div className="font-normal text-[16px] pt-[20px]">{description}</div>

//         <div className="text-[#09090B] text-[16px] py-[20px]">
//           <div className="gap-[53px] flex">
//             <p className="font-bold">Director</p>
//             <p className="font-normal">{directorName}</p>
//           </div>
//           <div className="border-b border-[#E4E4E7] w-full"></div>
//           <div className="gap-[53px] flex pt-[20px]">
//             <p className="font-bold">Writers</p>
//             <p className="font-normal">{writersName}</p>
//           </div>
//           <div className="border-b border-[#E4E4E7] w-full "></div>
//           <div className="gap-[53px] flex pt-[20px]">
//             <p className="font-bold">Stars</p>
//             <p className="font-normal">{starsName}</p>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
>>>>>>> 701386fcd88df64edd7951b863c054cc68a0757f
}
