import About from "./components/main/About/About";
import Banner from "./components/main/Banner/Banner";
import FirstTxtSection from "./components/main/FirstTxtSection/FirstTxtSection";
import SuccessRate from "./components/main/SuccessRate/SuccessRate";
import TargeTAudience from "./components/main/TargetAudience/TargetAudience";

export default function Home() {
  return (
    <>
      <div className="bgFirstAndSecondBlocks w-full mx-auto h-auto">
        <Banner />
        <FirstTxtSection />
        <About />
      </div>
      <SuccessRate />
      <TargeTAudience />
    </>
  );
}
