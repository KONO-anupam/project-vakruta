import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const statsCardsRef = useRef<HTMLDivElement>(null);
  const brochureHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Minimal hero animation on page load
    gsap.from(heroHeadingRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power2.out",
    });

    gsap.from(heroParagraphRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 0.1,
      ease: "power2.out",
    });

    gsap.from(heroImageRef.current, {
      duration: 0.8,
      opacity: 0,
      scale: 0.95,
      delay: 0.2,
      ease: "power2.out",
    });

    // Subtle scroll animations
    gsap.from(aboutHeadingRef.current, {
      scrollTrigger: {
        trigger: aboutHeadingRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
      duration: 0.6,
      opacity: 0,
      y: 15,
      ease: "power2.out",
    });

    gsap.from(statsCardsRef.current?.children, {
      scrollTrigger: {
        trigger: statsCardsRef.current,
        start: "top 85%",
      },
      duration: 0.5,
      opacity: 0,
      y: 10,
      stagger: 0.05,
      ease: "power2.out",
    });

    gsap.from(brochureHeadingRef.current, {
      scrollTrigger: {
        trigger: brochureHeadingRef.current,
        start: "top 80%",
      },
      duration: 0.6,
      opacity: 0,
      y: 15,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f3e8dc] flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="flex-1 relative overflow-hidden py-20 md:py-32 bg-[#f3e8dc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <h1
              ref={heroHeadingRef}
              className="font-display text-5xl md:text-7xl font-bold text-[#f5c422] mb-6 leading-tight"
            >
              Welcome to
              <br />
              <span className="text-[#f5c422]">Vakruta</span>
            </h1>
            <p
              ref={heroParagraphRef}
              className="font-cinzel text-lg md:text-xl text-[#15122e] mb-8 leading-relaxed max-w-lg"
            >
              Discover the magnificence of Indian heritage through a celebration of tradition,
              innovation, and timeless elegance inspired by the grandeur of the Mughal Empire.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#388697] hover:bg-[#2a6a7e] text-white font-cinzel font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg">
                Explore More
              </button>
              <button className="border-2 border-[#388697] text-[#388697] hover:bg-[#388697] hover:text-white font-cinzel font-semibold px-8 py-3 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div ref={heroImageRef} className="flex-1 relative">
            <div className="relative w-full h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-900/10 shadow-lg">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=400"
                  alt="Vakruta Pattern"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#f5c422]/20 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-5 w-24 h-24 border border-[#8EC4D9]/20 rounded-lg opacity-20 transform rotate-45"></div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32 bg-[#f3e8dc] border-t border-[#e8dcc8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              ref={aboutHeadingRef}
              className="font-display text-5xl md:text-6xl font-bold text-[#f5c422] mb-4"
            >
              About Vakruta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#faf7f4] rounded-2xl p-8 border border-[#e8dcc8] shadow-md">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                alt="Indian Architecture"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6">
              <p className="font-cinzel text-lg text-[#15122e] leading-relaxed">
                Vakruta stands as a testament to the rich cultural heritage of India, drawing
                inspiration from the magnificent Mughal Empire. Our mission is to celebrate the
                artistic excellence, architectural grandeur, and timeless traditions that have
                shaped Indian civilization.
              </p>

              <p className="font-cinzel text-lg text-[#15122e] leading-relaxed">
                We bring together scholars, artisans, and enthusiasts who appreciate the intricate
                craftsmanship, elaborate geometric patterns, and profound symbolism that characterize
                Mughal art and architecture.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-[#e8f3f7] rounded-lg p-4 text-center border-l-4 border-[#388697]">
                  <p className="font-display text-2xl font-bold text-[#15122e]">1000+</p>
                  <p className="font-cinzel text-sm text-[#388697]">Members</p>
                </div>
                <div className="bg-[#e8f3f7] rounded-lg p-4 text-center border-l-4 border-[#388697]">
                  <p className="font-display text-2xl font-bold text-[#15122e]">50+</p>
                  <p className="font-cinzel text-sm text-[#388697]">Events</p>
                </div>
                <div className="bg-[#e8f3f7] rounded-lg p-4 text-center border-l-4 border-[#388697]">
                  <p className="font-display text-2xl font-bold text-[#15122e]">25</p>
                  <p className="font-cinzel text-sm text-[#388697]">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Statistics Section */}
      <section id="statistics" className="py-20 md:py-32 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-blue-900 mb-4">
              Our Legacy
            </h2>
            <p className="font-cinzel text-xl text-blue-800">
              Celebrating Years of Excellence and Growth
            </p>
          </div>

          <div ref={statsCardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "2025", label: "Registrations", value: "2,847", icon: "" },
              { year: "2025", label: "Sponsorships", value: "₹1.8 Cr", icon: "" },
            ].map((stat, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-amber-600/5 rounded-2xl group-hover:from-blue-900/10 group-hover:to-amber-600/10 transition-all"></div>
                <div className="relative bg-white rounded-2xl p-8 border border-blue-100 shadow-md hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <p className="font-cinzel text-sm text-blue-700 uppercase tracking-wider">
                    {stat.year} - {stat.label}
                  </p>
                  <p className="font-display text-4xl font-bold text-blue-900 mt-2">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section id="brochure" className="py-20 md:py-32 bg-white border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2
              ref={brochureHeadingRef}
              className="font-display text-5xl md:text-6xl font-bold text-blue-900 mb-6"
            >
              Discover Our Brochure
            </h2>
            <p className="font-cinzel text-lg text-blue-800 max-w-2xl">
              Explore the complete story of Vakruta through our comprehensive brochure,
              featuring detailed information about our heritage, achievements, and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Logo Showcase */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-amber-400/15 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white rounded-3xl p-12 shadow-lg border-2 border-amber-500">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F2b1a5895495e4fb98781781147a0dfc0?format=webp&width=600"
                    alt="Vakruta Logo"
                    className="w-80 h-80 object-contain mx-auto"
                  />
                  <p className="text-center font-cinzel text-blue-900 font-semibold mt-6">
                    Vakruta - Symbol of Heritage
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Brochure Info */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="font-display text-2xl font-bold text-blue-900 mb-4">
                  What's Inside
                </h3>
                <ul className="space-y-4 font-cinzel text-blue-800">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Complete History and Heritage of Vakruta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Detailed Architectural and Artistic Inspirations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Member Benefits and Opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Sponsorship and Partnership Programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-xl">✦</span>
                    <span>Upcoming Events and Initiatives</span>
                  </li>
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-700 text-white font-display text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105">
                Download Brochure
              </button>

              <p className="text-center font-cinzel text-sm text-blue-700">
                PDF format • 5.2 MB • Available in English & Hindi
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className = 'flex flex-col'>
      {/* Gradient Section at Bottom */}
      <section className="relative min-h-96 md:min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1400"
            alt="Gradient Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Multi-layer gradient overlay for aesthetic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/95 via-blue-100/50 to-transparent"></div>

        {/* Decorative gradient elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/20 to-transparent rounded-full blur-3xl -mr-48 -mb-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center w-full">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
            Join the Vakruta Movement
          </h2>
          <p className="font-cinzel text-lg md:text-xl text-blue-800 max-w-3xl mx-auto mb-12 leading-relaxed">
            Be part of a growing community dedicated to preserving and celebrating
            the magnificent heritage of Indian civilization. Together, we honor the legacy
            of Mughal artistry and timeless cultural traditions.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-display font-bold text-lg px-12 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105">
            Get Involved Today
          </button>
        </div>
      </section>

        <Footer />
      </div>
    </div>
  );
}
