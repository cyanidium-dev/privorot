"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { data } from "./data";
import { useState } from "react";
import SliderNavigation from "./SliderNavigation";
import Slide from "./Slide";

export default function Slider() {
  const [videoIndex, setVideoIndex] = useState(null);

  return (
    <div>
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
              <Slide slide={slide} i={i} videoIndex={videoIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SliderNavigation />
    </div>
  );
}
