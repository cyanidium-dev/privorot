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

export default function Tamara() {
  const variant = variantsData.find((v) => v.id === "tamara");

  if (!variant) return null;

  const { banner, firstbg, textColor, id, txtSection } = variant;

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
          fbq('init', '1873153920117653');
          fbq('track', 'PageView');
        `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1873153920117653&ev=PageView&noscript=1"
        />
      </noscript>

      <div className={`min-h-screen text-${textColor} bg-[#170111]`}>
        <div className={`${firstbg} w-full mx-auto h-auto`}>
          <Banner
            hero={banner.womanPhoto}
            womanImg={banner.womanImg}
            womanClass={banner.womanClass}
            roseBack={banner.roseBack}
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
          <About />
        </div>
        <SuccessRate />
        <TargeTAudience />
        <VideoInstruction />
        <Reviews />
        <DiscountSteps />
      </div>
    </>
  );
}
