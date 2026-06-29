import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import GamblingTacticsLayout from "@/components/gamblingTacticsCpmponents/GamblingTacticsLayout";
import React from "react";
import bannerImg from "@/assets/images/ourworkbanner.png";
import { Link } from "react-router-dom";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import useClient from "@/hooks/useClient";

const GamblingTactics = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-tactics-banner"],
    url: "/about/work-tactics-banner",
  });

  const bannerData = responseData?.data;

  const renderDescription = () => {
    const defaultText =
      "A first-of-its-kind repository of evidence on the gambling industry's strategies and tactics for undermining public health. Inspired by Tobacco Tactics. Industry interference is the single greatest barrier to progress in reducing UK gambling harm. The tactics below are how that interference operates.";
    const text = bannerData?.description || defaultText;
    const targetPhrase = "Tobacco Tactics";

    if (text.includes(targetPhrase)) {
      const index = text.indexOf(targetPhrase);
      const before = text.substring(0, index);
      const after = text.substring(index + targetPhrase.length);
      return (
        <>
          {before}
          <a
            href="https://tobaccotactics.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-Primary underline"
          >
            {targetPhrase}
          </a>
          {after}
        </>
      );
    }
    return text;
  };

  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Our work · Gambling Tactics"}
          title={bannerData?.title || "Gambling Tactics."}
          description={renderDescription()}
          image={bannerData?.image || bannerImg}
        />
        <GamblingTacticsLayout />
      </div>
     <OurWorkCommonContact
      title="What needs to change"
      description="Once you can see the tactics, the policy debate becomes very different. The structural response is a whole-system one: statutory levy proportionate to harm, statutory duty of care on operators, advertising restrictions modelled on tobacco, product safety standards set by public-health regulators, NHS-led specialist treatment, and DHSC consolidation of regulatory leadership."
      primaryBtnText="Read our policy positions"
      primaryBtnLink="/policy-and-advocacy"
      secondaryBtnText="Gambling Explained"
      secondaryBtnLink="/gambling-explained"
    />
    </>
  );
};

export default GamblingTactics;
