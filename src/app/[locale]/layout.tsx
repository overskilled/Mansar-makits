import type { Metadata } from "next";
import "./globals.css";
import { Jost, Poppins } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import { I18nProviderClient } from "@/locales/client";

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

interface AdminLayoutProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default async function RootLayout({ params, children }: AdminLayoutProps) {

  const { locale } = await params;
  
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link rel="icon" type="image/png" sizes="192x192" href="/logo-mansar.png" />
        {/* <link rel="apple-touch-icon" href="/icon-192x192.png" /> */}
      </head>
      <body
        className={`${jost.className} ${poppins.className} antialiased w-full bg-[#ffffff]`}
      >
        <I18nProviderClient locale={locale}>
          <div className="relative w-full">
            <Navbar />
          </div>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
}