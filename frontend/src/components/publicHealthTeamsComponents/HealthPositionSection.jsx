import React from "react";
import bannerImg from "@/assets/images/publichelth.png";
import useClient from "@/hooks/useClient";

const HealthPositionSection = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "public-health-position"],
    url: "/about/public-health-position",
  });

  const sectionData = responseData?.data;

  const tagline = sectionData?.title || "Our position";
  const boldText =
    sectionData?.subtitle ||
    "Gambling harm ranks among the top five modifiable risks to UK population health,";

  let desc1 =
    "comparable in burden to alcohol misuse and major depressive disorder. It is currently regulated, funded and addressed as if it were not. That is the central public-health failure we exist to correct.";
  let desc2 =
    "The framing of gambling harm should match the framing applied to tobacco, alcohol, and ultra-processed food: a commercial determinant of health, governed by a regulator with population-health primacy, funded through a statutory levy scaled to harm, and integrated across the public-health system, not treated as a discretionary leisure issue at the periphery of the regulatory landscape.";

  if (sectionData?.description) {
    const paragraphs = sectionData.description.split("\n\n");
    if (paragraphs[0]) desc1 = paragraphs[0];
    if (paragraphs[1]) desc2 = paragraphs[1];
  }

  const image = sectionData?.image || bannerImg;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-[#eaf5fb] overflow-hidden">
          {/* Left Blue Border */}
          <div className="absolute left-0 top-0 h-full w-[4px] bg-[#0093d0]" />

          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-8">
            {/* Content */}
            <div className="flex-1">
              <p className="text-[#0082c3] text-sm mb-5">{tagline}</p>

              <p className="text-[15px] leading-8 text-[#4b4e52] mb-8">
                <span className="font-bold text-[#2b2f33]">{boldText}</span>{" "}
                {desc1}
              </p>

              <p className="text-[15px] leading-8 text-[#4b4e52]">{desc2}</p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-[320px] flex justify-center shrink-0">
              <img
                src={image}
                alt="Public Health Diagram"
                className="w-full max-w-[320px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthPositionSection;
