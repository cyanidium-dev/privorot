import Script from "next/script";
import About from "../components/main/About/About";
import Banner from "../components/main/Banner/Banner";
import DiscountSteps from "../components/main/DiscountSteps/DiscountSteps";
import FirstTxtSection from "../components/main/FirstTxtSection/FirstTxtSection";
import Reviews from "../components/main/Reviews/Reviews";
import SuccessRate from "../components/main/SuccessRate/SuccessRate";
import TargeTAudience from "../components/main/TargetAudience/TargetAudience";
import VideoInstruction from "../components/main/VideoInstruction/VideoInstruction";
import { variantsData } from "@/utils/variantsData";

export default function Victoria() {
  const variant = variantsData.find((v) => v.id === "victoria");

  const {
    banner,
    firstbg,
    textColor,
    id,
    txtSection,
    about,
    successRate,
    target,
    videoInstruction,
    reviews,
    discountSteps,
  } = variant;

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '9539340379481969');
          fbq('track', 'PageView');
        `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=9539340379481969&ev=PageView&noscript=1"
        />
      </noscript>

      <div className={`min-h-screen text-${textColor} bg-dark`}>
        <div className={`${firstbg} w-full mx-auto h-auto`}>
          <Banner
            hero={banner.womanPhoto}
            womanImg={banner.womanImg}
            womanClass={banner.womanClass}
            roseBack={banner.roseBack}
            roseBgClass={banner.roseBgClass}
            bannerGradientClass={banner.bannerGradientClass}
            roseL={banner.roseL}
            roseR={banner.roseR}
            id={id}
            bannerTxt={banner.bannerTxt}
            accentTxt={banner.accentTxt}
            lastTxt={banner.lastTxt}
          />
          <FirstTxtSection
            img={txtSection.img}
            gradient={txtSection.gradient}
          />
          <About
            roseR={about.roseR}
            rosel={about.roseL}
            heart={about.heart}
            itemClass={about.itemClass}
          />
        </div>
        <SuccessRate
          roseR={successRate.roseR}
          gradient={successRate.gradient}
          gradientSecond={successRate.gradientSecond}
          card={successRate.card}
          ellipceImg={successRate.ellipceImg}
          id={id}
          woman={successRate.woman}
          borderClass={successRate.borderClass}
          accentBg={successRate.accentBg}
        />
        <TargeTAudience
          roseBack={target.roseBack}
          roseClass={target.roseClass}
          roseL={target.roseL}
          mainImg={target.mainImg}
          borderColor={target.borderColor}
        />
        <VideoInstruction
          roseL={videoInstruction.roseL}
          roseR={videoInstruction.roseR}
          bg={videoInstruction.bg}
          card={videoInstruction.card}
          gradient={videoInstruction.gradient}
          id={id}
        />
        <Reviews
          heart={reviews.heart}
          gradient={reviews.gradient}
          quotes={reviews.quotes}
          slideBg={reviews.slideBg}
          prev={reviews.prev}
          next={reviews.next}
        />
        <DiscountSteps
          woman={discountSteps.woman}
          bg={discountSteps.bg}
          radialGradient={discountSteps.radialGradient}
          roseBack={discountSteps.roseBack}
          rose={discountSteps.rose}
          roseL={discountSteps.roseL}
          gradient={discountSteps.gradient}
          id={id}
          borderColor={discountSteps.borderColor}
        />
      </div>
    </>
  );
}
