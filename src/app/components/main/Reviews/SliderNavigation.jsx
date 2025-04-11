import Image from "next/image";

export default function SliderNavigation({ prev, next }) {
  return (
    <div className="flex justify-center gap-6 mt-6">
      {/* Tailwind safelist hint: w-[168px] object-[0_1px] w-[153px] object-[0_4px]
       */}
      <button className="prev-btn w-[42px] h-[42px] rounded-full flex items-center justify-center border overflow-hidden">
        <Image src={prev} alt="previous icon" width="42" height="42" />
      </button>
      <button className="next-btn w-[42px] h-[42px] rounded-full flex items-center justify-center">
        <Image src={next} alt="next icon" width="42" height="42" />
      </button>
    </div>
  );
}
