"use client";
import Container from "@/utils/Container";
import { variantsData } from "@/utils/variantsData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const currentPage = pathname === "/" ? "" : pathname.replace("/", "");

  const homePath = currentPage ? `/${currentPage}` : "/";

  const currentVariant =
    variantsData.find((variant) => variant.url === pathname) || "victoria";
  const textColor = currentVariant ? currentVariant.textColor : "txtColor";
  const bgColor = currentVariant ? currentVariant.bgColor : "bgColor";
  const heart = currentVariant
    ? currentVariant.footerHeart
    : "/icons/heart-footer.svg";

  return (
    <footer
      className={`max-w-[500px] mx-auto overflow-hidden pt-[113px] pb-11 relative text-${textColor} bg-${bgColor}`}
    >
      <div className="absolute right-0 top-0 w-[51%]">
        <Image
          src={heart}
          alt="heart icon"
          width="140"
          height="200"
          className="w-full h-auto pointer-events-none"
        />
      </div>
      <Container>
        <Link
          href={homePath}
          className="font-forum text-[20px] uppercase mb-[42px] flex"
        >
          Твое спасение
        </Link>
        <p className="font-montserrat text-[16px] leading-[1.2] tracking-[0.5px] mb-[18px]">
          © 2025 Твое спасение
        </p>
        <p className="font-montserrat text-[16px] leading-[1.2] tracking-[0.5px]">
          Сайт разработан{" "}
          <Link
            href="https://www.cyanidium.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-[1]"
          >
            cyanidium.dev
          </Link>
        </p>
      </Container>
    </footer>
  );
}
