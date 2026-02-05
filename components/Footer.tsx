'use client';

import { Shield, Instagram, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                                <Image
                                    src="/ggs.png"
                                    alt="Gülgeldi Sigorta Logo"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold">Gülgeldi Sigorta</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed max-w-md">
                            Güvenle geleceğe. 2009'dan beri kaliteli sigorta hizmetleri ile
                            müşterilerimizin yanındayız.Hayatınızı ve sevdiklerinizi korumak için buradayız.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/gulgeldi.sigorta/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold mb-6">Hızlı Erişim</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#hero" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-6 h-px bg-white transition-all duration-300" />
                                    Anasayfa
                                </a>
                            </li>
                            <li>
                                <a href="#sigortalar" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-6 h-px bg-white transition-all duration-300" />
                                    Sigortalarımız
                                </a>
                            </li>
                            <li>
                                <a href="#hakkimizda" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-6 h-px bg-white transition-all duration-300" />
                                    Hakkımızda
                                </a>
                            </li>
                            <li>
                                <a href="#iletisim" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group">
                                    <span className="w-0 group-hover:w-6 h-px bg-white transition-all duration-300" />
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Insurance Types */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold mb-6">Sigortalarımız</h4>
                        <ul className="space-y-3 text-white/70">
                            {['Sağlık Sigortası', 'Araç Sigortası', 'Konut Sigortası', 'Seyahat Sigortası', 'Hayat Sigortası', 'İşyeri Sigortası', 'Diğer'].map((item) => (
                                <li key={item} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-white/60 text-sm text-center md:text-left">
                            © {currentYear} Gülgeldi Sigorta. Tüm hakları saklıdır.
                        </p>
                        <p className="text-white/60 text-sm flex items-center gap-2">
                            Made with <Heart size={16} className="text-pink-400 fill-pink-400" /> by Abdulkerim Erdurun
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
