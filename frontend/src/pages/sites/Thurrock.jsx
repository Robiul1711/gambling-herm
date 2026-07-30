import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import React from "react";
import bannerImg from "@/assets/images/thurrock.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import GamblingControlPanel from "@/components/thurrockcomponents/GamblingControlPanel";
import CheckYourGambling from "@/components/thurrockcomponents/CheckYourGambling";
import TreatmentAndSupport from "@/components/thurrockcomponents/TreatmentAndSupport";
import PeerSupportMeetings from "@/components/thurrockcomponents/PeerSupportMeetings";
import FinancialAdvice from "@/components/thurrockcomponents/FinancialAdvice";
import LearnListenSupport from "@/components/thurrockcomponents/LearnListenSupport";

const Thurrock = () => {
  return (
    <>
      <div className="">
        <GamblingCommonBanner
          section="Local support · Thurrock"
          title="Get support for gambling harms in Thurrock."
          description="Are you worried about your gambling, or the gambling of someone else? This page brings together support, treatment, and tools available in Thurrock and beyond. Whether you're looking for a quick self-check, professional help, or practical tools to take control, you'll find it here."
          image={bannerImg}
        />
      </div>
      <CheckYourGambling />
      <TreatmentAndSupport />
      <div className="bg-[#fafafa] py-12 md:py-16 border-t border-gray-200/40">
        <GamblingControlPanel />
      </div>
      <PeerSupportMeetings />
      <FinancialAdvice />
      <LearnListenSupport />
      <OurWorkCommonContact
        title="Support is available right now."
        description="Whether you're here for the first time, returning after a setback, or somewhere in between, support is here. It works, and the next step does not have to be big to count."
        primaryBtnText="0808 8020 133, National Gambling Helpline"
        primaryBtnLink="/get-help"
        secondaryBtnText="More ways to get help"
        secondaryBtnLink="/get-help"
      />
    </>
  );
};

export default Thurrock;




