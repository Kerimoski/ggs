'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeCTA() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Sigorta İhtiyacınız İçin Hemen Teklif Alın
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Profesyonel ekibimiz size en uygun sigorta çözümünü sunmak için hazır.
            Ücretsiz teklif almak sadece birkaç dakika sürer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/teklif">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-lg text-base shadow-none">
                Ücretsiz Teklif Al
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+905427656465">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-12 px-8 rounded-lg text-base bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                Bizi Arayın
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 pt-4 text-sm text-slate-500">
            <span>Hızlı İşlem</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <span>Rekabetçi Fiyat</span>
            <span className="w-1 h-1 bg-slate-600 rounded-full" />
            <span>7/24 Destek</span>
          </div>
        </div>
      </div>
    </section>
  );
}
