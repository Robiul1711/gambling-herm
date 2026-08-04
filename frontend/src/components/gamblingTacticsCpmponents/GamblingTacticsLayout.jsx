import React, { useState, useEffect } from "react";
import TacticsSidebar from "./TacticsSidebar";
import TacticOne from "./TacticOne";
import TacticTwo from "./TacticTwo";
import TacticThree from "./TacticThree";
import TacticFour from "./TacticFour";
import TacticFive from "./TacticFive";
import TacticSix from "./TacticSix";
import TacticSeven from "./TacticSeven";

const ALL_SECTIONS = [
  "why-this-exists",
  "tactic-1",
  "tactic-2",
  "tactic-3",
  "tactic-4",
  "tactic-5",
  "tactic-6",
  "tactic-7",
];

const GamblingTacticsLayout = () => {
  const [activeSection, setActiveSection] = useState("why-this-exists");

  // Smooth scroll on sidebar click
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Highlight active sidebar item on scroll
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
          <TacticsSidebar
            activeSection={activeSection}
            onNavigate={handleScrollTo}
          />
        </aside>

        {/* Content Blocks */}
        <div className="lg:col-span-9 space-y-16 order-2">
          {/* Why this exists — intro block */}
          <div
            id="why-this-exists"
            className="border-l-4 border-[#0093D0] bg-[#eef7fc] p-6 md:p-8 space-y-4 rounded-r-sm scroll-mt-28"
          >
            <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase">
              WHY THIS EXISTS
            </h4>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              We, the research team at Gambling Harm UK, built{" "}
              <em className="italic">Gambling Tactics</em> following a review of the
              vitally important <em className="italic">Tobacco Tactics</em> repository.
              As with tobacco, there are well-grounded concerns that{" "}
              <strong className="font-bold text-gray-900">
                gambling industry interference is the greatest barrier to progress
              </strong>{" "}
              in reducing gambling harm. Industry funding has dominated research,
              education and treatment. Efforts to implement a public-health approach are
              prevented in the first place by the lack of effort to identify, estimate
              or consider the years of healthy life lost due to gambling harm. Gambling
              harm continues to be a neglected public-health issue.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              The repository is published to make those tactics visible. Once you can see the
              playbook, the policy debate becomes very different.
            </p>
          </div>

          <TacticOne />
          <TacticTwo />
          <TacticThree />
          <TacticFour />
          <TacticFive />
          <TacticSix />
          <TacticSeven />
        </div>
      </div>
    </section>
  );
};

export default GamblingTacticsLayout;
