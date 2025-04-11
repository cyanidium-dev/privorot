"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import { useRef } from "react";

export default function BannerImgs({
  hero,
  womanClass,
  womanImg,
  roseBack,
  roseBgClass,
  bannerGradientClass,
  roseL,
  roseR,
}) {
  const roseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roseSectionRef,
    offset: ["start end", "end start"],
  });

  const backRoseY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);
  const frontLeftRoseY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const frontRightRoseY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <>
      {/* Tailwind safelist hint: 
top-[-1px] top-[78px] w-full w-[299px] top-[88px] object-[-97px_0] bg-[#170101]  w-[521px] h-[783px] top-[406px] top-[358px] bg-[#170111]  w-[662px] h-[832px]
*/}
      <div
        ref={roseSectionRef}
        className="relative top-[7px] w-full h-[676px] overflow-clip"
      >
        {roseBgClass && (
          <div className="absolute inset-0 bg-black/20 z-[1]"></div>
        )}

        {/* пелюстки троянд позаду */}
        <motion.div
          style={{ y: backRoseY }}
          className="absolute top-[-120px] inset-0 z-0"
        >
          <Image
            src={roseBack}
            alt="rose"
            width="360"
            height="676"
            className={`mx-auto w-full h-full object-cover  ${roseBgClass}`}
          />
        </motion.div>
      </div>
      {/* фото жінки */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8 })}
        className={`absolute z-[2] ${womanClass} w-full`}
      >
        <Image
          src={hero}
          alt="woman"
          width="299"
          height="547"
          className={`mx-auto ${womanImg} h-auto`}
        />
      </motion.div>
      {/* градієнт */}
      <div
        className={`absolute  left-1/2 -translate-x-1/2
        rounded-full  blur-[64.75px] supports-[backdrop-filter]:blur-[64.75px]  will-change-transform z-[3] ${bannerGradientClass}`}
      />
      {/* пелюстки на передньому плані */}
      <motion.div
        style={{ y: frontLeftRoseY }}
        className="absolute top-[536px]  xs:top-[496px] left-0 z-[4] w-[150px] xs:w-[200px]"
      >
        <Image
          src={roseL}
          alt="roses"
          width="260"
          height="240"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        style={{ y: frontRightRoseY }}
        className="absolute top-[410px] right-[-96px] z-[4]"
      >
        <Image src={roseR} alt="roses" width="260" height="240" />
      </motion.div>
    </>
  );
}
