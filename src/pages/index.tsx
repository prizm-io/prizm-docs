import CallToAction from "../components/cta/CallToAction";
import Main from "../components/main";
import Navigation from "../components/navigation";
import Footer from "../components/footer/Footer";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <CallToAction />
      <Footer />
    </Main>
  );
}
