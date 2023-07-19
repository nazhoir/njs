import Image from "next/image";
import { institutions } from "@/data/list";

export function SectionInstitutions() {
	return (
		<div className="space-y-10 py-40">
			<h2 className="text-center text-7xl font-bold">Lembaga Pendidikan</h2>
			<div className="grid grid-cols-3 gap-10">
				{institutions.map(({ logo, name }, idx) => (
					<div className="group flex items-center space-x-4" key={idx}>
						<Image
							src={logo}
							alt={`Logo ${name}`}
							className="object-fit w-32 grayscale group-hover:grayscale-0"
							width={300}
							height={300}
						/>
						<h3 className="text-3xl font-bold ">{name}</h3>
					</div>
				))}
			</div>
		</div>
	);
}
