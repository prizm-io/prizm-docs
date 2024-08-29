import GetStartedButton, { DASHBOARD_LINK } from "./get-started-button";
import HeroContent from "./hero-content";
import HeroImages from "./hero-images";
import HeroRoot from "./hero-root";
import HeroTitle from "./hero-title";

export default function Hero() {
  return (
    <HeroRoot>
      <HeroContent>
        <HeroTitle>An End-to-End IoT Solution for Everyone.</HeroTitle>
        <div className="flex justify-center px-4 lg:px-[205.5px] ">
          <span className="text-[#8f9bb7] text-center text-lg">
            PRIZM is an end-to-end IoT solution that provides Out-of-the-Box
            Hardware, Connectivity, Device Software, and Cloud Services to
            streamline IoT product development, requiring no technical expertise
            while ensuring Best-in-Class Security. With PRIZM, you can launch
            your IoT product and service in no time at the lowest possible cost,
            leading to your IoT journey to success.
          </span>
        </div>
        <GetStartedButton link={DASHBOARD_LINK}>Get Started</GetStartedButton>
      </HeroContent>
      <HeroImages />
    </HeroRoot>
  );
}
