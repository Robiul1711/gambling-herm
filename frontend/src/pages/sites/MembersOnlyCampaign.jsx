import React from "react";
import SupportTheCampaign from "@/components/membersOnlyCpmponents/SupportTheCampaign";
import CampaignSupport from "@/components/membersOnlyCpmponents/CampaignSupport";
import ProblemCampaignIsFixing from "@/components/membersOnlyCpmponents/ProblemCampaignIsFixing";
import CampaignProposals from "@/components/membersOnlyCpmponents/CampaignProposals";
import WhyChangesMatter from "@/components/membersOnlyCpmponents/WhyChangesMatter";
import CampaignOurPosition from "@/components/membersOnlyCpmponents/CampaignOurPosition";
import PublicRecordEvidence from "@/components/membersOnlyCpmponents/PublicRecordEvidence";
import HowThisSits from "@/components/membersOnlyCpmponents/HowThisSits";
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "campaign-support", title: "1. Why GHUK supports" },
  { id: "the-problem", title: "2. The problem" },
  { id: "proposals", title: "3. Three proposals" },
  { id: "why-changes-matter", title: "4. Why they matter" },
  { id: "our-position", title: "5. Our position" },
  { id: "public-record", title: "6. Evidence" },
  { id: "how-this-sits", title: "7. How this sits with our work" },
  { id: "support-campaign", title: "8. Support the campaign" },
];

const MembersOnlyCampaign = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "work-members-only-banner"],
    url: "/about/work-members-only-banner",
  });

  const data = responseData?.data;

  return (
    <div className="">
      {/* Centered Hero Header without image */}
      <section
        className="w-full py-8 sm:py-12 md:py-20 section-padding-x"
        style={{
          background:
            "linear-gradient(180deg, var(--teal-10) 0%, var(--paper) 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {isLoading ? (
            <div className="space-y-5 animate-pulse w-full max-w-2xl mx-auto flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-[2px] bg-slate-200 rounded" />
                <div className="h-3.5 w-32 bg-slate-200 rounded" />
              </div>
              <div className="space-y-3 w-full flex flex-col items-center">
                <div className="h-10 sm:h-12 w-[85%] bg-slate-200 rounded" />
                <div className="h-10 sm:h-12 w-[65%] bg-slate-200 rounded" />
              </div>
              <div className="space-y-2 pt-1 w-full flex flex-col items-center">
                <div className="h-4 w-full bg-slate-200 rounded" />
                <div className="h-4 w-[90%] bg-slate-200 rounded" />
              </div>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {/* Breadcrumb / Eyebrow */}
              <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-medium text-slate-600">
                <span className="w-6 h-[2px] bg-Primary block"></span>
                <p className="text-Primary2">
                  {data?.subtitle || "Our work · Partner campaign we support"}
                </p>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
                {data?.title || "Members Only."}
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
                {data?.description ||
                  "A lived-experience-led campaign by Sam Badcock to fix UK land-based gambling self-exclusion. PIN-protected slot machines. A National App for identity-verification and self-exclusion. Proper enforcement of the rights people already have. GHUK supports it."}
              </p>

              {/* External Link CTA */}
              <div className="pt-2">
                <a
                  href="https://membersonlycampaign.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-Primary font-semibold px-4 py-2 border border-Primary hover:bg-Primary hover:text-white transition-colors inline-block"
                >
                  {data?.audioTitle || "membersonlycampaign.org.uk →"}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

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
