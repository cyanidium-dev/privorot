"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import DiscountStepsImgs from "./DiscountStepsImgs";
import CustomBtn from "../../common/CustomBtn";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function DiscountSteps({
  bg,
  roseBack,
  radialGradient,
  gradient,
  woman,
  rose,
  roseL,
  id,
  borderColor,
}) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [placesLeft, setPlacesLeft] = useState(7);

  useEffect(() => {
    const saved = localStorage.getItem("discount-steps-count");
    if (saved) setPlacesLeft(Number(saved));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let timeout1, timeout2;

    const current = localStorage.getItem("discount-steps-count");
    let count = current ? Number(current) : 7;
    if (count > 1) {
      timeout1 = setTimeout(() => {
        count = Math.max(1, count - 1);
        setPlacesLeft(count);
        localStorage.setItem("discount-steps-count", count.toString());
      }, 6000); // через 6 секунд
    }
    if (count > 2) {
      timeout2 = setTimeout(() => {
        count = Math.max(1, count - 1);
        setPlacesLeft(count);
        localStorage.setItem("discount-steps-count", count.toString());
      }, 3 * 60 * 1000); // через 3 хвилини
    }
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      id="discount-steps"
      className="relative overflow-x-clip pt-[207px] pb-[137px] z-[5]"
    >
      <DiscountStepsImgs
        bg={bg}
        rose={rose}
        roseBack={roseBack}
        radialGradient={radialGradient}
        roseL={roseL}
        gradient={gradient}
        woman={woman}
      />
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
          className={`rounded-[4px] h-[69px] w-full flex justify-center items-center bg-dark-to-light  border ${borderColor} mb-5`}
        >
          <p className="text-[48px] uppercase">{placesLeft}</p>
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
            <CustomBtn variant={id} sale text="Забрать доступ" />
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
