'use client';

import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-background">
      {/* Animated Zellige Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Geometric Zellige Pattern */}
          <defs>
            <pattern id="zellige" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,0 120,30 120,90 60,120 0,90 0,30" fill="none" stroke="#2C4E5C" strokeWidth="2" opacity="0.4" />
              <circle cx="60" cy="60" r="20" fill="none" stroke="#A0563D" strokeWidth="1" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#zellige)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Main Heading */}
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-balance mb-4 text-primary">
              ADOPAH
            </h2>
            <p className="text-2xl text-balance text-secondary font-semibold mb-3">
              Platform for Moroccan Scientific Research
            </p>
            <p className="text-lg text-foreground">
              المنصة المغربية للبحث العلمي | North African Diamond Open Access Hub
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 px-6 bg-popover rounded-xl border-2 border-primary shadow-md">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">10K+</p>
              <p className="text-xs text-foreground mt-1">Research Papers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">500+</p>
              <p className="text-xs text-foreground mt-1">Journals</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">2.5K+</p>
              <p className="text-xs text-foreground mt-1">Researchers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">150+</p>
              <p className="text-xs text-foreground mt-1">Institutions</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
              Explore Hub
            </button>
            <button className="px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-6">
            <div className="animate-bounce">
              <ArrowDown className="text-primary" size={28} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
