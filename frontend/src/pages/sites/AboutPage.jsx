import FundingConflictOfInterest from "@/components/aboutComponents/FundingConflictOfInterest";
import OurMission from "@/components/aboutComponents/OurMission";
import TrusteesAndTeam from "@/components/aboutComponents/TrusteesAndTeam";
import React from "react";
import aboutBannerImg from "@/assets/images/about1.png";
import ContactAndPress from "@/components/aboutComponents/ContactAndPress";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
const AboutPage = () => {
  return (
    <div>
      <div className="section-padding-x">

      {/* <AboutBanner /> */}
    <GamblingCommonBanner
          section="Who we are"
          title="An independent voice
on gambling harm."
          description="We exist because gambling causes preventable, industrial-scale
harm in the UK, and the people most affected deserve accurate
information, real support, and a regulatory response that takes them
seriously."
          image={aboutBannerImg}
  
        />
      </div>
      <OurMission />
      <div id="funding" className="scroll-mt-24">
        <FundingConflictOfInterest />
      </div>

      <TrusteesAndTeam />
      <div id="contact" className="scroll-mt-24">
        <ContactAndPress/>
      </div>
    </div>
  );
};

export default AboutPage;
