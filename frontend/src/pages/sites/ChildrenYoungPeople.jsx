import React from "react";
import bannerImg from "@/assets/images/cy.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import CYBanner from "@/components/childrenYoungPeopleComponents/CYBanner";
import SafeguardingFilms from "@/components/childrenYoungPeopleComponents/SafeguardingFilms";
import SchoolSupportSection from "@/components/childrenYoungPeopleComponents/SchoolSupportSection";
import SystemsLevelSection from "@/components/childrenYoungPeopleComponents/SystemsLevelSection";
import WorkWithUsSafeguarding from "@/components/childrenYoungPeopleComponents/WorkWithUsSafeguarding";
import useClient from "@/hooks/useClient";

const ChildrenYoungPeople = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "cyp-banner"],
    url: "/about/cyp-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div>
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Our work · Children & safeguarding"}
          title={
            bannerData?.title || "Children's safeguarding and gambling harm."
          }
          description={
            bannerData?.description ||
            "Children are often affected by other people's gambling. These harms are frequently hidden and are not limited to extreme or crisis situations. Gambling-related harm can build cumulatively over time, creating a lasting footprint that can affect children's emotional wellbeing, relationships, and life chances."
          }
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}
        />
        <CYBanner />
        <SafeguardingFilms />
        <SchoolSupportSection />
        <SystemsLevelSection />
      </div>
      <WorkWithUsSafeguarding />
    </>
  );
};

export default ChildrenYoungPeople;
