import type { Metadata } from "next";
import { Geist, Geist_Mono, Golos_Text } from "next/font/google";
import Header from "@/components/Header"
//import Footer from "@/components/Footer"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TechStore",
  description: "Интернет-магазин электроники и бытовой техники с AI-помощником",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${golosText.className} antialiased`}
      >
        <Header />
        {children}
        
        {/*<Footer />*/}
      </body>
    </html>
  );
}
