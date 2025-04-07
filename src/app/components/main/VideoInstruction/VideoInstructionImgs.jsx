"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";

export default function VideoInstructionImgs() {
  const roseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roseSectionRef,
    offset: ["start end", "end start"],
  });

  const backImgY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);
  const frontCardY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const frontRightRoseY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const frontLeftRoseY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={roseSectionRef}>
      {/* фон */}
      <motion.div
        style={{ y: backImgY }}
        className="absolute top-[-100px] w-full h-[789px]"
      >
        <Image
          src="/images/videoInstruction/bg.webp"
          alt="background"
          width="360"
          height="789"
          className="w-full h-auto"
        />
      </motion.div>
      {/* фото пари */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({
          scale: 0.7,
          y: 80,
          delay: 0.6,
        })}
        className="absolute top-[291px]  w-full"
      >
        <Image
          src="/images/videoInstruction/family.webp"
          alt="family photo"
          width="360"
          height="539"
          className="w-full h-auto"
        />
      </motion.div>
      {/* градієнт */}
      <div className="absolute top-[500px] left-1/2 -translate-x-1/2 w-[710px]  h-[493px] rounded-full bg-[#170101] blur-[79.4px] supports-[backdrop-filter]:blur-[79.4px]  will-change-transform z-[1]" />

      {/* карта таро */}
      <motion.div
        style={{ y: frontCardY }}
        className="absolute top-[82px] right-0 z-[4]"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({
            scale: 1.5,
            y: -80,
            x: 100,
            delay: 1.3,
          })}
          className="w-[104px]"
        >
          <Image
            src="/images/videoInstruction/card.png"
            alt="taro card"
            width="260"
            height="240"
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>

      {/* троянди на передньому плані */}

      <motion.div
        style={{ y: frontLeftRoseY }}
        className=" w-[314px] absolute top-[62px]   left-0 z-[4]"
      >
        <Image
          src="/images/videoInstruction/rose-l.png"
          alt="taro card"
          width="260"
          height="240"
          className="w-full h-auto"
        />
      </motion.div>

      <motion.div
        style={{ y: frontRightRoseY }}
        className="absolute top-[392px] right-0 z-[4] w-[196px]"
      >
        <Image
          src="/images/videoInstruction/rose-r.png"
          alt="roses"
          width="260"
          height="240"
        />
      </motion.div>
    </div>
  );
}
