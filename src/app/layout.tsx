import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import ExcludeWrapper from "@/components/ExcludeWrapper/ExcludeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LA SUITE by Night Fall",
  description: "Experiencia exclusiva en un solo lugar",
  icons: {
    icon: "/images/logoblancosinf.png", // coloca tu favicon en public/
    shortcut: "/images/logoblancosinf.png", // opcional, para navegadores antiguos
    apple: "/images/logoblancosinf.png",   // opcional, para iOS
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ExcludeWrapper>
        <Navbar />
        </ExcludeWrapper>
      <main>{children}</main>
      <ExcludeWrapper>
        <Footer/>
        </ExcludeWrapper>
      </body>
    </html>
  );
}
