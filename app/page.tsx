'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import OctagonalHub from '@/components/OctagonalHub';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <OctagonalHub />
      <Footer />
    </main>
  );
}
