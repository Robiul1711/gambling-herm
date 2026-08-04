import React from "react";
import { Link } from "react-router-dom";
import useClient from "@/hooks/useClient";
import meccVideo from "@/assets/videos/mecc.mp4";

const harms = [
  {
    title: "FINANCIAL",
    description:
      "Debt, used savings, lost homes, borrowing from family, payday loans, hidden credit, and (sometimes) crime committed in desperation. Financial harm typically arrives first and last longest.",
  },
  {
    title: "RELATIONAL",
    description:
      "Lost trust, secrecy, family breakdown, separation, custody complications, isolation from friends. The damage to relationships is often what people grieve most in recovery.",
  },
  {
    title: "MENTAL HEALTH",
    description:
      "Anxiety, depression, sleeplessness, shame, loss of identity, loss of pleasure in other things. Gambling harm and mental-health conditions almost always sit alongside each other.",
  },
  {
    title: "PHYSICAL",
    description:
      "Stress-related symptoms, weight change, sleep collapse, alcohol use, neglected basic care, exhaustion.",
  },
  {
    title: "WORK / STUDY",
    description:
      "Concentration loss, absenteeism, lost jobs, lost qualifications, lost professional reputation.",
  },
  {
    title: "SUICIDE RISK",
    description: (
      <>
        Gambling disorder carries a severe, independent suicide risk; in the
        best-powered registry cohort, suicide was the leading cause of death. Risk
        appears to peak not at the height of gambling but in the days and weeks
        after a heavy loss, when shame and hopelessness compound. If this is
        you, please call{" "}
        <Link
          to="/urgent-help"
          className="underline text-[#2d2d2d] hover:text-[#1d7092] transition-colors font-medium"
        >
          Samaritans 116 123
        </Link>{" "}
        now. See{" "}
        <a
          href="#affected"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("affected")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="underline text-[#2d2d2d] hover:text-[#1d7092] transition-colors font-medium"
        >
          our burden page
        </a>{" "}
        for the quantified picture.
      </>
    ),
  },
];

const GamblingHarmLooksLike = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-looks-like"],
    url: "/about/work-looks-like",
  });

  const data = responseData?.data;

  const sectionTitle = data?.title || "1. What gambling harm looks like";
  const sectionDesc =
    data?.description ||
    "Harm is plural. It is rarely just about money, and the money harms are rarely just about debt.";
  const videoUrl = data?.videoUrl || meccVideo;

  const captionText =
    data?.subtitle ||
    "GHUK's MECC training film — a lived-experience interview on how gambling exposure often starts in childhood.";

  // Parse caption split by em-dash or hyphen
  const parts = captionText.split("—");
  const captionBold = parts[0]?.trim() || "GHUK's MECC training film";
  const captionItalic =
    parts[1]?.trim() ||
    "a lived-experience interview on how gambling exposure often starts in childhood.";

  return (
    <section id="gambling-harm" className="pb-8 md:pb-16 max-w-5xl mx-auto px-4">
      <div>
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="flex-1 max-w-xl text-left">
            <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

            <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-[#1d1d1d] mb-5 tracking-tight">
              {sectionTitle}
            </h2>

            <p className="text-[#4b5563] leading-relaxed text-sm md:text-base">
              {sectionDesc}
            </p>
          </div>

          {/* Right Video Player Column */}
          <div className="w-full lg:w-96 shrink-0 flex items-center justify-center">
            <div className="w-full bg-black overflow-hidden shadow-md flex flex-col">
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

        {/* Table Rows */}
        <div className="border-t border-gray-200/80 divide-y divide-gray-200/80">
          {harms.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-5 md:py-6 items-start text-[15px] leading-relaxed"
            >
              <div className="md:col-span-3 text-[#1d7092] font-bold text-xs md:text-[13px] tracking-wider uppercase pt-0.5">
                {item.title}
              </div>

              <div className="md:col-span-9 text-[#374151] leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Alert Box */}
        <div className="mt-10">
          <div className="bg-[#edf7fd] border-l-[4px] border-[#1d7092] p-6 md:p-8 rounded-r-xl shadow-xs">
            <h4 className="font-bold text-[#111827] mb-2 text-base md:text-[17px]">
              If reading this is upsetting
            </h4>

            <p className="text-[#374151] leading-relaxed text-sm md:text-[15px]">
              That's normal. Recognition is hard. If you'd like to talk to
              someone right now, the{" "}
              <strong className="font-bold text-[#111827]">
                National Gambling Helpline (0808 8020 133)
              </strong>{" "}
              is free, confidential and open 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingHarmLooksLike;
