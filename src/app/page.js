import Banner from "./components/main/Banner/Banner";
import FirstTxtSection from "./components/main/FirstTxtSection/FirstTxtSection";

export default function Home() {
  return (
    <div className="bgFirstAndSecondBlocks w-full mx-auto h-auto">
      <Banner />
      <FirstTxtSection />
      <div className="w-full h-[600px]"></div>
    </div>
  );
}
