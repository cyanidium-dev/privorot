"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { data } from "./data";
import SliderNavigation from "./SliderNavigation";
import Slide from "./Slide";

export default function Slider({
  quotes,
  // play,
  slideBg,
  prev,
  next,
}) {
  // const [videoIndex, setVideoIndex] = useState(null);

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
              <Slide
                slideBg={slideBg}
                quotes={quotes}
                // play={play}
                slide={slide}
                // i={i}
                // videoIndex={videoIndex}
                // setVideoIndex={setVideoIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <SliderNavigation prev={prev} next={next} />
    </div>
  );
}
