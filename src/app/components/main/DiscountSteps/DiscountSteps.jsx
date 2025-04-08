"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import DiscountStepsImgs from "./DiscountStepsImgs";
import CustomBtn from "../../common/CustomBtn";
import Link from "next/link";

export default function DiscountSteps() {
  return (
    <section
      id="discount-steps"
      className="relative overflow-x-clip pt-[207px] pb-[137px] z-[5]"
    >
      <DiscountStepsImgs />
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ scale: 0.7, delay: 0.6 })}
          className="mt-[70px] mb-[42px] font-forum text-[32px] uppercase text-center "
        >
          Ты хочешь, чтобы
          <br />
          он знал: ты-
          <br />
          единственная?
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: -100, delay: 1.2 })}
          className="rounded-[4px] h-[69px] w-full flex justify-center items-center bg-dark-to-light  border border-borederColor mb-5"
        >
          <p className="text-[48px] uppercase">20</p>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ x: 100, delay: 1.6 })}
          className="font-forum text-[]14px] uppercase text-center mb-7"
        >
          Осталось мест
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ scale: 1.3, delay: 2 })}
        >
          <Link href="/" className="flex w-full mb-7">
            <CustomBtn sale text="Забрать доступ" />
          </Link>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ y: 30, scale: 1.5, delay: 2.2 })}
          className="font-forum text-[]14px] uppercase text-center mb-7"
        >
          Успей познать истинную любовь!
        </motion.p>
      </Container>
    </section>
  );
}
