"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";

export default function FirstLine() {
  return (
    <div className="flex gap-4 relative z-[3] mb-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: -100, delay: 2.1 })}
        className="w-[54%]"
      >
        <Image
          src="/images/successRate/woman.webp"
          alt="woman photo"
          width="167"
          height="252"
          className="w-full h-auto rounded-[4px]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: 100, delay: 2.1 })}
        className="w-[41.1%]"
      >
        <div className="bg-accent-gradient p-[14px] pt-[10px] rounded-[4px] text-center font-forum leading-[1.2] mb-4">
          <p className=" text-[40px]">100%</p>
          <p className="text-[12px]">Успешных ритуалов</p>
        </div>
        <p className="text-[12px] font-light leading-[1.23]">
          Слабые плачут, сильные управляют судьбой.
        </p>
      </motion.div>
    </div>
  );
}
