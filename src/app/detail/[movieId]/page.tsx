import { Footer } from "@/app/components/Footer";
import { Nav } from "@/app/components/Nav";
import { Star } from "lucide-react";
import React from "react";

function Detail({ params: { movieId } }: { params: { movieId: string } }) {
  return (
    <div>
      <Nav />
      {movieId}
      <div className="px-[178px]">
        <div className="flex justify-between">
          <div className="text-[#09090B]">
            <h1 className="text-[36px] font-bold">Wicked</h1>
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

        <div className="flex gap-[32px] pt-[24px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/f5e4/c1eb/84f6a4e2c66a0969068dc7b7d6463302?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XV6TYPp5CvUJeqA546ms7YE5O1aXoe7TSanKtMdy-tvE3DGrlhnPLgXCqJETQKA4u7aSVyGKKgD7iM2OE~nJKsuIxbsvi-Q5EwXDerUMnCb~x48v9B2c5REtN6HebDK~ZadAU-1fo2dd8aNbivHB5-q1Kq9vOXenBVYC8O88rsoACytDZd5zCMoKl~Pi18qAM~zIdD9bc2XdCPOqtsyyReXtwiEuy2JCN1YvloAOy22Q0SlNx7VKWms~1qnv3ACWWPgq5sI3OTfSHs3b57AW75nUNm-TmbcrMvNplLqtEw7-W5Ol1qeDVTq02O2AypjAFDZ8IZHtUNsfTmhy518HoA__"
            className="w-[290px] h-[428px]"
          />
          <div className="relative w-[760px] h-[428px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/4160/aecb/034291669d5251d1faae7fc5d45790ba?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HJQvz8zm5mSj3pONDHisFFidUzedNZObrn1JzfNd6mPYKsV~FY~Ndqtho-hnYMP3VSrg5muR95rQTGYQaBoNniHBk6JGVkZoGGrJ3ymM-nQoHUrzj6cCj-4qQ22gJJroc5vfKgPfaoLO-BUIPAhw~eh70IMOslJ9b-FasRJZTy6~G6nFCIjyX2xXgC-um8CD4V8RUihAXSJc834li2vG8IHN7xUk1udbK7fJ8Q32xYD1zW1MkU-MLD1YcDDdTwtsdwzpD3bIxe2Y1YHQwXcSgKt~c0OW7F0bbSdi2bNoNhXk9nKZpPa-uCa-LQWCAk7~5fejDcUI1SiRgLvO0Khizw__"
              alt="Wicked Movie Poster"
              className="rounded-lg"
            />
            <button className="absolute left-10 bottom-10 bg-white text-black px-4 py-2 rounded-lg flex items-center shadow-lg hover:bg-gray-200">
              ▶ Play trailer
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Detail;
