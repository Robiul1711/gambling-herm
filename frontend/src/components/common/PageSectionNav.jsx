import React, { useState, useEffect, useRef } from "react";

const PageSectionNav = ({ sections = [], className = "", containerClassName = "" }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const navRef = useRef(null);
  const buttonsRef = useRef({});

  // Auto-update active button based on user scroll position
  useEffect(() => {
    if (!sections || sections.length === 0) return;

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
      observerOptions
    );

    sections.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Keep active pill scrolled into view horizontally on mobile
  useEffect(() => {
    if (activeSection && buttonsRef.current[activeSection]) {
      const btn = buttonsRef.current[activeSection];
      btn.scrollIntoView?.({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [activeSection]);

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

  if (!sections || sections.length === 0) return null;

  return (
    <div
      ref={navRef}
      className={`sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm py-3 md:py-4 mb-8 md:mb-12 ${className}`}
    >
      <div className={`max-w-5xl mx-auto px-4 sm:px-6 ${containerClassName}`}>
        <div className="flex items-center justify-between gap-4">
          {/* Swipeable on mobile screens, wraps clean grid items on desktop viewport */}
          <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-1 scrollbar-hide snap-x w-full">
            {sections.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  ref={(el) => (buttonsRef.current[item.id] = el)}
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

export default PageSectionNav;
