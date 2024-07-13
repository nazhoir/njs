import { AppConfig, AppLink, Institution } from "@/types/app";

const appConfig: AppConfig = {
  name: "Pondok Pesantren Nurul Jadid Sejati",
  description:
    "Selamat datang di website Pondok Pesatren Nurul Jadid Sejati! Kami berdedikasi untuk mewujudkan generasi yang moderat dalam beragama, mengutamakan integrasi-interkoneksi dalam berilmu, dan mengajarkan berbudi luhur dalam perilaku. Melalui pendekatan holistik, kami mengintegrasikan nilai-nilai keagamaan dengan ilmu pengetahuan, menciptakan lingkungan belajar yang inklusif dan inspiratif. Dengan fokus pada pemahaman, toleransi, dan karakter unggul, kami membimbing siswa untuk menjadi pribadi yang berbudi pekerti luhur, siap menghadapi tantangan dunia dengan penuh kebijaksanaan, dan menjadi pemimpin masa depan yang mampu menjembatani perbedaan untuk menciptakan dunia yang lebih harmonis. Selamat mengeksplorasi dan bergabunglah dengan kami dalam perjalanan pendidikan yang berarti ini!",
  logo: "https://res.cloudinary.com/ddt4zhjm5/image/upload/v1690012501/PP.%20NURUL%20JADID%20SEJATI/logo-njs_zclam1.png",
  icon: "https://res.cloudinary.com/ddt4zhjm5/image/upload/c_fit,w_50/v1690014795/PP.%20NURUL%20JADID%20SEJATI/njs_icons_dxeypz.png",
  address:
    "Jl. Kendal-Geneng, Pencol 1, Randusongo, Kecamatan Gerih, Kabupaten Ngawi, Jawa Timur 63271",
};

const menus: AppLink[] = [
  {
    title: "Profil",
    href: "/profile",
  },
  {
    title: "Visi",
    href: "/visi",
  },
  {
    title: "Misi",
    href: "/misi",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Pengumuman",
    href: "/announcements",
  },
  {
    title: "Kontak",
    href: "/contact",
  },
  {
    title: "Pendaftaran",
    href: "https://psb.njs.or.id/",
    external: true,
  },
];

const navMenus: AppLink[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Pengumuman",
    href: "/announcements",
  },
  {
    title: "Kontak",
    href: "/contact",
  },
];

const legals: AppLink[] = [
  {
    title: "Kebijakan Privasi",
    href: "/privacy",
  },
  {
    title: "Kebijakan Pengguna",
    href: "/tos",
  },
  {
    title: "Penafian",
    href: "/penafian",
  },
];

const institutions: Institution[] = [
  {
    name: "MA Nurul Jadid Sejati",
    logo: "/manjs.png",
    href:"https://manjs.sch.id/"
  },
  {
    name: "MDT Nurul Jadid Sejati",
    logo: "/manjs.png",
  },
  {
    name: "PAUD Nurul Jadid",
    logo: "/manjs.png",
  },
  {
    name: "TPA Nurul Jadid Sejati",
    logo: "/manjs.png",
  },
];

export { appConfig, menus, navMenus, legals, institutions };
