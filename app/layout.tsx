import "./globals.css";

import type { Metadata } from "next";
import { Epilogue } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
	title: "Pondok Pesantren Nurul Jadid Sejati",
	description: "Pondok Pesantren Nurul Jadid Sejati",
};

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={epilogue.className + " md:text-2xl"}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
