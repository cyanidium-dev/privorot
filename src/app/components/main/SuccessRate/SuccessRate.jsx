"use client";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animation";
import Container from "@/utils/Container";
import SuccessRateImgs from "./SuccesRateImgs";
import TitleBlock from "./TitleBlock";
import FirstLine from "./FirstLine";
import SecondLine from "./SecondLine";
import CustomBtn from "../../common/CustomBtn";
import Link from "next/link";

export default function SuccessRate({
  gradient,
  gradientSecond,
  ellipceImg,
  card,
  roseR,
  id,
  woman,
  borderClass,
  accentBg,
}) {
  return (
    <section
      className="pt-20 pb-[141px] relative overflow-x-clip"
      id="success-rate"
    >
      <SuccessRateImgs
        gradient={gradient}
        gradientSecond={gradientSecond}
        ellipceImg={ellipceImg}
        card={card}
        roseR={roseR}
      />
      <Container>
        <TitleBlock />
        <FirstLine
          woman={woman}
          borderClass={borderClass}
          accentBg={accentBg}
        />
        <SecondLine borderClass={borderClass} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInAnimation({
            scale: 0.8,

            delay: 1.1,
          })}
        >
          <Link href="/" className="flex w-full">
            <CustomBtn text="Призови силу" variant={id} />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
