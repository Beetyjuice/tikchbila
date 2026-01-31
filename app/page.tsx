'use client';

import Header from '@/components/Header';
import OctagonalHub from '@/components/OctagonalHub';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F0E8]">
      <Header />
      <OctagonalHub />
      <Footer />
    </main>
  );
}
