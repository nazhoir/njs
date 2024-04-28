import { LogoWordMark } from "@/components/logo";
import { institutions, legals, menus } from "@/config/app";

export function Footer() {
  return (
    <footer className="rounded-t-[3rem] bg-emerald-700 text-emerald-100 lg:rounded-t-[5rem]">
      <div className="container mx-auto px-6 pb-20 pt-20 lg:pt-36">
        <div className="max-w-3xl">
          <LogoWordMark />
          <p>
            Let&apos;s reach academic achievements, foreign languange skills and
            classic book reading ability
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-2 lg:col-span-3">
            Jl. Kendal-Geneng, Pencol 1, Randusongo, Kecamatan Gerih, Kabupaten
            Ngawi, Jawa Timur 63271
          </div>

          <div className="col-span-2 lg:col-span-4">
            <div className="font-bold">Lembaga Pendidikan</div>
            <ol className="mt-6 list-disc pl-4 lg:pl-8">
              {institutions.map(({ name }, idx) => (
                <li key={idx}>{name}</li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-2">
            <div className="font-bold">Tentang</div>
            <ol className="mt-6 list-disc pl-8">
              {menus.map(({ title }, idx) => (
                <li key={idx}>{title}</li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-3">
            <div className="font-bold">Legal</div>
            <ol className="mt-6 list-disc pl-8">
              {legals.map(({ title }, idx) => (
                <li key={idx}>{title}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
          <p>Didukung dan ditenagai oleh Diskresi</p>
          <p>Hak cipta &copy; 2023 Pondok Pesantren Nurul Jadid Sejati</p>
        </div>
      </div>
    </footer>
  );
}
