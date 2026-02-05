'use client';

import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import QuoteForm from './QuoteForm';

export default function HeroSection() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="text-white space-y-8">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 mt-4 md:mt-0">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm font-medium">Türkiye'nin Güvenilir Sigorta Partneri</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30">
                                    <Image
                                        src="/ggs.png"
                                        alt="Gülgeldi Sigorta Logo"
                                        width={60}
                                        height={60}
                                        className="w-15 h-15 object-contain"
                                    />
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-shadow">
                                    Gülgeldi <br /> Sigorta
                                </h1>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-semibold">
                                Güvenle Geleceğe
                            </h2>

                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                                Hayatınızı ve sevdiklerinizi koruyun.
                                <br />
                                <span className="font-semibold">Profesyonel</span> kadromuzla en uygun sigorta çözümlerini sunuyoruz.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-lg">
                            {['Hızlı Hizmet', 'Uzman Kadro', 'Rekabetçi Fiyat', '7/24 Destek'].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20"
                                >
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Quote Form */}
                    <div className="flex justify-center lg:justify-end">
                        <QuoteForm />
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
