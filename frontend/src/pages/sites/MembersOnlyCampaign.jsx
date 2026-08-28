import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/scale.png";
import SupportTheCampaign from "@/components/membersOnlyCpmponents/SupportTheCampaign";
import CampaignSupport from "@/components/membersOnlyCpmponents/CampaignSupport";
import ProblemCampaignIsFixing from "@/components/membersOnlyCpmponents/ProblemCampaignIsFixing";
import CampaignProposals from "@/components/membersOnlyCpmponents/CampaignProposals";
import WhyChangesMatter from "@/components/membersOnlyCpmponents/WhyChangesMatter";
import CampaignOurPosition from "@/components/membersOnlyCpmponents/CampaignOurPosition";
import PublicRecordEvidence from "@/components/membersOnlyCpmponents/PublicRecordEvidence";
import HowThisSits from "@/components/membersOnlyCpmponents/HowThisSits";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import useClient from "@/hooks/useClient";

const MembersOnlyCampaign = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "work-members-only-banner"],
    url: "/about/work-members-only-banner",
  });

  const data = responseData?.data;

  return (
    <div className="">
      <div className="">
        <GamblingCommonBanner
          section={data?.subtitle || "Our work · Partner campaign we support"}
          title={data?.title || "Members Only."}
          description={data?.description || "A lived-experience-led campaign by Sam Badcock to fix UK land-based gambling self-exclusion. PIN-protected slot machines. A National App for identity-verification and self-exclusion. Proper enforcement of the rights people already have. GHUK supports it."}
          image={data?.image || bannerImg}
          buttonText={data?.audioTitle || "membersonlycampaign.org.uk →"}
          to={"https://membersonlycampaign.org.uk/"}
          target="_blank"
          rel="noopener noreferrer"
          isLoading={isLoading}/>
      </div>
      <div className="px-4 max-w-5xl mx-auto  space-y-10 md:space-y-14 lg:space-y-16">
        <CampaignSupport />
        <ProblemCampaignIsFixing />
        <CampaignProposals />
        <WhyChangesMatter />
        <CampaignOurPosition />
        <PublicRecordEvidence />
        <HowThisSits />
      </div>
      <SupportTheCampaign />
    </div>
  );
};

export default MembersOnlyCampaign;
