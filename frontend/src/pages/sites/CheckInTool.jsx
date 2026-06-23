import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import React from "react";
import bannerImg from "@/assets/images/checkin.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import CheckInInfoCard from "@/components/checkInToolComponents/CheckInInfoCard";
import CheckInDoors from "@/components/checkInToolComponents/CheckInDoors";
import NotSureDoor from "@/components/checkInToolComponents/NotSureDoor";
import GHSIFrameworkSection from "@/components/checkInToolComponents/GHSIFrameworkSection";
const CheckInTool = () => {
  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section="Check in"
          title="Welcome. Whichever door you came through."
          description="Most gambling-harm self-assessments online assume you've come to ask for help with your own gambling. We don't make that assumption. You might be checking in for yourself. You might be checking in because of someone else. You might not know yet. All three are valid, and all three start the same way: with a few private questions, in your browser only, and a result that fits whoever you actually are."
          image={bannerImg}
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
