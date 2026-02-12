import type { Metadata } from 'next';
import TeklifContent from './TeklifContent';

export const metadata: Metadata = {
  title: 'Teklif Al',
  description: 'Gülgeldi Sigorta\'dan ücretsiz sigorta teklifi alın. Sağlık, araç, konut, seyahat, hayat ve işyeri sigortası için hemen formu doldurun.',
};

export default function TeklifPage() {
  return <TeklifContent />;
}
