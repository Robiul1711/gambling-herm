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
import useClient from "@/hooks/useClient";

const ChildrenYoungPeople = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "cyp-banner"],
    url: "/about/cyp-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "For stakeholders · Children & young people"}
          title={bannerData?.title || "Gambling harm reaches further into childhood than the public conversation acknowledges."}
          description={bannerData?.description || "Two distinct populations sit inside the CYP picture: children who gamble themselves, and children of someone with gambling harm. Both are underserved, both are well-evidenced, and both are missing from most current policy thinking."}
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}/>
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
        primaryBtnLink="/about#contact"
        secondaryBtnText="For teachers →"
        secondaryBtnLink="#teachers"
      />
    </>
  );
};

export default ChildrenYoungPeople;
