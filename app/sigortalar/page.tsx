import type { Metadata } from 'next';
import SigortalarContent from './SigortalarContent';

export const metadata: Metadata = {
  title: 'Sigortalarımız',
  description: 'Sağlık, araç, konut, seyahat, hayat, işyeri ve deprem sigortası. Gülgeldi Sigorta ile tüm sigorta ihtiyaçlarınız için güvenilir çözümler.',
};

export default function SigortalarPage() {
  return <SigortalarContent />;
}
