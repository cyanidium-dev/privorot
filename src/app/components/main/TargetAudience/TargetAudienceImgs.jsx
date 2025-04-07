"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import { useRef } from "react";

export default function TargetAudienceImgs() {
  const roseSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: roseSectionRef,
    offset: ["start end", "end start"],
  });

  const backRoseY = useTransform(scrollYProgress, [0, 0.2, 1], [0, 0, 100]);
  const frontLeftRoseY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <div ref={roseSectionRef}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ scale: 1.3, y: 70, delay: 0.6 })}
        className="relative w-full"
      >
        <Image
          src="/images/target/img1.webp"
          alt="image with magical ritual"
          width={360}
          height={413}
          className="w-full h-auto"
        />
      </motion.div>
      {/* пелюстки на задньому фоні */}
      <motion.div
        style={{ y: backRoseY }}
        className="absolute top-[107px] inset-0 z-[2]"
      >
        <Image
          src="/images/target/rose-back.webp"
          alt="rose"
          width="676"
          height="511"
          className="mx-auto w-full h-full object-cover object-[-161px_56px]"
        />
      </motion.div>

      {/* пелюстки на передньому плані */}
      <motion.div
        style={{ y: frontLeftRoseY }}
        className="absolute top-[666px] left-0 z-[4] w-[236px]"
      >
        <Image
          src="/images/target/rose-l.png"
          alt="roses"
          width="260"
          height="240"
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
