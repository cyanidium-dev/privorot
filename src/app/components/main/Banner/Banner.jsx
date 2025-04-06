"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import BannerImgs from "./BannerImgs";
import Container from "@/utils/Container";
import CustomBtn from "../../common/CustomBtn";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="overflow-x-clip relative">
      <BannerImgs />
      <div className="absolute z-[3] top-[448px] w-full">
        <Container>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ scale: 0.8, delay: 0.7 })}
            className="mb-7 font-marianna text-[48px] text-center"
          >
            Забери своё
          </motion.h2>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ scale: 0.8, delay: 1.2 })}
            className="mb-12 font-forum text-[40px] xs:text-[48px] text-center uppercase"
          >
            Сила любви у тебя в руках
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ x: -100, delay: 1.8 })}
          >
            <Link href="/" className="flex w-full mb-7">
              <CustomBtn sale text="Открыть доступ к курсу" />
            </Link>
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ x: 100, delay: 2.4 })}
            className="font-forum text-center text-[20px] uppercase mb-[163px]"
          >
            Пошаговый ритуал, который может всё изменить
          </motion.p>
        </Container>
      </div>
    </section>
  );
}
