import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Ornate Mughal Pattern Background
const MughalPattern = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(245, 196, 34, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(56, 134, 151, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 25% 75%, rgba(245, 196, 34, 0.4) 2px, transparent 2px),
            radial-gradient(circle at 75% 25%, rgba(56, 134, 151, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(56, 134, 151, 0.2) 49%, rgba(56, 134, 151, 0.2) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(245, 196, 34, 0.2) 49%, rgba(245, 196, 34, 0.2) 51%, transparent 52%)
          `,
          backgroundSize: '80px 80px',
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

      {/* Hero Section - Mughal Palace Entrance */}
      <section id="hero" className="relative overflow-hidden pt-20 pb-0">
        {/* Ornate Arch Background */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <path d="M 100,600 L 100,200 Q 100,50 250,50 L 350,50 Q 400,50 400,0 Q 400,50 450,50 L 550,50 Q 700,50 700,200 L 700,600"
              fill="none" stroke="#388697" strokeWidth="3" />
            <path d="M 120,600 L 120,210 Q 120,70 260,70 L 360,70 Q 400,70 400,30 Q 400,70 440,70 L 540,70 Q 680,70 680,210 L 680,600"
              fill="none" stroke="#f5c422" strokeWidth="2" />
          </svg>
        </div>

        <MughalPattern className="absolute inset-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-[90vh] flex flex-col items-center justify-center text-center">
            {/* Ornamental Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#388697] to-transparent"></div>
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
                <span className="font-cinzel text-sm uppercase tracking-[0.4em] text-[#388697]">
                  NIT Rourkela Presents
                </span>
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
                <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#388697] to-transparent"></div>
              </div>
            </div>

            {/* Central Title with Ornate Frame */}
            <div className="relative">
              {/* Corner Decorations */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-[#f5c422]"></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 border-t-4 border-r-4 border-[#f5c422]"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-b-4 border-l-4 border-[#388697]"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-[#388697]"></div>

              <div className="px-16 py-12">
                <h1
                  ref={heroHeadingRef}
                  className="font-display text-8xl md:text-9xl lg:text-[12rem] font-black text-[#15122e] leading-[0.85] mb-6 opacity-0 transform translate-y-8"
                  style={{ letterSpacing: '0.05em' }}
                >
                  VAK<span className="text-[#f5c422]">RU</span>TA
                </h1>

                {/* Decorative Line */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-24 h-1 bg-[#388697]"></div>
                  <div className="w-4 h-4 rotate-45 border-2 border-[#f5c422]"></div>
                  <div className="w-24 h-1 bg-[#388697]"></div>
                </div>

                <p
                  ref={heroParagraphRef}
                  className="font-cinzel text-2xl md:text-3xl text-[#15122e] leading-relaxed max-w-3xl mx-auto opacity-0 transform translate-y-8 italic"
                >
                  Where articulation meets intellect in the grand tradition of India's royal courts
                </p>
              </div>
            </div>

            {/* Ornate Image Frame */}
            <div
              ref={heroImageRef}
              className="mt-16 relative opacity-0 transform translate-y-8"
            >
              <div className="relative inline-block">
                {/* Multi-layered Border Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#388697] to-[#f5c422] opacity-30"></div>
                <div className="absolute -inset-3 border-2 border-[#f5c422]"></div>
                <div className="absolute -inset-2 border border-[#388697]"></div>

                <div className="relative bg-[#15122e] p-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F981caa52e21948b987df073157a54df3?format=webp&width=800"
                    alt="Vakruta Pattern"
                    className="w-full max-w-2xl h-80 object-cover"
                  />
                </div>

                {/* Ornate Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="bg-[#f5c422] px-8 py-4 clip-hexagon relative">
                      <div className="absolute inset-0 border-2 border-[#15122e] m-1"></div>
                      <p className="font-display text-4xl font-bold text-[#15122e] relative z-10">2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-20">
              <button className="relative group">
                <div className="absolute inset-0 bg-[#f5c422] transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-[#15122e] m-1 px-12 py-5 font-cinzel font-bold text-[#f5c422] uppercase tracking-[0.2em] group-hover:bg-[#f5c422] group-hover:text-[#15122e] transition-colors duration-300">
                  <span className="inline-flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" />
                    </svg>
                    Sponsor Us
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Palace Corridor Style */}
      <section
        id="about"
        className="py-24 md:py-32 bg-[#15122e] relative overflow-hidden"
      >
        <MughalPattern className="absolute inset-0" />

        {/* Ornate Border Pattern */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#f5c422] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#388697] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Ornate Section Header */}
          <div className="text-center mb-20">
            <div
              ref={aboutHeadingRef}
              className="opacity-0 transform translate-y-8"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                <span className="font-cinzel text-xs uppercase tracking-[0.5em] text-[#f5c422]">
                  About the Tournament
                </span>
                <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
              </div>
              <h2 className="font-display text-7xl md:text-8xl font-black text-[#f5c422] leading-tight mb-6">
                The Art of Argument
              </h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-32 h-px bg-[#388697]"></div>
                <div className="w-3 h-3 bg-[#f5c422]"></div>
                <div className="w-32 h-px bg-[#388697]"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left: Ornate Image Frame */}
            <div
              ref={aboutImageRef}
              className="opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-6 border-2 border-[#f5c422] opacity-50"></div>
                <div className="absolute -inset-4 border border-[#388697] opacity-70"></div>

                <div className="relative bg-[#f5c422] p-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2F14012f80d4794515a0272d68adccc272?format=webp&width=500"
                    alt="Indian Architecture"
                    className="w-full h-96 object-cover"
                  />
                </div>

                {/* Ornamental Corner Accents */}
                <div className="absolute -top-4 -left-4 w-8 h-8">
                  <div className="w-full h-full border-t-4 border-l-4 border-[#f5c422]"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8">
                  <div className="w-full h-full border-t-4 border-r-4 border-[#388697]"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8">
                  <div className="w-full h-full border-b-4 border-l-4 border-[#388697]"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8">
                  <div className="w-full h-full border-b-4 border-r-4 border-[#f5c422]"></div>
                </div>
              </div>
            </div>

            {/* Center & Right: Content with Royal Styling */}
            <div className="md:col-span-2">
              <div
                ref={aboutTextRef}
                className="space-y-8 opacity-0 transform translate-y-8"
              >
                {/* Text Blocks with Ornate Borders */}
                <div className="relative bg-gradient-to-r from-[#388697]/20 to-transparent p-8 border-l-4 border-[#f5c422]">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#f5c422]"></div>
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed">
                    Vakruta is NIT Rourkela's flagship Asian Parliamentary Debate tournament, bringing together the brightest minds from institutions across India in a celebration of eloquence and intellect.
                  </p>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#388697]"></div>
                </div>

                <div className="relative bg-gradient-to-l from-[#f5c422]/20 to-transparent p-8 border-r-4 border-[#388697]">
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#388697]"></div>
                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed">
                    Through rigorous debate rounds, engaging workshops, and competitive spirit, Vakruta cultivates eloquence, analytical thinking, and the ability to articulate complex ideas with clarity and conviction.
                  </p>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#f5c422]"></div>
                </div>

                {/* Decorative Stats Row */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  {[
                    { num: "100+", label: "Debaters", color: "#f5c422" },
                    { num: "20+", label: "Rounds", color: "#388697" },
                    { num: "3", label: "Days", color: "#f5c422" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#388697]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative border-2 border-[#f3e8dc]/20 p-6 hover:border-[#f5c422] transition-colors duration-300">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45" style={{ backgroundColor: stat.color }}></div>
                        <p className="font-display text-5xl font-black mb-2" style={{ color: stat.color }}>
                          {stat.num}
                        </p>
                        <p className="font-cinzel text-xs uppercase tracking-widest text-[#f3e8dc]">
                          {stat.label}
                        </p>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rotate-45 bg-[#388697]"></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Format Badge */}
                <div className="mt-12 text-center">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-[#f5c422] transform rotate-2"></div>
                    <div className="relative bg-[#15122e] border-2 border-[#f5c422] px-10 py-4">
                      <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-[#f5c422]">
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
                <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
              </svg>
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
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
                            <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
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

      {/* Brochure Section - Royal Scroll */}
      <section
        id="brochure"
        className="py-24 md:py-32 bg-[#388697] relative overflow-hidden"
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

        {/* Decorative Border */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-4 py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-2 rotate-45 bg-[#f5c422] opacity-50"></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Left - Ornate Manuscript Frame */}
            <div
              ref={brochureLeftRef}
              className="md:col-span-2 opacity-0 transform translate-y-8"
            >
              <div className="relative">
                {/* Ornate Multi-layer Frame */}
                <div className="absolute -inset-8 border-2 border-[#f5c422]"></div>
                <div className="absolute -inset-6 border border-[#15122e]"></div>
                <div className="absolute -inset-4 border-2 border-[#f3e8dc]"></div>

                {/* Corner Decorations */}
                <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-[#f5c422]"></div>
                <div className="absolute -top-6 -right-6 w-16 h-16 border-t-4 border-r-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-4 border-l-4 border-[#f5c422]"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 border-b-4 border-r-4 border-[#f5c422]"></div>

                {/* Manuscript Image */}
                <div className="relative bg-[#f3e8dc] p-4">
                  <div className="bg-white p-3 shadow-2xl">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F7c19d5750a434083a19dfc82c5f593f4%2Fa3b9abeeff424a8d82fadf2d789e4d7a?format=webp&width=600"
                      alt="Brochure"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Ornamental Star Accents */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                    <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#15122e]">
                    <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right - Royal Proclamation Style */}
            <div className="md:col-span-3">
              <div
                ref={brochureHeadingRef}
                className="mb-12 opacity-0 transform translate-y-8"
              >
                {/* Ornate Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                  <div className="flex-1 h-px bg-[#f5c422]"></div>
                  <div className="w-12 h-12 border-2 border-[#f5c422] rotate-45"></div>
                </div>

                <h2 className="font-display text-7xl md:text-8xl font-black text-white leading-none mb-6">
                  COMPLETE<br />GUIDE
                </h2>

                <div className="flex items-center gap-3">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                  <div className="w-32 h-1 bg-[#f5c422]"></div>
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div
                ref={brochureRightRef}
                className="opacity-0 transform translate-y-8"
              >
                {/* Ornate Content Box */}
                <div className="relative bg-[#15122e] border-4 border-[#f5c422] p-10 mb-8">
                  {/* Corner Ornaments */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#f5c422]"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#f5c422]"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#f5c422]"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#f5c422]"></div>

                  <p className="font-cinzel text-lg text-[#f3e8dc] leading-relaxed mb-8 italic">
                    Download our comprehensive tournament manuscript featuring complete details about Vakruta's debate format, schedule, rules, and registration information.
                  </p>

                  {/* Ornamental List */}
                  <div className="space-y-4">
                    {[
                      "Tournament Format & Asian Parliamentary Rules",
                      "Detailed Schedule & Round Breakdowns",
                      "Registration Process & Eligibility Criteria",
                      "Prize Pool & Recognition Categories",
                      "Adjudication Standards & Judging Process",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 group"
                      >
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-4 h-4 border-2 border-[#f5c422] rotate-45 group-hover:bg-[#f5c422] transition-colors duration-300"></div>
                        </div>
                        <span className="font-cinzel text-sm text-[#f3e8dc] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ornate Download Button */}
                <div className="relative group">
                  {/* Decorative Border Animation */}
                  <div className="absolute -inset-2 border-2 border-[#f5c422] group-hover:inset-0 transition-all duration-300"></div>

                  <button className="relative w-full bg-[#f5c422] text-[#15122e] font-display text-xl font-black py-6 px-8 uppercase tracking-[0.2em] group-hover:bg-[#f3e8dc] transition-all duration-300">
                    <span className="inline-flex items-center justify-center gap-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2 L15,10 L23,10 L17,15 L19,23 L12,18 L5,23 L7,15 L1,10 L9,10 Z" />
                      </svg>
                      Download Brochure
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2 L15,10 L23,10 L17,15 L19,23 L12,18 L5,23 L7,15 L1,10 L9,10 Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 py-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2 h-2 rotate-45 bg-[#f5c422] opacity-50"></div>
          ))}
        </div>
      </section>

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
        <MughalPattern className="absolute inset-0 opacity-50" />

        {/* Top Border Decoration */}
        <div className="absolute top-0 left-0 right-0 flex justify-center gap-6 py-6">
          {[...Array(12)].map((_, i) => (
            <div key={i}>
              {i % 3 === 0 ? (
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#f5c422] opacity-30">
                  <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor" />
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

                {/* Stars in Corners */}
                <div className="absolute -top-6 -left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -top-6 -right-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#388697]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f5c422]">
                    <path d="M20,4 L24,16 L36,16 L26,24 L30,36 L20,28 L10,36 L14,24 L4,16 L16,16 Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="px-20 py-12">
                  <h2 className="font-display text-8xl md:text-[10rem] font-black text-[#f5c422] leading-[0.9]">
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

              {/* Corner Stars */}
              <div className="absolute -top-4 -left-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -top-4 -right-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-4">
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-[#f5c422]">
                  <path d="M15,2 L18,12 L28,12 L20,18 L23,28 L15,22 L7,28 L10,18 L2,12 L12,12 Z" fill="currentColor" />
                </svg>
              </div>

              <button className="relative group">
                <div className="absolute inset-0 bg-[#f5c422] transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-[#15122e] m-2 px-16 py-7 font-display font-black text-2xl text-[#f5c422] uppercase tracking-[0.3em] group-hover:bg-[#f5c422] group-hover:text-[#15122e] transition-colors duration-300">
                  <span className="inline-flex items-center gap-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                      <path d="M14,2 L17,11 L26,11 L19,17 L22,26 L14,20 L6,26 L9,17 L2,11 L11,11 Z" />
                    </svg>
                    Register Now
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                      <path d="M14,2 L17,11 L26,11 L19,17 L22,26 L14,20 L6,26 L9,17 L2,11 L11,11 Z" />
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
                  <path d="M10,2 L12,8 L18,8 L13,12 L15,18 L10,14 L5,18 L7,12 L2,8 L8,8 Z" fill="currentColor" />
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
              <path d="M40,8 L48,32 L72,32 L52,48 L60,72 L40,56 L20,72 L28,48 L8,32 L32,32 Z" fill="currentColor" />
            </svg>
            <p className="font-display text-[8rem] font-black text-white">
              VAKRUTA
            </p>
            <svg width="80" height="80" viewBox="0 0 80 80" className="text-white">
              <path d="M40,8 L48,32 L72,32 L52,48 L60,72 L40,56 L20,72 L28,48 L8,32 L32,32 Z" fill="currentColor" />
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