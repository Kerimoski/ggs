'use client';

import { Heart, Car, Home, Plane, Users, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const insuranceTypes = [
    {
        icon: Heart,
        title: 'Sağlık Sigortası',
        description: 'Sağlığınız için en kapsamlı koruma. Hastane, ameliyat ve tedavi masraflarınız güvence altında.',
        gradient: 'from-red-500 to-pink-500',
    },
    {
        icon: Car,
        title: 'Araç Sigortası',
        description: 'Kasko ve trafik sigortası ile aracınız her zaman güvende. En iyi fiyat garantisi.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: Home,
        title: 'Konut Sigortası',
        description: 'Evinizi doğal afetler, hırsızlık ve hasarlara karşı koruyun. Huzurlu bir yaşam için.',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        icon: Plane,
        title: 'Seyahat Sigortası',
        description: 'Yurt içi ve yurt dışı seyahatlerinizde yanınızdayız. Sağlık, bagaj ve iptal güvencesi.',
        gradient: 'from-purple-500 to-violet-500',
    },
    {
        icon: Users,
        title: 'Hayat Sigortası',
        description: 'Sevdiklerinizin geleceğini güvence altına alın. Ölüm ve sakatlık teminatları.',
        gradient: 'from-orange-500 to-amber-500',
    },
    {
        icon: Building2,
        title: 'İşyeri Sigortası',
        description: 'İşinizi yangın, hırsızlık ve doğal afetlere karşı koruyun. İş sürekliliği garantisi.',
        gradient: 'from-indigo-500 to-blue-600',
    },
];

export default function InsuranceTypes() {
    return (
        <section id="sigortalar" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Sigorta Türlerimiz
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Her ihtiyaca uygun, güvenilir ve uygun fiyatlı sigorta çözümleri
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insuranceTypes.map((insurance, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                        >
                            <CardContent className="p-8 space-y-4">
                                <div className={`w-16 h-16 bg-gradient-to-br ${insurance.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <insurance.icon size={32} className="text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900">
                                    {insurance.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {insurance.description}
                                </p>

                                <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${insurance.gradient} transition-all duration-500 rounded-full`} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
