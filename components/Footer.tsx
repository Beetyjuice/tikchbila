'use client';

import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    services: ['Journals', 'Articles', 'Thesis', 'Data Repository', 'Citations', 'Researchers'],
    resources: ['Guidelines', 'Help Center', 'FAQ', 'Documentation', 'API Reference'],
    about: ['About Us', 'Mission', 'Team', 'Partners', 'Careers'],
    legal: ['Privacy Policy', 'Terms of Service', 'Contact', 'Newsletter'],
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                ✦
              </div>
              <div>
                <h3 className="font-bold text-lg">ADOPAH</h3>
                <p className="text-xs text-blue-100">Open Access Hub</p>
              </div>
            </div>
            <p className="text-sm text-blue-100 mb-6 leading-relaxed">
              Advancing scientific research and knowledge sharing across Morocco and North Africa.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span>North Africa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span>+212 XXX XX XX XX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span>info@adopah.ma</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-blue-100 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-blue-100 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm text-blue-100 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-blue-100 mb-4">
              Subscribe to get updates on latest research
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 text-sm focus:outline-none focus:border-secondary"
              />
              <button className="px-4 py-2 bg-secondary text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
                →
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-xs text-blue-100">Follow us on social media</p>
              <div className="flex gap-4">
                {['f', 't', 'in', 'g'].map((platform, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-white/20 hover:bg-secondary text-white flex items-center justify-center text-sm font-bold transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-xs text-blue-100 hover:text-secondary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-right">
              <p className="text-xs text-blue-100">
                © 2024 ADOPAH - North African Diamond Open Access Hub. All rights reserved.
              </p>
              <p className="text-xs text-blue-100 mt-1">
                جميع الحقوق محفوظة © 2024 ADOPAH
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/30 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-gray-400">
                Made with ✦ for scientific advancement
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>المنصة العلمية المغربية</span>
                <span>•</span>
                <span>Supporting Open Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
