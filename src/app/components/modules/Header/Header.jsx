"use client";

import React, { useEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRoutesFor } from "@/utils/routes";
import { variantsData } from "@/utils/variantsData";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();
  const currentPage = pathname === "/" ? "" : pathname.replace("/", "");

  const homePath = currentPage ? `/${currentPage}` : "/";
  const routes = getRoutesFor(currentPage);

  const currentVariant =
    variantsData.find((variant) => variant.url === pathname) || "victoria";
  const textColor = currentVariant ? currentVariant.textColor : "txtColor";

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 60) {
        setScrolledDown(false);
      } else if (scrollY > lastScrollY) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`mx-auto bg-transparent w-full fixed t-0 z-10 transition-transform-colors-opacity duration-300 backdrop-blur-sm ${
        scrolledDown ? "-translate-y-1 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-[360px] px-[25px] w-full flex justify-between items-center py-5 mx-auto">
        {/* Брендинг */}
        <Link
          href={homePath}
          className={`font-forum text-[16px] uppercase text-${textColor}`}
        >
          Твое спасение
        </Link>

        {/* Іконка меню */}
        <button onClick={toggleMenu} className="p-0 bg-transparent border-none">
          <Image
            src={currentVariant?.menu || "/icons/menu.svg"}
            alt="menu"
            width={32}
            height={32}
          />
        </button>
      </div>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        routes={routes}
        homePath={homePath}
        closeSvg={currentVariant?.close || "/icons/close.svg"}
        textColor={textColor}
        menuGradient={currentVariant.menuGradient}
        heart={currentVariant.menuHeart}
        txtGradient={currentVariant.txtGradient}
        burgerBg={currentVariant.burgerBg}
        lightGradient={currentVariant.lightGradient}
      />
    </header>
  );
}
