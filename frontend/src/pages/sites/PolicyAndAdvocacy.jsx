import React, { useState, useEffect } from "react";
import bannerImg from "@/assets/images/policy.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import PolicyTabs from "@/components/policyAndAdvocacyComponents/PolicyTabs";
import WhatWeWantChanged from "@/components/policyAndAdvocacyComponents/WhatWeWantChanged";
import WhatWeReject from "@/components/policyAndAdvocacyComponents/WhatWeReject";
import TobaccoControlParallel from "@/components/policyAndAdvocacyComponents/TobaccoControlParallel";
import RegulatoryCaptureLobbying from "@/components/policyAndAdvocacyComponents/RegulatoryCaptureLobbying";
import OurFundingCOI from "@/components/policyAndAdvocacyComponents/OurFundingCOI";
import CurrentAsksGovernment from "@/components/policyAndAdvocacyComponents/CurrentAsksGovernment";

const SECTION_IDS = [
  "what-we-want-changed",
  "what-we-reject",
  "tobacco-control-parallel",
  "regulatory-capture-and-lobbying",
  "our-funding-and-coi",
  "current-asks-of-government",
];

const PolicyAndAdvocacy = () => {
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
      <div className="section-padding-x">
        <GamblingCommonBanner
          section="Policy & Advocacy"
          title="What we want changed, and what we don't."
          description="Our positions follow directly from the burden of harm. They are the things we believe the UK needs to do, and the framings we believe should be retired from public conversation. We say them plainly."
          image={bannerImg}
        />
      </div>

      {/* Tab scroll navigation */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm py-4 border-b border-gray-200">
        <PolicyTabs activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      {/* Page Sections */}
      <div>
        <WhatWeWantChanged />
        <WhatWeReject/>
        <TobaccoControlParallel />
        <RegulatoryCaptureLobbying />
        <OurFundingCOI/>
        <CurrentAsksGovernment/>
      </div>

      <OurWorkCommonContact
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

