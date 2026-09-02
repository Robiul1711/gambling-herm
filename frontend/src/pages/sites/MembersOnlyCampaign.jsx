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
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "campaign-support", title: "1. Campaign Overview" },
  { id: "the-problem", title: "2. The Problem" },
  { id: "proposals", title: "3. Campaign Proposals" },
  { id: "why-changes-matter", title: "4. Why Changes Matter" },
  { id: "our-position", title: "5. Our Position" },
  { id: "public-record", title: "6. Public Record Evidence" },
  { id: "how-this-sits", title: "7. Lived Experience Context" },
  { id: "support-campaign", title: "8. Support the Campaign" },
];

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

      <PageSectionNav sections={sections} />

      <div className="px-4 max-w-5xl mx-auto space-y-10 md:space-y-14 lg:space-y-16">
        <div id="campaign-support" className="scroll-mt-24">
          <CampaignSupport />
        </div>
        <div id="the-problem" className="scroll-mt-24">
          <ProblemCampaignIsFixing />
        </div>
        <div id="proposals" className="scroll-mt-24">
          <CampaignProposals />
        </div>
        <div id="why-changes-matter" className="scroll-mt-24">
          <WhyChangesMatter />
        </div>
        <div id="our-position" className="scroll-mt-24">
          <CampaignOurPosition />
        </div>
        <div id="public-record" className="scroll-mt-24">
          <PublicRecordEvidence />
        </div>
        <div id="how-this-sits" className="scroll-mt-24">
          <HowThisSits />
        </div>
      </div>
      <div id="support-campaign" className="scroll-mt-24">
        <SupportTheCampaign />
      </div>
    </div>
  );
};

export default MembersOnlyCampaign;
