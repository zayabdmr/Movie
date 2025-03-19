import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex py-[40px] items-start gap-[48px] w-screen h-[280px] bg-[#4338CA]">
      <div>
        <div className="text-[#f2f2f5] gap-[12px]">
          <div className="gap-2 flex ">
            <Film />
            <p className="text-[16px] italic font-bold">Movie Z</p>
          </div>
          <div>
            <p className="text-[14px] font-normal">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
        </div>
        <div>
          <p>Contact Information</p>
          <div>
            <Mail />
          </div>
          <div>
            <Phone />
          </div>
        </div>
      </div>
    </div>
  );
};
