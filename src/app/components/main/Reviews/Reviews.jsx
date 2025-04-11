"use client";

import { motion } from "framer-motion";
import Container from "@/utils/Container";
import ReviewsImg from "./ReviewsImg";
import { fadeInAnimation } from "@/utils/animation";
import Slider from "./Slider";

export default function Reviews({
  heart,
  gradient,
  quotes,
  slideBg,
  prev,
  next,
  prevClass,
}) {
  return (
    <section
      id="reviews"
      className="relative z-[3] overflow-x-clip pt-[207px] pb-[55px]"
    >
      <ReviewsImg heart={heart} gradient={gradient} />
      <Container>
        <div className="flex justify-between mb-[88px] relative z-[4]">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ x: -100, delay: 1 })}
            className="font-forum text-[32px] uppercase"
          >
            Те, кто
            <br />
            познали
            <br />
            магию
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ scale: 1.4, delay: 1.6 })}
            className="font-marianna leading-[1.2] text-center text-[32px] mt-[53px]"
          >
            Готова
            <br />
            испытать силу?
          </motion.h3>
        </div>
      </Container>
      <Slider
        quotes={quotes}
        slideBg={slideBg}
        prev={prev}
        next={next}
        prevClass={prevClass}
      />
    </section>
  );
}
