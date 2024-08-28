import Main from "../components/main";
import CallToAction from "../components/call-to-action";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Home(): JSX.Element {
  return (
    <Main>
      <Navigation />
      <CallToAction />
      <Footer />
    </Main>
  );
}
