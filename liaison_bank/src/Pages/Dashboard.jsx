import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Check,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import NavigationBar from "../Components/Header";
import Footer from "../Components/Footer";
import HiringWidget from "../Components/HiringWidget";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-white border-b border-yellow-400 overflow-hidden mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-12">
        {/* LABEL */}
        <div
          className="
          bg-yellow-400 text-white font-semibold
          px-6 py-2 sm:py-0
          sm:h-full
          flex items-center
          whitespace-nowrap
          shrink-0
        "
        >
          Our new branch is opening soon
        </div>

        {/* MARQUEE */}
        <div className="relative w-full sm:flex-1 overflow-hidden">
          <div
            className="
            whitespace-nowrap
            animate-marquee
            text-gray-800 font-medium
            px-4 py-2 sm:py-0
          "
          >
            Unit No.3 Entire 3rd floor Lok Bhavan, Lok Bharti Complex, Lok
            Bharti Road, Off Marol Maroshi Road Marol Andheri (East), Mumbai -
            400059.
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero Section Component with Parallax Effect
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <img
            src="/Hero.webp"
            alt="Business professionals"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-2 text-yellow-400 animate-fade-in">
            <Sparkles size={20} className="animate-pulse" />
            <p className="text-sm font-semibold tracking-wider uppercase">
              Efficient, Reliable, and Hassle-Free Solutions
            </p>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Streamline Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              License Acquisitions
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Navigate the complexities with expert guidance. Secure all your
            essential licenses with our comprehensive, end-to-end acquisition
            services.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold flex items-center gap-2">
              Our Expertise
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-semibold border border-white/20">
              About Us
            </button>
          </div>

          <div className="flex flex-wrap gap-8 pt-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Award className="text-yellow-400" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">16+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <Users className="text-yellow-400" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white opacity-50" size={32} />
      </div>
    </section>
  );
};

