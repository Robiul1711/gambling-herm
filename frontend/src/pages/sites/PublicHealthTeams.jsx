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
import useClient from "@/hooks/useClient";

const PublicHealthTeams = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "public-health-banner"],
    url: "/about/public-health-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
    <div className="">
      <GamblingCommonBanner
        section={bannerData?.subtitle || "For stakeholders · Public health organisations"}
        title={bannerData?.title || "A modifiable risk factor that hasn't been treated like one."}
        description={bannerData?.description || "For OHID, ICBs, local authority public health teams, and the equivalent bodies across Scotland, Wales and Northern Ireland. The evidence on burden, the population-level pattern of harm, and the cross-sector action GHUK believes the UK response now needs."}
        image={bannerData?.image || bannerImg}
        isLoading={isLoading}/>
      <HealthPositionSection/>
      <PreventionParadoxSection/>
      <ThreeStrandsSection/>
      <PublicHealthOffersSection/>
    </div>
        <PublicHealthRequestsSection/>
        <div className="section-padding-x">
        <AudienceNavigationSection/>

        </div>
        
           <OurWorkCommonContact
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

