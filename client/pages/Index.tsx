import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Diagonal Lines Background
const DiagonalBackground = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(56, 134, 151, 0.3) 35px,
            rgba(56, 134, 151, 0.3) 37px
          ), repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 35px,
            rgba(245, 196, 34, 0.2) 35px,
            rgba(245, 196, 34, 0.2) 37px
          )`,
        }}
      />
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

      {/* Hero Section - Asymmetric Magazine Layout */}
      <section id="hero" className="relative overflow-hidden pt-20 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-0 min-h-[85vh]">
            {/* Large Typographic Statement */}
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center pr-0 md:pr-12 relative z-10">
              <div className="border-l-8 border-[#f5c422] pl-8 mb-8">
                <span className="font-cinzel text-sm uppercase tracking-[0.3em] text-[#388697] block mb-4">
                  NIT Rourkela Presents
                </span>
                <h1
                  ref={heroHeadingRef}
                  className="font-display text-7xl md:text-8xl lg:text-9xl font-black text-[#15122e] leading-[0.9] mb-0 opacity-0 transform translate-y-8"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  VAK<span className="text-[#f5c422]">RU</span>TA
                </h1>
              </div>

              <p
                ref={heroParagraphRef}
                className="font-cinzel text-xl md:text-2xl text-[#15122e] leading-relaxed max-w-xl opacity-0 transform translate-y-8 border-t-2 border-[#388697] pt-6"
              >
                Where articulation meets intellect. Asia's parliamentary debate format comes alive in India's premier technical institute.
              </p>

              <div className="flex gap-4 mt-12">
                <button className="bg-[#15122e] text-[#f5c422] font-cinzel font-bold px-10 py-4 transition-all duration-300 hover:bg-[#f5c422] hover:text-[#15122e] border-2 border-[#15122e]">
                  SPONSOR US →
                </button>
              </div>
            </div>

            {/* Image Column with Overlap */}
            <div
              ref={heroImageRef}
              className="col-span-12 md:col-span-5 relative mt-12 md:mt-0 opacity-0 transform translate-y-8"
            >
              <div className="relative h-[500px] md:h-full">
                <div className="absolute top-0 right-0 w-[120%] md:w-full h-full">
                  <div className="relative h-full border-8 border-[#388697]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F981caa52e21948b987df073157a54df3?format=webp&width=800"
                      alt="Vakruta Pattern"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#f5c422] text-[#15122e] p-6 transform -translate-x-8 translate-y-8">
                      <p className="font-display text-3xl font-bold">2025</p>
                      <p className="font-cinzel text-sm uppercase tracking-wider">Tournament</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Large Background Number */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-5 pointer-events-none select-none">
          <p className="font-display text-[20rem] font-black text-[#15122e]">25</p>
        </div>
      </section>

      {/* About Us Section - Split Screen Editorial */}
      <section
        id="about"
        className="py-24 md:py-32 bg-[#15122e] relative overflow-hidden"
      >
        <DiagonalBackground className="absolute inset-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-stretch">
            {/* Left: Image with stats overlay */}
            <div
              ref={aboutImageRef}
              className="col-span-12 md:col-span-5 opacity-0 transform translate-y-8"
            >
              <div className="relative h-full min-h-[500px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                  alt="Indian Architecture"
                  className="w-full h-full object-cover brightness-90"
                />

                {/* Floating Stats Cards */}
                <div className="absolute -right-6 top-12 bg-[#f5c422] p-6 shadow-2xl">
                  <p className="font-display text-5xl font-black text-[#15122e]">100+</p>
                  <p className="font-cinzel text-xs uppercase tracking-widest text-[#15122e] mt-1">Debaters</p>
                </div>

                <div className="absolute -right-6 bottom-24 bg-[#388697] p-6 shadow-2xl">
                  <p className="font-display text-5xl font-black text-white">20+</p>
                  <p className="font-cinzel text-xs uppercase tracking-widest text-white mt-1">Rounds</p>
                </div>

                <div className="absolute -left-6 bottom-12 bg-[#f3e8dc] p-6 shadow-2xl">
                  <p className="font-display text-5xl font-black text-[#15122e]">3</p>
                  <p className="font-cinzel text-xs uppercase tracking-widest text-[#15122e] mt-1">Days</p>
                </div>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
              <div
                ref={aboutHeadingRef}
                className="mb-12 opacity-0 transform translate-y-8"
              >
                <span className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#f5c422] block mb-4">
                  About the Tournament
                </span>
                <h2 className="font-display text-6xl md:text-7xl font-black text-[#f5c422] leading-tight">
                  The Art of<br />Argument
                </h2>
                <div className="w-32 h-2 bg-[#388697] mt-4"></div>
              </div>

              <div
                ref={aboutTextRef}
                className="space-y-6 opacity-0 transform translate-y-8"
              >
                <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed border-l-4 border-[#388697] pl-6">
                  Vakruta is NIT Rourkela's flagship Asian Parliamentary Debate tournament, bringing together the brightest minds from institutions across India.
                </p>

                <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed border-l-4 border-[#f5c422] pl-6">
                  Through rigorous debate rounds, engaging workshops, and competitive spirit, Vakruta cultivates eloquence, analytical thinking, and the ability to articulate complex ideas with clarity and conviction.
                </p>

                <div className="pt-6">
                  <div className="inline-block bg-[#f5c422] text-[#15122e] px-8 py-3">
                    <p className="font-display text-sm font-bold uppercase tracking-wider">
                      Est. Tournament Format → Asian Parliamentary
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - Magazine Spread */}
      <section
        id="statistics"
        className="py-24 md:py-32 bg-[#f3e8dc] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Block */}
          <div className="mb-20">
            <div className="flex items-center gap-8 mb-4">
              <div className="w-16 h-1 bg-[#15122e]"></div>
              <span className="font-cinzel text-xs uppercase tracking-[0.4em] text-[#388697]">
                Our Legacy
              </span>
            </div>
            <h2 className="font-display text-7xl md:text-8xl font-black text-[#15122e] leading-none">
              BY THE<br />NUMBERS
            </h2>
          </div>

          {/* Stats Cards - Asymmetric Grid */}
          <div
            ref={statsCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
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
                <div className="relative h-[600px] overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15122e] via-[#15122e]/50 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-12">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="font-cinzel text-xs uppercase tracking-[0.3em] text-[#f3e8dc] mb-2">
                          {stat.year} — {stat.label}
                        </p>
                        <p className="font-display text-7xl font-black" style={{ color: stat.accent }}>
                          {stat.value}
                        </p>
                      </div>
                      <div className="w-16 h-16 border-4 mb-4" style={{ borderColor: stat.accent }}></div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45"
                    style={{ backgroundColor: stat.accent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section - Editorial Layout */}
      <section
        id="brochure"
        className="py-24 md:py-32 bg-[#388697] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              #15122e 20px,
              #15122e 21px
            )`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left - Image */}
            <div
              ref={brochureLeftRef}
              className="col-span-12 md:col-span-4 opacity-0 transform translate-y-8"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-[#f5c422] -z-10 transform rotate-3"></div>
                <div className="relative bg-white p-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2Fa3b9abeeff424a8d82fadf2d789e4d7a?format=webp&width=600"
                    alt="Brochure"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="col-span-12 md:col-span-8">
              <div
                ref={brochureHeadingRef}
                className="mb-12 opacity-0 transform translate-y-8"
              >
                <h2 className="font-display text-7xl md:text-8xl font-black text-white leading-none mb-6">
                  COMPLETE<br />GUIDE
                </h2>
                <div className="w-40 h-2 bg-[#f5c422]"></div>
              </div>

              <div
                ref={brochureRightRef}
                className="opacity-0 transform translate-y-8"
              >
                <div className="bg-[#15122e] p-8 mb-6">
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed mb-6">
                    Download our comprehensive tournament brochure featuring complete details about Vakruta's debate format, schedule, rules, and registration information.
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "Tournament Format & Asian Parliamentary Rules",
                      "Detailed Schedule & Round Breakdowns",
                      "Registration Process & Eligibility Criteria",
                      "Prize Pool & Recognition Categories",
                      "Adjudication Standards & Judging Process",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-2 h-2 bg-[#f5c422] group-hover:w-8 transition-all duration-300"></div>
                        <span className="font-cinzel text-sm text-[#f3e8dc]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-[#f5c422] text-[#15122e] font-display text-lg font-black py-5 px-8 hover:bg-white transition-all duration-300 uppercase tracking-wider">
                  Download Brochure →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Statement */}
      <section
        ref={ctaSectionRef}
        className="relative py-32 md:py-48 bg-[#15122e] overflow-hidden opacity-0 transform translate-y-8"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1400"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-12">
              <span className="font-cinzel text-xs uppercase tracking-[0.5em] text-[#388697] block mb-8">
                Be Part of History
              </span>
              <h2 className="font-display text-7xl md:text-9xl font-black text-[#f5c422] leading-none mb-6">
                VAKRUTA<br />2025
              </h2>
              <div className="flex justify-center gap-4 mb-8">
                <div className="w-32 h-1 bg-[#388697]"></div>
                <div className="w-32 h-1 bg-[#f5c422]"></div>
              </div>
            </div>

            <p className="font-cinzel text-xl md:text-2xl text-[#f3e8dc] max-w-3xl mx-auto mb-16 leading-relaxed">
              Step onto the stage at NIT Rourkela's premier debate tournament. Challenge your intellect, sharpen your arguments, and compete with the nation's finest debaters.
            </p>

            <button className="inline-block bg-[#f5c422] text-[#15122e] font-display font-black text-xl px-16 py-6 hover:bg-white transition-all duration-300 uppercase tracking-wider border-4 border-[#f5c422] hover:border-white">
              Register Now →
            </button>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden opacity-5 pointer-events-none select-none">
          <p className="font-display text-[15rem] font-black text-white text-center whitespace-nowrap">
            DEBATE · ARGUE · WIN
          </p>
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
      `}</style>
    </div>
  );
}