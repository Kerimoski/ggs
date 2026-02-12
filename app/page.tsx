'use client';

import HeroSection from '@/components/HeroSection';
import InsuranceTypes from '@/components/InsuranceTypes';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import HomeCTA from '@/components/HomeCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <InsuranceTypes />
      <Benefits />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}
