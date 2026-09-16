import React from "react";
import bannerImg from "@/assets/images/cy.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import CYBanner from "@/components/childrenYoungPeopleComponents/CYBanner";
import SafeguardingFilms from "@/components/childrenYoungPeopleComponents/SafeguardingFilms";
import SchoolSupportSection from "@/components/childrenYoungPeopleComponents/SchoolSupportSection";
import SystemsLevelSection from "@/components/childrenYoungPeopleComponents/SystemsLevelSection";
import WorkWithUsSafeguarding from "@/components/childrenYoungPeopleComponents/WorkWithUsSafeguarding";
import PageSectionNav from "@/components/common/PageSectionNav";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "cyp-evidence", title: "1. Context & evidence" },
  { id: "cyp-films", title: "2. Safeguarding films" },
  { id: "cyp-school", title: "3. School support" },
  { id: "cyp-systems", title: "4. Systems-level response" },
  { id: "cyp-work-with-us", title: "5. Work with us" },
];

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
            "Children are harmed by someone else's gambling. These harms are frequently hidden and are not limited to extreme or crisis situations. Gambling-related harm can build cumulatively over time, leaving legacy harms that shape children's emotional wellbeing, relationships and life chances."
          }
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}
        />

        <PageSectionNav sections={sections} />

        <div id="cyp-evidence" className="scroll-mt-24">
          <CYBanner />
        </div>
        <div id="cyp-films" className="scroll-mt-24">
          <SafeguardingFilms />
        </div>
        <div id="cyp-school" className="scroll-mt-24">
          <SchoolSupportSection />
        </div>
        <div id="cyp-systems" className="scroll-mt-24">
          <SystemsLevelSection />
        </div>
      </div>
      <div id="cyp-work-with-us" className="scroll-mt-24">
        <WorkWithUsSafeguarding />
      </div>
    </>
  );
};

export default ChildrenYoungPeople;
