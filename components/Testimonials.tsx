'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mehmet Yılmaz',
    role: 'Araç Sigortası Müşterisi',
    avatar: 'MY',
    rating: 5,
    text: 'Kasko sigortamı yaptırdım, fiyatlar gerçekten çok uygundu. Kaza sonrası süreç çok hızlı ilerledi. Teşekkürler Gülgeldi Sigorta!',
    date: '2 hafta önce',
  },
  {
    name: 'Ayşe Kaya',
    role: 'Sağlık Sigortası Müşterisi',
    avatar: 'AK',
    rating: 5,
    text: 'Ailem için sağlık sigortası yaptırdım. Her konuda bilgilendirdiler ve en uygun paketi buldular. Çok memnunum.',
    date: '1 ay önce',
  },
  {
    name: 'Hasan Demir',
    role: 'Konut Sigortası Müşterisi',
    avatar: 'HD',
    rating: 5,
    text: 'Evimi deprem ve doğal afetlere karşı sigortalattım. Hızlı işlem ve güler yüzlü hizmet. Herkese tavsiye ederim.',
    date: '3 hafta önce',
  },
  {
    name: 'Fatma Çelik',
    role: 'Seyahat Sigortası Müşterisi',
    avatar: 'FÇ',
    rating: 5,
    text: 'Avrupa seyahatim için sigorta yaptırdım. WhatsApp üzerinden çok kolay iletişim kurduk. 10 dakikada her şey hazırdı.',
    date: '1 hafta önce',
  },
  {
    name: 'Ali Özkan',
    role: 'İşyeri Sigortası Müşterisi',
    avatar: 'AÖ',
    rating: 5,
    text: 'İş yerim için kapsamlı bir sigorta paketi hazırladılar. Fiyat-performans açısından çok tatmin edici. Profesyonel ekip.',
    date: '2 ay önce',
  },
  {
    name: 'Zeynep Arslan',
    role: 'Araç Sigortası Müşterisi',
    avatar: 'ZA',
    rating: 5,
    text: 'Trafik sigortamı yeniledim. Diğer acentelere göre çok daha uygun fiyat verdiler. Üstelik işlem 5 dakika sürdü.',
    date: '5 gün önce',
  },
  {
    name: 'Murat Şahin',
    role: 'Hayat Sigortası Müşterisi',
    avatar: 'MŞ',
    rating: 5,
    text: 'Hayat sigortası konusunda çok detaylı bilgi aldım. Ailemi güvence altına aldığımı bilmek büyük bir huzur veriyor.',
    date: '1 ay önce',
  },
  {
    name: 'Elif Yıldız',
    role: 'Konut Sigortası Müşterisi',
    avatar: 'EY',
    rating: 4,
    text: 'DASK ve konut sigortamı birlikte yaptırdım. Çok hızlı ve sorunsuz bir süreçti. Gülgeldi ekibine teşekkürler.',
    date: '3 hafta önce',
  },
  {
    name: 'İbrahim Aktaş',
    role: 'Araç Sigortası Müşterisi',
    avatar: 'İA',
    rating: 5,
    text: 'İkinci aracım için de Gülgeldi Sigorta\'yı tercih ettim. Her seferinde aynı kaliteli hizmeti alıyorum. Güvenilir bir acente.',
    date: '4 gün önce',
  },
  {
    name: 'Derya Koç',
    role: 'Sağlık Sigortası Müşterisi',
    avatar: 'DK',
    rating: 5,
    text: 'Çocuklarım için tamamlayıcı sağlık sigortası yaptırdım. Seçenekleri çok net anlattılar, hiç zorlamadılar. Harika bir deneyimdi.',
    date: '2 hafta önce',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[340px] bg-white rounded-xl border border-slate-100 p-6 space-y-4 hover:shadow-md transition-shadow">
      <StarRating rating={testimonial.rating} />

      <p className="text-sm text-slate-600 leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <span className="text-xs font-bold text-slate-600">{testimonial.avatar}</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
          <div className="text-xs text-slate-500">{testimonial.role}</div>
        </div>
        <div className="ml-auto text-xs text-slate-400">{testimonial.date}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ggs-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ggs-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ggs-row-left {
          animation: ggs-scroll-left 60s linear infinite;
        }
        .ggs-row-right {
          animation: ggs-scroll-right 60s linear infinite;
        }
        @media (max-width: 768px) {
          .ggs-row-left {
            animation: ggs-scroll-left 12s linear infinite;
          }
          .ggs-row-right {
            animation: ggs-scroll-right 12s linear infinite;
          }
        }
        .ggs-row-left:hover,
        .ggs-row-right:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Müşteri Yorumları
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-lg text-slate-500">
            Güvenilir hizmetimizle müşterilerimizin memnuniyeti bizim için en büyük ödül.
          </p>
        </div>
      </div>

      {/* Scrolling Row 1 */}
      <div className="relative mb-6">
        <div className="flex gap-6 ggs-row-left">
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Scrolling Row 2 */}
      <div className="relative">
        <div className="flex gap-6 ggs-row-right">
          {[...allTestimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
