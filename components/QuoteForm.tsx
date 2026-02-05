'use client';

import { useState, FormEvent } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
import { generateWhatsAppUrl } from '@/lib/whatsapp';

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

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        insuranceType: '',
        message: '',
        // Araç sigortası için
        plateNumber: '',
        vehicleBrand: '',
        vehicleModel: '',
        vehicleYear: '',
        // Konut/Deprem sigortası için
        address: '',
        buildingAge: '',
        squareMeters: '',
        // Seyahat sigortası için
        destination: '',
        travelDates: '',
        travelers: '',
        // Sağlık sigortası için
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

        // Dinamik mesaj oluştur
        let dynamicMessage = `Merhaba! Gülgeldi Sigorta web sitesinden teklif almak istiyorum.

📋 *Bilgilerim:*
👤 Ad Soyad: ${formData.name}
📞 Telefon: ${formData.phone}
🛡️ Sigorta Türü: ${selectedInsurance?.label}
`;

        // Sigorta türüne göre ek bilgiler
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
                            <Label htmlFor="plateNumber">Plaka *</Label>
                            <Input
                                type="text"
                                id="plateNumber"
                                required
                                value={formData.plateNumber}
                                onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value.toUpperCase() })}
                                placeholder="34 ABC 123"
                                className="border-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="vehicleBrand">Marka *</Label>
                                <Input
                                    type="text"
                                    id="vehicleBrand"
                                    required
                                    value={formData.vehicleBrand}
                                    onChange={(e) => setFormData({ ...formData, vehicleBrand: e.target.value })}
                                    placeholder="Örn: Toyota"
                                    className="border-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="vehicleYear">Yıl *</Label>
                                <Input
                                    type="number"
                                    id="vehicleYear"
                                    required
                                    value={formData.vehicleYear}
                                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                                    placeholder="2020"
                                    className="border-2"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="vehicleModel">Model *</Label>
                            <Input
                                type="text"
                                id="vehicleModel"
                                required
                                value={formData.vehicleModel}
                                onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                                placeholder="Örn: Corolla"
                                className="border-2"
                            />
                        </div>
                    </>
                );

            case 'konut':
            case 'deprem':
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="address">Adres *</Label>
                            <Input
                                type="text"
                                id="address"
                                required
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                placeholder="Konut adresi"
                                className="border-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="buildingAge">Bina Yaşı *</Label>
                                <Input
                                    type="number"
                                    id="buildingAge"
                                    required
                                    value={formData.buildingAge}
                                    onChange={(e) => setFormData({ ...formData, buildingAge: e.target.value })}
                                    placeholder="Yıl"
                                    className="border-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="squareMeters">m² *</Label>
                                <Input
                                    type="number"
                                    id="squareMeters"
                                    required
                                    value={formData.squareMeters}
                                    onChange={(e) => setFormData({ ...formData, squareMeters: e.target.value })}
                                    placeholder="100"
                                    className="border-2"
                                />
                            </div>
                        </div>
                    </>
                );

            case 'seyahat':
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="destination">Gidilecek Yer *</Label>
                            <Input
                                type="text"
                                id="destination"
                                required
                                value={formData.destination}
                                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                placeholder="Ülke/Şehir"
                                className="border-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="travelDates">Tarihler *</Label>
                                <Input
                                    type="text"
                                    id="travelDates"
                                    required
                                    value={formData.travelDates}
                                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                                    placeholder="01/03/2024 - 15/03/2024"
                                    className="border-2"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="travelers">Kişi Sayısı *</Label>
                                <Input
                                    type="number"
                                    id="travelers"
                                    required
                                    value={formData.travelers}
                                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                                    placeholder="2"
                                    className="border-2"
                                />
                            </div>
                        </div>
                    </>
                );

            case 'saglik':
                return (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="birthDate">Doğum Tarihi *</Label>
                            <Input
                                type="date"
                                id="birthDate"
                                required
                                value={formData.birthDate}
                                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                                className="border-2"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="chronicDisease">Kronik Hastalık (Varsa)</Label>
                            <Input
                                type="text"
                                id="chronicDisease"
                                value={formData.chronicDisease}
                                onChange={(e) => setFormData({ ...formData, chronicDisease: e.target.value })}
                                placeholder="Varsa belirtin"
                                className="border-2"
                            />
                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <Card className="w-full max-w-md backdrop-blur-md bg-white/95 shadow-2xl border-0">
            <CardHeader>
                <CardTitle className="text-2xl text-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Hemen Teklif Alın
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Adınız ve soyadınız"
                            className="border-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="05XX XXX XX XX"
                            className="border-2"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="insuranceType">Sigorta Türü *</Label>
                        <Select
                            required
                            value={formData.insuranceType}
                            onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                        >
                            <SelectTrigger className="border-2">
                                <SelectValue placeholder="Seçiniz..." />
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

                    {/* Dinamik alanlar */}
                    {renderDynamicFields()}

                    <div className="space-y-2">
                        <Label htmlFor="message">Ek Notlarınız (Opsiyonel)</Label>
                        <Textarea
                            id="message"
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Eklemek istediğiniz bir şey var mı?"
                            className="border-2 resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-lg h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg"
                    >
                        <MessageCircle className="mr-2" size={20} />
                        WhatsApp'tan Teklif Al
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
