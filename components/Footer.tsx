'use client';

export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] border-t border-[#C5B8A8] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#2C4E5C]">
            <a href="#" className="hover:text-[#A0563D] transition-colors">Contact Us</a>
            <a href="#" className="hover:text-[#A0563D] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#A0563D] transition-colors">Terms of Service</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
              { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z' },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-8 h-8 rounded-full bg-[#2C4E5C] text-white flex items-center justify-center hover:bg-[#A0563D] transition-colors"
                aria-label={social.label}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
