import "./globals.css";

import type { Metadata } from "next";
import { Epilogue } from "next/font/google";

import { Footer } from "@/components/ui/layout/footer";
import { Header } from "@/components/ui/layout/header";
import { appConfig } from "@/config/app";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  icons: appConfig.icon,
};

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
