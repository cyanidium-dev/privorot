"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import VideoInstructionImgs from "./VideoInstructionImgs";
import CustomBtn from "../../common/CustomBtn";
import Link from "next/link";

export default function VideoInstruction() {
  return (
    <section className="pb-6 relative z-[3] overflow-x-clip pt-[80px]">
      <VideoInstructionImgs />
      <Container>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ scale: 0.8, x: -100, delay: 2 })}
          className="mb-6 font-forum text-[32px] uppercase"
        >
          Сделай
          <br />
          приворот сама
          <br />— за 1 вечер
        </motion.h2>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ scale: 0.8, x: 100, delay: 2 })}
          className="text-[24px] font-marianna mb-[27px] text-end"
        >
          Забери его себе. Пока не
          <br />
          поздно!
        </motion.h3>
        <div className="relative z-[4] mt-[302px] ">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ scale: 1.3, delay: 1.5 })}
            className="max-w-[263px] mb-5 text-[24px] text-center font-forum uppercase mx-auto "
          >
            Видеоинструкция с пошаговым ритуалом, который работает.
          </motion.h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ x: -100, delay: 1.5 })}
          >
            <Link href="/" className="flex w-full mb-[30px]">
              <CustomBtn text="Забери его себе" />
            </Link>
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ x: 100, delay: 1.8 })}
            className="text-center text-[14px]"
          >
            После него он будет думать
            <br /> только о тебе..
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
