import FundingConflictOfInterest from "@/components/aboutComponents/FundingConflictOfInterest";
import OurMission from "@/components/aboutComponents/OurMission";
import TrusteesAndTeam from "@/components/aboutComponents/TrusteesAndTeam";
import CommonBanner from "@/components/common/CommonBanner";
import React from "react";
import aboutBannerImg from "@/assets/images/banner.png";
import SubmissionFeatured from "@/components/aboutComponents/SubmissionFeatured";
import NewsletterBanner from "@/components/common/NewsletterBanner";
import ResourceGrid from "@/components/aboutComponents/ResourceGrid";
const NewsAndReserch = () => {
  return (
    <div>
      {/* <AboutBanner /> */}
      <CommonBanner
        image={aboutBannerImg}
        title="What we're publishing."
        tag="News, research & commentary
"
        description="Briefings, working papers, consultation responses, press statements and blog posts. All produced independently of gambling-industry funding.
"
      />
      <SubmissionFeatured />
      <ResourceGrid/>
      <NewsletterBanner />
    </div>
  );
};

export default NewsAndReserch;
