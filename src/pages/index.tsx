import CallToAction from "../components/cta/CallToAction";
import Navigation from "../components/navigation";
import Footer from "../components/footer/Footer";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#151934] px-4">
      <Navigation />
      <CallToAction />
      <Footer />
    </div>
  );
}
