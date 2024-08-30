import Main from "../components/main";
import CallToAction from "../components/call-to-action";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import HeroRoot from "../components/hero/hero-root";
import HeroContent from "../components/hero/hero-content";
import HeroTitle from "../components/hero/hero-title";
import Content from "../components/content";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <HeroRoot className="h-[40vh]">
        <HeroContent className="h-full w-full justify-center">
          <HeroTitle>Our Solution</HeroTitle>
        </HeroContent>
      </HeroRoot>
      <Content />
      <CallToAction />
      <Footer />
    </Main>
  );
}
