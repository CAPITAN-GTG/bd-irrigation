import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { createPageMetadata, DEFAULT_DESCRIPTION } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  description: DEFAULT_DESCRIPTION,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <LenisProvider>
          <ToastProvider />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
