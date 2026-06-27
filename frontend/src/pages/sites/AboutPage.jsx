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
      <div className="section-padding-x">
        {/* <AboutBanner /> */}
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Who we are"}
          title={bannerData?.title || "An independent voice\non gambling harm."}
          description={
            bannerData?.description ||
            "We exist because gambling causes preventable, industrial-scale\nharm in the UK, and the people most affected deserve accurate\ninformation, real support, and a regulatory response that takes them\nseriously."
          }
          image={bannerData?.image || aboutBannerImg}
        />
      </div>
      <OurMission />
      <VisionValuesAims />
      <div id="funding" className="scroll-mt-24">
        <FundingConflictOfInterest />
      </div>

      <TrusteesAndTeam />
      <div id="contact" className="scroll-mt-24">
        <ContactAndPress />
      </div>
    </div>
  );
};

export default AboutPage;
