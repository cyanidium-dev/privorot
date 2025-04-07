import About from "./components/main/About/About";
import Banner from "./components/main/Banner/Banner";
import FirstTxtSection from "./components/main/FirstTxtSection/FirstTxtSection";

export default function Home() {
  return (
    <div className="bgFirstAndSecondBlocks w-full mx-auto h-auto">
      <Banner />
      <FirstTxtSection />
      <About />
    </div>
  );
}
