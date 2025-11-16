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
                <span className="text-[#15122e] font-bold">IG</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#388697] pt-8">
          <div className="text-center">
            <p className="text-[#8EC4D9] font-cinzel text-sm">
              © 2024 Vakruta. All rights reserved.
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