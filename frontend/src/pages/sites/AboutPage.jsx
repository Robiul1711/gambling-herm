import FundingConflictOfInterest from "@/components/aboutComponents/FundingConflictOfInterest";
import OurMission from "@/components/aboutComponents/OurMission";
import VisionValuesAims from "@/components/aboutComponents/VisionValuesAims";
import TrusteesAndTeam from "@/components/aboutComponents/TrusteesAndTeam";
import React from "react";
import aboutBannerImg from "@/assets/images/about1.png";
import ContactAndPress from "@/components/aboutComponents/ContactAndPress";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "mission", title: "1. Our mission" },
  { id: "vision", title: "2. Vision, values & aims" },
  { id: "funding", title: "3. Funding & conflicts of interest" },
  { id: "team", title: "4. Trustees & team" },
  { id: "contact", title: "5. Contact & press" },
];

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
          title={bannerData?.title || "A public-health charity tackling gambling harm at the level of systems."}
          description={
            bannerData?.description ||
            "Gambling Harm UK is an independent charity, registered in England and Wales and governed by a board that combines lived experience with professional expertise. We do not accept funding from the gambling industry. We embed prevention, early identification and safeguarding in everyday professional practice, across health, education, local government and the voluntary sector."
          }
          image={bannerData?.image || aboutBannerImg}
          isLoading={isLoading}
        />
      </div>

      <PageSectionNav sections={sections} />

      <div id="mission" className="scroll-mt-24">
        <OurMission />
      </div>

      <div id="vision" className="scroll-mt-24">
        <VisionValuesAims />
      </div>

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