// About Section Component

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE + CARD */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl opacity-20 blur-xl"></div>

            {/* WELL INTRO IMAGE – APPEAR FROM LEFT */}
            <div className="animate-appear-left">
              <img
                src="/Well Intro.webp"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>

            {/* FLIP + SHAKE CARD */}
            <div className="absolute -bottom-6 -right-6 perspective-[1000px]">
              <div className="relative w-44 h-44 animate-shake">
                <div className="relative w-full h-full animate-flip transform-style-preserve-3d">

                  {/* FRONT */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center flip-face">
                    <div className="text-5xl font-bold mb-1">16</div>
                    <div className="text-sm opacity-90 font-medium">Years of</div>
                    <div className="text-sm opacity-90 font-medium">Expertise</div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center rotate-y-180 flip-face">
                    <div className="text-lg font-bold mb-1">Trusted Since</div>
                    <div className="text-3xl font-extrabold text-yellow-400">
                      2008
                    </div>
                    <div className="text-xs opacity-80 mt-1">
                      Across Industries
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="space-y-6">
            <span className="inline-block text-yellow-500 font-bold text-sm tracking-wider uppercase bg-yellow-50 px-4 py-2 rounded-full">
              Welcome to Liaison Bank
            </span>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Your Partner in{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                Licensing & Liaisoning
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We take care of the intricacies and uncertainties, allowing you to
              redirect your energy towards your core priorities and business
              objectives.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
              <p className="text-gray-700 italic text-lg mb-4">
                "It's not about waiting for things to fall into place. It's
                about making things fall in place by yourself."
              </p>

              <div className="flex items-center">
                <img
                  src="/Deva.webp"
                  alt="Deva Biradar"
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-yellow-400"
                />
                <div>
                  <p className="font-bold text-gray-900">Deva Biradar</p>
                  <p className="text-sm text-gray-600">CEO, Liaison Bank</p>
                </div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold flex items-center gap-2">
              CEO's Desk
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

const PromotionSection = () => {
  const images = useMemo(() => {
    const files = import.meta.glob(
      "../assets/Promotions/*.{png,jpg,jpeg,webp}",
      { eager: true }
    );
    return Object.values(files).map((file) => file.default);
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images.length || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length, isPaused]);

  if (!images.length) return null;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-500 mb-12">
          Promotional Area
        </h2>
        <div
          className="relative overflow-hidden rounded-3xl shadow-2xl
                     h-[380px] sm:h-[450px] lg:h-[550px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out
                ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
            >
              <img
                src={image}
                alt={`Promotion ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 sm:px-12">
                <div className="max-w-xl">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                    Limited Time Offer
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6">
                    Discover our latest services and exclusive promotions
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-3
                               bg-yellow-400 text-white
                               px-6 sm:px-8 py-3 sm:py-4
                               rounded-full font-semibold
                               hover:bg-yellow-500 hover:shadow-xl
                               transition-all"
                  >
                    Explore Now <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            aria-label="Previous slide"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2
                       w-12 h-12 sm:w-14 sm:h-14
                       bg-white/20 hover:bg-white/40
                       backdrop-blur-md rounded-full
                       flex items-center justify-center
                       text-white transition"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % images.length)
            }
            aria-label="Next slide"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2
                       w-12 h-12 sm:w-14 sm:h-14
                       bg-white/20 hover:bg-white/40
                       backdrop-blur-md rounded-full
                       flex items-center justify-center
                       text-white transition"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all
                  ${
                    i === currentSlide
                      ? "w-8 sm:w-10 h-3 bg-yellow-400"
                      : "w-3 h-3 bg-white/60 hover:bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Expertise Section Component
const ExpertiseSection = () => {
  const expertiseItems = [
    {
      title: "Residential",
      image: "/Experties/Residentials.webp",
      description: "Complete licensing solutions for residential projects",
    },
    {
      title: "Garment Manufacturing Units & Other Industrial Units",
      image: "/Experties/Garments.webp",
      description: "Specialized services for manufacturing facilities",
    },
    {
      title: "Hospitals & Nursing Homes",
      image: "/Experties/Hospitals.webp",
      description: "Healthcare facility licensing and compliance",
    },
    {
      title: "Hospitality",
      image: "/Experties/Hospitality.webp",
      description: "Hotel and restaurant licensing services",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 font-bold text-sm tracking-wider uppercase bg-yellow-50 px-4 py-2 rounded-full">
                What We Do
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              We bring our expertise to multiple sectors and create customized
              solutions for diverse business needs.
            </p>
          </div>
          <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold flex items-center gap-2">
            View All
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100">
                <ArrowRight className="text-white" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Services Section Component

const ServicesSection = () => {
  const leftServices = [
    {
      title: "Asset Management & Regularization",
      description:
        "We specialize in providing solutions for regulatory issues faced by residential buildings. We navigate compliances and ensure all necessary regulations are met.",
    },
    {
      title: "Licence Procurement",
      description:
        "Our skilled team handles the intricacies of obtaining licences to save time and provide a seamless experience.",
    },
    {
      title: "Tailor Made Permissions",
      description:
        "Be it hosting events or obtaining certificates, we help you acquire all required approvals.",
    },
  ];

  const rightServices = [
    {
      title: "Energy Savings",
      description:
        "We empower enterprises to leverage Piped Natural Gas (PNG) for higher cost competitiveness.",
    },
    {
      title: "Compliance For SME's",
      description:
        "We provide SMEs with end-to-end compliance solutions to meet safety and regulatory requirements.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-yellow-500 font-bold text-sm tracking-wider uppercase bg-white px-4 py-2 rounded-full shadow-sm">
            Our Services
          </span>
          <h2 className="text-5xl font-bold text-gray-900">
            What We Provide
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* LEFT SERVICES */}
          <div className="space-y-8">
            {leftServices.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>

          {/* IMAGE + BADGE */}
          <div className="flex justify-center">
            <div className="relative animate-appear-right">
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl opacity-20 blur-2xl"></div>

              <img
                src="/Services.webp"
                alt="Services"
                className="relative rounded-3xl shadow-2xl w-full max-w-sm object-cover"
              />

              {/* EXPERT STRATEGIES BADGE */}
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-yellow-400 to-yellow-500 p-6 rounded-2xl shadow-2xl max-w-[180px]">
                <Zap className="text-white mb-2" size={32} />
                <span className="text-white text-lg font-bold leading-tight block typewriter">
                  Expert Strategies
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SERVICES */}
          <div className="space-y-8">
            {rightServices.map((service, index) => (
              <ServiceItem key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ title, description }) => (
  <div className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
      <Check className="text-white" size={20} strokeWidth={3} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const CARD_WIDTH = 192; // w-48
const GAP = 24; // gap-6 (6 * 4px)

const ClientsSection = () => {
  const logos = useMemo(() => {
    const files = import.meta.glob(
      "../assets/Clients/*.{png,jpg,jpeg,webp,svg}",
      { eager: true }
    );
    return Object.values(files).map((f) => f.default);
  }, []);

  const containerRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [page, setPage] = useState(0);

  // calculate how many FIXED cards fit
  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const totalCardWidth = CARD_WIDTH + GAP;
      const visible = Math.max(1, Math.floor(containerWidth / totalCardWidth));

      setCardsPerView(visible);
      setPage(0); // reset safely on resize
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const totalPages = Math.ceil(logos.length / cardsPerView);

  // auto slide ONLY if overflow exists
  useEffect(() => {
    if (totalPages <= 1) return;

    const timer = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalPages]);

  if (!logos.length) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-gray-500 mb-12">
          Our Latest Clients
        </h2>

        {/* ONE ROW – FIXED SIZE CARDS */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex flex-nowrap gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${
                page * cardsPerView * (CARD_WIDTH + GAP)
              }px)`,
            }}
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  w-48 h-36
                  flex items-center justify-center
                  border-2 border-yellow-400
                  rounded-2xl bg-white
                "
              >
                <img
                  src={logo}
                  alt={`Client ${i + 1}`}
                  className="max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS – ONLY IF OVERFLOW */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition cursor-pointer
                  ${i === page ? "bg-blue-500" : "bg-blue-200"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const LiaisonBank = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <AnnouncementBar />
      <HeroSection />
      <AboutSection />
      <PromotionSection />
      <ExpertiseSection />
      <ServicesSection />
      <ClientsSection />
      <Footer />
      <HiringWidget />
    </div>
  );
};

export default LiaisonBank;
