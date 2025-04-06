"use client";
import { Button } from "@heroui/react";

export default function CustomBtn({ sale, text }) {
  return (
    <div className={`${sale && "relative z-[3]"} w-full`}>
      <Button
        className={`font-forum w-full h-[51px]  rounded-[32px] p-0 flex justify-center items-center leading-[1.25] text-[16px] border border-[#481414] bg-button-gradient text-txtColor ${
          sale && "gap-[15px] justify-start"
        }`}
      >
        {sale && (
          <div className="pl-[13px] pr-[7px] h-full flex items-center justify-center gap-[7px] bg-accent-gradient rounded-[32px]">
            <p className="text-white text-[24px] uppercase">13$</p>
            <p className="line-through text-[#FFABB3] uppercase text-[16px]">
              130$
            </p>
          </div>
        )}
        <p>{text}</p>
      </Button>
      {sale && (
        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-light-gradient absolute right-[-19px] top-[-44px]">
          <p className="dark-txt-gradient font-montserrat text-[20px] uppercase font-semibold">
            -90%
          </p>
        </div>
      )}
    </div>
  );
}
