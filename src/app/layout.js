import { Raleway } from "next/font/google";

import "./globals.css";
import { Providers } from "../../providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Твое спасение",
  description: "Сила любви у тебя в руках",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${raleway.className}`}>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
