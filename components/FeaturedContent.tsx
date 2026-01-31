'use client';

import { Heart, Share2, Download } from 'lucide-react';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  authors: string;
  journal: string;
  date: string;
  category: string;
  views: number;
  abstract: string;
  color: string;
}

const featuredArticles: Article[] = [
  {
    id: 1,
    title: 'Advanced Machine Learning Applications in Moroccan Agriculture',
    authors: 'Dr. Fatima Al-Mansouri, Prof. Ahmed Bennani',
    journal: 'International Journal of Agricultural Technology',
    date: 'January 2024',
    category: 'Agriculture & AI',
    views: 3421,
    abstract: 'This paper explores the implementation of machine learning algorithms to optimize crop yield in semi-arid regions...',
    color: '#1E5AAD',
  },
  {
    id: 2,
    title: 'Sustainable Water Management in North African Systems',
    authors: 'Dr. Mariam El-Ouazzani, Dr. Hassan Kabbab',
    journal: 'Water Research Today',
    date: 'December 2023',
    category: 'Environmental Science',
    views: 2856,
    abstract: 'A comprehensive study on sustainable water management practices implemented across Moroccan basins...',
    color: '#0D7377',
  },
  {
    id: 3,
    title: 'Cultural Heritage Preservation Through Digital Humanities',
    authors: 'Prof. Yasmine Berber, Dr. Karim Aziz',
    journal: 'Digital Studies Quarterly',
    date: 'November 2023',
    category: 'Digital Humanities',
    views: 2143,
    abstract: 'Examining innovative approaches to preserving Moroccan cultural heritage through digital archiving...',
    color: '#D4781F',
  },
  {
    id: 4,
    title: 'Renewable Energy Infrastructure Development in Morocco',
    authors: 'Dr. Nadia Chakir, Prof. Mohammed Saeed',
    journal: 'Energy & Sustainability',
    date: 'October 2023',
    category: 'Energy Studies',
    views: 5234,
    abstract: 'Analysis of Morocco\'s renewable energy initiatives and their impact on regional development...',
    color: '#2D6A4F',
  },
];

export default function FeaturedContent() {
  const [likedArticles, setLikedArticles] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedArticles((prev) =>
      prev.includes(id) ? prev.filter((aid) => aid !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Research
          </h2>
          <p className="text-xl text-muted-foreground mb-2">البحث المميز</p>
          <p className="text-lg text-muted-foreground">
            Explore the latest groundbreaking research from Moroccan and African scholars
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredArticles.map((article, idx) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Color accent bar */}
              <div className="h-1" style={{ backgroundColor: article.color }}></div>

              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-block px-3 py-1 text-xs font-bold text-white rounded-full"
                    style={{ backgroundColor: article.color }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Authors */}
                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">{article.authors}</p>

                {/* Journal */}
                <p className="text-sm font-semibold text-foreground mb-4" style={{ color: article.color }}>
                  {article.journal}
                </p>

                {/* Abstract */}
                <p className="text-sm text-foreground mb-6 line-clamp-3">{article.abstract}</p>

                {/* Metadata */}
                <div className="flex items-center gap-4 mb-6 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">{article.views} views</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleLike(article.id)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-foreground hover:bg-secondary hover:text-white transition-colors"
                  >
                    <Heart
                      size={18}
                      fill={likedArticles.includes(article.id) ? 'currentColor' : 'none'}
                      className={likedArticles.includes(article.id) ? 'text-red-500' : ''}
                    />
                    <span className="text-xs font-medium">Like</span>
                  </button>

                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-foreground hover:bg-primary hover:text-white transition-colors">
                    <Share2 size={18} />
                    <span className="text-xs font-medium">Share</span>
                  </button>

                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-foreground hover:bg-accent hover:text-white transition-colors ml-auto">
                    <Download size={18} />
                    <span className="text-xs font-medium">PDF</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-xl transition-all hover:-translate-y-1">
            View All Research
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
