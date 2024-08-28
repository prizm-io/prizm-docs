export default function DashboardButton(props: {
	link?: string;
	children?: React.ReactNode;
}) {
	return (
		<a
			href={props.link ?? '#'}
			className='px-[25px] py-[15px] bg-[#7d64ff] rounded-[36px] justify-center items-center gap-2.5 flex hover:bg-[#7663D6] transition-colors hover:no-underline'
		>
			<div className="text-white text-base font-medium font-['Inter'] leading-none">
				{props.children}
			</div>
		</a>
	);
}
