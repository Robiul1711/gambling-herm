import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import React from "react";
import bannerImg from "@/assets/images/professional.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import ThurrockSection from "@/components/thurrockcomponents/ThurrockSection";
const Thurrock = () => {
  return (
    <>
      <div className="section-padding-x">
        <GamblingCommonBanner
          section="Local support · Thurrock"
          title="Get support for gambling harms in Thurrock."
          description="Are you worried about your gambling, or the gambling of someone else? This page brings together support, treatment, and tools available in Thurrock and beyond. Whether you're looking for a quick self-check, professional help, or practical tools to take control, you'll find it here."
          image={bannerImg}
        />
        <ThurrockSection />
      </div>
      <OurWorkCommonContact
        title="Support is available right now."
        description="Whether you're here for the first time, returning after a setback, or somewhere in between, support is here. It works, and the next step does not have to be big to count."
        primaryBtnText="0808 8020 133
, National Gambling Helpline"
        primaryBtnLink="/get-help"
        secondaryBtnText="More ways to get help"
        secondaryBtnLink="/get-help"
      />
    </>
  );
};

export default Thurrock;
