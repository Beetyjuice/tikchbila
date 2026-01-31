'use client';

import React from 'react';
import {
  BookOpen,
  FileText,
  GraduationCap,
  Database,
  Quote,
  Users,
  Building2,
  Lock,
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Journals',
    nameAr: 'المجلات',
    nameFr: 'Revues',
    icon: BookOpen,
    description: 'Diamond Open Access Journals',
    descAr: 'مجلات الوصول المفتوح الماسي',
    descFr: 'Revues Diamond Open Access',
    color: 'bg-secondary',
    position: 'top-0 left-1/2 -translate-x-1/2',
  },
  {
    id: 2,
    name: 'Articles',
    nameAr: 'المقالات',
    nameFr: 'Articles',
    icon: FileText,
    description: 'Research Articles Repository',
    descAr: 'مستودع المقالات البحثية',
    descFr: 'Dépôt des Articles de Recherche',
    color: 'bg-secondary',
    position: 'top-1/3 right-0 translate-x-12',
  },
  {
    id: 3,
    name: 'Guides',
    nameAr: 'الأدلة',
    nameFr: 'Guides',
    icon: BookOpen,
    description: 'Open Access Guides',
    descAr: 'أدلة الوصول المفتوح',
    descFr: 'Guides Open Access',
    color: 'bg-secondary',
    position: 'top-2/3 right-0 translate-x-12',
  },
  {
    id: 4,
    name: 'Editorial Support',
    nameAr: 'الدعم التحريري',
    nameFr: 'Accompagnement Éditorial',
    icon: Users,
    description: 'Publishing Support Services',
    descAr: 'خدمات دعم النشر',
    descFr: 'Services de Soutien Éditorial',
    color: 'bg-secondary',
    position: 'bottom-1/3 right-0 translate-x-12',
  },
  {
    id: 5,
    name: 'Indexing',
    nameAr: 'الفهرسة',
    nameFr: 'Indexation DOAJ',
    icon: Database,
    description: 'DOAJ Indexing Services',
    descAr: 'خدمات فهرسة DOAJ',
    descFr: 'Services d\'Indexation DOAJ',
    color: 'bg-secondary',
    position: 'bottom-0 right-1/3 translate-x-1/2',
  },
  {
    id: 6,
    name: 'Resources',
    nameAr: 'الموارد التعليمية',
    nameFr: 'Ressources Pédagogiques',
    icon: GraduationCap,
    description: 'Educational Resources',
    descAr: 'الموارد التعليمية',
    descFr: 'Ressources Éducatives',
    color: 'bg-secondary',
    position: 'bottom-1/3 left-0 -translate-x-12',
  },
  {
    id: 7,
    name: 'Regional Ecosystem',
    nameAr: 'النظام الإقليمي',
    nameFr: 'Écosystème Régional',
    icon: Building2,
    description: 'Regional Ecosystem',
    descAr: 'النظام الإقليمي للعلوم',
    descFr: 'Écosystème Régional',
    color: 'bg-secondary',
    position: 'top-2/3 left-0 -translate-x-12',
  },
  {
    id: 8,
    name: 'Visibility',
    nameAr: 'الرؤية الدولية',
    nameFr: 'Visibilité Internationale',
    icon: Lock,
    description: 'International Visibility',
    descAr: 'الرؤية الدولية',
    descFr: 'Visibilité Internationale',
    color: 'bg-secondary',
    position: 'top-1/3 left-0 -translate-x-12',
  },
];

export default function OctagonalHub() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Comprehensive support for Moroccan scientific research and open access publishing
          </p>
        </div>

        {/* Octagonal Hub with SVG Border */}
        <div className="flex justify-center items-center min-h-96">
          <div className="relative w-full max-w-4xl aspect-square">
            {/* SVG Octagonal Border */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid meet"
              style={{ zIndex: 1 }}
            >
              {/* Outer Border */}
              <path
                d="M 300,50 L 450,90 L 510,180 L 510,420 L 450,510 L 300,550 L 150,510 L 90,420 L 90,180 L 150,90 Z"
                fill="none"
                stroke="#2C4E5C"
                strokeWidth="6"
              />

              {/* Inner Border */}
              <path
                d="M 300,80 L 420,110 L 470,190 L 470,410 L 420,490 L 300,520 L 180,490 L 130,410 L 130,190 L 180,110 Z"
                fill="none"
                stroke="#A0563D"
                strokeWidth="4"
              />

              {/* Decorative Lines */}
              <line x1="300" y1="50" x2="300" y2="80" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="450" y1="90" x2="420" y2="110" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="510" y1="180" x2="470" y2="190" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="510" y1="420" x2="470" y2="410" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="450" y1="510" x2="420" y2="490" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="300" y1="550" x2="300" y2="520" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="150" y1="510" x2="180" y2="490" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="90" y1="420" x2="130" y2="410" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="90" y1="180" x2="130" y2="190" stroke="#2C4E5C" strokeWidth="4" />
              <line x1="150" y1="90" x2="180" y2="110" stroke="#2C4E5C" strokeWidth="4" />

              {/* Center Logo */}
              <circle cx="300" cy="300" r="50" fill="#F5F0E8" stroke="#2C4E5C" strokeWidth="3" />
              <text
                x="300"
                y="310"
                textAnchor="middle"
                fontSize="28"
                fontWeight="bold"
                fill="#A0563D"
                fontFamily="serif"
              >
                ADOPAH
              </text>
            </svg>

            {/* Service Cards Container */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
              <div className="relative w-full h-full">
                {/* Top Card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16">
                  <ServiceCard
                    service={services[0]}
                    isCenter={false}
                  />
                </div>

                {/* Right-Top Card */}
                <div className="absolute top-12 right-0 translate-x-20">
                  <ServiceCard
                    service={services[1]}
                    isCenter={false}
                  />
                </div>

                {/* Right-Upper-Middle Card */}
                <div className="absolute top-1/3 right-0 translate-x-20">
                  <ServiceCard
                    service={services[2]}
                    isCenter={false}
                  />
                </div>

                {/* Right-Bottom Card */}
                <div className="absolute bottom-1/3 right-0 translate-x-20">
                  <ServiceCard
                    service={services[3]}
                    isCenter={false}
                  />
                </div>

                {/* Bottom Card */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16">
                  <ServiceCard
                    service={services[4]}
                    isCenter={false}
                  />
                </div>

                {/* Left-Bottom Card */}
                <div className="absolute bottom-1/3 left-0 -translate-x-20">
                  <ServiceCard
                    service={services[5]}
                    isCenter={false}
                  />
                </div>

                {/* Left-Upper-Middle Card */}
                <div className="absolute top-1/3 left-0 -translate-x-20">
                  <ServiceCard
                    service={services[6]}
                    isCenter={false}
                  />
                </div>

                {/* Left-Top Card */}
                <div className="absolute top-12 left-0 -translate-x-20">
                  <ServiceCard
                    service={services[7]}
                    isCenter={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isCenter = false,
}: {
  service: (typeof services)[0];
  isCenter?: boolean;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`group cursor-pointer transition-all duration-300 ${
        isCenter ? 'w-24 h-24' : 'w-20 h-20'
      }`}
    >
      <div
        className={`${service.color} rounded-lg p-3 h-full flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl border-2 border-primary hover:-translate-y-2 transition-all`}
      >
        <Icon size={isCenter ? 32 : 24} className="mb-1" />
        <span className="text-xs font-bold text-center leading-tight">
          {service.name}
        </span>
      </div>
    </div>
  );
}
