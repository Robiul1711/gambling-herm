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
import useClient from "@/hooks/useClient";

const InequalityAndGamblingHarm = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-inequality-banner"],
    url: "/about/work-inequality-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Our work · Inequality"}
          title={bannerData?.title || "Gambling harm is not evenly distributed."}
          description={bannerData?.description || "Anyone can be harmed by gambling. But the harm tracks the same gradients that every other commercial-determinant harm does, deprivation, ethnicity, gender, neurodivergence, age, intersecting marginalisation. This page sets out how, and why."}
          image={bannerData?.image || bannerImg}
        />
      </div>
      <OurPositionCallout />
      <HeadlineRatio />
      <ThreeFactorsDistribution />
      <WhereHarmConcentrates />
      <WhatDrivesHarmAndBlocksSupport />
      <PolicyPositionsInequality />
      <OurWorkCommonContact
        title="Inequality is not a side-topic."
        description="If gambling-harm policy doesn't centre the inequality picture, it underserves the people who carry most of the harm. That makes inequality central to GHUK's work, not a separate strand of it."
        primaryBtnText="Our policy positions"
        primaryBtnLink="/get-help"
        secondaryBtnText="Stigma & language →"
        secondaryBtnLink="/stigma-and-language"
      />
    </>
  );
};

export default InequalityAndGamblingHarm;
