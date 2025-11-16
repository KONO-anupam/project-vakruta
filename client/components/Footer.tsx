export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#15122e] to-[#0f0c22] text-white mt-0 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold text-[#f5c422] mb-4">
              About Vakruta
            </h3>
            <p className="text-[#d1e8f1] font-cinzel text-sm leading-relaxed">
              Inspired by the grandeur of Mughal architecture and timeless
              Indian traditions, Vakruta brings together innovation and
              heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold text-[#f5c422] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-[#d1e8f1] hover:text-[#f5c422] transition-colors font-cinzel cursor-pointer bg-none border-none p-0"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#d1e8f1] hover:text-[#f5c422] transition-colors font-cinzel cursor-pointer bg-none border-none p-0"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("statistics")}
                  className="text-[#d1e8f1] hover:text-[#f5c422] transition-colors font-cinzel cursor-pointer bg-none border-none p-0"
                >
                  Statistics
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold text-[#f5c422] mb-4">
              Connect With Us
            </h3>
            <p className="text-[#d1e8f1] font-cinzel text-sm">
              Join us in celebrating the spirit of Vakruta
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#f5c422] hover:bg-[#d4a913] rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5 text-[#15122e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#388697] pt-8">
          <div className="text-center">
            <p className="text-[#8EC4D9] font-cinzel text-sm">
              © 2026 Vakruta. All rights reserved.
            </p>
            <p className="text-[#8EC4D9] font-cinzel text-xs mt-2">
              Inspired by the legacy of Mughal Empire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}