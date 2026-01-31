'use client';

import React from "react"

import { Newspaper, BookOpen, Scroll, Database, TrendingUp, Users, Building2, Lock } from 'lucide-react';

interface Service {
  id: number;
  icon: React.ReactNode;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  color: string;
  bgColor: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Newspaper size={40} />,
    titleEn: 'Journals',
    titleAr: 'المجلات',
    descEn: 'Access scientific journals and publications',
    descAr: 'الوصول إلى المجلات العلمية والمنشورات',
    color: '#1E5AAD',
    bgColor: '#E8F2FB',
  },
  {
    id: 2,
    icon: <BookOpen size={40} />,
    titleEn: 'Articles',
    titleAr: 'المقالات',
    descEn: 'Browse latest research articles',
    descAr: 'تصفح أحدث المقالات البحثية',
    color: '#0D7377',
    bgColor: '#E0F4F3',
  },
  {
    id: 3,
    icon: <Scroll size={40} />,
    titleEn: 'Thesis',
    titleAr: 'الأطروحات',
    descEn: 'Discover dissertations and theses',
    descAr: 'اكتشف الأطروحات والدراسات العليا',
    color: '#D4781F',
    bgColor: '#FDF3E8',
  },
  {
    id: 4,
    icon: <Database size={40} />,
    titleEn: 'Data',
    titleAr: 'البيانات',
    descEn: 'Access research datasets and repositories',
    descAr: 'الوصول إلى قواعد بيانات البحث',
    color: '#1E5AAD',
    bgColor: '#E8F2FB',
  },
  {
    id: 5,
    icon: <TrendingUp size={40} />,
    titleEn: 'Citations',
    titleAr: 'الاستشهادات',
    descEn: 'Track citations and research metrics',
    descAr: 'تتبع الاستشهادات والمقاييس',
    color: '#2D6A4F',
    bgColor: '#E8F3ED',
  },
  {
    id: 6,
    icon: <Users size={40} />,
    titleEn: 'Researchers',
    titleAr: 'الباحثون',
    descEn: 'Connect with research community',
    descAr: 'التواصل مع مجتمع الباحثين',
    color: '#0D7377',
    bgColor: '#E0F4F3',
  },
  {
    id: 7,
    icon: <Building2 size={40} />,
    titleEn: 'Institutions',
    titleAr: 'المؤسسات',
    descEn: 'Explore partner universities and centers',
    descAr: 'استكشاف الجامعات والمراكز الشريكة',
    color: '#D4781F',
    bgColor: '#FDF3E8',
  },
  {
    id: 8,
    icon: <Lock size={40} />,
    titleEn: 'Open Access',
    titleAr: 'الوصول المفتوح',
    descEn: 'Free and open research resources',
    descAr: 'الموارد البحثية المفتوحة والمجانية',
    color: '#8B0A1A',
    bgColor: '#FCE8EA',
  },
];

export default function ZeligeHub() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-muted-foreground mb-2">استكشف خدماتنا</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Navigate through eight interconnected services designed to support your research journey
          </p>
        </div>

        {/* Zellige Hub Grid - 8 Services */}
        <div className="relative">
          {/* Animated Center Zellige Pattern */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="w-64 h-64 md:w-96 md:h-96 opacity-10" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="zelligeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E5AAD" />
                  <stop offset="50%" stopColor="#0D7377" />
                  <stop offset="100%" stopColor="#D4781F" />
                </linearGradient>
              </defs>
              {/* 8-pointed star */}
              <g fill="url(#zelligeGrad)">
                <polygon points="200,50 250,150 200,200 150,150" />
                <polygon points="200,200 250,250 200,350 150,250" />
                <polygon points="50,200 150,250 200,200 150,150" />
                <polygon points="350,200 250,250 200,200 250,150" />
                <polygon points="100,100 150,150 200,100 150,50" />
                <polygon points="300,100 350,150 300,200 250,150" />
                <polygon points="300,300 250,250 300,200 350,250" />
                <polygon points="100,300 150,250 100,200 150,250" />
              </g>
            </svg>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="group cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div
                  className={`h-full p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                  style={{
                    backgroundColor: service.bgColor,
                    borderColor: service.color,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ color: service.color, backgroundColor: '#FFFFFF' }}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: service.color }}
                  >
                    {service.titleEn}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: service.color }}>
                    {service.titleAr}
                  </p>
                  <p className="text-sm text-foreground mb-4">{service.descEn}</p>
                  <p className="text-xs text-muted-foreground">{service.descAr}</p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: service.color }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
