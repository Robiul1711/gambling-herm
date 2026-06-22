import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import React from "react";
import bannerImg from "@/assets/images/cy.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import CYBanner from "@/components/childrenYoungPeopleComponents/CYBanner";
import GamblingStatsGrid from "@/components/childrenYoungPeopleComponents/GamblingStatsGrid";
import PositionStatement from "@/components/childrenYoungPeopleComponents/PositionStatement";
import SafeguardingFilms from "@/components/childrenYoungPeopleComponents/SafeguardingFilms";
import WhyMissesPoint from "@/components/childrenYoungPeopleComponents/WhyMissesPoint";
import YoungPersonSupport from "@/components/childrenYoungPeopleComponents/YoungPersonSupport";
import SafeguardingLeads from "@/components/childrenYoungPeopleComponents/SafeguardingLeads";
import CYPPolicy from "@/components/childrenYoungPeopleComponents/CYPPolicy";
import CYResources from "@/components/childrenYoungPeopleComponents/CYResources";
const ChildrenYoungPeople = () => {
  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section="For stakeholders · Children & young people"
          title="Gambling harm reaches further into childhood than the public conversation acknowledges."
          description="Two distinct populations sit inside the CYP picture: children who gamble themselves, and children of someone with gambling harm. Both are underserved, both are well-evidenced, and both are missing from most current policy thinking."
          image={bannerImg}
        />
        <CYBanner />
        <GamblingStatsGrid />
        <PositionStatement />
        <SafeguardingFilms />
        <WhyMissesPoint />
        <YoungPersonSupport />
        <SafeguardingLeads />
      </div>
      <CYPPolicy />
      <div className="section-padding-x">
        <CYResources />
      </div>
      <OurWorkCommonContact
        title="Want to help us put this on the policy agenda?"
        description="If you run or work in a CYP service, school, ICB safeguarding pathway, or research group on adolescent health, we want to hear from you."
        primaryBtnText="Contact us"
        primaryBtnLink="/get-help"
        secondaryBtnText="For teachers →"
        secondaryBtnLink="/inequality-and-gambling"
      />
    </>
  );
};

export default ChildrenYoungPeople;
