'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { MessageCircle, Send, Phone, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const INSURANCE_TYPES = [
  { value: 'saglik', label: 'Sağlık Sigortası' },
  { value: 'arac', label: 'Araç Sigortası (Kasko/Trafik)' },
  { value: 'konut', label: 'Konut Sigortası' },
  { value: 'deprem', label: 'Deprem Sigortası' },
  { value: 'seyahat', label: 'Seyahat Sigortası' },
  { value: 'hayat', label: 'Hayat Sigortası' },
  { value: 'isyeri', label: 'İşyeri Sigortası' },
  { value: 'diger', label: 'Diğer' },
];

const benefits = [
  {
    icon: Clock,
    title: 'Hızlı Süreç',
    description: 'Formu doldurun, dakikalar içinde teklifinizi alın.',
  },
  {
    icon: Shield,
    title: 'Güvenli İletişim',
    description: 'Bilgileriniz WhatsApp ile güvenli şekilde iletilir.',
  },
  {
    icon: CheckCircle2,
    title: 'Ücretsiz & Bağlayıcı Değil',
    description: 'Teklif almak tamamen ücretsiz, herhangi bir yükümlülük yok.',
  },
];

export default function TeklifContent() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    insuranceType: '',
    message: '',
    plateNumber: '',
    vehicleBrand: '',
    vehicleModel: '',
    vehicleYear: '',
    address: '',
    buildingAge: '',
    squareMeters: '',
    destination: '',
    travelDates: '',
    travelers: '',
    birthDate: '',
    chronicDisease: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.insuranceType) {
      alert('Lütfen tüm zorunlu alanları doldurun.');
      return;
    }

    const whatsappNumber = '905427656465';
    const selectedInsurance = INSURANCE_TYPES.find(
      (type) => type.value === formData.insuranceType
    );

    let dynamicMessage = `Merhaba! Gülgeldi Sigorta web sitesinden teklif almak istiyorum.

📋 *Bilgilerim:*
👤 Ad Soyad: ${formData.name}
📞 Telefon: ${formData.phone}
🛡️ Sigorta Türü: ${selectedInsurance?.label}
`;

    if (formData.insuranceType === 'arac') {
      dynamicMessage += `
🚗 *Araç Bilgileri:*
🔢 Plaka: ${formData.plateNumber}
🏭 Marka: ${formData.vehicleBrand}
📱 Model: ${formData.vehicleModel}
📅 Yıl: ${formData.vehicleYear}`;
    } else if (formData.insuranceType === 'konut' || formData.insuranceType === 'deprem') {
      dynamicMessage += `
🏠 *Konut Bilgileri:*
📍 Adres: ${formData.address}
🏗️ Bina Yaşı: ${formData.buildingAge} yıl
📏 m²: ${formData.squareMeters}`;
    } else if (formData.insuranceType === 'seyahat') {
      dynamicMessage += `
✈️ *Seyahat Bilgileri:*
🌍 Gidilecek Yer: ${formData.destination}
📅 Tarihler: ${formData.travelDates}
👥 Kişi Sayısı: ${formData.travelers}`;
    } else if (formData.insuranceType === 'saglik') {
      dynamicMessage += `
🏥 *Sağlık Bilgileri:*
🎂 Doğum Tarihi: ${formData.birthDate}
💊 Kronik Hastalık: ${formData.chronicDisease || 'Yok'}`;
    }

    if (formData.message) {
      dynamicMessage += `\n\n💬 Mesaj: ${formData.message}`;
    }

    dynamicMessage += `\n\nDetaylı bilgi alabilir miyim?`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(dynamicMessage)}`;
    window.open(url, '_blank');
  };

  const renderDynamicFields = () => {
    switch (formData.insuranceType) {
      case 'arac':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="plateNumber" className="text-sm font-medium text-slate-700">Plaka *</Label>
              <Input
                type="text"
                id="plateNumber"
                required
                value={formData.plateNumber}
                onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value.toUpperCase() })}
                placeholder="34 ABC 123"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="vehicleBrand" className="text-sm font-medium text-slate-700">Marka *</Label>
                <Input
                  type="text"
                  id="vehicleBrand"
                  required
                  value={formData.vehicleBrand}
                  onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                  placeholder="Toyota"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleYear" className="text-sm font-medium text-slate-700">Yıl *</Label>
                <Input
                  type="number"
                  id="vehicleYear"
                  required
                  value={formData.vehicleYear}
                  onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                  placeholder="2020"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="vehicleModel" className="text-sm font-medium text-slate-700">Model *</Label>
              <Input
                type="text"
                id="vehicleModel"
                required
                value={formData.vehicleModel}
                onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                placeholder="Corolla"
              />
            </div>
          </>
        );

      case 'konut':
      case 'deprem':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium text-slate-700">Adres *</Label>
              <Input
                type="text"
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Konut adresi"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="buildingAge" className="text-sm font-medium text-slate-700">Bina Yaşı *</Label>
                <Input
                  type="number"
                  id="buildingAge"
                  required
                  value={formData.buildingAge}
                  onChange={(e) => setFormData({ ...formData, buildingAge: e.target.value })}
                  placeholder="Yıl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="squareMeters" className="text-sm font-medium text-slate-700">m² *</Label>
                <Input
                  type="number"
                  id="squareMeters"
                  required
                  value={formData.squareMeters}
                  onChange={(e) => setFormData({ ...formData, squareMeters: e.target.value })}
                  placeholder="100"
                />
              </div>
            </div>
          </>
        );

      case 'seyahat':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-sm font-medium text-slate-700">Gidilecek Yer *</Label>
              <Input
                type="text"
                id="destination"
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                placeholder="Ülke/Şehir"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="travelDates" className="text-sm font-medium text-slate-700">Tarihler *</Label>
                <Input
                  type="text"
                  id="travelDates"
                  required
                  value={formData.travelDates}
                  onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                  placeholder="01/03 - 15/03"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelers" className="text-sm font-medium text-slate-700">Kişi Sayısı *</Label>
                <Input
                  type="number"
                  id="travelers"
                  required
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  placeholder="2"
                />
              </div>
            </div>
          </>
        );

      case 'saglik':
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="birthDate" className="text-sm font-medium text-slate-700">Doğum Tarihi *</Label>
              <Input
                type="date"
                id="birthDate"
                required
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="chronicDisease" className="text-sm font-medium text-slate-700">Kronik Hastalık (Varsa)</Label>
              <Input
                type="text"
                id="chronicDisease"
                value={formData.chronicDisease}
                onChange={(e) => setFormData({ ...formData, chronicDisease: e.target.value })}
                placeholder="Varsa belirtin"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Teklif Al
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Ücretsiz Teklif Alın
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Formu doldurun, size en uygun sigorta teklifini WhatsApp üzerinden
              hemen iletelim. Hiçbir ücret veya yükümlülük yok.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Steps */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-slate-900">Nasıl Çalışır?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Formu Doldurun</p>
                      <p className="text-xs text-slate-500 mt-0.5">Ad, telefon ve sigorta türünü seçin.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">WhatsApp&apos;a Yönlenin</p>
                      <p className="text-xs text-slate-500 mt-0.5">Bilgileriniz otomatik olarak hazırlanır.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Teklifinizi Alın</p>
                      <p className="text-xs text-slate-500 mt-0.5">Dakikalar içinde size dönüş yaparız.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <benefit.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{benefit.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact */}
              <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-100 space-y-3">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-emerald-600" />
                  <h4 className="text-sm font-semibold text-emerald-900">Doğrudan WhatsApp</h4>
                </div>
                <p className="text-xs text-emerald-700">
                  Form doldurmak istemiyorsanız doğrudan WhatsApp ile yazabilirsiniz.
                </p>
                <a
                  href="https://wa.me/905427656465?text=Merhaba!%20Sigorta%20teklifi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-none rounded-lg mt-1">
                    <MessageCircle className="w-4 h-4 mr-1.5" />
                    WhatsApp&apos;a Git
                  </Button>
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-slate-100">
                <Phone className="w-5 h-5 text-slate-600" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Telefonla Arayın</p>
                  <a href="tel:+905427656465" className="text-sm text-blue-600 hover:text-blue-700">
                    +90 542 765 64 65
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-sm border-slate-200">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-slate-900">
                    Teklif Formu
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    Zorunlu alanları (*) doldurun, size hemen dönüş yapalım.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-slate-700">Ad Soyad *</Label>
                        <Input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefon *</Label>
                        <Input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insuranceType" className="text-sm font-medium text-slate-700">Sigorta Türü *</Label>
                      <Select
                        required
                        value={formData.insuranceType}
                        onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sigorta türü seçiniz..." />
                        </SelectTrigger>
                        <SelectContent>
                          {INSURANCE_TYPES.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {renderDynamicFields()}

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-slate-700">Ek Not (Opsiyonel)</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Eklemek istediğiniz bir not var mı?"
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white shadow-none text-sm font-medium rounded-lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      WhatsApp ile Teklif Al
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      Gönder butonuna tıkladığınızda WhatsApp uygulamasına yönlendirileceksiniz.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
