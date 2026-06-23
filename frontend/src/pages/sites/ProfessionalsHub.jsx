import GamblingCommonBanner from '@/components/common/GamblingCommonBanner'
import React from 'react'
import bannerImg from "@/assets/images/professional.png";
import OurWorkCommonContact from '@/components/common/OurWorkCommonContact';
import AudienceCards from '@/components/professionalsHubComponents/AudienceCards';
const ProfessionalsHub = () => {
  return (
    <>
    <div className="section-padding-x">
          <GamblingCommonBanner
          section="For stakeholder"
          title="We work with everyone the public-health response touches."
          description="On our burden-of-disease modelling, gambling ranks among the top five modifiable risks to UK population health, and around half of the harm is expected to fall on people who never placed a bet. Gambling harm is structural. So is the response we believe it needs. These pages set out what we offer (and what we ask for) from each of the professional audiences who shape the next decade of UK gambling-harm policy and practice. What we bring is the same in every room: independent evidence, published modelling, lived-experience leadership, and no gambling-industry money."
          image={bannerImg}
        />
        <AudienceCards/>
    </div>
           <OurWorkCommonContact
        title="Don't see your role here?"
        description="If you work in a sector touched by gambling harm and we haven't built a dedicated page yet, please get in touch, this list grows."
        primaryBtnText="Contact us"
        primaryBtnLink="/get-help"
        secondaryBtnText="See our policy positions"
        secondaryBtnLink="/policy-and-advocacy"
      />
    </>
  )
}

export default ProfessionalsHub
