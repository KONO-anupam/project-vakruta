import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Islamic Geometric Pattern Background
const IslamicPattern = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Complex Islamic Star Pattern */}
      <div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(245, 196, 34, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(56, 134, 151, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 100% 100%, rgba(245, 196, 34, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 60px 60px, 50px 50px',
          backgroundPosition: '0 0, 20px 20px, 10px 10px'
        }}
      />
      {/* Interlocking circles (common in Islamic art) */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="islamic-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#388697" strokeWidth="1.5" />
              <circle cx="40" cy="40" r="20" fill="none" stroke="#f5c422" strokeWidth="1" />
              <circle cx="40" cy="40" r="10" fill="none" stroke="#388697" strokeWidth="0.5" />
              <path d="M 40,10 L 45,30 L 65,30 L 50,42 L 55,62 L 40,50 L 25,62 L 30,42 L 15,30 L 35,30 Z"
                fill="none" stroke="#f5c422" strokeWidth="0.8" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-circles)" />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default function Index() {
  const heroHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const aboutHeadingRef = useRef<HTMLHeadingElement>(null);
  const aboutImageRef = useRef<HTMLDivElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const statsCardsRef = useRef<HTMLDivElement>(null);
  const brochureHeadingRef = useRef<HTMLHeadingElement>(null);
  const brochureLeftRef = useRef<HTMLDivElement>(null);
  const brochureRightRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroTimeline = () => {
      if (
        !heroHeadingRef.current ||
        !heroParagraphRef.current ||
        !heroImageRef.current
      )
        return;

      setTimeout(() => {
        if (heroHeadingRef.current) {
          heroHeadingRef.current.style.transition = "all 0.8s ease-out";
          heroHeadingRef.current.style.opacity = "1";
          heroHeadingRef.current.style.transform = "translateY(0)";
        }
      }, 100);

      setTimeout(() => {
        if (heroParagraphRef.current) {
          heroParagraphRef.current.style.transition = "all 0.8s ease-out";
          heroParagraphRef.current.style.opacity = "1";
          heroParagraphRef.current.style.transform = "translateY(0)";
        }
      }, 300);

      setTimeout(() => {
        if (heroImageRef.current) {
          heroImageRef.current.style.transition = "all 0.8s ease-out";
          heroImageRef.current.style.opacity = "1";
          heroImageRef.current.style.transform = "translateY(0)";
        }
      }, 500);
    };

    heroTimeline();

    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px",
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (aboutHeadingRef.current) {
            aboutHeadingRef.current.style.transition = "all 0.8s ease-out";
            aboutHeadingRef.current.style.opacity = "1";
            aboutHeadingRef.current.style.transform = "translateY(0)";
          }

          setTimeout(() => {
            if (aboutImageRef.current) {
              aboutImageRef.current.style.transition = "all 0.8s ease-out";
              aboutImageRef.current.style.opacity = "1";
              aboutImageRef.current.style.transform = "translateY(0)";
            }
          }, 200);

          setTimeout(() => {
            if (aboutTextRef.current) {
              aboutTextRef.current.style.transition = "all 0.8s ease-out";
              aboutTextRef.current.style.opacity = "1";
              aboutTextRef.current.style.transform = "translateY(0)";
            }
          }, 300);
        }
      });
    }, observerOptions);

    if (aboutHeadingRef.current) aboutObserver.observe(aboutHeadingRef.current);

    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && statsCardsRef.current) {
          const cards = statsCardsRef.current.children;
          Array.from(cards).forEach((card, i) => {
            setTimeout(() => {
              (card as HTMLElement).style.transition = "all 0.7s ease-out";
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      });
    }, observerOptions);

    if (statsCardsRef.current) statsObserver.observe(statsCardsRef.current);

    const brochureObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (brochureHeadingRef.current) {
            brochureHeadingRef.current.style.transition = "all 0.8s ease-out";
            brochureHeadingRef.current.style.opacity = "1";
            brochureHeadingRef.current.style.transform = "translateY(0)";
          }

          setTimeout(() => {
            if (brochureLeftRef.current) {
              brochureLeftRef.current.style.transition = "all 0.8s ease-out";
              brochureLeftRef.current.style.opacity = "1";
              brochureLeftRef.current.style.transform = "translateY(0)";
            }
          }, 200);

          setTimeout(() => {
            if (brochureRightRef.current) {
              brochureRightRef.current.style.transition = "all 0.8s ease-out";
              brochureRightRef.current.style.opacity = "1";
              brochureRightRef.current.style.transform = "translateY(0)";
            }
          }, 300);
        }
      });
    }, observerOptions);

    if (brochureHeadingRef.current)
      brochureObserver.observe(brochureHeadingRef.current);

    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && ctaSectionRef.current) {
          const section = ctaSectionRef.current;
          section.style.transition = "all 1s ease-out";
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    if (ctaSectionRef.current) ctaObserver.observe(ctaSectionRef.current);

    return () => {
      aboutObserver.disconnect();
      statsObserver.disconnect();
      brochureObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f3e8dc]">
      <Navbar />

      {/* Hero Section - Authentic Islamic Architecture */}
      <section id="hero" className="relative overflow-hidden pt-16 pb-12">
        {/* Complex Zellige Tilework Pattern */}
        <div className="absolute inset-0 opacity-8">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="zellige-tile" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Central 8-point star */}
                <path d="M 60,20 L 65,35 L 80,35 L 67,45 L 72,60 L 60,50 L 48,60 L 53,45 L 40,35 L 55,35 Z"
                  fill="#f5c422" opacity="0.15" />
                {/* Interlocking geometric pattern */}
                <path d="M 60,0 L 80,20 L 100,20 L 120,40 L 120,60 L 100,80 L 80,80 L 60,100 L 40,80 L 20,80 L 0,60 L 0,40 L 20,20 L 40,20 Z"
                  fill="none" stroke="#388697" strokeWidth="1" opacity="0.2" />
                <circle cx="60" cy="60" r="25" fill="none" stroke="#f5c422" strokeWidth="1.5" opacity="0.1" />
                <circle cx="60" cy="60" r="15" fill="none" stroke="#388697" strokeWidth="1" opacity="0.15" />
                {/* Kufic-inspired angular lines */}
                <path d="M 30,30 L 45,30 L 45,45 L 60,45 L 60,30 L 75,30 L 75,45 L 90,45 L 90,60 L 75,60 L 75,75 L 60,75 L 60,90 L 45,90 L 45,75 L 30,75 L 30,60 L 45,60 L 45,45 L 30,45 Z"
                  fill="none" stroke="#388697" strokeWidth="0.8" opacity="0.12" />
              </pattern>

              {/* Arabesque flowing pattern */}
              
            </defs>
            <rect width="100%" height="100%" fill="url(#zellige-tile)" />
            <rect width="100%" height="100%" fill="url(#arabesque)" />
          </svg>
        </div>

        {/* Muqarnas (honeycomb vaulting) inspired overlay */}
        <div className="absolute inset-0 opacity-6">
          <svg className="w-full h-full">
            <defs>
              <pattern id="muqarnas" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <polygon points="50,10 60,30 50,50 40,30" fill="none" stroke="#388697" strokeWidth="1.2" opacity="0.4" />
                <polygon points="50,50 60,70 50,90 40,70" fill="none" stroke="#f5c422" strokeWidth="1" opacity="0.3" />
                <polygon points="10,30 30,30 30,50 10,50" fill="none" stroke="#388697" strokeWidth="0.8" opacity="0.3" />
                <polygon points="70,30 90,30 90,50 70,50" fill="none" stroke="#f5c422" strokeWidth="0.8" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#muqarnas)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
            {/* Left: Title & Description */}
            <div className="text-center md:text-left">
              {/* Bismillah-inspired Ornamental Header */}
             
              {/* Main Title with Mashrabiya Lattice Frame */}
              <div className="relative inline-block mb-6">
                {/* Mashrabiya-inspired geometric corners */}
                <div className="absolute -top-6 -left-6 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M 0,0 L 0,32 Q 0,0 32,0 Z" fill="none" stroke="#f5c422" strokeWidth="3" />
                    <path d="M 4,4 L 4,28 Q 4,4 28,4" fill="none" stroke="#f5c422" strokeWidth="1.5" />
                    <circle cx="8" cy="8" r="2" fill="#f5c422" />
                    <circle cx="16" cy="8" r="1.5" fill="#f5c422" />
                    <circle cx="8" cy="16" r="1.5" fill="#f5c422" />
                    <path d="M 0,16 L 16,0 M 0,32 L 32,0" stroke="#388697" strokeWidth="0.5" opacity="0.5" />
                  </svg>
                </div>
                <div className="absolute -top-6 -right-6 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M 64,0 L 64,32 Q 64,0 32,0 Z" fill="none" stroke="#388697" strokeWidth="3" />
                    <path d="M 60,4 L 60,28 Q 60,4 36,4" fill="none" stroke="#388697" strokeWidth="1.5" />
                    <circle cx="56" cy="8" r="2" fill="#388697" />
                    <circle cx="48" cy="8" r="1.5" fill="#388697" />
                    <circle cx="56" cy="16" r="1.5" fill="#388697" />
                    <path d="M 64,16 L 48,0 M 64,32 L 32,0" stroke="#f5c422" strokeWidth="0.5" opacity="0.5" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M 0,64 L 0,32 Q 0,64 32,64 Z" fill="none" stroke="#388697" strokeWidth="3" />
                    <path d="M 4,60 L 4,36 Q 4,60 28,60" fill="none" stroke="#388697" strokeWidth="1.5" />
                    <circle cx="8" cy="56" r="2" fill="#388697" />
                    <circle cx="16" cy="56" r="1.5" fill="#388697" />
                    <circle cx="8" cy="48" r="1.5" fill="#388697" />
                    <path d="M 0,48 L 16,64 M 0,32 L 32,64" stroke="#f5c422" strokeWidth="0.5" opacity="0.5" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M 64,64 L 64,32 Q 64,64 32,64 Z" fill="none" stroke="#f5c422" strokeWidth="3" />
                    <path d="M 60,60 L 60,36 Q 60,60 36,60" fill="none" stroke="#f5c422" strokeWidth="1.5" />
                    <circle cx="56" cy="56" r="2" fill="#f5c422" />
                    <circle cx="48" cy="56" r="1.5" fill="#f5c422" />
                    <circle cx="56" cy="48" r="1.5" fill="#f5c422" />
                    <path d="M 64,48 L 48,64 M 64,32 L 32,64" stroke="#388697" strokeWidth="0.5" opacity="0.5" />
                  </svg>
                </div>

                <div className="px-8 py-6 border-4 border-[#15122e]/20 relative">
                  {/* Inner geometric pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full">
                      <pattern id="inner-lattice" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 10,0 L 20,10 L 10,20 L 0,10 Z" fill="none" stroke="#388697" strokeWidth="0.5" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#inner-lattice)" />
                    </svg>
                  </div>
                  <h1
                    ref={heroHeadingRef}
                    className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-[#15122e] leading-[0.9] opacity-0 transform translate-y-8 relative"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    VAK<span className="text-[#f5c422]">RU</span>TA
                  </h1>
                </div>
              </div>

              {/* Geometric arabesque divider */}
             

              <p
                ref={heroParagraphRef}
                className="font-cinzel text-lg md:text-xl text-[#15122e] leading-relaxed opacity-0 transform translate-y-8 italic mb-8"
              >
                Where articulation meets intellect in the grand tradition of India's royal courts
              </p>

              {/* Islamic Geometric Badge */}
              <div className="flex justify-center md:justify-start mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#f5c422] transform rotate-45"></div>
                  <div className="relative bg-[#15122e] m-1 px-6 py-3 border-2 border-[#f5c422]">
                    <p className="font-display text-2xl font-black text-[#f5c422]">2025</p>
                  </div>
                </div>
              </div>

              {/* CTA Button with Kufic-style borders */}
              <div className="flex justify-center md:justify-start">
                <button className="relative group">
                  <div className="absolute inset-0 bg-[#f5c422] transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-[#15122e] m-1 px-10 py-4 font-cinzel font-bold text-[#f5c422] uppercase tracking-[0.2em] group-hover:bg-[#f5c422] group-hover:text-[#15122e] transition-colors duration-300">
                    <span className="inline-flex items-center gap-3">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                        <path d="M 9,2 Q 5,2 5,9 Q 5,16 9,16 Q 7,16 7,9 Q 7,2 9,2 Z" />
                        <circle cx="13" cy="5" r="1.5" />
                      </svg>
                      Sponsor Us
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                        <path d="M 9,2 Q 13,2 13,9 Q 13,16 9,16 Q 11,16 11,9 Q 11,2 9,2 Z" />
                        <circle cx="5" cy="5" r="1.5" />
                      </svg>
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Ornate Islamic Arch Frame Image */}
            <div
              ref={heroImageRef}
              className="relative opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Multi-layered Islamic Border with Arabesque */}
                <div className="absolute -inset-6 border-4 border-[#f5c422] opacity-30"></div>
                <div className="absolute -inset-4 border-2 border-[#388697]"></div>
                <div className="absolute -inset-3">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <rect width="100%" height="100%" fill="none" stroke="#f5c422" strokeWidth="1" opacity="0.5" strokeDasharray="4,4" />
                  </svg>
                </div>

                {/* Crescent Moon Corner ornaments */}
                <div className="absolute -top-3 -left-3 z-10">
                  <svg width="36" height="36" viewBox="0 0 36 36" className="text-[#f5c422]">
                    <path d="M 18,4 Q 10,4 10,18 Q 10,32 18,32 Q 13,32 13,18 Q 13,4 18,4 Z" fill="currentColor" />
                    <circle cx="26" cy="10" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -top-3 -right-3 z-10">
                  <svg width="36" height="36" viewBox="0 0 36 36" className="text-[#388697]">
                    <path d="M 18,4 Q 26,4 26,18 Q 26,32 18,32 Q 23,32 23,18 Q 23,4 18,4 Z" fill="currentColor" />
                    <circle cx="10" cy="10" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -left-3 z-10">
                  <svg width="36" height="36" viewBox="0 0 36 36" className="text-[#388697]">
                    <path d="M 18,4 Q 10,4 10,18 Q 10,32 18,32 Q 13,32 13,18 Q 13,4 18,4 Z" fill="currentColor" />
                    <circle cx="26" cy="26" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 -right-3 z-10">
                  <svg width="36" height="36" viewBox="0 0 36 36" className="text-[#f5c422]">
                    <path d="M 18,4 Q 26,4 26,18 Q 26,32 18,32 Q 23,32 23,18 Q 23,4 18,4 Z" fill="currentColor" />
                    <circle cx="10" cy="26" r="3" fill="currentColor" />
                  </svg>
                </div>

                {/* Islamic arch overlay on image */}
                <div className="relative bg-[#15122e] p-4">
                  <div className="relative">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F981caa52e21948b987df073157a54df3?format=webp&width=800"
                      alt="Vakruta Pattern"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    {/* Horseshoe arch overlay */}
                    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      <path d="M 0,100% L 0,35% Q 0,15% 15%,8% Q 25%,5% 35%,5% L 45%,5% Q 50%,3% 50%,0 Q 50%,3% 55%,5% L 65%,5% Q 75%,5% 85%,8% Q 100%,15% 100%,35% L 100%,100% Z"
                        fill="none" stroke="#f5c422" strokeWidth="3" opacity="0.7" />
                      <path d="M 5%,100% L 5%,37% Q 5%,18% 18%,11% Q 27%,8% 37%,8% L 46%,8% Q 50%,6% 50%,3% Q 50%,6% 54%,8% L 63%,8% Q 73%,8% 82%,11% Q 95%,18% 95%,37% L 95%,100% Z"
                        fill="none" stroke="#388697" strokeWidth="2" opacity="0.5" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Arabesque side patterns */}
                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                  <svg width="40" height="120" viewBox="0 0 40 120">
                    <path d="M 10,20 Q 25,25 25,40 Q 25,55 10,60 Q 25,65 25,80 Q 25,95 10,100"
                      fill="none" stroke="#388697" strokeWidth="2.5" />
                    <path d="M 15,25 Q 20,30 20,40 Q 20,50 15,55 Q 20,60 20,70 Q 20,80 15,85"
                      fill="none" stroke="#f5c422" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <svg width="40" height="120" viewBox="0 0 40 120">
                    <path d="M 30,20 Q 15,25 15,40 Q 15,55 30,60 Q 15,65 15,80 Q 15,95 30,100"
                      fill="none" stroke="#f5c422" strokeWidth="2.5" />
                    <path d="M 25,25 Q 20,30 20,40 Q 20,50 25,55 Q 20,60 20,70 Q 20,80 25,85"
                      fill="none" stroke="#388697" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Islamic Border Pattern - Kufic-inspired */}
        <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <pattern id="bottom-kufic" x="0" y="0" width="80" height="24" patternUnits="userSpaceOnUse">
              <rect x="0" y="12" width="15" height="12" fill="#388697" opacity="0.2" />
              <rect x="20" y="6" width="15" height="18" fill="#f5c422" opacity="0.2" />
              <rect x="40" y="12" width="15" height="12" fill="#388697" opacity="0.2" />
              <rect x="60" y="6" width="15" height="18" fill="#f5c422" opacity="0.2" />
              <path d="M 0,12 L 80,12" stroke="#388697" strokeWidth="1" opacity="0.3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#bottom-kufic)" />
          </svg>
        </div>
      </section>

      {/* About Us Section - Islamic Garden Paradise */}
      <section
        id="about"
        className="py-24 md:py-32 bg-[#15122e] relative overflow-hidden"
      >
        <IslamicPattern className="absolute inset-0" />

        {/* Islamic Geometric Border - Top with Interlocking Patterns */}
        <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="top-islamic-border" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
                {/* Interlocking arches */}
                <path d="M 0,40 L 0,25 Q 0,10 15,5 Q 25,10 25,25 L 25,40" fill="#f5c422" opacity="0.3" />
                <path d="M 25,40 L 25,25 Q 25,10 40,5 Q 50,10 50,25 L 50,40" fill="#388697" opacity="0.3" />
                <path d="M 50,40 L 50,25 Q 50,10 65,5 Q 75,10 75,25 L 75,40" fill="#f5c422" opacity="0.3" />
                <path d="M 75,40 L 75,25 Q 75,10 90,5 Q 100,10 100,25 L 100,40" fill="#388697" opacity="0.3" />
                {/* Crescent moons */}
                <path d="M 12,8 Q 8,8 8,15 Q 8,22 12,22 Q 10,22 10,15 Q 10,8 12,8 Z" fill="#f5c422" opacity="0.5" />
                <circle cx="16" cy="11" r="1.5" fill="#f5c422" opacity="0.5" />
                <path d="M 62,8 Q 58,8 58,15 Q 58,22 62,22 Q 60,22 60,15 Q 60,8 62,8 Z" fill="#388697" opacity="0.5" />
                <circle cx="66" cy="11" r="1.5" fill="#388697" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#top-islamic-border)" />
          </svg>
        </div>

        {/* Islamic Geometric Border - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden transform rotate-180">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <rect width="100%" height="100%" fill="url(#top-islamic-border)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Islamic Section Header */}
          <div className="text-center mb-20">
            <div
              ref={aboutHeadingRef}
              className="opacity-0 transform translate-y-8"
            >
              <div className="flex items-center justify-center gap-6 mb-6">
                {/* Islamic 12-pointed star */}
                <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#f5c422]">
                  <path d="M 22,0 L 25,10 L 35,7 L 29,17 L 39,20 L 29,23 L 35,33 L 25,30 L 22,40 L 19,30 L 9,33 L 15,23 L 5,20 L 15,17 L 9,7 L 19,10 Z"
                    fill="currentColor" opacity="0.8" />
                  <circle cx="22" cy="20" r="7" fill="#15122e" />
                  <circle cx="22" cy="20" r="4" fill="currentColor" opacity="0.6" />
                </svg>
                <span className="font-cinzel text-xs uppercase tracking-[0.5em] text-[#f5c422]">
                  About the Tournament
                </span>
                <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#f5c422]">
                  <path d="M 22,0 L 25,10 L 35,7 L 29,17 L 39,20 L 29,23 L 35,33 L 25,30 L 22,40 L 19,30 L 9,33 L 15,23 L 5,20 L 15,17 L 9,7 L 19,10 Z"
                    fill="currentColor" opacity="0.8" />
                  <circle cx="22" cy="20" r="7" fill="#15122e" />
                  <circle cx="22" cy="20" r="4" fill="currentColor" opacity="0.6" />
                </svg>
              </div>
              <h2 className="font-display text-7xl md:text-8xl font-black text-[#f5c422] leading-tight mb-6">
                The Art of Argument
              </h2>
              {/* Arabesque knot pattern divider */}
              <div className="flex items-center justify-center gap-3">
                <svg width="140" height="24" viewBox="0 0 140 24">
                  <path d="M 0,12 Q 20,4 40,12 T 80,12 T 120,12 Q 130,16 140,12"
                    fill="none" stroke="#388697" strokeWidth="2.5" />
                  <path d="M 0,12 Q 20,20 40,12 T 80,12 T 120,12 Q 130,8 140,12"
                    fill="none" stroke="#f5c422" strokeWidth="2" />
                  <circle cx="40" cy="12" r="3" fill="#f5c422" />
                  <circle cx="80" cy="12" r="3" fill="#388697" />
                  <circle cx="120" cy="12" r="3" fill="#f5c422" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Islamic Pointed Archway Frame */}
            <div
              ref={aboutImageRef}
              className="opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Islamic pointed arch frame - Alhambra style */}
                <div className="absolute -inset-4 z-0">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 5,100 L 5,45 Q 5,25 15,15 Q 25,8 38,8 L 47,8 Q 50,6 50,3 Q 50,6 53,8 L 62,8 Q 75,8 85,15 Q 95,25 95,45 L 95,100 Z"
                      fill="none" stroke="#f5c422" strokeWidth="2.5" />
                    <path d="M 10,100 L 10,47 Q 10,28 19,19 Q 28,12 40,12 L 48,12 Q 50,10 50,7 Q 50,10 52,12 L 60,12 Q 72,12 81,19 Q 90,28 90,47 L 90,100 Z"
                      fill="none" stroke="#388697" strokeWidth="1.8" />
                    {/* Mocárabe detail at apex */}
                    <path d="M 45,10 L 48,15 L 50,10 L 52,15 L 55,10" fill="none" stroke="#f5c422" strokeWidth="1" />
                  </svg>
                </div>

                <div className="relative bg-[#f5c422] p-2 border-4 border-[#388697]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                    alt="Indian Architecture"
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Islamic Geometric Star Corner Ornaments */}
                <div className="absolute -top-5 -left-5 z-10">
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-[#f5c422]">
                    <path d="M 19,2 L 22,13 L 33,10 L 26,19 L 37,22 L 26,25 L 33,36 L 22,33 L 19,44 L 16,33 L 5,36 L 12,25 L 1,22 L 12,19 L 5,10 L 16,13 Z"
                      fill="currentColor" />
                    <circle cx="19" cy="22" r="5" fill="#15122e" />
                  </svg>
                </div>
                <div className="absolute -top-5 -right-5 z-10">
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-[#388697]">
                    <path d="M 19,2 L 22,13 L 33,10 L 26,19 L 37,22 L 26,25 L 33,36 L 22,33 L 19,44 L 16,33 L 5,36 L 12,25 L 1,22 L 12,19 L 5,10 L 16,13 Z"
                      fill="currentColor" />
                    <circle cx="19" cy="22" r="5" fill="#15122e" />
                  </svg>
                </div>
                <div className="absolute -bottom-5 -left-5 z-10">
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-[#388697]">
                    <path d="M 19,2 L 22,13 L 33,10 L 26,19 L 37,22 L 26,25 L 33,36 L 22,33 L 19,44 L 16,33 L 5,36 L 12,25 L 1,22 L 12,19 L 5,10 L 16,13 Z"
                      fill="currentColor" />
                    <circle cx="19" cy="22" r="5" fill="#15122e" />
                  </svg>
                </div>
                <div className="absolute -bottom-5 -right-5 z-10">
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-[#f5c422]">
                    <path d="M 19,2 L 22,13 L 33,10 L 26,19 L 37,22 L 26,25 L 33,36 L 22,33 L 19,44 L 16,33 L 5,36 L 12,25 L 1,22 L 12,19 L 5,10 L 16,13 Z"
                      fill="currentColor" />
                    <circle cx="19" cy="22" r="5" fill="#15122e" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Center & Right: Content with Islamic Calligraphy Style */}
            <div className="md:col-span-2">
              <div
                ref={aboutTextRef}
                className="space-y-8 opacity-0 transform translate-y-8"
              >
                {/* Text Blocks with Islamic Borders */}
                <div className="relative bg-gradient-to-r from-[#388697]/20 to-transparent p-8 border-l-4 border-[#f5c422]">
                  {/* Decorative Islamic corners with arabesque */}
                  <div className="absolute top-0 left-0 w-10 h-10">
                    <svg viewBox="0 0 40 40" className="w-full h-full text-[#f5c422]">
                      <path d="M 0,0 L 0,20 Q 0,30 10,30 L 30,30" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M 5,5 Q 5,15 15,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8" cy="8" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed">
                    Vakruta is NIT Rourkela's flagship Asian Parliamentary Debate tournament, bringing together the brightest minds from institutions across India in a celebration of eloquence and intellect.
                  </p>
                  <div className="absolute bottom-0 right-0 w-10 h-10">
                    <svg viewBox="0 0 40 40" className="w-full h-full text-[#388697]">
                      <path d="M 40,40 L 40,20 Q 40,10 30,10 L 10,10" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M 35,35 Q 35,25 25,25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="32" cy="32" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <div className="relative bg-gradient-to-l from-[#f5c422]/20 to-transparent p-8 border-r-4 border-[#388697]">
                  <div className="absolute top-0 right-0 w-10 h-10">
                    <svg viewBox="0 0 40 40" className="w-full h-full text-[#388697]">
                      <path d="M 40,0 L 40,20 Q 40,30 30,30 L 10,30" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M 35,5 Q 35,15 25,15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="32" cy="8" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed">
                    Through rigorous debate rounds, engaging workshops, and competitive spirit, Vakruta cultivates eloquence, analytical thinking, and the ability to articulate complex ideas with clarity and conviction.
                  </p>
                  <div className="absolute bottom-0 left-0 w-10 h-10">
                    <svg viewBox="0 0 40 40" className="w-full h-full text-[#f5c422]">
                      <path d="M 0,40 L 0,20 Q 0,10 10,10 L 30,10" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <path d="M 5,35 Q 5,25 15,25" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8" cy="32" r="2" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Islamic Geometric Stats with Star Patterns */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  {[
                    { num: "100+", label: "Debaters", color: "#f5c422" },
                    { num: "20+", label: "Rounds", color: "#388697" },
                    { num: "3", label: "Days", color: "#f5c422" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center relative group">
                      {/* Islamic 16-pointed star background */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="110" height="110" viewBox="0 0 110 110">
                          <path d="M 55,5 L 60,25 L 80,20 L 70,40 L 90,45 L 70,50 L 80,70 L 60,65 L 55,85 L 50,65 L 30,70 L 40,50 L 20,45 L 40,40 L 30,20 L 50,25 Z"
                            fill="currentColor" style={{ color: stat.color }} opacity="0.6" />
                          <circle cx="55" cy="45" r="15" fill="currentColor" style={{ color: stat.color }} opacity="0.3" />
                        </svg>
                      </div>
                      <div className="relative border-2 border-[#f3e8dc]/20 p-6 hover:border-[#f5c422] transition-colors duration-300">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <svg width="24" height="24" viewBox="0 0 24 24" style={{ color: stat.color }}>
                            <path d="M 12,0 L 14,6 L 20,5 L 16,10 L 22,12 L 16,14 L 20,19 L 14,18 L 12,24 L 10,18 L 4,19 L 8,14 L 2,12 L 8,10 L 4,5 L 10,6 Z"
                              fill="currentColor" />
                            <circle cx="12" cy="12" r="3" fill="#15122e" />
                          </svg>
                        </div>
                        <p className="font-display text-5xl font-black mb-2" style={{ color: stat.color }}>
                          {stat.num}
                        </p>
                        <p className="font-cinzel text-xs uppercase tracking-widest text-[#f3e8dc]">
                          {stat.label}
                        </p>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                          <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#388697]">
                            <path d="M 12,2 Q 7,2 7,12 Q 7,22 12,22 Q 9,22 9,12 Q 9,2 12,2 Z" fill="currentColor" />
                            <circle cx="17" cy="7" r="2" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Islamic Cartouche Badge */}
                <div className="mt-12 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-[#f5c422] transform skew-x-12"></div>
                    <div className="relative bg-[#15122e] border-2 border-[#f5c422] px-10 py-4 skew-x-12">
                      <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-[#f5c422] -skew-x-12">
                        Asian Parliamentary Format
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Royal Treasury */}
      <section
        id="statistics"
        className="py-24 md:py-32 bg-[#f3e8dc] relative overflow-hidden"
      >
        {/* Ornate Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle, #388697 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Ornate Title */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#388697]"></div>
              <div className="relative">
                <div className="absolute inset-0 border-2 border-[#f5c422] rotate-45"></div>
                <span className="relative block font-cinzel text-xs uppercase tracking-[0.5em] text-[#388697] px-8 py-3">
                  Our Legacy
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#388697]"></div>
            </div>

            <h2 className="font-display text-7xl md:text-9xl font-black text-[#15122e] leading-none mb-6">
              BY THE NUMBERS
            </h2>

            <div className="flex items-center justify-center gap-4">
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                <path d="M 20,2 Q 13,2 13,20 Q 13,38 20,38 Q 16,38 16,20 Q 16,2 20,2 Z" fill="currentColor" />
                <circle cx="28" cy="10" r="3.5" fill="currentColor" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                <path d="M 20,4 L 24,16 L 36,16 L 26,24 L 30,36 L 20,28 L 10,36 L 14,24 L 4,16 L 16,16 Z" fill="currentColor" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                <path d="M 20,2 Q 27,2 27,20 Q 27,38 20,38 Q 24,38 24,20 Q 24,2 20,2 Z" fill="currentColor" />
                <circle cx="12" cy="10" r="3.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Ornate Stats Cards */}
          <div
            ref={statsCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {[
              {
                year: "2025",
                label: "Registrations",
                value: "2,847",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F4324065880c44c3789e791aabb29ea65?format=webp&width=600",
                accent: "#f5c422",
              },
              {
                year: "2025",
                label: "Sponsorships",
                value: "₹1.8 Cr",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F1028d674e84843efbbe3ef684c03bbd2?format=webp&width=600",
                accent: "#388697",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative group opacity-0 transform translate-y-8"
              >
                {/* Ornate Frame Structure */}
                <div className="relative">
                  {/* Multi-layer Border */}
                  <div className="absolute -inset-6 border-4 border-[#15122e] opacity-20"></div>
                  <div className="absolute -inset-4 border-2" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -inset-3 border border-[#15122e] opacity-40"></div>

                  {/* Corner Ornaments */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4" style={{ borderColor: stat.accent }}></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4" style={{ borderColor: stat.accent }}></div>

                  {/* Image Container */}
                  <div className="relative h-[500px] overflow-hidden bg-[#15122e] p-3">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 transition-all duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15122e] via-[#15122e]/60 to-transparent"></div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="relative">
                        {/* Decorative Top Border */}
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: stat.accent }}></div>
                          <div className="flex-1 h-px" style={{ backgroundColor: stat.accent }}></div>
                          <div className="w-3 h-3 rotate-45" style={{ backgroundColor: stat.accent }}></div>
                        </div>

                        <p className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#f3e8dc] mb-3">
                          {stat.year} — {stat.label}
                        </p>

                        <div className="relative inline-block">
                          <div className="absolute -inset-2 opacity-30" style={{ backgroundColor: stat.accent }}></div>
                          <p className="relative font-display text-7xl font-black px-4 py-2" style={{ color: stat.accent }}>
                            {stat.value}
                          </p>
                        </div>

                        {/* Ornamental Bottom */}
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex gap-2">
                            <div className="w-2 h-2 rotate-45 bg-[#f3e8dc]"></div>
                            <div className="w-2 h-2 rotate-45" style={{ backgroundColor: stat.accent }}></div>
                            <div className="w-2 h-2 rotate-45 bg-[#f3e8dc]"></div>
                          </div>
                          <svg width="30" height="30" viewBox="0 0 30 30" style={{ color: stat.accent }}>
                            <path d="M 15,2 L 18,12 L 28,12 L 20,18 L 23,28 L 15,22 L 7,28 L 10,18 L 2,12 L 12,12 Z" fill="currentColor" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      export default function BrochureSection() {
  const brochureHeadingRef = useRef(null);
      const brochureLeftRef = useRef(null);
      const brochureRightRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
        threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          }
        });
    }, observerOptions);

      if (brochureHeadingRef.current) observer.observe(brochureHeadingRef.current);
      if (brochureLeftRef.current) observer.observe(brochureLeftRef.current);
      if (brochureRightRef.current) observer.observe(brochureRightRef.current);

    return () => observer.disconnect();
  }, []);

      return (
      <section
        id="brochure"
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#388697] relative overflow-hidden"
      >
        {/* Ornate Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="mughal-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="#15122e" />
                <path d="M 10,5 L 15,10 L 10,15 L 5,10 Z" fill="none" stroke="#15122e" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#mughal-pattern)" />
          </svg>
        </div>

        {/* Decorative Border - Hidden on very small screens */}
        <div className="absolute top-0 left-0 right-0 hidden sm:flex justify-center gap-2 sm:gap-4 py-3 sm:py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#f5c422] opacity-50"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center">

            {/* Mobile: Heading First */}
            <div className="md:hidden">
              <div
                ref={brochureHeadingRef}
                className="mb-8 sm:mb-10 opacity-0 transform translate-y-8"
              >
                {/* Ornate Header */}
                <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#f5c422] rotate-45"></div>
                  <div className="flex-1 h-px bg-[#f5c422]"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-[#f5c422] rotate-45"></div>
                </div>

                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none mb-4 sm:mb-6">
                  COMPLETE<br />GUIDE
                </h2>

                <div className="flex items-center gap-2 sm:gap-3">
                  <svg width="24" height="24" viewBox="0 0 40 40" className="text-[#f5c422] sm:w-[30px] sm:h-[30px]">
                    <path d="M 20,4 L 24,16 L 36,16 L 26,24 L 30,36 L 20,28 L 10,36 L 14,24 L 4,16 L 16,16 Z" fill="currentColor" />
                  </svg>
                  <div className="w-16 sm:w-20 h-1 bg-[#f5c422]"></div>
                  <svg width="24" height="24" viewBox="0 0 40 40" className="text-[#f5c422] sm:w-[30px] sm:h-[30px]">
                    <path d="M 20,4 L 24,16 L 36,16 L 26,24 L 30,36 L 20,28 L 10,36 L 14,24 L 4,16 L 16,16 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Left - Ornate Manuscript Frame */}
            <div
              ref={brochureLeftRef}
              className="md:col-span-2 opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Ornate Multi-layer Frame - Adjusted for mobile */}
                <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 border-2 border-[#f5c422]"></div>
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border border-[#15122e]"></div>
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border-2 border-[#f3e8dc]"></div>

                {/* Corner Decorations - Smaller on mobile */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-6 md:-left-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-[#f5c422]"></div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-6 md:-right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t-2 border-r-2 sm:border-t-4 sm:border-r-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-6 md:-left-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-l-2 sm:border-b-4 sm:border-l-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-[#f5c422]"></div>

                {/* Manuscript Image */}
                <div className="relative bg-[#f3e8dc] p-2 sm:p-3 md:p-4">
                  <div className="bg-white p-2 sm:p-3 shadow-2xl">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2Fa3b9abeeff424a8d82fadf2d789e4d7a?format=webp&width=600"
                      alt="Brochure"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Ornamental Star Accents */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 30 30" className="text-[#f5c422] sm:w-[30px] sm:h-[30px]">
                    <path d="M 15,2 L 18,12 L 28,12 L 20,18 L 23,28 L 15,22 L 7,28 L 10,18 L 2,12 L 12,12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2">
                  <svg width="24" height="24" viewBox="0 0 30 30" className="text-[#15122e] sm:w-[30px] sm:h-[30px]">
                    <path d="M 15,2 L 18,12 L 28,12 L 20,18 L 23,28 L 15,22 L 7,28 L 10,18 L 2,12 L 12,12 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right - Royal Proclamation Style */}
            <div className="md:col-span-3">
              {/* Desktop: Heading */}
              <div
                ref={brochureHeadingRef}
                className="mb-8 md:mb-12 opacity-0 transform translate-y-8 hidden md:block"
              >
                {/* Ornate Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                  <div className="flex-1 h-px bg-[#f5c422]"></div>
                  <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                </div>

                <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6">
                  COMPLETE<br />GUIDE
                </h2>

                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M 20,4 L 24,16 L 36,16 L 26,24 L 30,36 L 20,28 L 10,36 L 14,24 L 4,16 L 16,16 Z" fill="currentColor" />
                  </svg>
                  <div className="w-32 h-1 bg-[#f5c422]"></div>
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M 20,4 L 24,16 L 36,16 L 26,24 L 30,36 L 20,28 L 10,36 L 14,24 L 4,16 L 16,16 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div
                ref={brochureRightRef}
                className="opacity-0 transform translate-y-8"
              >
                {/* Ornate Content Box */}
                <div className="relative bg-[#15122e] border-2 sm:border-4 border-[#f5c422] p-5 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8">
                  {/* Corner Ornaments - Smaller on mobile */}
                  <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#f5c422]"></div>
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#f5c422]"></div>
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#f5c422]"></div>
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-[#f5c422]"></div>

                  <p className="font-serif text-sm sm:text-base md:text-lg text-[#f3e8dc] leading-relaxed mb-6 sm:mb-8 italic">
                    Download our comprehensive tournament manuscript featuring complete details about Vakruta's debate format, schedule, rules, and registration information.
                  </p>

                  {/* Ornamental List */}
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "Tournament Format & Asian Parliamentary Rules",
                      "Detailed Schedule & Round Breakdowns",
                      "Registration Process & Eligibility Criteria",
                      "Prize Pool & Recognition Categories",
                      "Adjudication Standards & Judging Process",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 sm:gap-4 group"
                      >
                        <div className="flex-shrink-0 mt-1 sm:mt-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#f5c422] rotate-45 group-hover:bg-[#f5c422] transition-colors duration-300"></div>
                        </div>
                        <span className="font-serif text-xs sm:text-sm text-[#f3e8dc] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ornate Download Button */}
                <div className="relative group">
                  {/* Decorative Border Animation */}
                  <div className="absolute -inset-1 sm:-inset-2 border-2 border-[#f5c422] group-hover:inset-0 transition-all duration-300"></div>

                  <button className="relative w-full bg-[#f5c422] text-[#15122e] font-display text-base sm:text-lg md:text-xl font-black py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] group-hover:bg-[#f3e8dc] transition-all duration-300">
                    <span className="inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                        <path d="M 12,2 Q 7,2 7,12 Q 7,22 12,22 Q 9,22 9,12 Q 9,2 12,2 Z" />
                        <circle cx="17" cy="7" r="2.5" />
                      </svg>
                      <span className="text-sm sm:text-base md:text-lg lg:text-xl">Download Brochure</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:w-5 sm:h-5 md:w-6 md:h-6">
                        <path d="M 12,2 Q 17,2 17,12 Q 17,22 12,22 Q 15,22 15,12 Q 15,2 12,2 Z" />
                        <circle cx="7" cy="7" r="2.5" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Border - Hidden on very small screens */}
        <div className="absolute bottom-0 left-0 right-0 hidden sm:flex justify-center gap-2 sm:gap-4 py-3 sm:py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#f5c422] opacity-50"></div>
          ))}
        </div>
      </section>
      );
}
    

      {/* CTA Section - Royal Decree */}
      <section
        ref={ctaSectionRef}
        className="relative py-32 md:py-48 bg-[#15122e] overflow-hidden opacity-0 transform translate-y-8"
      >
        {/* Ornate Background */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1400"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Pattern Overlay */}
        <IslamicPattern className="absolute inset-0 opacity-50" />

        {/* Top Border Decoration with Crescents */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-6 py-6">
          {[...Array(12)].map((_, i) => (
            <div key={i}>
              {i % 3 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#f5c422] opacity-30">
                  <path d="M 10,2 Q 6,2 6,10 Q 6,18 10,18 Q 8,18 8,10 Q 8,2 10,2 Z" fill="currentColor" />
                  <circle cx="14" cy="6" r="1.5" fill="currentColor" />
                </svg>
              ) : (
                <div className="w-2 h-2 rotate-45 bg-[#388697] opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Ornate Header */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#388697]"></div>
                <div className="relative">
                  <div className="absolute inset-0 border-2 border-[#388697] rotate-45"></div>
                  <span className="relative block font-cinzel text-xs uppercase tracking-[0.6em] text-[#388697] px-10 py-3">
                    Be Part of History
                  </span>
                </div>
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#388697]"></div>
              </div>

              {/* Grand Title with Ornate Frame */}
              <div className="relative inline-block">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-4 border-l-4 border-[#f5c422]"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 border-t-4 border-r-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-4 border-l-4 border-[#388697]"></div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-4 border-r-4 border-[#388697]"></div>

                {/* Crescents in Corners */}
                <div className="absolute -top-6 -left-6">
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#f5c422]">
                    <path d="M 22,6 Q 14,6 14,22 Q 14,38 22,38 Q 17,38 17,22 Q 17,6 22,6 Z" fill="currentColor" />
                    <circle cx="32" cy="14" r="4" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -top-6 -right-6">
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#388697]">
                    <path d="M 22,6 Q 30,6 30,22 Q 30,38 22,38 Q 27,38 27,22 Q 27,6 22,6 Z" fill="currentColor" />
                    <circle cx="12" cy="14" r="4" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#388697]">
                    <path d="M 22,6 Q 14,6 14,22 Q 14,38 22,38 Q 17,38 17,22 Q 17,6 22,6 Z" fill="currentColor" />
                    <circle cx="32" cy="30" r="4" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <svg width="44" height="44" viewBox="0 0 44 44" className="text-[#f5c422]">
                    <path d="M 22,6 Q 30,6 30,22 Q 30,38 22,38 Q 27,38 27,22 Q 27,6 22,6 Z" fill="currentColor" />
                    <circle cx="12" cy="30" r="4" fill="currentColor" />
                  </svg>
                </div>

                <div className="px-20 py-12">
                  <h2 className="font-display text-8xl md:text-[10rem] font-black text-[#f5c422] leading-[0.9] whitespace-nowrap">
                    VAKRUTA
                  </h2>
                  <div className="flex items-center justify-center gap-4 my-6">
                    <div className="w-24 h-1 bg-[#388697]"></div>
                    <div className="w-6 h-6 rotate-45 border-2 border-[#f5c422]"></div>
                    <div className="w-24 h-1 bg-[#388697]"></div>
                  </div>
                  <p className="font-display text-6xl font-black text-white">2025</p>
                </div>
              </div>
            </div>

            {/* Ornate Description Box */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative bg-gradient-to-b from-[#388697]/20 to-transparent border-t-2 border-b-2 border-[#f5c422] py-10 px-8">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f5c422]"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#f5c422]"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#388697]"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#388697]"></div>

                <p className="font-cinzel text-xl md:text-2xl text-[#f3e8dc] leading-relaxed italic">
                  Step onto the stage at NIT Rourkela's premier debate tournament. Challenge your intellect, sharpen your arguments, and compete with the nation's finest debaters in the grand tradition of scholarly discourse.
                </p>
              </div>
            </div>

            {/* Royal CTA Button */}
            <div className="relative inline-block">
              {/* Multi-layer Ornate Frame */}
              <div className="absolute -inset-8 border-2 border-[#f5c422] opacity-30"></div>
              <div className="absolute -inset-6 border border-[#388697] opacity-50"></div>
              <div className="absolute -inset-4 border-2 border-[#f5c422]"></div>

              {/* Corner Crescents */}
              <div className="absolute -top-4 -left-4">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                  <path d="M 16,4 Q 10,4 10,16 Q 10,28 16,28 Q 13,28 13,16 Q 13,4 16,4 Z" fill="currentColor" />
                  <circle cx="22" cy="10" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                  <path d="M 16,4 Q 22,4 22,16 Q 22,28 16,28 Q 19,28 19,16 Q 19,4 16,4 Z" fill="currentColor" />
                  <circle cx="10" cy="10" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                  <path d="M 16,4 Q 10,4 10,16 Q 10,28 16,28 Q 13,28 13,16 Q 13,4 16,4 Z" fill="currentColor" />
                  <circle cx="22" cy="22" r="3" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-[#f5c422]">
                  <path d="M 16,4 Q 22,4 22,16 Q 22,28 16,28 Q 19,28 19,16 Q 19,4 16,4 Z" fill="currentColor" />
                  <circle cx="10" cy="22" r="3" fill="currentColor" />
                </svg>
              </div>

              <button className="relative group">
                <div className="absolute inset-0 bg-[#f5c422] transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-[#15122e] m-2 px-16 py-7 font-display font-black text-2xl text-[#f5c422] uppercase tracking-[0.3em] group-hover:bg-[#f5c422] group-hover:text-[#15122e] transition-colors duration-300">
                  <span className="inline-flex items-center gap-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                      <path d="M 14,2 Q 9,2 9,14 Q 9,26 14,26 Q 11,26 11,14 Q 11,2 14,2 Z" />
                      <circle cx="20" cy="8" r="3" />
                    </svg>
                    Register Now
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                      <path d="M 14,2 Q 19,2 19,14 Q 19,26 14,26 Q 17,26 17,14 Q 17,2 14,2 Z" />
                      <circle cx="8" cy="8" r="3" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Ornate Border */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 py-6">
          {[...Array(12)].map((_, i) => (
            <div key={i}>
              {i % 3 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#388697] opacity-30">
                  <path d="M 10,2 Q 14,2 14,10 Q 14,18 10,18 Q 12,18 12,10 Q 12,2 10,2 Z" fill="currentColor" />
                  <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                </svg>
              ) : (
                <div className="w-2 h-2 rotate-45 bg-[#f5c422] opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Large Ornate Background Text */}
        <div className="absolute bottom-10 left-0 right-0 overflow-hidden opacity-5 pointer-events-none select-none">
          <div className="flex items-center justify-center gap-12">
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white">
              <path d="M 40,8 Q 28,8 28,40 Q 28,72 40,72 Q 34,72 34,40 Q 34,8 40,8 Z" fill="currentColor" />
              <circle cx="56" cy="22" r="8" fill="currentColor" />
            </svg>
            <p className="font-display text-[8rem] font-black text-white">
              VAKRUTA
            </p>
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white">
              <path d="M 40,8 Q 52,8 52,40 Q 52,72 40,72 Q 46,72 46,40 Q 46,8 40,8 Z" fill="currentColor" />
              <circle cx="24" cy="22" r="8" fill="currentColor" />
            </svg>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @font-face {
          font-family: 'Display';
          src: local('Georgia'), local('serif');
        }

        .font-cinzel {
          font-family: 'Cinzel', Georgia, serif;
        }

        .clip-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }

        /* Ornate scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #15122e;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #f5c422 0%, #388697 100%);
          border-radius: 0;
        }

        /* Subtle shimmer effect on ornamental elements */
        @keyframes shimmer {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}