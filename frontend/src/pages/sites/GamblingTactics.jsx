import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import GamblingTacticsLayout from "@/components/gamblingTacticsCpmponents/GamblingTacticsLayout";
import React from "react";
import bannerImg from "@/assets/images/ourworkbanner.png";
import { Link } from "react-router-dom";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";

const GamblingTactics = () => {
  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section="Our work · Gambling Tactics"
          title="Gambling Tactics."
          description={
            <>
              A first-of-its-kind repository of evidence on the gambling
              industry's strategies and tactics for undermining public health.
              Inspired by{" "}
              <Link to="/tobacco-tactics" className="text-Primary underline">
                Tobacco Tactics
              </Link>
              . Industry interference is the single greatest barrier to progress
              in reducing UK gambling harm. The tactics below are how that
              interference operates.
            </>
          }
          image={bannerImg}
        />
        <GamblingTacticsLayout />
      </div>
     <OurWorkCommonContact
      title="What needs to change"
      description="Once you can see the tactics, the policy debate becomes very different. The structural response is a whole-system one: statutory levy proportionate to harm, statutory duty of care on operators, advertising restrictions modelled on tobacco, product safety standards set by public-health regulators, NHS-led specialist treatment, and DHSC consolidation of regulatory leadership."
      primaryBtnText="Read our policy positions"
      primaryBtnLink="/policy-positions"
      secondaryBtnText="Gambling Explained"
      secondaryBtnLink="/gambling-explained"
    />
    </>
  );
};

export default GamblingTactics;
