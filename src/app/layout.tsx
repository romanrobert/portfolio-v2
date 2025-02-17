import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/sidebar/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Roman Robert | Frontend Developer",
  description:
    "I'm a front-end developer from Cluj-Napoca, Romania. I build websites that work well on any device and are easy to use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <svg className="grain-svg">
        <filter id="noiseFilter">
          <feTurbulence type="turbulence" baseFrequency="0.65" />
        </filter>
      </svg>

      <body className={`${inter.variable}  bg-noise`}>
        <div className="wrapper">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
