import type { Metadata } from 'next';
import IletisimContent from './IletisimContent';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Gülgeldi Sigorta ile iletişime geçin. Adres, telefon, e-posta ve WhatsApp bilgilerimiz. Van İpekyolu ofisimiz.',
};

export default function IletisimPage() {
  return <IletisimContent />;
}
