'use client';

import React from 'react';

const services = [
  { id: 0, name: 'Répertoire\nInstitutionnel', nameEn: 'Institutional\nRepository', nameAr: 'المستودع\nالمؤسسي', color: '#A0563D' },
  { id: 1, name: 'Diamond\nOpen Access', nameEn: 'Diamond\nOpen Access', nameAr: 'الوصول المفتوح\nالماسي', color: '#2C4E5C' },
  { id: 2, name: 'Quality &\nOpen Peer Review', nameEn: 'Quality &\nOpen Peer Review', nameAr: 'مراجعة الأقران\nالمفتوحة', color: '#A0563D' },
  { id: 3, name: 'Indexation\nServices', nameEn: 'Indexation\nServices', nameAr: 'خدمات\nالفهرسة', color: '#2C4E5C' },
  { id: 4, name: 'Indicateurs\nBibliométriques', nameEn: 'Bibliometric\nIndicators', nameAr: 'المؤشرات\nالبيبليومترية', color: '#A0563D' },
  { id: 5, name: 'Ressources\nPédagogiques', nameEn: 'Educational\nResources', nameAr: 'الموارد\nالتعليمية', color: '#2C4E5C' },
  { id: 6, name: 'Écosystème\nRégional', nameEn: 'Regional\nEcosystem', nameAr: 'النظام الإقليمي\nللعلوم', color: '#A0563D' },
  { id: 7, name: 'Visibilité\nInternationale', nameEn: 'International\nVisibility', nameAr: 'الرؤية\nالدولية', color: '#2C4E5C' },
];

// Positions for 8 service boxes around the star (x, y) in percentage of container
// Arranged: top, top-right, right, bottom-right, bottom, bottom-left, left, top-left
const positions = [
  { x: 50, y: 3 },    // top center
  { x: 85, y: 18 },   // top right
  { x: 92, y: 50 },   // right
  { x: 85, y: 82 },   // bottom right
  { x: 50, y: 97 },   // bottom center
  { x: 15, y: 82 },   // bottom left
  { x: 8, y: 50 },    // left
  { x: 15, y: 18 },   // top left
];

export default function OctagonalHub() {
  return (
    <section className="relative flex-1 flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden">
      {/* Subtle background arabesque pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arabesque" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#2C4E5C" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="18" fill="none" stroke="#A0563D" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="15" fill="none" stroke="#2C4E5C" strokeWidth="0.5" />
              <circle cx="80" cy="0" r="15" fill="none" stroke="#2C4E5C" strokeWidth="0.5" />
              <circle cx="0" cy="80" r="15" fill="none" stroke="#2C4E5C" strokeWidth="0.5" />
              <circle cx="80" cy="80" r="15" fill="none" stroke="#2C4E5C" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="70" y2="70" stroke="#A0563D" strokeWidth="0.3" />
              <line x1="70" y1="10" x2="10" y2="70" stroke="#A0563D" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arabesque)" />
        </svg>
      </div>

      <div className="relative w-full max-w-[700px] aspect-square mx-auto">
        {/* Moroccan 8-pointed star SVG */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <clipPath id="starClip">
              <polygon points="250,60 290,160 390,110 330,210 440,250 330,290 390,390 290,340 250,440 210,340 110,390 170,290 60,250 170,210 110,110 210,160" />
            </clipPath>
          </defs>

          {/* Outer decorative border - 8-pointed star */}
          <polygon
            points="250,45 295,155 400,100 335,205 455,250 335,295 400,400 295,345 250,455 205,345 100,400 165,295 45,250 165,205 100,100 205,155"
            fill="none"
            stroke="#2C4E5C"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Inner star fill */}
          <polygon
            points="250,60 290,160 390,110 330,210 440,250 330,290 390,390 290,340 250,440 210,340 110,390 170,290 60,250 170,210 110,110 210,160"
            fill="#D4C5B0"
            stroke="#A0563D"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Inner octagon */}
          <polygon
            points="250,130 320,170 350,250 320,330 250,370 180,330 150,250 180,170"
            fill="#F5F0E8"
            stroke="#2C4E5C"
            strokeWidth="2"
          />

          {/* Decorative inner pattern lines */}
          <line x1="250" y1="130" x2="250" y2="60" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="320" y1="170" x2="390" y2="110" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="350" y1="250" x2="440" y2="250" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="320" y1="330" x2="390" y2="390" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="250" y1="370" x2="250" y2="440" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="180" y1="330" x2="110" y2="390" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="150" y1="250" x2="60" y2="250" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />
          <line x1="180" y1="170" x2="110" y2="110" stroke="#2C4E5C" strokeWidth="1" opacity="0.4" />

          {/* Center circle with ADOAH */}
          <circle cx="250" cy="250" r="52" fill="#F5F0E8" stroke="#2C4E5C" strokeWidth="2" />
          <circle cx="250" cy="250" r="44" fill="#F5F0E8" stroke="#A0563D" strokeWidth="1.5" />
          <text
            x="250"
            y="256"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="22"
            fontWeight="bold"
            fill="#2C4E5C"
            fontFamily="serif"
            letterSpacing="2"
          >
            ADOAH
          </text>
        </svg>

        {/* Service boxes positioned around the star */}
        {services.map((service, idx) => (
          <div
            key={service.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
            style={{
              left: `${positions[idx].x}%`,
              top: `${positions[idx].y}%`,
            }}
          >
            <div
              className="rounded-md px-2 py-1.5 sm:px-3 sm:py-2 text-white text-center shadow-md
                         hover:shadow-lg hover:scale-105 transition-all duration-200 min-w-[80px] sm:min-w-[110px]"
              style={{ backgroundColor: service.color }}
            >
              <span className="text-[9px] sm:text-[11px] font-semibold leading-tight whitespace-pre-line block">
                {service.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
