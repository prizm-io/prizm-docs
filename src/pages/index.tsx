import Main from "../components/main";
import CallToAction from "../components/call-to-action";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Benefits from "../components/benefits";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <Benefits />
      <CallToAction />
      <Footer />
    </Main>
  );
}
