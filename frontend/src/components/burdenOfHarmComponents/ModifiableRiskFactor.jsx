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
    '"Modifiable risk factors" is the language public-health systems use for the things that drive disease and death and that can be changed by policy. Smoking. Alcohol. Air quality. Diet. Gambling belongs on that list. It is largely missing from it.';
  const paragraph2 =
    data?.audioTitle ||
    "This is not an academic distinction. It determines how much research funding a harm attracts, how seriously it is taken by health systems, and how willing politicians are to act. Until gambling is treated as a modifiable risk factor for ill-health, rather than as discretionary leisure consumption with the occasional unfortunate edge case, the response will continue to be smaller than the harm warrants.";
  const positionTagline = data?.audioSource || "Our position";
  const positionText =
    data?.audioUrl ||
    "Gambling harm should be classified, measured, funded and regulated as the modifiable public-health risk factor it is. The current regulatory framing, gambling as a leisure activity with industry-led safeguards, is not consistent with the evidence on harm.";
  const rightInfographic = data?.image || imgOne;
  const bottomTeamPhoto = data?.videoUrl || bannerImg;
  const paragraph3 = (
    <>
      This is not only our claim. Applying published health-state utilities (
      <a
        href="https://doi.org/10.1016/j.socscimed.2020.113337"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-[#0093D0]"
      >
        Moayeri, 2020
      </a>
      , roughly 260 QALYs per 100,000 adults) to national prevalence places the
      health loss among people who gamble alone at just over 100,000 QALYs a
      year, before anyone harmed by someone else’s gambling is counted. The{" "}
      <a
        href="https://www.who.int/publications/i/item/9789241512961"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-[#0093D0]"
      >
        World Health Organization (2017)
      </a>{" "}
      judges the gambling-related burden to be of similar magnitude to alcohol
      misuse and dependence and major depressive disorder. Burden studies in{" "}
      <a
        href="https://www.responsiblegambling.vic.gov.au/resources/publications/the-social-cost-of-gambling-to-victoria-147/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-[#0093D0]"
      >
        Australia, Victoria
      </a>{" "}
      and{" "}
      <a
        href="https://www.health.govt.nz/publication/measuring-burden-gambling-harm-new-zealand"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-[#0093D0]"
      >
        New Zealand
      </a>{" "}
      reach the same order of magnitude. The{" "}
      <a
        href="https://www.thelancet.com/commissions/gambling"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-[#0093D0]"
      >
        Lancet Public Health Commission on Gambling (Wardle et al., 2024)
      </a>{" "}
      provides the international framing: commercial determinants, the
      prevention paradox, and harm carried by people who never placed a bet. Our
      own modelling, which adds people harmed by someone else’s gambling on the
      newest national survey, sits above these external anchors. Each source is
      linked so readers can check the basis.
    </>
  );

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 bg-white">
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
    </section>
  );
};

export default ModifiableRiskFactor;
