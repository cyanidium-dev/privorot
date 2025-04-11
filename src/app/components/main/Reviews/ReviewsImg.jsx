"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ReviewsImg({ heart, gradient }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);

  const frontRightY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div ref={sectionRef}>
      <motion.div
        style={{ y: frontRightY }}
        className="absolute z-[2] top-[26px] right-0 w-[184px]"
      >
        <Image
          src={heart}
          alt="heart image"
          width="176"
          height="252"
          className="w-full h-auto"
        />
      </motion.div>
      {/* градієнт */}
      <motion.div
        style={{
          y: backY,
          background: gradient,
        }}
        className="absolute top-[186px] right-[-59px]
        w-[316px] h-[223px] rounded-full z-[3] blur-[80px] supports-[backdrop-filter]:blur-[80px]  will-change-transform  "
      />
    </div>
  );
}
