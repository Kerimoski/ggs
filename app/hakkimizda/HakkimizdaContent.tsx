'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Target, Eye, Shield, TrendingUp, Users, Award, Clock,
  CheckCircle2, ArrowRight, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const timeline = [
  { year: '2009', title: 'Kuruluş', description: 'Gülgeldi Sigorta, Van\'da sigorta hizmetlerine başladı.' },
  { year: '2012', title: 'Büyüme', description: 'Müşteri portföyümüzü genişleterek yeni sigorta ürünleri ekledik.' },
  { year: '2016', title: 'Dijitalleşme', description: 'Online hizmetlerimizi başlatarak daha geniş kitlelere ulaştık.' },
  { year: '2020', title: 'Pandemi Süreci', description: 'Uzaktan hizmet altyapımızı güçlendirdik, kesintisiz destek sunduk.' },
  { year: '2023', title: 'Yenilenme', description: 'Dijital platformlarımızı güncelleyerek WhatsApp ile teklif hizmeti başlattık.' },
  { year: '2025', title: 'Günümüz', description: '500+ mutlu müşteri ile Van\'ın güvenilir sigorta acentesiyiz.' },
];

const values = [
  {
    icon: Shield,
    title: 'Güvenilirlik',
    description: 'Müşterilerimize karşı her zaman dürüst ve şeffaf olma ilkemizden taviz vermeyiz.',
  },
  {
    icon: Heart,
    title: 'Müşteri Odaklılık',
    description: 'Her müşterimizin benzersiz ihtiyaçlarını anlıyor ve kişiselleştirilmiş çözümler sunuyoruz.',
  },
  {
    icon: TrendingUp,
    title: 'Profesyonellik',
    description: 'Sektörün en güncel bilgilerini takip ederek size en doğru danışmanlığı sağlıyoruz.',
  },
  {
    icon: Users,
    title: 'Ekip Ruhu',
    description: 'Deneyimli ve tutkulu ekibimiz, ortak hedeflerimize ulaşmak için birlikte çalışır.',
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
  { icon: Award, value: '15+', label: 'Yıllık Tecrübe' },
  { icon: Shield, value: '7+', label: 'Sigorta Türü' },
  { icon: Clock, value: '7/24', label: 'Destek Hattı' },
];

export default function HakkimizdaContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Hakkımızda
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Gülgeldi Sigorta
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              2009&apos;dan beri Van&apos;da güvenilir sigorta hizmetleri sunuyoruz.
              Müşterilerimizin güvenle geleceğe bakmasını sağlamak en büyük önceliğimizdir.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-12 flex flex-col items-center justify-center space-y-6">
              <Image
                src="/ggs.png"
                alt="Gülgeldi Sigorta Logo"
                width={140}
                height={140}
                className="w-32 h-32 object-contain"
              />
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Gülgeldi Sigorta</h3>
                <p className="text-slate-500">Güvenle Geleceğe</p>
              </div>
              <p className="text-sm text-slate-400 text-center max-w-sm leading-relaxed">
                Alipaşa, İpek Yolu Cd. No:7 D:1, 65100 İpekyolu / Van
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">Biz Kimiz?</h2>
                <p className="text-slate-500 leading-relaxed">
                  Gülgeldi Sigorta olarak, 2009 yılından bu yana Van ve çevresinde güvenilir
                  sigorta hizmetleri sunuyoruz. Deneyimli kadromuz ile müşterilerimizin her
                  türlü sigorta ihtiyacına profesyonel çözümler üretiyoruz.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  Sağlık, araç, konut, seyahat, hayat, işyeri ve deprem sigortası
                  alanlarında geniş ürün yelpazemizle, müşterilerimize en uygun fiyatlarla
                  en kapsamlı güvenceyi sağlıyoruz.
                </p>
              </div>

              {/* Mission & Vision */}
              <div className="space-y-4">
                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Misyonumuz</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Müşterilerimize en uygun sigorta çözümlerini sunarak,
                      geleceğe güvenle bakmalarını sağlamak. Şeffaf, dürüst ve
                      müşteri odaklı hizmet anlayışımızla fark yaratmak.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">Vizyonumuz</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Türkiye&apos;nin en güvenilir sigorta acentelerinden biri olarak,
                      müşteri memnuniyetini en üst seviyeye çıkarmak ve sektörde
                      lider bir konuma ulaşmak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Değerlerimiz
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Bizi Farklı Kılan Değerler
            </h2>
            <p className="text-lg text-slate-500">
              İş yapış şeklimizi ve müşterilerimizle ilişkimizi belirleyen temel ilkelerimiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center mx-auto shadow-sm">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              Tarihçe
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-lg text-slate-500">
              Kuruluşumuzdan bugüne kadar önemli kilometre taşlarımız.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex gap-6 items-start">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-slate-900">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className="pt-3 pb-2">
                      <h3 className="text-base font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">
                Neden Gülgeldi Sigorta?
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Müşterilerimize sadece sigorta poliçesi satmıyoruz;
                güvence ve huzur sunuyoruz. İşte bizi tercih etmeniz
                için birkaç neden:
              </p>

              <div className="space-y-4">
                {[
                  'Rekabetçi ve şeffaf fiyat politikası',
                  'Uzman kadro ile kişiselleştirilmiş danışmanlık',
                  '7/24 ulaşılabilir müşteri desteği',
                  'Hızlı teklif ve poliçe işlemleri',
                  'Hasar sürecinde tam destek',
                  'Geniş sigorta ürün yelpazesi',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
              <h3 className="text-xl font-semibold text-slate-900">Hemen Başlayın</h3>
              <p className="text-slate-500">
                Sigorta ihtiyacınız için ücretsiz teklif alın. Uzman ekibimiz
                size en uygun çözümü sunmak için hazır.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/teklif">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-none rounded-lg">
                    Teklif Al
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/iletisim">
                  <Button variant="outline" className="rounded-lg">
                    İletişime Geç
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
