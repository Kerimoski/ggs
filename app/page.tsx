'use client';
import HeroSection from '@/components/HeroSection';
import InsuranceTypes from '@/components/InsuranceTypes';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InsuranceTypes />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
