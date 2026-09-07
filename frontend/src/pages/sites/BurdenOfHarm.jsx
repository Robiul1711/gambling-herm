import React, { useRef, useState, useEffect } from "react";
import bannerImg from "@/assets/images/cy1.png";
import ModifiableRiskFactor from "@/components/burdenOfHarmComponents/ModifiableRiskFactor";
import PopulationBurden from "@/components/burdenOfHarmComponents/PopulationBurden";
import AnyoneCanBeHarmed from "@/components/burdenOfHarmComponents/AnyoneCanBeHarmed";
import ChildrenYoungPeople from "@/components/burdenOfHarmComponents/ChildrenYoungPeople";
import AffectedOthersDirectVictims from "@/components/burdenOfHarmComponents/AffectedOthersDirectVictims";
import GamblingRelatedSuicide from "@/components/burdenOfHarmComponents/GamblingRelatedSuicide";
import CostExceedsRevenue from "@/components/burdenOfHarmComponents/CostExceedsRevenue";
import WholeSystemResponse from "@/components/burdenOfHarmComponents/WholeSystemResponse";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";

import useClient from "@/hooks/useClient";

const BurdenOfHarm = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "work-burden-banner"],
    url: "/about/work-burden-banner",
  });

  const bannerData = responseData?.data;

  // 1. Create references for each component section
  // 1. Create references for each component section
  const sectionRefs = {
    modifiable: useRef(null),
    population: useRef(null),
    anyone: useRef(null),
    children: useRef(null),
    affected: useRef(null),
    suicide: useRef(null),
    cost: useRef(null),
    wholeSystem: useRef(null),
  };

  // 2. Navigation items definition mapping to the references
  const navItems = [
    {
      id: "modifiable",
      label: "1. A Modifiable Risk Factor",
      ref: sectionRefs.modifiable,
    },
    {
      id: "population",
      label: "2. The population burden",
      ref: sectionRefs.population,
    },
    { id: "anyone", label: "3. Anyone can be harmed", ref: sectionRefs.anyone },
    {
      id: "children",
      label: "4. Children & young people",
      ref: sectionRefs.children,
    },
    {
      id: "affected",
      label: "5. People harmed by someone else’s gambling as direct victims",
      ref: sectionRefs.affected,
    },
    {
      id: "suicide",
      label: "6. Gambling-related suicide",
      ref: sectionRefs.suicide,
    },
    { id: "cost", label: "7. Cost exceeds revenue", ref: sectionRefs.cost },
    {
      id: "wholeSystem",
      label: "8. A whole-system response",
      ref: sectionRefs.wholeSystem,
    },
  ];

  // State to track which section is currently active/visible
  const [activeSection, setActiveSection] = useState("modifiable");

  // 3. Smooth scrolling handler
  const handleScroll = (ref, id) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  // 4. Auto-update active button based on user scroll position
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjusts when the section triggers as active
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedItem = navItems.find(
            (item) => item.ref.current === entry.target,
          );
          if (matchedItem) {
            setActiveSection(matchedItem.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections that exist
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white w-full">
      <div className="">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Evidence · Burden of harm"}
          title={
            bannerData?.title ||
            "Gambling is a leading, modifiable risk factor for ill-health in the UK, and is treated as if it isn't."
          }
          description={
            bannerData?.description ||
            "This page sets out the population burden, the people who carry it, and why the UK's policy response to gambling harm is several orders of magnitude smaller than the public-health evidence justifies."
          }
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}
        />
      </div>

      {/* --- QUICK NAVIGATION MENU --- */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm py-3 md:py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* <div className="hidden lg:flex items-center gap-3 shrink-0">
 <span className="w-6 h-[2px] bg-Primary" />
 <span className="text-xs font-semibold text-Primary tracking-wide uppercase">On This Page</span>
 </div> */}

            {/* Swipeable on mobile screens, wraps clean grid items on desktop viewport */}
            <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-1 scrollbar-hide snap-x w-full">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.ref, item.id)}
                    className={`px-3 py-2 text-xs md:text-sm font-medium border transition-all duration-200 cursor-pointer whitespace-nowrap snap-center shrink-0 ${
                      isActive
                        ? "bg-[#1f2937] text-white border-[#1f2937] shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------- */}

      {/* Main Sections Grid/Stack */}
      <div className="py-4 md:py-6 space-y-10 md:space-y-14 lg:space-y-16">
        <div
          ref={sectionRefs.modifiable}
          className="scroll-mt-16 md:scroll-mt-24"
        >
          <ModifiableRiskFactor />
        </div>
        <div
          ref={sectionRefs.population}
          className="scroll-mt-16 md:scroll-mt-24"
        >
          <PopulationBurden />
        </div>
        <div ref={sectionRefs.anyone} className="scroll-mt-16 md:scroll-mt-24">
          <AnyoneCanBeHarmed />
        </div>
        <div
          ref={sectionRefs.children}
          className="scroll-mt-16 md:scroll-mt-24"
        >
          <ChildrenYoungPeople />
        </div>
        <div
          ref={sectionRefs.affected}
          className="scroll-mt-16 md:scroll-mt-24"
        >
          <AffectedOthersDirectVictims />
        </div>
        <div ref={sectionRefs.suicide} className="scroll-mt-16 md:scroll-mt-24">
          <GamblingRelatedSuicide />
        </div>
        <div ref={sectionRefs.cost} className="scroll-mt-16 md:scroll-mt-24">
          <CostExceedsRevenue />
        </div>
        <div
          ref={sectionRefs.wholeSystem}
          className="scroll-mt-16 md:scroll-mt-24"
        >
          <WholeSystemResponse />
        </div>
      </div>
      <OurWorkCommonContact
        primaryClass="bg-Primary"
        secondaryClass="bg-white !text-black border border-Primary"
        title="From burden to policy."
        description="Our policy positions follow directly from the evidence above. They are the things we believe the UK needs to do. We publish our modelling, label our own combinations as our own, and invite scrutiny of both. That is what distinguishes evidence from messaging."
        primaryBtnText="Read our policy positions"
        primaryBtnLink="/policy-and-advocacy"
        secondaryBtnText="Latest publications"
        secondaryBtnLink="/news-and-research"
      />
    </div>
  );
};

export default BurdenOfHarm;
