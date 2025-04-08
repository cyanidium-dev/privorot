"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ReviewsImg() {
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
          src="/images/reviews/heart.webp"
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
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(255, 39, 61, 0.50) 0%, rgba(51, 5, 10, 0.50) 100%)",
        }}
        className="absolute top-[186px] right-[-59px]
        w-[316px] h-[223px] rounded-full z-[3] blur-[80px] supports-[backdrop-filter]:blur-[80px]  will-change-transform  "
      />
    </div>
  );
}
