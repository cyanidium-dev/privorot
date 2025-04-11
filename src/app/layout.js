import localFont from "next/font/local";
import { Forum, Montserrat } from "next/font/google";

import "./globals.css";
import { Providers } from "../../providers";
import Header from "./components/modules/Header/Header";
import Footer from "./components/modules/Footer/Footer";

export const metadata = {
  title: "Твое спасение",
  description: "Сила любви у тебя в руках",
  icons: {
    icon: "/icons/favicon.ico",
  },
  keywords:
    "приворот, ритуал, возвращение любимого, возвращение любимой, обряд",
  openGraph: {
    title: "Твое спасение",
    description: "Сила любви у тебя в руках",
    // url: "https://",
    images: [
      {
        url: "/images/og.png", //перед зображенням треба додати прод юрл,як і в url та metadataBase, інакше зображення опенграфу може не відображатись
        width: 800,
        height: 600,
        alt: "Твое спасение",
      },
    ],
    locale: "ru_Ru",
    type: "website",
  },
};

const forum = Forum({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const marianna = localFont({
  src: [
    {
      path: "../../public/fonts/Marianna.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Marianna.woff",
      weight: "400",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${forum.className} ${montserrat.className} ${marianna.className}`}
    >
      <body className="bg-dark leading-[1] font-montserrat ">
        <Providers>
          <Header />
          <main className="max-w-[500px] mx-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
