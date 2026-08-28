import React from "react";
import bannerImg from "@/assets/images/stigma.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import WhatTheDataShows from "@/components/stigmaAndLanguageComponents/WhatTheDataShows";
import WhyStigmaOperates from "@/components/stigmaAndLanguageComponents/WhyStigmaOperates";
import AntiStigmaCampaignProblem from "@/components/stigmaAndLanguageComponents/AntiStigmaCampaignProblem";
import WhatReducesStigma from "@/components/stigmaAndLanguageComponents/WhatReducesStigma";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";

import useClient from "@/hooks/useClient";

const StigmaAndLanguage = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "work-stigma"],
    url: "/about/work-stigma",
  });

  const data = responseData?.data;

  return (
    <>
      <div className="">
        <GamblingCommonBanner
          section={data?.subtitle || "Our work · Stigma"}
          title={data?.title || "Stigma is the rate-limiting step."}
          description={data?.description || "Whatever else is true about UK gambling-harm policy (treatment capacity, levy design, advertising rules) the single largest reason people experiencing harm don't reach help is the social cost of saying so out loud."}
          image={data?.image || bannerImg}
          isLoading={isLoading}/>
      </div>
      <WhatTheDataShows />
      <WhyStigmaOperates />
      <AntiStigmaCampaignProblem />
      <WhatReducesStigma />
      <OurWorkCommonContact
      primaryClass={'bg-Primary'}
        title="If shame is what's keeping you from talking to someone"
        description="it is the most well-evidenced reason for not seeking gambling-harm help, and it is also the most well-evidenced thing that lifts when you do. The first call is the hard one. Everyone on the helpline knows this."
        primaryBtnText="Find Help"
        primaryBtnLink="/get-help"
        secondaryBtnText="Inequality & gambling"
        secondaryBtnLink="/inequality-and-gambling-harm"
      />
    </>
  );
};

export default StigmaAndLanguage;
