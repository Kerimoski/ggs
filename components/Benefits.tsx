'use client';

import { CheckCircle2, Clock, Award, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
    {
        icon: Clock,
        title: 'Hızlı İşlem',
        description: 'Teklif almanız sadece birkaç dakika. Hemen poliçenizi oluşturun.',
        stat: '5 Dakika',
    },
    {
        icon: Award,
        title: 'Uzman Kadro',
        description: 'Tecrübeli ekibimiz ile en doğru sigorta çözümlerini sunuyoruz.',
        stat: '3+ Yıl',
    },
    {
        icon: CheckCircle2,
        title: 'Güvenilir Hizmet',
        description: 'Mutlu müşterilerimiz. Şeffaf ve dürüst hizmet anlayışı.',
        stat: '500+',
    },
    {
        icon: Headphones,
        title: '7/24 Destek',
        description: 'Her zaman yanınızdayız. Telefon ve WhatsApp ile anında destek.',
        stat: '7/24',
    },
];

export default function Benefits() {
    return (
        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center text-white mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-shadow">
                        Neden Gülgeldi Sigorta?
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Müşteri memnuniyeti odaklı hizmet anlayışımız ile fark yaratıyoruz
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <Card
                            key={index}
                            className="group bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 shadow-xl"
                        >
                            <CardContent className="p-8 text-white text-center space-y-4">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 border-2 border-white/30">
                                    <benefit.icon size={32} />
                                </div>

                                <div className="text-4xl font-bold text-shadow">{benefit.stat}</div>
                                <h3 className="text-xl font-bold">{benefit.title}</h3>
                                <p className="text-white/80 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
