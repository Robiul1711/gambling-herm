import FundingConflictOfInterest from "@/components/aboutComponents/FundingConflictOfInterest";
import OurMission from "@/components/aboutComponents/OurMission";
import VisionValuesAims from "@/components/aboutComponents/VisionValuesAims";
import TrusteesAndTeam from "@/components/aboutComponents/TrusteesAndTeam";
import React from "react";
import aboutBannerImg from "@/assets/images/about1.png";
import ContactAndPress from "@/components/aboutComponents/ContactAndPress";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import useClient from "@/hooks/useClient";

const AboutPage = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["aboutWhoWeAre"],
    url: "/about/who-we-are",
  });

  const bannerData = responseData?.data;

  return (
    <div>
      <div className="">
        {/* <AboutBanner /> */}
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Who we are"}
          title={bannerData?.title || "An independent voice on gambling harm."}
          description={
            bannerData?.description ||
            "We exist because gambling causes preventable, industrial-scale harm in the UK, and the people most affected deserve accurate information, real support, population-level action and a regulatory response that takes them seriously."
          }
          image={bannerData?.image || aboutBannerImg}
          isLoading={isLoading}
        />
      </div>
      <OurMission />
      <VisionValuesAims />
      <div id="funding" className="scroll-mt-24">
        <FundingConflictOfInterest />
      </div>

      <div id="team" className="scroll-mt-24">
        <TrusteesAndTeam />
      </div>
      <div id="contact" className="scroll-mt-24">
        <ContactAndPress />
      </div>
    </div>
  );
};

export default AboutPage;
