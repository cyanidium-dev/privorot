"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import Image from "next/image";

export default function FirstTxtSection() {
  return (
    <section className="relative overflow-x-clip mb-[94px] z-[3] pt-[163px]">
      <div className="absolute w-[114px] top-[104px] right-0 z-[6]">
        <Image
          src="/images/txtSection/img.png"
          alt="tarrot card"
          width="137"
          height="90"
          className="w-full h-auto"
        />
      </div>
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: -100, delay: 2 })}
          className="max-w-[236px] font-forum text-[32px] uppercase"
        >
          Приворот на возвращение любимого
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: 100, delay: 2.5 })}
          className="font-marianna text-[32px] absolute right-5 top-[248px] z-[6]"
        >
          Измени все!
        </motion.p>
      </Container>
    </section>
  );
}
