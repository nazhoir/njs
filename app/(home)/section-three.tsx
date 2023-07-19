import Image from "next/image";

export function SectionThree() {
	return (
		<div className="px-4 py-20 lg:flex lg:px-0 lg:py-40">
			<div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
				<div className="lg:pr-24">
					<h2 className="text-4xl font-bold md:text-7xl">
						<span className="text-emerald-700">Berbudi Luhur</span> dalam
						Perilaku
					</h2>
					<p className="mt-4 font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto excepturi enim odio quas adipisci laboriosam
						consequuntur ipsam nemo doloremque quo, saepe vitae nam atque
						obcaecati fugiat. Vitae consequuntur ea eaque.
					</p>
				</div>
			</div>

			<div className="relative mx-auto mt-32 lg:mt-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
				<div className="mx-auto h-72 w-72 rounded-t-full bg-emerald-700 md:h-[40rem] md:w-[40rem]"></div>

				<Image
					src={"/banner-3.png"}
					alt={"Logo Pondok Pesantren Nurul Jadid Sejati"}
					className="object-fit absolute -left-5 bottom-0 w-[56rem]"
					width={3679}
					height={2967}
				/>
			</div>
		</div>
	);
}
