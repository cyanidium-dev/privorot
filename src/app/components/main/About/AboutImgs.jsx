"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutImgs({ heart, roseL, roseR }) {
  const roseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roseSectionRef,
    offset: ["start end", "end start"],
  });

  const heartY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);
  const frontLeftRoseY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const frontRightRoseY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div ref={roseSectionRef}>
      <motion.div
        style={{ y: heartY }}
        className="absolute top-[-82px] left-0 w-[53%]"
      >
        <Image
          src={heart}
          alt="heart image"
          width="264"
          height="377"
          className="w-full h-auto"
        />
      </motion.div>

      {/* пелюстки на передньому плані */}
      <motion.div
        style={{ y: frontLeftRoseY }}
        className="absolute top-[52px] left-0 z-[4] w-[164px]"
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
        className="absolute top-[344px] right-[0px] z-[4] w-[180px]"
      >
        <Image src={roseR} alt="roses" width="260" height="240" />
      </motion.div>
    </div>
  );
}
