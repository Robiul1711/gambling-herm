import React from "react";
import whatstigma from "@/assets/images/whatstigma.png";
import useClient from "@/hooks/useClient";

const reductionPoints = [
  {
    number: 1,
    title:
      "Reframe to public-health language across government, regulator and media",
    description:
      '"People harmed by gambling" rather than "problem gamblers". "Harm caused by gambling products" rather than "gambling problems". This isn\'t cosmetic, the available frames determine what action is then thinkable.',
  },
  {
    number: 2,
    title: "Centre lived experience, not as testimony, as leadership",
    description:
      "People with lived experience of gambling harm, including affected others and the bereaved, should sit at the centre of policy and service design. Not as case studies, as the people defining the response. This is one of the most reliably stigma-reducing things research finds.",
  },
  {
    number: 3,
    title: "Make the structural causes visible",
    description:
      "Naming the commercial determinants (product design, marketing, regulation, industry lobbying) reduces stigma at the individual level. If the harm is shown to be industrial, the shame of being harmed by it shifts.",
  },
  {
    number: 4,
    title: "Take industry funding out of stigma-reduction work",
    description:
      "The reputation dividend is incompatible with effective anti-stigma work. Stigma campaigns funded independently of the industry being studied are more credible and produce different framings.",
  },
];

const WhatReducesStigma = () => {
  const { data: responseData } = useClient({
    queryKey: ["about", "work-stigma"],
    url: "/about/work-stigma",
  });

  const data = responseData?.data;

  const bottomStillImage = data?.audioUrl || whatstigma;

  return (
    <section id="reduces-stigma" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
          What actually reduces stigma
        </h2>

        {/* Intro Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
          The international evidence points to four changes.
        </p>

        {/* Lived Experience Media Player Box */}
        <div className="bg-[#f8fafc] border-l-[4px] border-[#1d7092] p-6 md:p-8  mb-8 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1d7092] mb-2">
            EXPERTS BY EXPERIENCE · PHOENIXFM, MAY 2026
          </div>
          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 leading-snug">
            John Gilham on shame, stigma and the language we use about gambling
            harm
          </h4>

          {/* Audio Player Component */}
          <div className="mb-4">
            <audio controls className="w-full h-10 accent-[#1d7092]">
              <source src="your-audio-file-path-here.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 italic leading-relaxed">
            Clip: John Gilham (Expert by Experience), interviewed on Phoenix
            FM's <span className="not-italic font-semibold">123 Friday</span>{" "}
            show, May 2026.
          </p>
        </div>

        {/* Point Cards Layout Grid Stack */}
        <div className="space-y-4 mb-8">
          {reductionPoints.map((item) => (
            <div
              key={item.number}
              className="border border-gray-200/90  p-6 flex gap-4 md:gap-5 items-start bg-white shadow-xs"
            >
              {/* Number Circle Badge */}
              <div className="w-8 h-8 bg-[#1d7092] text-white flex items-center justify-center font-bold rounded-full shrink-0 mt-0.5 text-sm">
                {item.number}
              </div>

              {/* Text Area */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Position/Note Panel */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md mb-12">
          <h4 className="text-[#17a9df] text-xs font-bold uppercase tracking-wider mb-4">
            A NOTE ON LANGUAGE
          </h4>
          <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
            The phrase "12 ways to reduce stigma when discussing gambling harms"
            you may have seen is from a language guide published by an
            industry-funded charity. The advice in it is largely sound. The
            frame around it (that stigma can be solved with better individual
            word choice) understates the structural piece. Use the language
            guide; reject the implied theory of change.
          </p>
        </div>

        {/* Video Still Image and Caption Container */}
        <div className="max-w-md mx-auto flex flex-col items-center text-center mt-12">
          <div className="w-full aspect-[16/10]  overflow-hidden mb-4 shadow-sm">
            <img
              src={bottomStillImage}
              alt="Still from GHUK's Brothers Gambling Harm safeguarding film"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs sm:text-sm italic text-gray-500 leading-relaxed">
            Still from GHUK's{" "}
            <span className="font-semibold">Brothers Gambling Harm</span>{" "}
            safeguarding film. The people behind the statistics are not problems
            to be solved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatReducesStigma;
