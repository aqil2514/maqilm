import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Inter, Poppins, Young_Serif } from "next/font/google";
import { Toaster } from "@/components/molecules/toaster";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
import { notFound, redirect } from "next/navigation";
import { getMessages } from "next-intl/server";
import Footer from "@/components/organisms/footer";
import NavigationBar from "@/components/organisms/navigation";
import Navbar from "@/components/molecules/Navbar";

const siteUrl = "https://maqilm19.vercel.app/";
const siteName = "Muhamad Aqil Maulana";
const siteDescription =
  "Portofolio Muhamad Aqil Maulana, menampilkan proyek dan pengalaman kerja.";
const siteImage = "/images/og-image.jpg";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: siteImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [siteImage],
  },
  verification: {
    google: "AQdQ6iFFZcojBbTl9fIdqbzoAYZ5qNBbgdevebLXVRY",
  },
};

const inter = Inter({ subsets: ["latin"] });
const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--young_serif",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500"],
  subsets: ["latin"],
  variable: "--poppins",
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    redirect("/id");
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} ${poppins.variable} ${youngSerif.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {/* TODO : Sementara. Nanti pakek 1 ajah */}
          <NavigationBar />
          <Navbar />
          {children}
          <Toaster />
          <Footer />
          <GoogleAnalytics gaId="G-Z1L88CZ8W4" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
