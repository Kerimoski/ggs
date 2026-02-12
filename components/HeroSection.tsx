'use client';

import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Hızlı Teklif',
  'Uzman Kadro',
  'Rekabetçi Fiyat',
  '7/24 Destek',
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Güvenilir Sigorta Çözümleri
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Geleceğinizi
                <br />
                <span className="text-blue-400">Güvence</span> Altına Alın
              </h1>

              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Gülgeldi Sigorta olarak, profesyonel kadromuz ve geniş ürün
                yelpazemizle sizin ve sevdiklerinizin geleceğini koruyoruz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/teklif">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-lg text-base shadow-none">
                  Ücretsiz Teklif Al
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/sigortalar">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 rounded-lg text-base bg-transparent"
                >
                  Hizmetlerimiz
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-slate-400"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Card */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-slate-400">Mutlu Müşteri</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-3xl font-bold text-white">7/24</div>
                    <div className="text-sm text-slate-400">Destek Hattı</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-3xl font-bold text-white">6+</div>
                    <div className="text-sm text-slate-400">Sigorta Türü</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-3xl font-bold text-white">~5dk</div>
                    <div className="text-sm text-slate-400">Teklif Süresi</div>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="space-y-3">
                  <p className="text-sm text-slate-400">
                    &ldquo;Sağlık, araç, konut, seyahat, hayat ve işyeri sigortasında
                    profesyonel danışmanlık hizmeti.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">GS</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Gülgeldi Sigorta</div>
                      <div className="text-xs text-slate-500">İpekyolu / Van</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl border border-blue-500/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </section>
  );
}
