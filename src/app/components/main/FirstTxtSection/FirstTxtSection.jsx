"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import Image from "next/image";

export default function FirstTxtSection() {
  return (
    <section className="relative overflow-x-clip  z-[3] pt-[163px]">
      {/* градієнт */}
      <div
        className="absolute bottom-[-24px] right-0
        w-[220px] h-[76px] rounded-full rotatr-[-25.499deg] bg-[#470808] blur-[64.75px] supports-[backdrop-filter]:blur-[64.75px]  will-change-transform z-[1]"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInAnimation({ x: 20, y: -80, scale: 1.5, delay: 1 })}
        className="absolute w-[114px] top-[104px] right-0 z-[6]"
      >
        <Image
          src="/images/txtSection/img.png"
          alt="tarrot card"
          width="137"
          height="90"
          className="w-full h-auto"
        />
      </motion.div>
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: -100, delay: 1.2 })}
          className="max-w-[236px] font-forum text-[32px] uppercase relative z-[2]"
        >
          Приворот на возвращение любимого
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: 100, delay: 1.6 })}
          className="font-marianna text-[32px] absolute right-5 top-[248px] z-[6]"
        >
          Измени все!
        </motion.p>
      </Container>
    </section>
  );
}
