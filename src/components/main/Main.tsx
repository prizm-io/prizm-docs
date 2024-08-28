import type { ReactNode } from 'react';

export default function Main(props: { children?: ReactNode }) {
	return (
		<main
			className='min-h-screen bg-[#060B27] flex flex-col items-center justify-start w-full'
			style={{
				backgroundImage: 'url(/img/hero-bg.png)',
				backgroundSize: 'contain', // Ensures the background image covers the entire area
				backgroundRepeat: 'no-repeat', // Prevents the image from repeating
				backgroundPosition: 'top', // Centers the image within the div
			}}
		>
			{props.children}
		</main>
	);
}
