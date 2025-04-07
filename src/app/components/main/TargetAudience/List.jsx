"use client";

import { itemVariants, listVariants } from "@/utils/animation";
import { motion } from "framer-motion";

const data = [
  `Если ты веришь в привороты —<br/>значит, у тебя уже есть проблема.`,
  `Если ты читаешь это — значит, ты уже<br/>поняла, что обычные методы не работают.`,
  `Если ты хочешь его вернуть — тогда<br/>не теряй время.`,
];

export default function List() {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={listVariants({ delayChildren: 0.8 })}
      className="flex flex-col gap-3 mt-[58px]"
    >
      {data.map((item, index) => (
        <motion.li
          variants={itemVariants}
          key={index}
          className="rounded-[4px] py-6 w-full h-full bg-dark-to-light  border border-borederColor"
        >
          <p
            className="text-center text-[12px] font-light leading-[1.1]"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
