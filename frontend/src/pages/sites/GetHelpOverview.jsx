import GamblingCommonBanner from "@/components/common/GamblingCommonBanner";
import React from "react";
import bannerImg from "@/assets/images/cy3.png";
import OurWorkCommonContact from "@/components/common/OurWorkCommonContact";
import TalkToSomeone from "@/components/getHelpComponents/TalkToSomeone";
import FourWaysSection from "@/components/getHelpComponents/FourWaysSection";
import FourWaysGrid from "@/components/getHelpComponents/FourWaysGrid";
import HarmfulGamblingSection from "@/components/getHelpComponents/HarmfulGamblingSection";
import ReachOutSection from "@/components/getHelpComponents/ReachOutSection";
import ProtectingYourMoney from "@/components/getHelpComponents/ProtectingYourMoney";
import RecoverySection from "@/components/getHelpComponents/RecoverySection";
const GetHelpOverview = () => {
  return (
    <>
      <div className="section-padding-x">
     <section className="py-10 md:py-16 lg:py-20">
  <div className="max-w-5xl">
    {/* Top Label */}
    <div className="flex items-center gap-3 mb-4 md:mb-5">
      <div className="w-6 h-[1px] bg-black shrink-0"></div>
      <span className="text-xs sm:text-sm text-gray-800">
        A Starting Point
      </span>
    </div>

    {/* Heading */}
    <h2 className="max-w-3xl text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[1.1] font-bold text-[#222]">
      Not sure where to begin? Try the check-in.
    </h2>

    {/* Description */}
    <p className="max-w-2xl mt-5 md:mt-8 text-sm sm:text-base leading-7 text-[#4b4b4b]">
      A welcoming entry-point that helps you find the right door whether
      you're checking in for yourself, for someone else, or you're not yet
      sure. Three minutes, fully private, nothing stored or sent.
    </p>

    {/* Button */}
    <button className="mt-8 md:mt-10 bg-[#0D6E9F] hover:bg-[#095b82] text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300">
      Open The Check-In
    </button>
  </div>
</section>
        <GamblingCommonBanner
          section="Support that works"
          title="There's a way through this. Here's where to start."
          description="Whatever stage you're at (confused, scared, ready to change, recovering, or relapsing) there is a route to support that fits. You don't have to have hit 'rock bottom' to deserve it. And you don't have to do this on willpower alone."
          image={bannerImg}
        />
        <TalkToSomeone/>
        <FourWaysSection/>
        <FourWaysGrid/>
        <HarmfulGamblingSection/>
      </div>
      <div>
        <ReachOutSection/>
        <ProtectingYourMoney/>
        <RecoverySection/>
      </div>
      <OurWorkCommonContact
        title="If you take one thing from this page, take this."
        description="Whatever you're doing right now, first time looking, first conversation, first call, fifth relapse, fifth year of recovery, you deserve support. It exists, it works, and the next step does not have to be big to count."
        primaryBtnText="Find services in your region →"
        primaryBtnLink="/get-help"
      />
    </>
  );
};

export default GetHelpOverview;
