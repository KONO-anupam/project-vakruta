import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Grid Background Component
const GridBackground = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundSize: "50px 50px",
          backgroundImage:
            "linear-gradient(to right, rgba(56, 134, 151, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 134, 151, 0.15) 1px, transparent 1px)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent)]"></div>
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
    // Simplified hero animations with gentle fade-in
    const heroTimeline = () => {
      if (
        !heroHeadingRef.current ||
        !heroParagraphRef.current ||
        !heroImageRef.current
      )
        return;

      // Heading - simple fade in
      setTimeout(() => {
        if (heroHeadingRef.current) {
          heroHeadingRef.current.style.transition = "all 0.8s ease-out";
          heroHeadingRef.current.style.opacity = "1";
          heroHeadingRef.current.style.transform = "translateY(0)";
        }
      }, 100);

      // Paragraph fade in
      setTimeout(() => {
        if (heroParagraphRef.current) {
          heroParagraphRef.current.style.transition = "all 0.8s ease-out";
          heroParagraphRef.current.style.opacity = "1";
          heroParagraphRef.current.style.transform = "translateY(0)";
        }
      }, 300);

      // Image fade in
      setTimeout(() => {
        if (heroImageRef.current) {
          heroImageRef.current.style.transition = "all 0.8s ease-out";
          heroImageRef.current.style.opacity = "1";
          heroImageRef.current.style.transform = "translateY(0)";
        }
      }, 500);
    };

    heroTimeline();

    // Scroll-triggered animations with subtle effects
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px",
    };

    // About section animation
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

    // Stats cards gentle animation
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

    // Brochure section animation
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

    // CTA section
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

      {/* Hero Section with Grid Background */}
      <section id="hero" className="relative overflow-hidden pt-0 pb-20 md:py-32">
        <GridBackground className="absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <h1
              ref={heroHeadingRef}
              className="font-display text-5xl md:text-7xl font-bold text-[#f5c422] mb-6 leading-tight whitespace-nowrap opacity-0 transform translate-y-8"
            >
              Welcome to Vakruta
            </h1>
            <p
              ref={heroParagraphRef}
              className="font-cinzel text-lg md:text-xl text-[#15122e] mb-8 leading-relaxed max-w-lg opacity-0 transform translate-y-8"
            >
              NIT Rourkela's premier Asian Parliamentary Debate tournament. Join the finest debaters from across the nation for an intellectual showdown celebrating the art of argumentation and oratory excellence.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#15122e] hover:bg-[#0f0c20] text-white font-cinzel font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                Sponsor Us
              </button>
            </div>
          </div>

          {/* Right Visual Element */}
          <div
            ref={heroImageRef}
            className="flex-1 relative opacity-0 transform translate-y-8"
          >
            <div className="relative w-full h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-amber-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-900/10 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F981caa52e21948b987df073157a54df3?format=webp&width=800"
                  alt="Vakruta Pattern"
                  className="w-full h-auto max-h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#f5c422]/20 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-5 w-24 h-24 border border-[#8EC4D9]/20 rounded-lg opacity-20 transform rotate-45"></div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="py-20 md:py-32 bg-[#f3e8dc] border-t border-[#e8dcc8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              ref={aboutHeadingRef}
              className="font-display text-5xl md:text-6xl font-bold text-[#f5c422] mb-4 opacity-0 transform translate-y-8"
            >
              About Vakruta
            </h2>
            <div className="w-100 h-0.5 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={aboutImageRef}
              className="bg-[#faf7f4] rounded-2xl p-8 border border-[#e8dcc8] shadow-md opacity-0 transform translate-y-8 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                alt="Indian Architecture"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div
              ref={aboutTextRef}
              className="space-y-6 opacity-0 transform translate-y-8"
            >
              <p className="font-cinzel text-lg text-[#15122e] leading-relaxed">
                Vakruta is NIT Rourkela's flagship Asian Parliamentary Debate tournament, bringing together the brightest minds from institutions across India. We provide a platform for intellectual discourse, critical thinking, and the art of persuasive argumentation.
              </p>

              <p className="font-cinzel text-lg text-[#15122e] leading-relaxed">
                Through rigorous debate rounds, engaging workshops, and competitive spirit, Vakruta cultivates eloquence, analytical thinking, and the ability to articulate complex ideas with clarity and conviction.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-[#e8f3f7] rounded-lg p-4 text-center border-l-4 border-[#388697] hover:shadow-md transition-shadow duration-300">
                  <p className="font-display text-2xl font-bold text-[#15122e]">
                    100+
                  </p>
                  <p className="font-cinzel text-sm text-[#388697]">Debaters</p>
                </div>
                <div className="bg-[#e8f3f7] rounded-lg p-4 text-center border-l-4 border-[#388697] hover:shadow-md transition-shadow duration-300">
                  <p className="font-display text-2xl font-bold text-[#15122e]">
                    20+
                  </p>
                  <p className="font-cinzel text-sm text-[#388697]">Rounds</p>
                </div>
                <div className="bg-[#e8f3f7] rounded-lg p-4 text-center border-l-4 border-[#388697] hover:shadow-md transition-shadow duration-300">
                  <p className="font-display text-2xl font-bold text-[#15122e]">
                    3
                  </p>
                  <p className="font-cinzel text-sm text-[#388697]">Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Statistics Section */}
      <section
        id="statistics"
        className="py-20 md:py-32 bg-[#f3e8dc] border-t border-[#e8dcc8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-[#f5c422] mb-4">
              Our Legacy
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent mx-auto mb-4"></div>
            <p className="font-cinzel text-xl text-[#15122e]">
              Experience World-Class Parliamentary Debate
            </p>
          </div>

          <div
            ref={statsCardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {[
              {
                year: "2025",
                label: "Registrations",
                value: "2,847",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F4324065880c44c3789e791aabb29ea65?format=webp&width=600",
              },
              {
                year: "2025",
                label: "Sponsorships",
                value: "₹1.8 Cr",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F1028d674e84843efbbe3ef684c03bbd2?format=webp&width=600",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="relative group opacity-0 transform translate-y-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#388697]/5 to-[#f5c422]/5 rounded-2xl group-hover:from-[#388697]/10 group-hover:to-[#f5c422]/10 transition-all duration-300"></div>
                <div className="relative bg-[#faf7f4] rounded-2xl border border-[#e8dcc8] shadow-md group-hover:shadow-xl transition-all duration-300 p-8">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="mt-6">
                    <p className="font-cinzel text-sm text-[#388697] uppercase tracking-wider">
                      {stat.year} - {stat.label}
                    </p>
                    <p className="font-display text-3xl font-bold text-[#f5c422] mt-3">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section
        id="brochure"
        className="py-20 md:py-32 bg-[#f3e8dc] border-t border-[#e8dcc8]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <h2
              ref={brochureHeadingRef}
              className="font-display text-5xl md:text-6xl font-bold text-[#f5c422] mb-4 opacity-0 transform translate-y-8"
            >
              Tournament Brochure
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent mx-auto mb-6"></div>
            <p className="font-cinzel text-lg text-[#15122e] max-w-2xl">
              Download our comprehensive tournament brochure featuring complete details about Vakruta's debate format, schedule, rules, and registration information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Brochure Image */}
            <div
              ref={brochureLeftRef}
              className="flex justify-center opacity-0 transform translate-y-8"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8EC4D9]/15 to-[#f5c422]/15 rounded-3xl blur-2xl transition-all duration-500"></div>
                <div className="relative bg-[#faf7f4] rounded-3xl overflow-hidden shadow-lg border-2 border-[#f5c422] group-hover:shadow-xl transition-all duration-300">
                  <div className="relative w-80 h-80 overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2Fa3b9abeeff424a8d82fadf2d789e4d7a?format=webp&width=600"
                      alt="Brochure Pattern"
                      className="w-full h-full object-cover mx-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#388697]/0 to-[#f5c422]/0 group-hover:from-[#388697]/5 group-hover:to-[#f5c422]/5 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Brochure Info */}
            <div
              ref={brochureRightRef}
              className="space-y-6 opacity-0 transform translate-y-8"
            >
              <div className="bg-[#e8f3f7] rounded-2xl p-8 border border-[#8EC4D9] hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-display text-2xl font-bold text-[#f5c422] mb-4">
                  What's Inside
                </h3>
                <ul className="space-y-4 font-cinzel text-[#15122e]">
                  {[
                    "Tournament Format & Asian Parliamentary Rules",
                    "Detailed Schedule & Round Breakdowns",
                    "Registration Process & Eligibility Criteria",
                    "Prize Pool & Recognition Categories",
                    "Adjudication Standards & Judging Process",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200"
                    >
                      <span className="text-[#f5c422] font-bold text-xl">
                        ✦
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#15122e] hover:bg-[#0f0c20] text-white font-display text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient CTA Section with Grid Background */}
      <section
        ref={ctaSectionRef}
        className="relative py-20 md:py-32 overflow-hidden opacity-0 transform translate-y-8"
      >
        <GridBackground className="absolute inset-0 bg-gradient-to-b from-[#f3e8dc] via-[#f3e8dc] to-[#e8dcc8]" />

        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F7bd6f9d19eb849b583b1cfc21fd88993?format=webp&width=1400"
            alt="Gradient Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3e8dc]/90 via-[#f3e8dc]/40 to-transparent"></div>

        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#8EC4D9]/20 to-transparent rounded-full blur-3xl -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#f5c422]/15 to-transparent rounded-full blur-3xl -mr-48 -mb-48"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[#f5c422] mb-4 leading-tight">
            Join Vakruta 2025
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent mx-auto mb-6"></div>
          <p className="font-cinzel text-lg md:text-xl text-[#15122e] max-w-3xl mx-auto mb-12 leading-relaxed">
            Step onto the stage at NIT Rourkela's premier debate tournament. Challenge your intellect, sharpen your arguments, and compete with the nation's finest debaters in the Asian Parliamentary format.
          </p>
          <button className="bg-gradient-to-r from-[#f5c422] to-[#d4a913] hover:from-[#d4a913] hover:to-[#b39409] text-[#15122e] font-display font-bold text-lg px-12 py-4 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:translate-y-[-3px]">
            Register for Tournament
          </button>
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