import React, { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "gambling-harm",
    title: "1. What gambling harm looks like",
  },
  {
    id: "normal-product",
    title: "2. Gambling is not a normal product",
  },
  {
    id: "addiction-design",
    title: "3. Addiction by design",
  },
  {
    id: "safer-gambling",
    title: '4. The "safer gambling" myth',
  },
  {
    id: "all-around-us",
    title: "5. It's all around us",
  },
  {
    id: "affected",
    title: "6. Who is affected",
  },
  {
    id: "language",
    title: "7. A note on language & measurement",
  },
];

const UnderstandingNav = () => {
  const [activeSection, setActiveSection] = useState("gambling-harm");
  const navRef = useRef(null);

  // Auto-update active button based on user scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const navHeight = navRef.current?.offsetHeight || 60;
      const top =
        el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={navRef}
      className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm py-3 md:py-4 mb-8 md:mb-12"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Swipeable on mobile screens, wraps clean grid items on desktop viewport */}
          <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-1 scrollbar-hide snap-x w-full">
            {sections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`px-3 py-2 text-xs md:text-sm font-medium border transition-all duration-200 cursor-pointer whitespace-nowrap snap-center shrink-0 ${
                    isActive
                      ? "bg-[#1f2937] text-white border-[#1f2937] shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingNav;
