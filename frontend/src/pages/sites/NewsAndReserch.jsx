
import React from "react";
import aboutBannerImg from "@/assets/images/about.jpg";
import SubmissionFeatured from "@/components/aboutComponents/SubmissionFeatured";
import NewsletterBanner from "@/components/common/NewsletterBanner";
import ResourceGrid from "@/components/aboutComponents/ResourceGrid";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import PhoenixFMAudio from "@/components/aboutComponents/PhoenixFMAudio";

const NewsAndReserch = () => {
  return (
    <div>
      <div className="section-padding-x">
      {/* <AboutBanner /> */}
  <GamblingCommonBanner
          section="News, research & commentary"
          title="What we're publishing."
          description="Briefings, working papers, consultation responses, press statements and blog posts. All produced independently of gambling-industry funding."
          image={aboutBannerImg}
          imageClassName="max-h-[320px] md:max-h-[380px] !object-fill"
        />

      </div>
      <PhoenixFMAudio />
      <NewsletterBanner />
      <SubmissionFeatured />
      <ResourceGrid/>
    </div>
  );
};

export default NewsAndReserch;
