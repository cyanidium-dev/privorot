import { routes } from "@/utils/routes";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import { useEffect } from "react";

export default function BurgerMenu({ setIsMenuOpen, isMenuOpen }) {
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClick();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, handleKeyDown]);

  const overlayVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsMenuOpen(false)}>
      {isMenuOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full h-screen absolute top-0  bg-darkRed overflow-auto z-20"
        >
          <div className="dark-to-light ">
            <div className="max-w-[360px] px-[25px] w-full flex justify-between items-center pt-5 pb-[104px] mx-auto">
              {/* Брендинг */}
              <Link href="/" className="font-forum text-[16px] uppercase">
                Твое спасение
              </Link>

              <button
                onClick={handleClick}
                className="p-0 bg-transparent border-none"
              >
                <Image
                  src="/icons/close.svg"
                  alt="close icon"
                  width={32}
                  height={32}
                />
              </button>
            </div>

            <div className="flex flex-col gap-[26px] h-full justify-between max-w-[360px] mx-auto">
              <ul className=" w-full h-full px-[25px] flex flex-col gap-[30px]">
                {routes.map((route) => (
                  <li key={route.path} className="w-full p-0">
                    <Link
                      onClick={handleClick}
                      className="w-full text-[16px] font-montserrat txt-gradient"
                      href={route.path}
                      size="lg"
                    >
                      {route.name}
                    </Link>
                    <div className="h-[1px] w-full bg-light-gradient mt-[18px]"></div>
                  </li>
                ))}
              </ul>
              <div className="">
                <Image
                  src="/icons/heart.svg"
                  alt="heart"
                  width="242"
                  height="341"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
