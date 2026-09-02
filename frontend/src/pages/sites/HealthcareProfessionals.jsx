import GamblingCommonBanner from '@/components/common/GamblingCommonBanner'
import React from 'react'
import bannerImg from "@/assets/images/professional.png";
import OurWorkCommonContact from '@/components/common/OurWorkCommonContact';
import PositionAndVideoSection from '@/components/healthcareProfessionalsComponents/PositionAndVideoSection';
import GamblingMeccSection from '@/components/healthcareProfessionalsComponents/GamblingMeccSection';
import ScreeningGuideSection from '@/components/healthcareProfessionalsComponents/ScreeningGuideSection';
import ReferralServicesSection from '@/components/healthcareProfessionalsComponents/ReferralServicesSection';
import ClinicalSituationsSection from '@/components/healthcareProfessionalsComponents/ClinicalSituationsSection';
import MedicalTraineesSection from '@/components/healthcareProfessionalsComponents/MedicalTraineesSection';
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "position-video", title: "1. Lived Experience & MECC" },
  { id: "gambling-mecc", title: "2. MECC on Gambling" },
  { id: "screening-guide", title: "3. Screening Guide" },
  { id: "referral-services", title: "4. Referral Services" },
  { id: "clinical-situations", title: "5. Clinical Situations" },
  { id: "medical-trainees", title: "6. Medical Trainees" },
];

const HealthcareProfessionals = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "healthcare-banner"],
    url: "/about/healthcare-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
    <div className="">
      <GamblingCommonBanner
        section={bannerData?.subtitle || "For stakeholders · Healthcare professionals & medical students"}
        title={bannerData?.title || "Gambling belongs in every clinical contact."}
        description={bannerData?.description || "Gambling is one of the largest modifiable risk factors for ill-health in the UK, ranked among the top five alongside alcohol misuse and major depressive disorder. Yet most NHS clinicians have never been trained to ask about it, and most NHS encounters do not. This page makes the case for Making Every Contact Count on gambling, and tells you what to do tomorrow morning."}
        image={bannerData?.image || bannerImg}
        isLoading={isLoading}/>

      <PageSectionNav sections={sections} />

      <div id="position-video" className="scroll-mt-24">
        <PositionAndVideoSection/>
      </div>
      <div id="gambling-mecc" className="scroll-mt-24">
        <GamblingMeccSection/>
      </div>
      <div id="screening-guide" className="scroll-mt-24">
        <ScreeningGuideSection/>
      </div>
      <div id="referral-services" className="scroll-mt-24">
        <ReferralServicesSection/>
      </div>
      <div id="clinical-situations" className="scroll-mt-24">
        <ClinicalSituationsSection/>
      </div>
      <div id="medical-trainees" className="scroll-mt-24">
        <MedicalTraineesSection/>
      </div>
    </div>
           <OurWorkCommonContact
           primaryClass={'bg-Primary'}
        title="Want training, slides or a referral pathway diagram?"
        description="We provide free MECC-on-gambling resources to NHS trusts, primary care networks, ICBs and medical schools. Contact us with your context and we'll send what fits."
        primaryBtnText="Contact us"
        primaryBtnLink="/get-help"
        secondaryBtnText="For public health teams"
        secondaryBtnLink="/professionals/public-health"
      />
    </>
  )
}

export default HealthcareProfessionals

