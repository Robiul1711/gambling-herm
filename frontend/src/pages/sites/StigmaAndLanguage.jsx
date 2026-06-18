import React from "react";
import bannerImg from "@/assets/images/stigma.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import WhatTheDataShows from "@/components/stigmaAndLanguageComponents/WhatTheDataShows";
import WhyStigmaOperates from "@/components/stigmaAndLanguageComponents/WhyStigmaOperates";
import AntiStigmaCampaignProblem from "@/components/stigmaAndLanguageComponents/AntiStigmaCampaignProblem";
import WhatReducesStigma from "@/components/stigmaAndLanguageComponents/WhatReducesStigma";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";

const StigmaAndLanguage = () => {
  return (
    <>
    <div className="section-padding-x">
        <GamblingCommonBanner
          section="Our work · Stigm"
          title="Stigma is the rate-limiting step.
"
          description="Whatever else is true about UK gambling-harm policy (treatment capacity, levy design, advertising rules) the single largest reason people experiencing harm don't reach help is the social cost of saying so out loud.
"
          image={bannerImg}
        />
      </div>  
    <WhatTheDataShows/>
    <WhyStigmaOperates/>
    <AntiStigmaCampaignProblem/>
    <WhatReducesStigma/>
      <OurWorkCommonContact
        title="If shame is what's keeping you from talking to someone ,"
        description="it is the most well-evidenced reason for not seeking gambling-harm help, and it is also the most well-evidenced thing that lifts when you do. The first call is the hard one. Everyone on the helpline knows this."
        primaryBtnText="Find Help"
        primaryBtnLink="/get-help"
        secondaryBtnText="Inequality & gambling"
        secondaryBtnLink="/inequality-and-gambling"
      />
    </>
  );
};

export default StigmaAndLanguage;
