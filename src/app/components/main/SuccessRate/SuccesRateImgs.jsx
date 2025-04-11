"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";

export default function SuccessRateImgs({
  gradient,
  gradientSecond,
  ellipceImg,
  card,
  roseR,
}) {
  const roseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roseSectionRef,
    offset: ["start end", "end start"],
  });

  const backImgY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);
  const frontLeftCardY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const frontRightRoseY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div ref={roseSectionRef}>
      {/* градієнт */}
      {/* Tailwind safelist hint:  bg-[#470808] bg-[#4A3945] bg-[#39394A]
       */}
      <div
        className={`absolute top-[95px] -left-[29%] w-[220px]  h-[76px] rounded-full  blur-[64.75px] supports-[backdrop-filter]:blur-[64.75px]  will-change-transform z-[1] rotate-[-154.5deg] ${gradient}`}
      />

      <div
        className="absolute top-[309px] left-1/2 -translate-x-1/2  w-[309px] h-[876px] rounded-full bg-[#470808] blur-[80px] supports-[backdrop-filter]:blur-[80px]  will-change-transform z-[1] "
        style={{
          background: gradientSecond,
        }}
      />

      {/* фонове зображення напівеліпс */}
      <motion.div style={{ y: backImgY }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ scale: 0.8, delay: 2 })}
          className="absolute top-[172px] z-[2] w-full"
        >
          <Image
            src={ellipceImg}
            alt="image with candles"
            width="359"
            height="351"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* фото на передньому плані */}
      <motion.div
        style={{ y: frontLeftCardY }}
        className="absolute top-[674px]   left-0 z-[4]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({
            scale: 1.3,
            y: -40,
            x: -100,
            delay: 1.8,
          })}
          className=" w-[150px] "
        >
          <Image
            src={card}
            alt="taro card"
            width="260"
            height="240"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: frontRightRoseY }}
        className="absolute top-[468px] right-0 z-[4] w-[220px]"
      >
        <Image src={roseR} alt="roses" width="260" height="240" />
      </motion.div>
    </div>
  );
}
