import Image from "next/image";
import Link from "next/link";

import { appConfig, navMenus } from "@/config/app";

import { NavSidebar } from "./nav-sidebar";

export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Image
          src={appConfig.logo}
          alt={appConfig.name}
          className="object-fit w-40 lg:w-96"
          width={2000}
          height={430}
        />

        <div className="flex items-center space-x-9 font-semibold">
          <ul className="hidden items-center space-x-10 lg:flex">
            {navMenus.map(({ title, href }, idx) => (
              <li key={idx}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
          <button className="rounded-full bg-emerald-700 px-6 py-2 text-emerald-50 lg:px-12">
            Daftar
          </button>
        </div>
        <NavSidebar />
      </div>
    </header>
  );
}