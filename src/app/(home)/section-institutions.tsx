import Image from "next/image";
import Marquee from "react-fast-marquee";

import { institutions } from "@/config/app";

export function SectionInstitutions() {
  return (
    <div className="px-4 py-20  lg:px-0 lg:py-40">
      <h2 className="text-center text-4xl font-bold md:text-7xl">
        Lembaga Pendidikan
      </h2>
      <Marquee pauseOnHover gradient gradientWidth={400} className="mt-10">
        {institutions.map(({ logo, name }, idx) => (
          <div className="group mr-20 flex items-center space-x-4" key={idx}>
            <Image
              src={logo}
              alt={`Logo ${name}`}
              className="object-fit w-20 grayscale group-hover:grayscale-0 md:w-32"
              width={300}
              height={300}
            />
            <h3 className="text-xl font-bold md:text-3xl ">{name}</h3>
          </div>
        ))}
      </Marquee>
      {/* <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
				
			</div> */}
    </div>
  );
}
