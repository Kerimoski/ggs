'use client';

import Link from 'next/link';
import { Heart, Car, Home, Plane, Users, Building2, ArrowRight } from 'lucide-react';

const insuranceTypes = [
  {
    icon: Heart,
    title: 'Sağlık Sigortası',
    description: 'Sağlığınız için en kapsamlı koruma. Hastane, ameliyat ve tedavi masraflarınız güvence altında.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Car,
    title: 'Araç Sigortası',
    description: 'Kasko ve trafik sigortası ile aracınız her zaman güvende. En iyi fiyat garantisi.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Home,
    title: 'Konut Sigortası',
    description: 'Evinizi doğal afetler, hırsızlık ve hasarlara karşı koruyun. Huzurlu bir yaşam için.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Plane,
    title: 'Seyahat Sigortası',
    description: 'Yurt içi ve yurt dışı seyahatlerinizde yanınızdayız. Sağlık, bagaj ve iptal güvencesi.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
  {
    icon: Users,
    title: 'Hayat Sigortası',
    description: 'Sevdiklerinizin geleceğini güvence altına alın. Ölüm ve sakatlık teminatları.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Building2,
    title: 'İşyeri Sigortası',
    description: 'İşinizi yangın, hırsızlık ve doğal afetlere karşı koruyun. İş sürekliliği garantisi.',
    color: 'text-slate-700',
    bgColor: 'bg-slate-50',
  },
];

export default function InsuranceTypes() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Hizmetlerimiz
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Sigorta Türlerimiz
          </h2>
          <p className="text-lg text-slate-500">
            Her ihtiyaca uygun, güvenilir ve uygun fiyatlı sigorta çözümleri
            sunuyoruz.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insuranceTypes.map((insurance, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 ${insurance.bgColor} rounded-lg flex items-center justify-center`}>
                  <insurance.icon className={`w-6 h-6 ${insurance.color}`} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {insurance.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {insurance.description}
                </p>

                <Link
                  href="/teklif"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/link"
                >
                  Teklif Al
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/sigortalar"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            Tüm sigortalarımızı inceleyin
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
