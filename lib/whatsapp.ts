/**
 * Generates WhatsApp URL with pre-filled message
 */
export function generateWhatsAppUrl(
    phoneNumber: string,
    name: string,
    phone: string,
    insuranceType: string,
    message?: string
): string {
    const formattedPhone = phoneNumber.replace(/[^0-9]/g, '');

    const messageText = `Merhaba! Gülgeldi Sigorta web sitesinden teklif almak istiyorum.

📋 *Bilgilerim:*
👤 Ad Soyad: ${name}
📞 Telefon: ${phone}
🛡️ Sigorta Türü: ${insuranceType}
${message ? `\n💬 Mesaj: ${message}` : ''}

Detaylı bilgi alabilir miyim?`;

    const encodedMessage = encodeURIComponent(messageText);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
}
