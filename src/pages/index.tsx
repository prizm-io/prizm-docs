import Main from "../components/main";
import CallToAction from "../components/call-to-action";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Benefits from "../components/benefits";
import Features from "../components/features";
import HeroRoot from "../components/hero/hero-root";
import HeroContent from "../components/hero/hero-content";
import HeroTitle from "../components/hero/hero-title";
import GetStartedButton, {
  DASHBOARD_LINK,
} from "../components/hero/get-started-button";
import HeroImages from "../components/hero/hero-images";
import Partners from "../components/partners";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <HeroRoot>
        <HeroContent>
          <HeroTitle>An End-to-End IoT Solution for Everyone.</HeroTitle>
          <div className="flex justify-center px-4 lg:px-[205.5px] ">
            <span className="text-[#8f9bb7] text-center text-lg">
              PRIZM is an end-to-end IoT solution that provides Out-of-the-Box
              Hardware, Connectivity, Device Software, and Cloud Services to
              streamline IoT product development, requiring no technical
              expertise while ensuring Best-in-Class Security. With PRIZM, you
              can launch your IoT product and service in no time at the lowest
              possible cost, leading to your IoT journey to success.
            </span>
          </div>
          <GetStartedButton link={DASHBOARD_LINK}>Get Started</GetStartedButton>
        </HeroContent>
        <HeroImages />
      </HeroRoot>
      <Partners />
      <Features />
      <Benefits />
      <CallToAction />
      <Footer />
    </Main>
  );
}
