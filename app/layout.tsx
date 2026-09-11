import type { Metadata } from "next";
import { Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/components/language-provider";
import { site } from "@/content/site";
import { dictionary } from "@/content/dictionary";

// Archivo carries the body, Archivo Black the display headlines, and Plex Mono
// the eyebrows/metadata — the three roles that define the layout's voice.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marceloaugustofries.vercel.app"),
  title: `${site.name} — ${dictionary.en.hero.role}`,
  description: dictionary.en.hero.tagline,
  openGraph: {
    title: `${site.name} — ${dictionary.en.hero.role}`,
    description: dictionary.en.hero.tagline,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${dictionary.en.hero.role}`,
    description: dictionary.en.hero.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
