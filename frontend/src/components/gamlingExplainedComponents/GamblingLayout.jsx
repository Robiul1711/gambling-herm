import React, { useState, useEffect } from "react";
import ChaptersSidebar from "./ChaptersSidebar";
import ChapterOne from "./ChapterOne";
import ChapterTwo from "./ChapterTwo";
import ChapterThree from "./ChapterThree";
import ChapterFour from "./ChapterFour";
import ChapterFive from "./ChapterFive";
import ChapterSix from "./ChapterSix";
import ChapterSeven from "./ChapterSeven";
import ChapterEight from "./ChapterEight";
import ChapterNine from "./ChapterNine";
import ChapterTen from "./ChapterTen";
import WhyItExists from "./WhyItExists";
import HowItIsUsed from "./HowItIsUsed";
import ReadAndCite from "./ReadAndCite";

const ALL_SECTIONS = [
  "what-it-is",
  "chapter-1",
  "gambling-addiction",
  "children-young",
  "advertising",
  "research-education",
  "product-design",
  "conducted",
  "voluntary-bans",
  "multinational",
  "crime",
  "why-it-exists",
  "how-it-is-used",
  "read-and-cite",
];

const GamblingLayout = () => {
  const [activeSection, setActiveSection] = useState("what-it-is");

  // Smooth Scroll Controller
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  // Active state watcher on scroll — tracks ALL sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Sticky Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-6 order-1">
          <ChaptersSidebar activeSection={activeSection} onNavigate={handleScrollTo} />
        </aside>

        {/* Dynamic Chapter Blocks */}
        <div className="lg:col-span-9 space-y-16 order-2">
          {/* Introduction block */}
          <div id="what-it-is" className="bg-sky-50/40 border-l-4 border-Primary p-6 rounded-r-xl space-y-4">
            <h4 className="text-Primary font-semibold text-base">What it is</h4>
            <p className="text-slate-600 text-sm md:text-base italic leading-relaxed">
              <span className="font-semibold">Gambling Explained</span> is a high-level synthesis of the scientific evidence and the industry lobbying around it...
            </p>
          </div>

          <ChapterOne />
          <ChapterTwo />
          <ChapterThree />
          <ChapterFour />
          <ChapterFive />
          <ChapterSix />
          <ChapterSeven />
          <ChapterEight />
          <ChapterNine />
          <ChapterTen />

          {/* New trailing sections */}
          <WhyItExists />
          <HowItIsUsed />
          <ReadAndCite />
        </div>

      </div>
    </section>
  );
};

export default GamblingLayout;