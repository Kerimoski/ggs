import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Gülgeldi Sigorta - Güvenle Geleceğe",
  description: "Sağlık, araç, konut, seyahat, hayat ve işyeri sigortası için hızlı ve güvenilir hizmet. WhatsApp'tan anında teklif alın.",
  keywords: "sigorta, gülgeldi sigorta, sağlık sigortası, araç sigortası, konut sigortası, kasko, trafik sigortası",
  openGraph: {
    title: "Gülgeldi Sigorta - Güvenle Geleceğe",
    description: "Profesyonel sigorta danışmanlığı ve rekabetçi fiyatlar",
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
