import Image from "next/image";
import { navMenus } from "@/data/list";

export function Header() {
	return (
		<header className="w-full bg-white">
			<div className="container mx-auto flex items-center justify-between px-4 py-6">
				<Image
					src={"/logo-njs.png"}
					alt={"Logo Pondok Pesantren Nurul Jadid Sejati"}
					className="object-fit w-40 lg:w-96"
					width={2000}
					height={430}
				/>

				<div className="flex items-center space-x-9 font-semibold">
					<ul className="hidden items-center space-x-10 lg:flex">
						{navMenus.map(({ name }, idx) => (
							<li key={idx}>{name}</li>
						))}
					</ul>
					<button className="rounded-full bg-emerald-700 px-12 py-2 text-emerald-50">
						Daftar
					</button>
				</div>
			</div>
		</header>
	);
}
