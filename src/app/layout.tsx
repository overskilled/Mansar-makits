import type { Metadata } from "next";
import "./globals.css";
import { Jost, Poppins } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});


export const metadata: Metadata = {
  title: "MANSAR-MAKITS",
  description: "Your investement as a service platform",
  icons: {
    icon: "/logo-mansar.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" type="image/png" sizes="192x192" href="/logo-mansar.png" />
        {/* <link rel="apple-touch-icon" href="/icon-192x192.png" /> */}
      </head>
      <body
        className={`${jost.className} ${poppins.className} antialiased w-full bg-gray-50`}
      >
        {/* <Navbar1 /> */}
        <div className="relative w-full">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
