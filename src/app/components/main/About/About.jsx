"use client";

import { motion } from "framer-motion";
import Container from "@/utils/Container";
import { data } from "./data";
import { fadeInAnimation, itemVariants, listVariants } from "@/utils/animation";
import AboutImgs from "./AboutImgs";

export default function About({ heart, rosel, roseR, itemClass }) {
  return (
    <section
      id="about"
      className="mb-[70px] relative z-[3] overflow-x-clip pt-[94px]"
    >
      {/* Tailwind safelist hint:
       */}
      <AboutImgs roseR={roseR} roseL={rosel} heart={heart} />
      <Container>
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({ scale: 0.8, delay: 2 })}
          className="mb-8 font-forum text-[24px] text-center uppercase"
        >
          Что дает этот приворот?
        </motion.h3>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={listVariants({ delayChildren: 1.2 })}
          className="flex flex-col gap-3"
        >
          {data.map((item, index) => (
            <motion.li
              variants={itemVariants}
              key={index}
              className={`w-full rounded-[4px] py-6 h-full border-[1.5px] relative z-0 ${itemClass}`}
            >
              <p
                className="text-center text-[14px] font-light leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
