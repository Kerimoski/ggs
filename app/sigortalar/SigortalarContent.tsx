'use client';

import Link from 'next/link';
import {
  Heart, Car, Home, Plane, Users, Building2, ShieldAlert,
  ArrowRight, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const insuranceTypes = [
  {
    icon: Heart,
    title: 'Sağlık Sigortası',
    slug: 'saglik',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    description: 'Sağlığınız için en kapsamlı koruma. Hastane, ameliyat ve tedavi masraflarınız güvence altında.',
    details: 'Tamamlayıcı sağlık sigortası ile özel hastanelerde indirimli tedavi imkanı. Ayakta ve yatarak tedavi, ameliyat, check-up, diş tedavisi ve daha fazlası.',
    features: [
      'Özel hastanelerde anlaşmalı tedavi',
      'Ayakta ve yatarak tedavi güvencesi',
      'Ameliyat ve yoğun bakım teminatı',
      'Yıllık check-up imkanı',
      'Diş tedavisi seçenekleri',
      'Hamilelik ve doğum teminatı',
    ],
  },
  {
    icon: Car,
    title: 'Araç Sigortası',
    slug: 'arac',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    description: 'Kasko ve trafik sigortası ile aracınız her zaman güvende. En iyi fiyat garantisi.',
    details: 'Zorunlu trafik sigortası ve kasko poliçeleri ile aracınızı her türlü riske karşı güvence altına alın. Hasar durumunda hızlı ve sorunsuz süreç.',
    features: [
      'Zorunlu trafik sigortası',
      'Tam kasko ve mini kasko seçenekleri',
      'Cam, lastik ve anahtar teminatı',
      'Kişisel kaza koruma',
      'Yol yardım hizmeti',
      'İkame araç desteği',
    ],
  },
  {
    icon: Home,
    title: 'Konut Sigortası',
    slug: 'konut',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    description: 'Evinizi doğal afetler, hırsızlık ve hasarlara karşı koruyun. Huzurlu bir yaşam için.',
    details: 'Evinizin bina ve eşyalarını yangın, su baskını, hırsızlık, cam kırılması ve daha birçok riske karşı tek poliçe ile güvence altına alın.',
    features: [
      'Yangın ve doğal afet teminatı',
      'Hırsızlık güvencesi',
      'Su basması ve sızıntı hasarı',
      'Cam kırılması teminatı',
      'Eşya ve mobilya koruma',
      'Sorumluluk sigortası',
    ],
  },
  {
    icon: Plane,
    title: 'Seyahat Sigortası',
    slug: 'seyahat',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-100',
    description: 'Yurt içi ve yurt dışı seyahatlerinizde yanınızdayız. Sağlık, bagaj ve iptal güvencesi.',
    details: 'Seyahat sırasında oluşabilecek sağlık sorunları, bagaj kaybı, uçuş iptali ve daha birçok beklenmedik duruma karşı güvence.',
    features: [
      'Yurt dışı sağlık güvencesi',
      'Bagaj kaybı ve gecikme teminatı',
      'Uçuş iptali ve gecikme',
      'Kişisel sorumluluk',
      'Acil tıbbi tahliye',
      'Schengen vizesi uyumlu',
    ],
  },
  {
    icon: Users,
    title: 'Hayat Sigortası',
    slug: 'hayat',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    description: 'Sevdiklerinizin geleceğini güvence altına alın. Ölüm ve sakatlık teminatları.',
    details: 'Hayat sigortası ile siz ve aileniz için finansal güvence oluşturun. Beklenmedik durumlarda sevdikleriniz maddi sıkıntı yaşamasın.',
    features: [
      'Vefat teminatı',
      'Maluliyet güvencesi',
      'Kritik hastalık teminatı',
      'Birikim ve yatırım seçenekleri',
      'Eğitim sigortası',
      'Esnek ödeme planları',
    ],
  },
  {
    icon: Building2,
    title: 'İşyeri Sigortası',
    slug: 'isyeri',
    color: 'text-slate-700',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-100',
    description: 'İşinizi yangın, hırsızlık ve doğal afetlere karşı koruyun. İş sürekliliği garantisi.',
    details: 'İş yerinizi ve ticari varlıklarınızı kapsamlı bir şekilde güvence altına alın. İş kesintisi teminatı ile gelir kaybınızı da minimize edin.',
    features: [
      'Yangın ve doğal afet teminatı',
      'Hırsızlık güvencesi',
      'İş kesintisi teminatı',
      'Makine kırılması',
      'Cam kırılması teminatı',
      'Üçüncü şahıs sorumluluk',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Deprem Sigortası (DASK)',
    slug: 'deprem',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
    description: 'Zorunlu deprem sigortası ile evinizi deprem riskine karşı güvence altına alın.',
    details: 'DASK (Doğal Afet Sigortaları Kurumu) kapsamında zorunlu deprem sigortası. Deprem, tsunami ve deprem sonrası yangın hasarlarına karşı güvence.',
    features: [
      'Zorunlu deprem teminatı',
      'Tsunami güvencesi',
      'Deprem sonrası yangın',
      'Bina hasarı teminatı',
      'Hızlı hasar tespiti',
      'Uygun fiyat seçenekleri',
    ],
  },
];

export default function SigortalarContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Hizmetlerimiz
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Sigortalarımız
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Kapsamlı sigorta çözümlerimiz ile hayatınızın her alanında güvende olun.
              İhtiyacınıza en uygun poliçeyi birlikte belirleyelim.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Types Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {insuranceTypes.map((insurance, index) => (
              <div
                key={insurance.slug}
                id={insurance.slug}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`w-14 h-14 ${insurance.bgColor} rounded-xl flex items-center justify-center`}>
                    <insurance.icon className={`w-7 h-7 ${insurance.color}`} />
                  </div>

                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      {insurance.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                      {insurance.details}
                    </p>
                  </div>

                  <Link href="/teklif">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-none rounded-lg mt-2">
                      Teklif Al
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Features */}
                <div className={`${insurance.bgColor} rounded-2xl border ${insurance.borderColor} p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-6">
                    Teminatlar & Özellikler
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {insurance.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${insurance.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Hangi sigortayı seçeceğinizden emin değil misiniz?
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
            Uzman ekibimiz size en uygun sigorta çözümünü bulmak için hazır.
            Ücretsiz danışmanlık hizmetimizden yararlanın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/teklif">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-lg shadow-none">
                Ücretsiz Teklif Al
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/iletisim">
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-lg">
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
