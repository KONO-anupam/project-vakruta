import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#15122e] border-b-4 border-[#f5c422] relative">
      {/* Islamic Geometric Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="nav-pattern" x="0" y="0" width="60" height="8" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="15" height="8" fill="#388697" opacity="0.5" />
              <rect x="20" y="0" width="15" height="8" fill="#f5c422" opacity="0.5" />
              <rect x="40" y="0" width="15" height="8" fill="#388697" opacity="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section with Islamic Frame */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              {/* Islamic corner ornaments */}
              <div className="absolute -top-2 -left-2 w-6 h-6">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#f5c422]">
                  <path d="M 0,0 L 0,12 Q 0,0 12,0 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="4" cy="4" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#388697]">
                  <path d="M 24,0 L 24,12 Q 24,0 12,0 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="4" r="1.5" fill="currentColor" />
                </svg>
              </div>
              
              <div className="absolute inset-0 bg-[#f5c422] transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative w-auto h-12 bg-white p-2 border-2 border-[#388697]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=200"
                  alt="Vakruta"
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Bottom ornaments */}
              <div className="absolute -bottom-2 -left-2 w-6 h-6">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#388697]">
                  <path d="M 0,24 L 0,12 Q 0,24 12,24 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="4" cy="20" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6">
                <svg viewBox="0 0 24 24" className="w-full h-full text-[#f5c422]">
                  <path d="M 24,24 L 24,12 Q 24,24 12,24 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="20" cy="20" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="font-display text-2xl font-black text-[#f5c422] leading-none tracking-tight">
                VAKRUTA
              </p>
              <div className="flex items-center gap-2 mt-1">
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#388697]">
                  <path d="M 6,1 Q 3,1 3,6 Q 3,11 6,11 Q 5,11 5,6 Q 5,1 6,1 Z" fill="currentColor" />
                  <circle cx="8" cy="3" r="1" fill="currentColor" />
                </svg>
                <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#388697]">
                  NIT Rourkela
                </p>
                <svg width="12" height="12" viewBox="0 0 12 12" className="text-[#388697]">
                  <path d="M 6,1 Q 9,1 9,6 Q 9,11 6,11 Q 7,11 7,6 Q 7,1 6,1 Z" fill="currentColor" />
                  <circle cx="4" cy="3" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Navigation Links with Islamic Styling */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "statistics", label: "Legacy" },
              { id: "brochure", label: "Brochure" },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSection(item.id)}
                className="relative group px-6 py-3 overflow-hidden"
              >
                {/* Hover Background with Arabesque pattern */}
                <div className="absolute inset-0 bg-[#f5c422] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* Islamic geometric accent on hover */}
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path d="M 10,2 Q 6,2 6,10 Q 6,18 10,18 Q 8,18 8,10 Q 8,2 10,2 Z" fill="#15122e" opacity="0.2" />
                    <circle cx="14" cy="6" r="1.5" fill="#15122e" opacity="0.2" />
                  </svg>
                </div>

                {/* Text */}
                <span className="relative font-cinzel text-sm font-bold uppercase tracking-wider text-[#f3e8dc] group-hover:text-[#15122e] transition-colors duration-300">
                  {item.label}
                </span>

                {/* Bottom Islamic pattern accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
                  <div className="w-0 group-hover:w-full h-full transition-all duration-300 flex">
                    <div className="w-1/3 h-full bg-[#388697]"></div>
                    <div className="w-1/3 h-full bg-[#15122e]"></div>
                    <div className="w-1/3 h-full bg-[#388697]"></div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* CTA Button with Islamic Frame */}
          <div className="hidden lg:block">
            <button className="relative group overflow-hidden">
              {/* Outer Islamic border */}
              <div className="absolute -inset-1 border-2 border-[#388697] opacity-50"></div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-[#388697] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              {/* Main button */}
              <div className="relative bg-[#f5c422] text-[#15122e] font-display font-black text-sm uppercase tracking-wider px-6 py-3 border-2 border-[#f5c422] group-hover:border-[#388697] flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M 8,1 Q 5,1 5,8 Q 5,15 8,15 Q 6,15 6,8 Q 6,1 8,1 Z" />
                  <circle cx="11" cy="4" r="1.5" />
                </svg>
                Register
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M 8,1 Q 11,1 11,8 Q 11,15 8,15 Q 10,15 10,8 Q 10,1 8,1 Z" />
                  <circle cx="5" cy="4" r="1.5" />
                </svg>
              </div>

              {/* Corner ornaments */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#f5c422] opacity-50"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#388697] opacity-50"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#388697] opacity-50"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#f5c422] opacity-50"></div>
            </button>
          </div>

          {/* Mobile Menu Button with Islamic Pattern */}
          <button className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center group">
            <div className="w-full h-0.5 bg-[#f5c422] group-hover:bg-[#388697] transition-colors"></div>
            <div className="w-3/4 h-0.5 bg-[#388697] group-hover:bg-[#f5c422] transition-colors ml-auto"></div>
            <div className="w-full h-0.5 bg-[#f5c422] group-hover:bg-[#388697] transition-colors"></div>
          </button>
        </div>
      </div>

      {/* Decorative Bottom Strip - Islamic Zellige Pattern */}
      <div className="h-1 w-full flex">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`flex-1 ${i % 3 === 0 ? 'bg-[#388697]' : i % 3 === 1 ? 'bg-[#f5c422]' : 'bg-[#15122e]'} opacity-80`}
          ></div>
        ))}
      </div>

      {/* Bottom Islamic Border Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="nav-bottom" x="0" y="0" width="40" height="4" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="2" r="1" fill="#f5c422" opacity="0.6" />
            <circle cx="30" cy="2" r="1" fill="#388697" opacity="0.6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#nav-bottom)" />
        </svg>
      </div>
    </nav>
  );
}