import { LogoWordMark } from "@/components/logo";
import { institutions, legals, menus } from "@/config/app";
import Link from "next/link"
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
            <ul className="mt-6">
              {institutions.map(({ name, href }, idx) => (
                <li key={idx}>
                  <a
                    href={href ? href : "#"}
                    target={href ? "_blank" : "_top"}
                    title={name}
                    className="hover:underline"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="font-bold">Tentang</div>
            <ul className="mt-6">
              {menus.map(({ title, href, external }, idx) => (
                <li key={idx}>
                  <Link href={href} title={title} target={external ? "_blank" : "_top"} className="hover:underline">
                  {title}
                  </Link>
                  </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="font-bold">Legal</div>
            <ul className="mt-6">
              {legals.map(({ title, href, external }, idx) => (
                <li key={idx}>
                  <Link href={href} title={title} target={external ? "_blank" : "_top"} className="hover:underline">
                  {title}
                  </Link>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-center justify-between text-center lg:flex-row lg:text-left">
          <p>
            Didukung dan ditenagai oleh{" "}
            <span>
              <a href="https://www.postren.id/" target="_blank">
                Postren
              </a>
            </span>
          </p>
          <p>
            Hak cipta &copy; {new Date().getFullYear()} Pondok Pesantren Nurul
            Jadid Sejati
          </p>
        </div>
      </div>
    </footer>
  );
}
