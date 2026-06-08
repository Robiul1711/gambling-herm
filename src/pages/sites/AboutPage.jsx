import AboutBanner from "@/components/aboutComponents/AboutBanner";
import FundingConflictOfInterest from "@/components/aboutComponents/FundingConflictOfInterest";
import OurMission from "@/components/aboutComponents/OurMission";
import TrusteesAndTeam from "@/components/aboutComponents/TrusteesAndTeam";
import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import aboutBannerImg from "@/assets/images/banner.png";
const AboutPage = () => {
  return (
    <div>
      {/* <AboutBanner /> */}
      <CommonBanner
        image={aboutBannerImg}
        title="An independent voice on gambling harm."
        tag="Who We Are"
        description="  We exist because gambling causes preventable, industrial-scale harm in the UK, and the 
            people affected deserve accurate information, real support, and a regulatory response that 
            takes them seriously."
      />
      <OurMission />
      <FundingConflictOfInterest />
      <TrusteesAndTeam />
    </div>
  );
};

export default AboutPage;
