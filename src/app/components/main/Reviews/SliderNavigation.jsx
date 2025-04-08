import Image from "next/image";

export default function SliderNavigation() {
  return (
    <div className="flex justify-center gap-6 mt-6">
      <button className="prev-btn w-[42px] h-[42px] rounded-full flex items-center justify-center border overflow-hidden">
        <Image
          src="/icons/prev.svg"
          alt="previous icon"
          width="88"
          height="88"
          className="w-[168px] h-auto max-w-[400px] object-[0_1px]"
        />
      </button>
      <button className="next-btn w-[42px] h-[42px] rounded-full flex items-center justify-center">
        <Image src="/icons/next.svg" alt="next icon" width="42" height="42" />
      </button>
    </div>
  );
}
