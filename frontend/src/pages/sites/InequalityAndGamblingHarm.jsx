import React from "react";
import bannerImg from "@/assets/images/inequality.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import OurPositionCallout from "@/components/inequalityAndGamblingHarmComponents/OurPositionCallout";
import HeadlineRatio from "@/components/inequalityAndGamblingHarmComponents/HeadlineRatio";
import ThreeFactorsDistribution from "@/components/inequalityAndGamblingHarmComponents/ThreeFactorsDistribution";
import WhereHarmConcentrates from "@/components/inequalityAndGamblingHarmComponents/WhereHarmConcentrates";
import WhatDrivesHarmAndBlocksSupport from "@/components/inequalityAndGamblingHarmComponents/WhatDrivesHarmAndBlocksSupport";
import PolicyPositionsInequality from "@/components/inequalityAndGamblingHarmComponents/PolicyPositionsInequality";
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "our-position", title: "1. Our Position" },
  { id: "headline-ratio", title: "2. The Headline Ratio" },
  { id: "distribution-factors", title: "3. Three Distribution Factors" },
  { id: "where-harm-concentrates", title: "4. Where Harm Concentrates" },
  { id: "what-drives-harm", title: "5. What Drives Harm & Blocks Support" },
  { id: "policy-positions", title: "6. Policy Positions" },
];

const InequalityAndGamblingHarm = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "work-inequality-banner"],
    url: "/about/work-inequality-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Our work · Inequality"}
          title={bannerData?.title || "Gambling harm is not evenly distributed."}
          description={bannerData?.description || "Anyone can be harmed by gambling. But the harm tracks the same gradients that every other commercial-determinant harm does, deprivation, ethnicity, gender, neurodivergence, age, intersecting marginalisation. This page sets out how, and why."}
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}/>
      </div>

      <PageSectionNav sections={sections} />

      <div id="our-position" className="scroll-mt-24">
        <OurPositionCallout />
      </div>
      <div id="headline-ratio" className="scroll-mt-24">
        <HeadlineRatio />
      </div>
      <div id="distribution-factors" className="scroll-mt-24">
        <ThreeFactorsDistribution />
      </div>
      <div id="where-harm-concentrates" className="scroll-mt-24">
        <WhereHarmConcentrates />
      </div>
      <div id="what-drives-harm" className="scroll-mt-24">
        <WhatDrivesHarmAndBlocksSupport />
      </div>
      <div id="policy-positions" className="scroll-mt-24">
        <PolicyPositionsInequality />
      </div>
      <OurWorkCommonContact
        primaryClass={"bg-Primary"}
        title="Inequality is not a side-topic."
        description="If gambling-harm policy doesn't centre the inequality picture, it underserves the people who carry most of the harm. That makes inequality central to GHUK's work, not a separate strand of it."
        primaryBtnText="Our policy positions"
        primaryBtnLink="/policy-and-advocacy"
        secondaryBtnText="Stigma & language →"
        secondaryBtnLink="/stigma-and-language"
      />
    </>
  );
};

export default InequalityAndGamblingHarm;
