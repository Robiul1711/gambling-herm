import React from "react";
import CommonBanner from "@/components/common/CommonBanner";
import bannerImg from "@/assets/images/banner.png";
import SupportTheCampaign from "@/components/membersOnlyCpmponents/SupportTheCampaign";
import CampaignSupport from "@/components/membersOnlyCpmponents/CampaignSupport";
import ProblemCampaignIsFixing from "@/components/membersOnlyCpmponents/ProblemCampaignIsFixing";
import CampaignProposals from "@/components/membersOnlyCpmponents/CampaignProposals";
import WhyChangesMatter from "@/components/membersOnlyCpmponents/WhyChangesMatter";
import CampaignOurPosition from "@/components/membersOnlyCpmponents/CampaignOurPosition";
import PublicRecordEvidence from "@/components/membersOnlyCpmponents/PublicRecordEvidence";
import HowThisSits from "@/components/membersOnlyCpmponents/HowThisSits";

const MembersOnlyCampaign = () => {
  return (
    <div className="">
      <CommonBanner
        image={bannerImg}
        buttonText="membersonlycampaign.org.uk"
        buttonLink="https://www.membersonlycampaign.org.uk/"
        title="Members Only."
        tag="Our work · Partner campaign we support"
        description="A lived-experience-led campaign by Sam Badcock to fix UK land-based gambling self-exclusion. PIN-protected slot machines. A National App for identity-verification and self-exclusion. Proper enforcement of the rights people already have. GHUK supports it."
      />

      <div className="section-padding-x py-4 md:py-6 max-w-[1500px] mx-auto space-y-10 md:space-y-14 lg:space-y-16">
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
