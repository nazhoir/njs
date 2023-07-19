import Image from "next/image";

export function SectionTwou() {
	return (
		<div className="flex flex-col-reverse px-4 py-20 lg:flex-row lg:px-0 lg:py-40">
			<div className="relative mx-auto lg:mt-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
				<div className="mx-auto h-72 w-72 rounded-t-full bg-emerald-700 md:h-[40rem] md:w-[40rem]"></div>

				<Image
					src={"/banner-2.png"}
					alt={"Logo Pondok Pesantren Nurul Jadid Sejati"}
					className="object-fit absolute  bottom-0 w-[53rem]"
					width={3679}
					height={2967}
				/>
			</div>

			<div className="mb-16 lg:mb-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
				<div className="lg:pl-24">
					<h2 className="text-4xl font-bold md:text-7xl">
						<span className="text-emerald-700">Integrasi-Interkoneksi</span>{" "}
						dalam Berilmu
					</h2>
					<p className="mt-4 font-medium">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Architecto excepturi enim odio quas adipisci laboriosam
						consequuntur ipsam nemo doloremque quo, saepe vitae nam atque
						obcaecati fugiat. Vitae consequuntur ea eaque.
					</p>
				</div>
			</div>
		</div>
	);
}
