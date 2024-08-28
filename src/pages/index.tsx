import Navigation from '../components/navigation';
import Hero from '../components/hero/hero';

export default function Home(): JSX.Element {
	return (
		<div className='min-h-screen bg-[#151934] px-4'>
			<Navigation />
			<Hero />
		</div>
	);
}
