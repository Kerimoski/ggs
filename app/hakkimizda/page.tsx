import type { Metadata } from 'next';
import HakkimizdaContent from './HakkimizdaContent';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Gülgeldi Sigorta hakkında. 2009\'dan beri Van\'da güvenilir sigorta hizmetleri sunuyoruz. Misyonumuz, vizyonumuz ve değerlerimiz.',
};

export default function HakkimizdaPage() {
  return <HakkimizdaContent />;
}
