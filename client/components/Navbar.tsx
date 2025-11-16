import { Link } from "react-router-dom";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#f3e8dc] border-b-2 border-[#e8dcc8] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-auto h-10  overflow-hidden bg-white p-1 shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=200"
                alt="Vakruta"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-[#15122e] font-cinzel font-semibold hover:text-[#f5c422] transition-colors text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#15122e] font-cinzel font-semibold hover:text-[#f5c422] transition-colors text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("statistics")}
              className="text-[#15122e] font-cinzel font-semibold hover:text-[#f5c422] transition-colors text-sm"
            >
              Statistics
            </button>
            <button
              onClick={() => scrollToSection("brochure")}
              className="text-[#15122e] font-cinzel font-semibold hover:text-[#f5c422] transition-colors text-sm"
            >
              Brochure
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
