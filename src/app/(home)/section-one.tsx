import Image from "next/image";

export function SectionOne() {
  return (
    <div className="px-4 py-20 lg:flex lg:px-0 lg:py-40">
      <div className="lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="lg:pr-24">
          <h2 className="text-4xl font-bold md:text-7xl">
            Mewujudkan Generasi yang{" "}
            <span className="text-emerald-700">Moderat dalam Beragama</span>
          </h2>
          <p className="mt-4 font-medium">
            Misi kami adalah menciptakan generasi muda yang toleran dan inklusif
            dalam beragama. Akses edukasi agama yang inovatif dan dipandu oleh
            pakar agama untuk mewujudkan dunia yang lebih harmonis.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-16 lg:mt-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="mx-auto h-72 w-72 rounded-t-full bg-emerald-700 md:h-[40rem] md:w-[40rem]"></div>

        <Image
          src={
            "https://res.cloudinary.com/ddt4zhjm5/image/upload/c_fit,h_900/v1690012543/PP.%20NURUL%20JADID%20SEJATI/banner-1_x1llr4.png"
          }
          alt={"Logo Pondok Pesantren Nurul Jadid Sejati"}
          className="object-fit absolute -left-5 bottom-0 w-[56rem]"
          width={3679}
          height={2967}
        />
      </div>
    </div>
  );
}
