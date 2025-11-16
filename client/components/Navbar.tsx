import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#15122e] border-b-4 border-[#f5c422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f5c422] transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative w-auto h-12 bg-white p-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=200"
                  alt="Vakruta"
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <p className="font-display text-2xl font-black text-[#f5c422] leading-none tracking-tight">
                VAKRUTA
              </p>
              <p className="font-cinzel text-[10px] uppercase tracking-[0.2em] text-[#388697]">
                NIT Rourkela
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
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
                {/* Hover Background */}
                <div className="absolute inset-0 bg-[#f5c422] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                {/* Text */}
                <span className="relative font-cinzel text-sm font-bold uppercase tracking-wider text-[#f3e8dc] group-hover:text-[#15122e] transition-colors duration-300">
                  {item.label}
                </span>

                {/* Bottom Line Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#388697] group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#388697] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative bg-[#f5c422] text-[#15122e] font-display font-black text-sm uppercase tracking-wider px-6 py-3 border-2 border-[#f5c422] group-hover:border-[#388697]">
                Register →
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center">
            <div className="w-full h-0.5 bg-[#f5c422]"></div>
            <div className="w-full h-0.5 bg-[#388697]"></div>
            <div className="w-full h-0.5 bg-[#f5c422]"></div>
          </button>
        </div>
      </div>

      {/* Decorative Bottom Strip */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#388697]"></div>
        <div className="flex-1 bg-[#f5c422]"></div>
        <div className="flex-1 bg-[#388697]"></div>
        <div className="flex-1 bg-[#f5c422]"></div>
      </div>
    </nav>
  );
}