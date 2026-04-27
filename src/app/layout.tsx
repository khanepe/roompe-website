import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roompe.co.in"),
  title: "RoomPe | Premium Student Housing Management",
  description: "Western India's premier B2B student housing partner. We transform hostel infrastructure into seamless, tech-enabled experiences for universities and institutions across Gujarat.",
  keywords: ["student housing", "hostel management", "B2B proptech", "Gujarat", "RoomPe", "campus living"],
  openGraph: {
    title: "RoomPe | Premium Student Housing Management",
    description: "Western India's premier B2B student housing partner for universities and institutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased bg-white text-[#12323B]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}