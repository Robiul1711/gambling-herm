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
const HealthcareProfessionals = () => {
  return (
    <>
    <div className="section-padding-x">
          <GamblingCommonBanner
          section="For stakeholders · Healthcare professionals & medical students"
          title="Gambling belongs in every clinical contact."
          description="Gambling is one of the largest modifiable risk factors for ill-health in the UK, ranked among the top five alongside alcohol misuse and major depressive disorder. Yet most NHS clinicians have never been trained to ask about it, and most NHS encounters do not. This page makes the case for Making Every Contact Count on gambling, and tells you what to do tomorrow morning."
          image={bannerImg}
        />
        <PositionAndVideoSection/>
        <GamblingMeccSection/>
        <ScreeningGuideSection/>
        <ReferralServicesSection/>
        <ClinicalSituationsSection/>
        <MedicalTraineesSection/>

    </div>
           <OurWorkCommonContact
        title="Want training, slides or a referral pathway diagram?"
        description="We provide free MECC-on-gambling resources to NHS trusts, primary care networks, ICBs and medical schools. Contact us with your context and we'll send what fits."
        primaryBtnText="Contact us"
        primaryBtnLink="/get-help"
        secondaryBtnText="For public health teams"
        secondaryBtnLink="/inequality-and-gambling"
      />
    </>
  )
}

export default HealthcareProfessionals

