import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileDetector from "../components/MobileDetector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dusunax's Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MobileDetector />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
