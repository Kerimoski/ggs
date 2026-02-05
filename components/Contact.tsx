'use client';

import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
    const whatsappNumber = '905427656465';

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent('Merhaba! Gülgeldi Sigorta hakkında bilgi almak istiyorum.');
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    };

    return (
        <section id="iletisim" className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        İletişim
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Size nasıl yardımcı olabiliriz? Bize ulaşın, hemen dönüş yapalım.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                        <CardContent className="p-8 text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <MapPin size={28} className="text-white" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">Adres</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Alipaşa, İpek Yolu Cd.<br />No:7 D:1<br />65100 İpekyolu/Van
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                        <CardContent className="p-8 text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Phone size={28} className="text-white" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">Telefon</h3>
                            <div className="text-gray-600 text-sm space-y-1">
                                <a href="tel:+905427656465" className="hover:text-purple-600 transition font-medium block">
                                    +90 542 765 64 65
                                </a>
                                <a href="tel:+905537965112" className="hover:text-purple-600 transition font-medium block">
                                    +90 553 796 51 12
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                        <CardContent className="p-8 text-center space-y-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <Mail size={28} className="text-white" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-900">E-posta</h3>
                            <p className="text-gray-600 text-sm">
                                <a href="mailto:info@gulgeldi.com" className="hover:text-purple-600 transition font-medium">
                                    info@gulgeldi.com
                                </a>
                            </p>
                        </CardContent>
                    </Card>

                    <Card
                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg bg-gradient-to-br from-green-500 to-emerald-600"
                        onClick={handleWhatsAppClick}
                    >
                        <CardContent className="p-8 text-center space-y-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle size={28} className="text-white" />
                            </div>
                            <h3 className="font-bold text-lg text-white">WhatsApp</h3>
                            <p className="text-white/90 text-sm font-medium">
                                Hemen Mesaj Gönder
                            </p>
                        </CardContent>
                    </Card>
                </div>

                <Card className="border-0 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.9951636890576!2d43.38014831204395!3d38.49458017136794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a87b5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2zQWxpcGHFn2EsIMSwcGVrIFlvbHUgQ2QuIG5vOjcgRDoxLCA2NTEwMCDEsHBla3lvbHUvVmFu!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str&q=Alipaşa+İpek+Yolu+Caddesi+No:7+D:1+İpekyolu+Van"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Gülgeldi Sigorta Ofis Konumu"
                            className="w-full"
                        />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
