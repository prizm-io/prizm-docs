import GetStartedButton, { DASHBOARD_LINK } from './get-started-button';
import HeroImages from './hero-images';

export default function Hero() {
	return (
		<div className='w-full flex h-[946px] flex-col items-center pt-[68px]'>
			<div className='flex flex-col gap-[1.875rem] items-center font-inter max-w-[1224px]'>
				<h1 className='text-[4rem] leading-[72px] font-bold text-center text-white'>
					An End-to-End IoT Solution for Everyone.
				</h1>
				<div className='flex justify-center lg:px-[205.5px] '>
					<span className='text-[#8f9bb7] text-center text-lg'>
						PRIZM is an end-to-end IoT solution that provides Out-of-the-Box
						Hardware, Connectivity, Device Software, and Cloud Services to
						streamline IoT product development, requiring no technical expertise
						while ensuring Best-in-Class Security. With PRIZM, you can launch
						your IoT product and service in no time at the lowest possible cost,
						leading to your IoT journey to success.
					</span>
				</div>
				<GetStartedButton link={DASHBOARD_LINK}>Get Started</GetStartedButton>
			</div>
			<HeroImages />
		</div>
	);
}