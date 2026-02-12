'use client';

import Link from 'next/link';
import { Instagram, Heart } from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/sigortalar', label: 'Sigortalarımız' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/teklif', label: 'Teklif Al' },
  { href: '/iletisim', label: 'İletişim' },
];

const insuranceList = [
  'Sağlık Sigortası',
  'Araç Sigortası',
  'Konut Sigortası',
  'Seyahat Sigortası',
  'Hayat Sigortası',
  'İşyeri Sigortası',
  'Deprem Sigortası',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/ggs.png"
                alt="Gülgeldi Sigorta"
                width={36}
                height={36}
                className="w-9 h-9 object-contain"
              />
              <div>
                <h3 className="text-base font-bold text-white">Gülgeldi Sigorta</h3>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider">Güvenle Geleceğe</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              2009&apos;dan beri kaliteli sigorta hizmetleri ile müşterilerimizin
              yanındayız.
            </p>
            <a
              href="https://www.instagram.com/gulgeldi.sigorta/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @gulgeldi.sigorta
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Sigortalarımız
            </h4>
            <ul className="space-y-3">
              {insuranceList.map((item) => (
                <li key={item}>
                  <Link href="/sigortalar" className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                Alipaşa, İpek Yolu Cd.<br />
                No:7 D:1, 65100<br />
                İpekyolu / Van
              </li>
              <li>
                <a href="tel:+905427656465" className="hover:text-white transition-colors">
                  +90 542 765 64 65
                </a>
              </li>
              <li>
                <a href="tel:+905537965112" className="hover:text-white transition-colors">
                  +90 553 796 51 12
                </a>
              </li>
              <li>
                <a href="mailto:info@gulgeldi.com" className="hover:text-white transition-colors">
                  info@gulgeldi.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Gülgeldi Sigorta. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by Abdulkerim Erdurun
          </p>
        </div>
      </div>
    </footer>
  );
}
