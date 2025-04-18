"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";

export default function DiscountStepsImgs({
  bg,
  roseBack,
  radialGradient,
  gradient,
  woman,
  rose,
  roseL,
}) {
  const roseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roseSectionRef,
    offset: ["start end", "end start"],
  });

  const backImgY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);
  const frontRightRoseY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const frontLeftRoseY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={roseSectionRef}>
      {/* фон */}
      <div className="absolute top-[90px] w-full h-[460x]">
        <Image
          src={bg}
          alt="background"
          width="360"
          height="460"
          className="w-full h-auto"
        />
      </div>

      {/* пелюстки на задньому фоні  */}
      <motion.div
        style={{ y: backImgY }}
        className="absolute top-[-40px] w-full h-[685px]"
      >
        <Image
          src={roseBack}
          alt="background"
          width="360"
          height="685"
          className="w-full h-auto"
        />
      </motion.div>

      {/* градієнт червоний */}
      <div
        style={{
          background: radialGradient,
        }}
        className="absolute top-[164px] right-0
        w-[360px] h-[515px] rounded-full z-[1] blur-[80px] supports-[backdrop-filter]:blur-[80px]  will-change-transform"
      />

      {/* градієнт темний */}
      {/* Tailwind safelist hint: bg-[#170101] bg-[#010D17] bg-[#170111]
       */}
      <div
        className={`absolute ${gradient} top-0 left-1/2 -translate-x-1/2
        w-[710px] h-[200px] rounded-full z-[5] blur-[58px] supports-[backdrop-filter]:blur-[58px]  will-change-transform`}
      />

      {/* фото жінки */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({
          scale: 0.7,
          y: 40,
          delay: 0.4,
        })}
        className="relative z-[4] w-full"
      >
        <Image
          src={woman}
          alt="woman photo"
          width="360"
          height="413"
          className="w-full h-auto"
        />
      </motion.div>

      {/* троянди на передньому плані */}

      <motion.div
        style={{ y: frontRightRoseY }}
        className=" w-[322px] absolute top-[61px] left-[23px] z-[4]"
      >
        <Image
          src={rose}
          alt="roses"
          width="260"
          height="240"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        style={{ y: frontLeftRoseY }}
        className="absolute bottom-[108px] left-0 z-[4] w-[170px]"
      >
        <Image src={roseL} alt="roses" width="260" height="240" />
      </motion.div>
    </div>
  );
}
