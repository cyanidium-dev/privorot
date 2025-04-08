import About from "./components/main/About/About";
import Banner from "./components/main/Banner/Banner";
import DiscountSteps from "./components/main/DiscountSteps/DiscountSteps";
import FirstTxtSection from "./components/main/FirstTxtSection/FirstTxtSection";
import Reviews from "./components/main/Reviews/Reviews";
import SuccessRate from "./components/main/SuccessRate/SuccessRate";
import TargeTAudience from "./components/main/TargetAudience/TargetAudience";
import VideoInstruction from "./components/main/VideoInstruction/VideoInstruction";

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
      <VideoInstruction />
      <Reviews />
      <DiscountSteps />
    </>
  );
}
