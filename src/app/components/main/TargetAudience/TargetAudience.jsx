"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import TargetAudienceImgs from "./TargetAudienceImgs";
import List from "./List";

export default function TargeTAudience({
  mainImg,
  roseBack,
  roseL,
  roseClass,
  borderColor,
}) {
  return (
    <section
      id="target-audience"
      className="relative overflow-x-clip pb-[134px]"
    >
      <TargetAudienceImgs
        mainImg={mainImg}
        roseBack={roseBack}
        roseL={roseL}
        roseClass={roseClass}
      />
      <Container>
        <div className="relative z-[3] mt-[-106px] ">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ scale: 0.8, x: -100, delay: 0.8 })}
            className="text-[32px] uppercase font-forum w-[78.7%] "
          >
            Научись делать приворот
            <br /> сама
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInAnimation({ scale: 0.8, x: 100, delay: 0.8 })}
            className="text-[24px] font-marianna absolute top-[51px] right-[-9px]"
          >
            Плати,
            <br />
            когда он сам напишет
          </motion.h3>
          <List borderColor={borderColor} />
        </div>
      </Container>
    </section>
  );
}
