import React from "react";
import bannerImg from "@/assets/images/understanding.png";
import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import UnderstandingNav from "@/components/understandingGamblingHarmsComponents/UnderstandingNav";
import GamblingHarmLooksLike from "@/components/understandingGamblingHarmsComponents/GamblingHarmLooksLike";
import GamblingNotNormalProduct from "@/components/understandingGamblingHarmsComponents/GamblingNotNormalProduct";
import AddictionByDesign from "@/components/understandingGamblingHarmsComponents/AddictionByDesign";
import SaferGamblingMyth from "@/components/understandingGamblingHarmsComponents/SaferGamblingMyth";
import ItsAllAroundUs from "@/components/understandingGamblingHarmsComponents/ItsAllAroundUs";
import WhoIsAffected from "@/components/understandingGamblingHarmsComponents/WhoIsAffected";
import NoteOnLanguage from "@/components/understandingGamblingHarmsComponents/NoteOnLanguage";
import useClient from "@/hooks/useClient";

const UnderstandingGamblingHarms = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-understanding-banner"],
    url: "/about/work-understanding-banner",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Information"}
          title={bannerData?.title || "Gambling harm isn't a personal failing. It's industrial."}
          description={bannerData?.description || "Understanding how and why gambling causes harm is, for many people, the first thing that makes the rest start to make sense. This page sets out what the public-health evidence says, without the industry's preferred framing."}
          image={bannerData?.image || bannerImg}
        />
      </div>
      <div className="">

        <UnderstandingNav />

        <GamblingHarmLooksLike />

        <GamblingNotNormalProduct />

        <AddictionByDesign />

        <SaferGamblingMyth />

        <ItsAllAroundUs />

        <WhoIsAffected />

        <NoteOnLanguage />
      </div>

      <OurWorkCommonContact
        title="Information is a start. Support is the next step."
        primaryBtnText="Find Help"
        primaryBtnLink="/get-help"
        secondaryBtnText="Read the burden of harms"
        secondaryBtnLink="/burden-of-harm"
      />
    </>
  );
};

export default UnderstandingGamblingHarms;
