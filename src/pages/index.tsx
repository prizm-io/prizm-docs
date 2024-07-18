import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';

export default function Home(): JSX.Element {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList className='flex bg-white items-center w-screen z-10 font-inter justify-between px-[32px] py-[14px] '>
					<NavigationMenu>
						<NavigationMenuItem>
							<NavigationMenuTrigger className='flex gap-[10px] items-center'>
								<img src='img/Prizm-Logo.svg' width={40} />
								<span className='font-bold text-[28px] text-[#5A5C87]'>
									PRIZM
								</span>
							</NavigationMenuTrigger>
						</NavigationMenuItem>
					</NavigationMenu>
					{/* <NavigationMenuItem className='flex gap-[75px] font-medium'>
						<div className='flex gap-4'>
							<NavigationMenuTrigger className=''>
								About Us
							</NavigationMenuTrigger>
							<NavigationMenuTrigger className=''>
								Products
							</NavigationMenuTrigger>
							<NavigationMenuTrigger className=''>
								Services
							</NavigationMenuTrigger>
							<NavigationMenuTrigger className=''>
								Contact
							</NavigationMenuTrigger>
						</div>
						<div className='flex gap-[16px]'>
							<NavigationMenuTrigger>LOG-IN</NavigationMenuTrigger>
							<NavigationMenuTrigger>SIGN UP</NavigationMenuTrigger>
						</div>
					</NavigationMenuItem> */}
				</NavigationMenuList>
			</NavigationMenu>
			<div className='relative h-[502px] lg:h-[screen]'>
				<div className="absolute inset-0 bg-[url('/static/img/background.jpg')] bg-cover bg-[left_calc(89%)_top_calc(0%)] lg:bg-center bg-no-repeat"></div>
				<div className='relative h-full lg:px-20 flex flex-col lg:flex-row justify-center items-center gap-[30px] lg:gap-[100px]'>
					<img
						src='/img/Prizm-Logo.svg'
						alt='Prizm Logo'
						className=' w-[160px] lg:w-[260px] '
					/>
					<div className='flex flex-col lg:w-[588px] gap-[10px] px-12 lg:px-0 text-center'>
						<h1 className='text-[#5A5C87] font-inter font-bold text-[28px] lg:text-7xl'>
							IoT Made Simple
						</h1>
						<span className='text-[#5A5C87] text-lg md:text-xl lg:text-2xl'>
							Design your dream app effortlessly to focus on your ideas rather
							than the technical details - no coding needed!
						</span>
					</div>
				</div>
				<div className='flex gap:0 lg:gap-[75px] pb-[27px] lg:pb-0 flex-col-reverse lg:flex-row justify-center items-center '>
					<div className='px-[30px] lg:pl-8 xl:pl-0 lg:w-[644px]'>
						<h1 className='font-inter font-medium text-[26px] text-center lg:text-start lg:text-[48px] mb-[8px]'>
							Developing is costly
						</h1>
						<span className='text-[16px]'>
							Development and creating proofs of concept (POCs) can be an
							expensive and time consuming process, requiring experienced
							hardware and software engineers. Fortunately with Prizm’s
							revolutionary no code design and easy to use hardware, you can
							elevate your business by saving costs and development time.
						</span>
					</div>
					<img className='w-[263px] lg:w-[486px]' src='/img/computer.jpg'></img>
				</div>

				<div className='flex gap:0 lg:gap-[75px] pb-[27px] lg:pb-0 flex-col lg:flex-row  justify-center items-center'>
					<img className='w-[263px] lg:w-[486px]' src='/img/clock.png'></img>
					<div className='px-[30px] lg:pr-8 xl:pr-0 lg:w-[644px]'>
						<h1 className='ont-inter font-medium text-[26px] text-center lg:text-start lg:text-[48px] mb-[8px]'>
							Solution that's easy to manage and use
						</h1>
						<span className='text-[16px]'>
							With our intuitive interface, you can create your own applications
							effortlessly. Prizm's revolutionary node module editor simplifies
							development, ensuring accessibility for everyone, regardless of
							their background.
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

/* <div className='bg-primary-background w-screen h-screen flex justify-center items-center'>
	<div className='flex flex-col gap-2'>
		<img src='img/Group.svg' width={180} className='animate-fade' />
		<img
			src='img/prizm.svg'
			width={180}
			className='opacity-0 animate-fade-delay'
		/>
		<span className='opacity-0 text-center animate-fade-delay-text text-white'>
			IoT Made Simple
		</span>
	</div>
</div>; */
