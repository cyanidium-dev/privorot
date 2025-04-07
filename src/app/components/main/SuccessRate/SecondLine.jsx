"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";

export default function SecondLine() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInAnimation({ y: 40, scale: 0.8, delay: 1 })}
      className="border-gradient-rounded p-6 h-[261px] w-full flex flex-col justify-between mb-6 relative z-[3]"
    >
      <p className="w-[213px] text-[14px] font-light leading-[1.23]">
        Любовь — это война.
        <br />И в ней побеждает тот, у кого есть магия.
      </p>
      <h2 className="ml-auto w-[123px] text-[20px] font-forum uppercase">
        Если ты хочешь его — ты его получишь.
      </h2>
    </motion.div>
  );
}
