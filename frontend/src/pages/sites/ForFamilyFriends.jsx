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

import useClient from "@/hooks/useClient";

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
      <WhatHarmLooksLike />
      <VictimsNotBystanders />
      <GamblingScaleSection/>
      <Signstolookfor/>
      <HowToTalk />
      <ProtectFinancially />
      <GetSupport />
      <ChildrenInHouse />
      <GamblingBereavementSection/>
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

