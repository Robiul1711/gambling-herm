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
import PageSectionNav from "@/components/common/PageSectionNav";
import { Link } from "react-router-dom";
import useClient from "@/hooks/useClient";

const sections = [
  { id: "starting-point", title: "1. A Starting Point" },
  { id: "talk-to-someone", title: "2. Talk to Someone" },
  { id: "four-ways", title: "3. Four Ways Through" },
  { id: "harmful-gambling", title: "4. What Harmful Gambling Looks Like" },
  { id: "reach-out", title: "5. Reach Out" },
  { id: "protecting-money", title: "6. Protecting Your Money" },
  { id: "recovery", title: "7. Recovery & What Works" },
];

const GetHelpOverview = () => {
  const { data: responseData, isLoading } = useClient({
    queryKey: ["about", "get-help-overview"],
    url: "/about/get-help-overview",
  });

  const bannerData = responseData?.data;

  return (
    <>
      <div className="">
        <div id="starting-point" className="scroll-mt-24">
          <section className="py-10 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              {/* Top Label */}
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="w-6 h-[1px] bg-black shrink-0"></div>
                <span className="text-xs sm:text-sm text-Primary">
                  A Starting Point
                </span>
              </div>

              {/* Heading */}
              <h2 className=" text-[32px] sm:text-[40px] md:text-[52px]  leading-[1.1] font-bold text-[#222]">
                Not sure where to begin? Try the check-in.
              </h2>

              {/* Description */}
              <p className="mt-5 md:mt-8 text-sm sm:text-base leading-7 text-[#4b4b4b]">
                A welcoming entry-point that helps you find the right door whether
                you're checking in for yourself, for someone else, or you're not
                yet sure. A short, private read: nothing to enter, nothing stored or
                sent.
              </p>

              {/* Button */}
              <Link
                to="/get-help/check-in"
                className="inline-block mt-8 md:mt-10 bg-[#0D6E9F] hover:bg-[#095b82] text-white text-sm sm:text-base font-medium px-4 sm:px-8 py-3 transition-all duration-300"
              >
                Open the check-in
              </Link>
            </div>
          </section>
        </div>

        <GamblingCommonBanner
          titleClassName="md:text-[32px] sm:text-[40px] lg:text-[52px]"
          containerClassName="max-w-5xl mx-auto"
          section={bannerData?.subtitle || "SUPPORT THAT WORKS"}
          title={
            bannerData?.title ||
            "There's a way through this. Here's where to start."
          }
          description={
            bannerData?.description ||
            "Whatever stage you're at (confused, scared, ready to change, recovering, or relapsing), there is a route to support that fits. GHUK doesn't run treatment services: we help you find trusted, specialist support and point you to it clearly. You don't have to have hit \"rock bottom\" to deserve it, and you don't have to do this on willpower alone."
          }
          image={bannerData?.image || bannerImg}
          isLoading={isLoading}
        />

        <PageSectionNav sections={sections} />

        <div className="">
          <div id="talk-to-someone" className="scroll-mt-24">
            <TalkToSomeone />
          </div>
          <div id="four-ways" className="scroll-mt-24">
            <FourWaysSection />
            <FourWaysGrid />
          </div>
          <div id="harmful-gambling" className="scroll-mt-24">
            <HarmfulGamblingSection />
          </div>
        </div>
      </div>
      <div>
        <div id="reach-out" className="scroll-mt-24">
          <ReachOutSection />
        </div>
        <div id="protecting-money" className="scroll-mt-24">
          <ProtectingYourMoney />
        </div>
        <div id="recovery" className="scroll-mt-24">
          <RecoverySection />
        </div>
      </div>
      <OurWorkCommonContact
        className={"bg-[#4A6A6E]"}
        textClass={"text-white"}
        primaryClass={
          "!bg-white !text-[#4A6A6E] hover:bg-[#4A6A6E] hover:text-white"
        }
        title="If you take one thing from this page, take this."
        description="Whatever you're doing right now, first time looking, first conversation, first call, fifth relapse, fifth year of recovery, you deserve support. It exists, it works, and the next step does not have to be big to count."
        primaryBtnText="Find services in your region →"
        primaryBtnLink="/get-help/treatment"
      />
    </>
  );
};

export default GetHelpOverview;
