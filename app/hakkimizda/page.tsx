import type { Metadata } from 'next';
import HakkimizdaContent from './HakkimizdaContent';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Gülgeldi Sigorta hakkında. 2021\'den beri Van\'da güvenilir sigorta hizmetleri sunuyoruz. Misyonumuz, vizyonumuz ve değerlerimiz.',
};

export default function HakkimizdaPage() {
  return <HakkimizdaContent />;
}
