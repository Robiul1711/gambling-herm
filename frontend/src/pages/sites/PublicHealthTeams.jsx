import GamblingCommonBanner from '@/components/common/GamblingCommonBanner'
import React from 'react'
import bannerImg from "@/assets/images/publichelth.png";
import OurWorkCommonContact from '@/components/common/OurWorkCommonContact';
import HealthPositionSection from '@/components/publicHealthTeamsComponents/HealthPositionSection';
import PreventionParadoxSection from '@/components/publicHealthTeamsComponents/PreventionParadoxSection';
import ThreeStrandsSection from '@/components/publicHealthTeamsComponents/ThreeStrandsSection';
import PublicHealthOffersSection from '@/components/publicHealthTeamsComponents/PublicHealthOffersSection';
import PublicHealthRequestsSection from '@/components/publicHealthTeamsComponents/PublicHealthRequestsSection';
import AudienceNavigationSection from '@/components/publicHealthTeamsComponents/AudienceNavigationSection';
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "health-position", title: "1. Health position" },
  { id: "prevention-paradox", title: "2. Prevention paradox" },
  { id: "three-strands", title: "3. Three strands of action" },
  { id: "public-health-offers", title: "4. What GHUK offers" },
  { id: "public-health-requests", title: "5. What GHUK asks" },
  { id: "audience-nav", title: "6. Across sectors" },
];

const PublicHealthTeams = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "public-health-banner"],
    url: "/about/public-health-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <GamblingCommonBanner
        section={bannerData?.subtitle || "For stakeholders · Public health organisations"}
        title={bannerData?.title || "A modifiable risk factor that hasn't been treated like one."}
        description={bannerData?.description || "For OHID, ICBs, local authority public health teams, and the equivalent bodies across Scotland, Wales and Northern Ireland. The evidence on burden, the population-level pattern of harm, and the cross-sector action GHUK believes the UK response now needs."}
        image={bannerData?.image || bannerImg}
        isLoading={isLoading}/>

      <PageSectionNav sections={sections} />

      <div className="px-4 md:px-0">
        <div id="health-position" className="scroll-mt-24">
          <HealthPositionSection/>
        </div>
        <div id="prevention-paradox" className="scroll-mt-24">
          <PreventionParadoxSection/>
        </div>
        <div id="three-strands" className="scroll-mt-24">
          <ThreeStrandsSection/>
        </div>
        <div id="public-health-offers" className="scroll-mt-24">
          <PublicHealthOffersSection/>
        </div>
        <div id="public-health-requests" className="scroll-mt-24">
          <PublicHealthRequestsSection/>
        </div>
        <div id="audience-nav" className="scroll-mt-24">
          <AudienceNavigationSection/>
        </div>
      </div>
        
           <OurWorkCommonContact
           primaryClass="bg-[#0A6E9C]"
        title="Want to partner on a local action plan?"
        description="If you're commissioning, planning or running a local public-health response to gambling harm, we'd like to hear from you, not as consultants for hire, but as collaborators in the work."
        primaryBtnText="Contact us"
        primaryBtnLink="/get-help"
        secondaryBtnText="See our policy positions →"
        secondaryBtnLink="/policy-and-advocacy"
      />
    </>
  )
}

export default PublicHealthTeams

