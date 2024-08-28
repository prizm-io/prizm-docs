import Main from '../components/main';
import CallToAction from '../components/call-to-action';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Benefits from '../components/benefits';
import Features from '../components/features';
import Hero from '../components/hero';

export default function Home(): JSX.Element {
	return (
		<Main>
			<Navigation />
			<Hero />
			<Features />
			<Benefits />
			<CallToAction />
			<Footer />
		</Main>
	);
}
