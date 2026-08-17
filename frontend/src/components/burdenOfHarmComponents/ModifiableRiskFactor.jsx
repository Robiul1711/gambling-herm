import React from "react";
import imgOne from "@/assets/images/img1.png"; // Top-right infographic image
import bannerImg from "@/assets/images/banner.png"; // Bottom group photo image
import useClient from "@/hooks/useClient";

const ModifiableRiskFactor = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-modifiable-risk"],
    url: "/about/work-modifiable-risk",
  });

  const data = responseData?.data;

  const sectionTitle =
    data?.title ||
    "1. A modifiable risk factor, and we're not treating it like one";
  const paragraph1 =
    data?.description ||
    '"Modifiable risk factors" is the language public-health systems use for the things that drive disease and death and that can be changed by policy. Smoking. Alcohol. Air quality. Obesity. Gambling belongs on that list. It is largely missing from it.';
  const paragraph2 =
    data?.audioTitle ||
    "This is not an academic distinction. It determines how much research funding a harm attracts, how seriously it is taken by health systems, and how willing politicians are to act. Until gambling is treated as a modifiable risk factor for ill-health, rather than as discretionary leisure consumption with the occasional unfortunate edge case, the response will continue to be smaller than the harm warrants.";
  const positionTagline = data?.audioSource || "Our position";
  const positionText =
    data?.audioUrl ||
    "Gambling harm should be classified, measured, funded and regulated as the modifiable public-health risk factor it is. The current regulatory framing (gambling as a leisure activity with industry-led safeguards) is not consistent with the evidence on harm.";
  const rightInfographic = data?.image || imgOne;
  const bottomTeamPhoto = data?.videoUrl || bannerImg;
  const paragraph3 =
    data?.paragraph3 ||
    "On GHUK's burden-of-disease modelling (APPG submission, February 2026), gambling ranks among the top five modifiable risks to UK population health, comparable in magnitude to alcohol misuse and major depressive disorder. No UK policy framework currently treats it that way.";

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 bg-white">
      {/* Top Layout: Text Content + Infographic Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Side: Copy and Position Card (Take up 7 cols on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight text-center lg:text-left leading-tight mb-6">
              {sectionTitle}
            </h2>

            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>{paragraph1}</p>
              <p>{paragraph2}</p>
              <p>{paragraph3}</p>
            </div>
          </div>

          {/* Our Position Statement Card */}
          <div className="mt-8 border-l-4 border-[#166B94] bg-[#292929] text-white p-6 md:p-8 shadow-sm">
            <h4 className="text-[#3FABD4] font-semibold tracking-wide text-sm md:text-base uppercase mb-3">
              {positionTagline}
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed ">
              {positionText}
            </p>
          </div>
        </div>

        {/* Right Side: Infographic (Take up 5 cols on large screens) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="max-w-md w-full p-2 bg-transparent overflow-hidden">
            <img
              src={rightInfographic}
              alt="Gambling harm is a top five modifiable health risk infographic"
              className="w-full h-auto object-contain "
            />
          </div>
        </div>
      </div>

      {/* Bottom Layout: Full-Width Styled Team Image */}
      {bottomTeamPhoto && (
        <div className="w-full overflow-hidden shadow-md border border-gray-100">
          <img
            src={bottomTeamPhoto}
            alt="Public health representatives framework assembly team"
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      )}
    </section>
  );
};

export default ModifiableRiskFactor;
