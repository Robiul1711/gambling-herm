import React from "react";
import bannerImg from "@/assets/images/cy.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import WhatHarmLooksLike from "@/components/forFamilyFriendscomponents/WhatHarmLooksLike";
import VictimsNotBystanders from "@/components/forFamilyFriendscomponents/VictimsNotBystanders";
import GamblingScaleSection from "@/components/forFamilyFriendscomponents/GamblingScaleSection";
import Signstolookfor from "@/components/forFamilyFriendscomponents/Signstolookfor";
import HowToTalk from "@/components/forFamilyFriendscomponents/HowToTalk";
import ProtectFinancially from "@/components/forFamilyFriendscomponents/ProtectFinancially";
import GetSupport from "@/components/forFamilyFriendscomponents/GetSupport";
import ChildrenInHouse from "@/components/forFamilyFriendscomponents/ChildrenInHouse";
import GamblingBereavementSection from "@/components/forFamilyFriendscomponents/GamblingBereavementSection";
import PageSectionNav from "@/components/common/PageSectionNav";

import useClient from "@/hooks/useClient";

const sections = [
  { id: "what-harm-looks-like", title: "1. What harm looks like" },
  { id: "victims-not-bystanders", title: "2. Victims not bystanders" },
  { id: "scale-of-issue", title: "3. Scale of harm" },
  { id: "signs-to-look-for", title: "4. Signs to look for" },
  { id: "how-to-talk", title: "5. How to talk" },
  { id: "protect-financially", title: "6. Protect financially" },
  { id: "get-support", title: "7. Support for you" },
  { id: "children-in-house", title: "8. Children in the house" },
  { id: "bereavement", title: "9. Bereavement" },
];

const ForFamilyFriends = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "get-help-family-friends"],
    url: "/about/get-help-family-friends",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "For family & friends"}
          title={bannerData?.title || "The harm reaching you is real. You didn't choose it, and you don't have to carry it alone."}
          description={bannerData?.description || "If someone you love is being harmed by gambling, you are being harmed too. Partners, parents, children, siblings, close friends. The impact is real, large, and almost certainly worse than you've been told. There is support that belongs to you, by right."}
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}/>
      </div>

      <PageSectionNav sections={sections} />

      <div id="what-harm-looks-like" className="scroll-mt-24">
        <WhatHarmLooksLike />
      </div>
      <div id="victims-not-bystanders" className="scroll-mt-24">
        <VictimsNotBystanders />
      </div>
      <div id="scale-of-issue" className="scroll-mt-24">
        <GamblingScaleSection/>
      </div>
      <div id="signs-to-look-for" className="scroll-mt-24">
        <Signstolookfor/>
      </div>
      <div id="how-to-talk" className="scroll-mt-24">
        <HowToTalk />
      </div>
      <div id="protect-financially" className="scroll-mt-24">
        <ProtectFinancially />
      </div>
      <div id="get-support" className="scroll-mt-24">
        <GetSupport />
      </div>
      <div id="children-in-house" className="scroll-mt-24">
        <ChildrenInHouse />
      </div>
      <div id="bereavement" className="scroll-mt-24">
        <GamblingBereavementSection/>
      </div>
      <OurWorkCommonContact
       className={"bg-white"}
      titleClass={"!text-black"}
      textClass={'!text-black'}
      primaryClass={"bg-Primary"}
         secondaryClass={"!text-black"}
        title="You're allowed to need help, too."
        primaryBtnText="Find direct routes to support"
        primaryBtnLink="/get-help"
        secondaryBtnText="Understand the scale"
        secondaryBtnLink="/understand-the-scale"
      />
    </>
  );
};

export default ForFamilyFriends;

