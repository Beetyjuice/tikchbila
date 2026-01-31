'use client';

import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar' | 'fr'>('en');

  const navItems = {
    en: ['Home', 'Search', 'About', 'Contact'],
    ar: ['الرئيسية', 'البحث', 'حول المنصة', 'اتصل بنا'],
    fr: ['Accueil', 'Recherche', 'À Propos', 'Contact'],
  };

  const labels = {
    en: { title: 'Moroccan Scientific Platform', subtitle: 'Scientific Research Hub' },
    ar: { title: 'المنصة العلمية المغربية', subtitle: 'منصة البحث العلمي' },
    fr: { title: 'Plateforme Scientifique Marocaine', subtitle: 'Hub de Recherche Scientifique' },
  };

  return (
    <header className="sticky top-0 z-50 bg-muted border-b-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
              ✦
            </div>
            <div>
              <h1 className="text-base md:text-lg font-bold text-primary">{labels[language].title}</h1>
              <p className="text-xs text-foreground hidden sm:block">{labels[language].subtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems[language].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Search">
              <Search size={20} className="text-foreground" />
            </button>

            {/* Language Selector */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-white rounded-lg border-2 border-primary">
              {(['en', 'ar', 'fr'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                    language === lang
                      ? 'bg-primary text-white'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="User Account">
              <User size={20} className="text-foreground" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navItems[language].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
