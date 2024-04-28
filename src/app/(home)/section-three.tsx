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
            Kami berkomitmen membentuk generasi unggul dengan nilai-nilai moral
            yang kuat, seperti integritas, empati, dan kerjasama. Dengan
            lingkungan belajar yang peduli dan inspiratif, kami membimbing siswa
            untuk menjadi pribadi yang bertanggung jawab, berempati, dan siap
            menghadapi tantangan dunia dengan kepribadian yang mulia.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-32 lg:mt-0 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="mx-auto h-72 w-72 rounded-t-full bg-emerald-700 md:h-[40rem] md:w-[40rem]"></div>

        <Image
          src={
            "https://res.cloudinary.com/ddt4zhjm5/image/upload/c_fit,h_900/v1690012533/PP.%20NURUL%20JADID%20SEJATI/banner-3_bprizz.png"
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
