import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileDetector from "@components/MobileDetector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dusunax's Portfolio",
  description: "Hello 안녕하세요✨",
  authors: { name: "Dusunax", url: "https://github.com/dusunax" },
  keywords: ["portfolio", "dusunax", "web developer", "front-end developer"],
  openGraph: {
    type: "website",
    url: "https://www.dusuna.site/",
    siteName: "Dusunax's Portfolio",
    title: "Dusunax's Portfolio",
    description: "Hello 안녕하세요✨",
    images: [
      {
        url: "https://www.dusuna.site/logo-full.png",
        width: 1920,
        height: 1080,
        alt: "Dusunax",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <MobileDetector />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
