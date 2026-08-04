import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import React from "react";
import bannerImg from "@/assets/images/checkin.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import CheckInInfoCard from "@/components/checkInToolComponents/CheckInInfoCard";
import CheckInDoors from "@/components/checkInToolComponents/CheckInDoors";
import NotSureDoor from "@/components/checkInToolComponents/NotSureDoor";
import GHSIFrameworkSection from "@/components/checkInToolComponents/GHSIFrameworkSection";
import useClient from "@/hooks/useClient";

const CheckInTool = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "get-help-check-in"],
    url: "/about/get-help-check-in",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="">
        <GamblingCommonBanner
          section={bannerData?.subtitle || "Check in"}
          title={bannerData?.title || "Welcome. Whichever door you came through."}
          description={bannerData?.description || "Most gambling-harm self-assessments online assume you've come to ask for help with your own gambling. We don't make that assumption. You might be checking in for yourself. You might be checking in because of someone else. You might not know yet. All three are valid, and all three start the same way: with a few private questions, in your browser only, and a result that fits whoever you actually are."}
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}
        />
        <CheckInInfoCard />
        <CheckInDoors />
        <NotSureDoor />
        <GHSIFrameworkSection />
      </div>
      <OurWorkCommonContact
        title="Or just call."
        description="The check-in is helpful for some people. For others, the right step is to skip the reflection prompt and talk to someone trained to help, they will help you find your own door."
        primaryBtnText="0808 8020 133. National Gambling Helpline"
        primaryBtnLink="/get-help"
        secondaryBtnText="Other routes to help"
        secondaryBtnLink="/get-help"
      />
    </>
  );
};

export default CheckInTool;
