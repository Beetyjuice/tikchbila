'use client';

import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

export default function Header() {
  const [language, setLanguage] = useState<'en' | 'ar' | 'fr'>('fr');
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const langLabels = { en: 'English', ar: 'العربية', fr: 'Français' };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E8] border-b border-[#C5B8A8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 40 40" className="flex-shrink-0">
              <polygon
                points="20,2 26,8 26,16 20,22 14,16 14,8"
                fill="#2C4E5C"
                transform="rotate(0,20,20)"
              />
              <polygon
                points="20,2 26,8 26,16 20,22 14,16 14,8"
                fill="#A0563D"
                transform="rotate(90,20,20)"
              />
              <polygon
                points="20,2 26,8 26,16 20,22 14,16 14,8"
                fill="#2C4E5C"
                transform="rotate(180,20,20)"
              />
              <polygon
                points="20,2 26,8 26,16 20,22 14,16 14,8"
                fill="#A0563D"
                transform="rotate(270,20,20)"
              />
              <circle cx="20" cy="20" r="5" fill="#F5F0E8" />
            </svg>
            <span className="text-xl font-bold text-[#2C4E5C] tracking-wide">ADOAH</span>
            <span className="hidden sm:inline text-xs text-[#A0563D] ml-1">
              North African Diamond Open Access Hub
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#A0563D] text-sm text-[#A0563D] hover:bg-[#A0563D]/10 transition-colors"
              >
                <Globe size={16} />
                <span className="hidden sm:inline">{langLabels[language]}</span>
                <span className="sm:hidden">{language.toUpperCase()}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 bg-white rounded shadow-lg border border-[#C5B8A8] overflow-hidden z-50">
                  {(['en', 'ar', 'fr'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#F5F0E8] transition-colors ${
                        language === lang ? 'bg-[#2C4E5C] text-white' : 'text-[#3D3D3D]'
                      }`}
                    >
                      {langLabels[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden p-2 text-[#2C4E5C]"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
