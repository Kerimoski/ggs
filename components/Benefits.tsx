'use client';

import { Clock, Award, CheckCircle2, Headphones } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '~5 dk',
    label: 'Teklif Süresi',
    description: 'Teklif almanız sadece birkaç dakika sürer.',
  },
  {
    icon: Award,
    value: '3+ Yıl',
    label: 'Tecrübe',
    description: 'Sektörde uzun yıllara dayanan deneyim.',
  },
  {
    icon: CheckCircle2,
    value: '500+',
    label: 'Mutlu Müşteri',
    description: 'Şeffaf ve dürüst hizmet anlayışımız.',
  },
  {
    icon: Headphones,
    value: '7/24',
    label: 'Destek',
    description: 'Telefon ve WhatsApp ile her zaman yanınızda.',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Neden Biz?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Neden Gülgeldi Sigorta?
          </h2>
          <p className="text-lg text-slate-500">
            Müşteri memnuniyeti odaklı hizmet anlayışımız ile fark yaratıyoruz.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-4"
            >
              <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center mx-auto shadow-sm">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>

              <div className="space-y-1">
                <div className="text-3xl font-bold text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>

              <p className="text-sm text-slate-500 max-w-[200px] mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
