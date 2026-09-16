import React, { useState, useEffect } from "react";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import PolicyTabs from "@/components/policyAndAdvocacyComponents/PolicyTabs";
import WhatWeWantChanged from "@/components/policyAndAdvocacyComponents/WhatWeWantChanged";
import WhatWeReject from "@/components/policyAndAdvocacyComponents/WhatWeReject";
import TobaccoControlParallel from "@/components/policyAndAdvocacyComponents/TobaccoControlParallel";
import RegulatoryCaptureLobbying from "@/components/policyAndAdvocacyComponents/RegulatoryCaptureLobbying";
import OurFundingCOI from "@/components/policyAndAdvocacyComponents/OurFundingCOI";
import useClient from "@/hooks/useClient";

const SECTION_IDS = [
  "what-we-want-changed",
  "what-we-reject",
  "tobacco-control-parallel",
  "regulatory-capture-and-lobbying",
  "our-funding-and-coi",
];

const PolicyAndAdvocacy = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "work-policy-banner"],
    url: "/about/work-policy-banner",
  });

  const bannerData = responseData?.data;

  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

  // Scroll to section on tab click
  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveSection(id);
  };

  // Update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Centered Hero Banner (PA2: REMOVE THE HERO IMAGE. Centre the title block.) */}
      <section
        className="w-full py-8 sm:py-12 md:py-20 section-padding-x"
        style={{
          background:
            "linear-gradient(180deg, var(--teal-10) 0%, var(--paper) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {isLoading ? (
            <div className="space-y-5 animate-pulse w-full max-w-2xl mx-auto flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-[2px] bg-slate-200 rounded" />
                <div className="h-3.5 w-32 bg-slate-200 rounded" />
              </div>
              <div className="space-y-3 w-full flex flex-col items-center">
                <div className="h-10 sm:h-12 w-[85%] bg-slate-200 rounded" />
                <div className="h-10 sm:h-12 w-[65%] bg-slate-200 rounded" />
              </div>
              <div className="space-y-2 pt-1 w-full flex flex-col items-center">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-[90%] bg-slate-200 rounded" />
              </div>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {/* Breadcrumb / Eyebrow */}
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium text-slate-600">
                <span className="w-6 h-[2px] bg-Primary block"></span>
                <p className="text-Primary2">
                  {bannerData?.subtitle || "Policy & advocacy"}
                </p>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
                {bannerData?.title ||
                  "What we want changed, and what we don't."}
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
                {bannerData?.description ||
                  "Our positions follow directly from the burden of harm. They are the things we believe the UK needs to do, and the framings we believe should be retired from public conversation. We say them plainly."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Tab scroll navigation */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm py-4 border-b border-gray-200">
        <PolicyTabs activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      {/* Page Sections */}
      <div>
        <WhatWeWantChanged />
        <WhatWeReject />
        <TobaccoControlParallel />
        <RegulatoryCaptureLobbying />
        <OurFundingCOI />
      </div>

      <OurWorkCommonContact
      primaryClass={'bg-Primary'}
        title="Want to follow what we're saying?"
        description="Our consultation responses, briefings, working papers and press statements are indexed on the news page."
        primaryBtnText="News & research index"
        primaryBtnLink="/get-help"
        secondaryBtnText="Contact & press"
        secondaryBtnLink="/about#contact"
      />
    </>
  );
};

export default PolicyAndAdvocacy;

