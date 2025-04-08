"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { data } from "./data";
import { useState } from "react";

export default function Slider() {
  const [videoIndex, setVideoIndex] = useState(null);

  return (
    <div className="relative z-[4] overflow-visible mx-auto pl-10 max-w-full w-full">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        slidesPerView={"auto"}
        // centeredSlides={true}
        spaceBetween={8}
        loop={true}
        className="slider "
      >
        {data.map((slide, i) => (
          <SwiperSlide key={i} className="!w-[291px] h-[274px]">
            <div className="flex rounded-2xl overflow-hidden bg-[#A61F2C] w-full">
              {videoIndex === i ? (
                <div className="relative w-[291px] h-[274px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${slide.video}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video"
                    className="top-0 right-0 w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <>
                  <div className="w-[110px] h-[274px]  shrink-0 relative">
                    <Image
                      src="/icons/quotes.svg"
                      alt="icon"
                      width="36"
                      height="40"
                      className="absolute top-[58px] right-[-20px]"
                    />

                    <button
                      onClick={() => setVideoIndex(i)}
                      className="absolute top-[111px] right-[-25px]"
                    >
                      <Image
                        src="/icons/play.svg"
                        alt="icon"
                        width="44"
                        height="44"
                      />
                    </button>

                    <div className="rounded-l-2xl overflow-hidden h-full w-full">
                      <Image
                        src={slide.img}
                        alt={slide.author}
                        width="110"
                        height="274"
                        className="w-full h-full object-cover"
                        quality={100}
                      />
                    </div>
                  </div>
                  <div className="pt-[61px] pr-[20px] pl-9">
                    <h4 className="text-[16px] font-forum uppercase mb-2">
                      {slide.title}
                    </h4>
                    <p className="text-[10px] mb-[29px] font-light leading-[1.2]">
                      {slide.descr}
                    </p>
                    <p className="text-[12px] font-forum text-right">
                      {slide.author}
                    </p>
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
    </div>
  );
}
