import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#15122e] border-b-4 border-[#f5c422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
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
            
          </Link>

          {/* Desktop Nav Links */}
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
                <div className="absolute inset-0 bg-[#f5c422] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                <span className="relative font-cinzel text-sm font-bold uppercase tracking-wider text-[#f3e8dc] group-hover:text-[#15122e] transition-colors duration-300">
                  {item.label}
                </span>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#388697] group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-[#388697] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative bg-[#f5c422] text-[#15122e] font-display font-black text- uppercase tracking-wider px-6 py-3 border-2 border-[#f5c422] group-hover:border-[#388697]">
                Register →
              </div>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center z-[60]"
          >
            <div className={`w-full h-0.5 bg-[#f5c422] transition ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-full h-0.5 bg-[#388697] transition ${isOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-full h-0.5 bg-[#f5c422] transition ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Backdrop (close on click) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
        ></div>
      )}

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#15122e] border-l border-[#f5c422] transform transition-transform duration-300 md:hidden z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-start px-6 pt-28 gap-6">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "statistics", label: "Legacy" },
            { id: "brochure", label: "Brochure" },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => scrollToSection(item.id)}
              className="text-[#f3e8dc] font-cinzel text-lg uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}

          {/* CTA Button */}
          <button className="mt-4 bg-[#f5c422] text-[#15122e] w-full py-3 text-center font-black uppercase tracking-wider">
            Register →
          </button>
        </div>
      </div>

      {/* Decorative bottom strip */}
      <div className="h-1 w-full flex">
        <div className="flex-1 bg-[#388697]"></div>
        <div className="flex-1 bg-[#f5c422]"></div>
        <div className="flex-1 bg-[#388697]"></div>
        <div className="flex-1 bg-[#f5c422]"></div>
      </div>
    </nav>
  );
}