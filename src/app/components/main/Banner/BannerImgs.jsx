"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import { useRef } from "react";

export default function BannerImgs() {
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
      <div
        ref={roseSectionRef}
        className="relative top-[7px] w-full h-[676px] overflow-clip"
      >
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>
        {/* пелюстки ктроянд позаду */}
        <motion.div
          style={{ y: backRoseY }}
          className="absolute top-[-120px] inset-0 z-0"
        >
          <Image
            src="/images/hero/rose-back.webp"
            alt="rose"
            width="360"
            height="676"
            className="mx-auto w-full h-full object-cover object-[-97px_0]"
          />
        </motion.div>
      </div>
      {/* фото жінки */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 0.8 })}
        className="absolute z-[2] w-full top-[78px]"
      >
        <Image
          src="/images/hero/hero.webp"
          alt="woman"
          width="299"
          height="547"
          className="mx-auto"
        />
      </motion.div>
      {/* градієнт */}
      <div
        className="absolute top-[406px] left-1/2 -translate-x-1/2
        w-[521px] h-[783px] rounded-full bg-[#170101] blur-[64.75px] supports-[backdrop-filter]:blur-[64.75px]  will-change-transform z-[3]"
      />
      {/* пелюстки на передньому плані */}
      <motion.div
        style={{ y: frontLeftRoseY }}
        className="absolute top-[536px]  xs:top-[496px] left-0 z-[4] w-[150px] xs:w-[200px]"
      >
        <Image
          src="/images/hero/rose-l.webp"
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
        <Image
          src="/images/hero/rose-r.webp"
          alt="roses"
          width="260"
          height="240"
        />
      </motion.div>
    </>
  );
}
