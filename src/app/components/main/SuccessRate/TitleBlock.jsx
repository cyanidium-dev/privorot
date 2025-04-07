"use client";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";

export default function TitleBlock() {
  return (
    <div className="flex justify-between mb-[39px]">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({
          scale: 1.3,
          y: -40,
          x: -100,
          delay: 1.7,
        })}
        className="font-forum text-[32px] uppercase max-w-[189px]"
      >
        Обряд, который работает
      </motion.h2>
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({
          scale: 1.3,
          y: -40,
          x: 100,
          delay: 1.7,
        })}
        className="text-end font-marianna text-[24px] leading-[1.2] max-w-[99px]"
      >
        Пусть он снова станет твоим!
      </motion.h3>
    </div>
  );
}
