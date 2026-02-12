import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Gülgeldi Sigorta | Güvenle Geleceğe",
    template: "%s | Gülgeldi Sigorta",
  },
  description: "Sağlık, araç, konut, seyahat, hayat ve işyeri sigortası için hızlı ve güvenilir hizmet. Profesyonel sigorta danışmanlığı.",
  keywords: "sigorta, gülgeldi sigorta, sağlık sigortası, araç sigortası, konut sigortası, kasko, trafik sigortası, van sigorta",
  openGraph: {
    title: "Gülgeldi Sigorta | Güvenle Geleceğe",
    description: "Profesyonel sigorta danışmanlığı ve rekabetçi fiyatlar. 2009'dan beri hizmetinizdeyiz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
