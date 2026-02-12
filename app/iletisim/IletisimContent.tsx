'use client';

import Link from 'next/link';
import {
  MapPin, Phone, Mail, MessageCircle, Clock, Instagram,
  ExternalLink, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactCards = [
  {
    icon: MapPin,
    title: 'Ofis Adresimiz',
    description: 'Bizi ziyaret edin',
    lines: ['Alipaşa, İpek Yolu Cd.', 'No:7 D:1, 65100', 'İpekyolu / Van'],
    href: 'https://maps.google.com/?q=Alipaşa+İpek+Yolu+Caddesi+No:7+D:1+İpekyolu+Van',
    external: true,
  },
  {
    icon: Phone,
    title: 'Telefon',
    description: 'Bizi arayın',
    lines: ['+90 542 765 64 65', '+90 553 796 51 12'],
    href: 'tel:+905427656465',
    external: false,
  },
  {
    icon: Mail,
    title: 'E-posta',
    description: 'Bize yazın',
    lines: ['info@gulgeldi.com'],
    href: 'mailto:info@gulgeldi.com',
    external: false,
  },
  {
    icon: Clock,
    title: 'Çalışma Saatleri',
    description: 'Ne zaman ulaşabilirsiniz',
    lines: ['Pazartesi - Cumartesi', '09:00 - 18:00', 'Pazar: Kapalı'],
    href: null,
    external: false,
  },
];

export default function IletisimContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              İletişim
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Sigorta ihtiyaçlarınız için bize ulaşın. Uzman ekibimiz
              size yardımcı olmaktan memnuniyet duyar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactCards.map((card, index) => {
              const Wrapper = card.href ? 'a' : 'div';
              const wrapperProps = card.href
                ? {
                    href: card.href,
                    ...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                  }
                : {};

              return (
                <Wrapper
                  key={index}
                  {...wrapperProps}
                  className={`group p-6 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all duration-200 ${
                    card.href ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                      <card.icon className="w-6 h-6 text-blue-600" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
                        {card.external && (
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{card.description}</p>
                    </div>

                    <div className="space-y-1">
                      {card.lines.map((line, i) => (
                        <p key={i} className="text-sm text-slate-600">{line}</p>
                      ))}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* WhatsApp & Social CTA */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <a
              href="https://wa.me/905427656465?text=Merhaba!%20Gülgeldi%20Sigorta%20hakkında%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-emerald-50 border border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-emerald-900">WhatsApp ile Ulaşın</h3>
                <p className="text-sm text-emerald-700 mt-1">
                  Hızlı iletişim için WhatsApp üzerinden bize mesaj gönderin.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/gulgeldi.sigorta/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-xl bg-pink-50 border border-pink-100 hover:bg-pink-100 hover:border-pink-200 transition-all group"
            >
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-pink-900">Instagram&apos;da Takip Edin</h3>
                <p className="text-sm text-pink-700 mt-1">
                  @gulgeldi.sigorta hesabımızdan güncel içeriklerimizi takip edin.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-pink-600 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Ofisimiz</h2>
            <div className="rounded-xl border border-slate-200 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.9951636890576!2d43.38014831204395!3d38.49458017136794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a87b5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2zQWxpcGHFn2EsIMSwcGVrIFlvbHUgQ2QuIG5vOjcgRDoxLCA2NTEwMCDEsHBla3lvbHUvVmFu!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str&q=Alipaşa+İpek+Yolu+Caddesi+No:7+D:1+İpekyolu+Van"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gülgeldi Sigorta Ofis Konumu"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Hemen Teklif Almak İster misiniz?
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            Online teklif formumuz ile dakikalar içinde size özel teklif alabilirsiniz.
          </p>
          <Link href="/teklif">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-lg shadow-none">
              Ücretsiz Teklif Al
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
