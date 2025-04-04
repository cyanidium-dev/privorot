import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Cyanidium Dev. Template",
  description: "NextJS NextUI template",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
