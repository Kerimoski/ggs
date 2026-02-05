'use client';

import { Target, Users, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
    return (
        <section id="hakkimizda" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-1 shadow-2xl">
                            <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                                <div className="text-center space-y-4 p-12">
                                    <Image
                                        src="/ggs.png"
                                        alt="Gülgeldi Sigorta Logo"
                                        width={120}
                                        height={120}
                                        className="mx-auto w-30 h-30 object-contain"
                                    />
                                    <div className="space-y-2">
                                        <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                            3+
                                        </div>
                                        <div className="text-xl text-gray-600 font-semibold">Yıllık Tecrübe</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-6 shadow-xl">
                            <div className="flex items-center gap-3 text-white">
                                <Sparkles size={32} />
                                <div>
                                    <div className="text-2xl font-bold">10K+</div>
                                    <div className="text-sm">Mutlu Müşteri</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Gülgeldi Sigorta
                                </span>{' '}
                                Hakkında
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Gülgeldi Sigorta olarak, 2022 yılından bu yana müşterilerimize
                                güvenilir ve kaliteli sigorta hizmetleri sunuyoruz. Deneyimli
                                kadromuz ve geniş ürün yelpazemiz ile her türlü sigorta ihtiyacınıza
                                çözüm üretiyoruz.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Card className="border-l-4 border-l-purple-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                                <Target size={24} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-900">Misyonumuz</h3>
                                            <p className="text-gray-600">
                                                Müşterilerimize en uygun sigorta çözümlerini sunarak,
                                                geleceğe güvenle bakmalarını sağlamak.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-pink-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-orange-500 rounded-xl flex items-center justify-center">
                                                <Users size={24} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-gray-900">Vizyonumuz</h3>
                                            <p className="text-gray-600">
                                                Sektörde lider bir sigorta acentesi olarak, müşteri
                                                memnuniyetini en üst seviyeye çıkarmak.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
