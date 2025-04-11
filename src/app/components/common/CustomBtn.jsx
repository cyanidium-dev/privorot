"use client";
import { Button } from "@heroui/react";

export default function CustomBtn({ sale, text, variant }) {
  const getStyles = (variant) => {
    switch (variant) {
      case "ayym-qunan":
        return {
          button: "bg-button-gradient-2 text-txtColor2 border-[#141D48]",
          badge: "bg-light-gradient-2",
          saleTxt: "text-[#ACB7FF]",
          accent: "bg-accent-gradient-2",
          txtGradient: "dark-txt-gradient-2",
        };
      case "anastasia":
        return {
          button: "bg-button-gradient-3 text-txtColor3 border-[#481438]",
          badge: "bg-light-gradient-3",
          saleTxt: "text-[#FFACEA]",
          accent: "bg-accent-gradient-3",
          txtGradient: "dark-txt-gradient-3",
        };
      case "tamara":
        return {
          button: "bg-button-gradient-3 text-txtColor3 border-[#481438]",
          badge: "bg-light-gradient-3",
          saleTxt: "text-[#FFACEA]",
          accent: "bg-accent-gradient-3",
          txtGradient: "dark-txt-gradient-3",
        };
      default:
        return {
          button: "bg-button-gradient text-txtColor border-[#481414]",
          badge: "bg-light-gradient",
          saleTxt: "text-[#FFABB3]",
          accent: "bg-accent-gradient",
          txtGradient: "dark-txt-gradient",
        };
    }
  };

  const styles = getStyles(variant);
  return (
    <div className={`${sale && "relative z-[3]"} w-full`}>
      <Button
        className={`font-forum w-full h-[51px]  rounded-[32px] p-0 flex justify-center items-center leading-[1.25] text-[16px] border ${
          styles.button
        } ${sale && "gap-[15px] justify-start"}`}
      >
        {sale && (
          <div
            className={`pl-[13px] pr-[7px] h-full flex items-center justify-center gap-[7px] rounded-[32px] ${styles.accent}`}
          >
            <p className="text-white text-[24px] uppercase">13$</p>
            <p
              className={`line-through uppercase text-[16px] ${styles.saleTxt}`}
            >
              130$
            </p>
          </div>
        )}
        <p>{text}</p>
      </Button>
      {sale && (
        <div
          className={`w-16 h-16 rounded-full flex justify-center items-center absolute right-[-19px] top-[-44px] ${styles.badge}`}
        >
          <p
            className={`${styles.txtGradient} font-montserrat text-[20px] uppercase font-semibold`}
          >
            -90%
          </p>
        </div>
      )}
    </div>
  );
}
