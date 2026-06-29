import React from "react";
import useClient from "@/hooks/useClient";
import meccVideo from "@/assets/videos/mecc.mp4";

const harms = [
  {
    title: "Financial",
    description:
      "Debt, used savings, lost homes, borrowing from family, payday loans, hidden credit, and (sometimes) crime committed in desperation. Financial harm typically arrives first and last longest.",
  },
  {
    title: "Relational",
    description:
      "Lost trust, secrecy, family breakdown, separation, custody complications, isolation from friends. The damage to relationships is often what people grieve most in recovery.",
  },
  {
    title: "Mental health",
    description:
      "Anxiety, depression, sleeplessness, shame, loss of identity, loss of pleasure in other things. Gambling harm and mental-health conditions almost always sit alongside each other.",
  },
  {
    title: "Physical",
    description:
      "Stress-related symptoms, weight change, sleep collapse, alcohol use, neglected basic care, exhaustion.",
  },
  {
    title: "Work / study",
    description:
      "Concentration loss, absenteeism, lost jobs, lost qualifications, lost professional reputation.",
  },
  {
    title: "Suicide risk",
    description:
      "Gambling carries one of the highest suicide rates of any addiction. The risk peaks not at the height of gambling but in the days and weeks after a heavy loss, when shame and hopelessness compound.",
  },
];

const GamblingHarmLooksLike = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-looks-like"],
    url: "/about/work-looks-like",
  });

  const data = responseData?.data;

  const sectionTitle = data?.title || "1. What gambling harm looks like";
  const sectionDesc = data?.description || "Harm is plural. It is rarely just about money, and the money harms are rarely just about debt.";
  const videoUrl = data?.videoUrl || meccVideo;

  const captionText = data?.subtitle || "GHUK's MECC training film — a lived-experience interview on how gambling exposure often starts in childhood.";
  
  // Parse caption split by em-dash or hyphen
  const parts = captionText.split("—");
  const captionBold = parts[0]?.trim() || "GHUK's MECC training film";
  const captionItalic = parts[1]?.trim() || "a lived-experience interview on how gambling exposure often starts in childhood.";

  return (
    <section
      id="gambling-harm"
      className="pb-8 md:pb-16 section-padding-x"
    >
      <div className="">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 mb-8 md:mb-16 max-w-5xl mx-auto">
          <div className="flex-1 max-w-xl text-left">
            <div className="w-12 h-[3px] bg-Primary2 mb-6"></div>

            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-[#1d1d1d] mb-5">
              {sectionTitle}
            </h2>

            <p className="text-[#727272] leading-7 md:leading-8 text-sm md:text-base">
              {sectionDesc}
            </p>
          </div>

          {/* Right Video Player Column */}
          <div className="w-full lg:w-96 shrink-0 flex items-center justify-center">
            <div className="w-full bg-black rounded-2xl overflow-hidden shadow-md flex flex-col">
              {/* Video */}
              <video
                key={videoUrl}
                src={videoUrl}
                controls
                className="w-full h-auto object-cover max-h-[220px]"
              />

              {/* Video Meta Title Banner */}
              <div className="bg-[#141414] p-3 text-[11px] md:text-xs text-gray-300 border-t border-gray-800 text-left">
                <p className="leading-relaxed">
                  <span className="font-bold text-white">{captionBold}</span> —{" "}
                  <span className="italic text-gray-400">{captionItalic}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border-t border-gray-200">
          {harms.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[220px_1fr] gap-8 py-4 md:py-8 border-b border-gray-200"
            >
              <h3 className="text-Primary2 text-sm font-medium">
                {item.title}
              </h3>

              <p className="text-[#444] leading-7 md:leading-8 text-sm md:text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {/* Bottom Alert Box */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-[#f9e9ea] rounded-lg border-l-4 border-[#d91f26] px-5 md:px-8 py-6 md:py-8">
            <h4 className="font-semibold text-[#222] mb-4 md:mb-5 text-base md:text-lg">
              If reading this is upsetting
            </h4>

            <p className="text-[#6b6b6b] leading-7 text-sm md:text-base">
              That's normal. Recognition is hard. If you'd like to talk to
              someone right now, the{" "}
              <span className="font-semibold text-black">
                National Gambling Helpline (0808 8020 133)
              </span>{" "}
              is free, confidential and open 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingHarmLooksLike;
