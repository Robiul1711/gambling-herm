import React from "react";
import bannerImg from "@/assets/images/cy1.png";
import illustrationImg from "@/assets/images/ourposition.png";
import useClient from "@/hooks/useClient";

export default function CYBanner() {
  const { data: responseData } = useClient({
    queryKey: ["about", "cyp-intro"],
    url: "/about/cyp-intro",
  });

  const sectionData = responseData?.data;
  const image = sectionData?.image || bannerImg;

  const keyPoints = [
    "Children can be harmed by gambling even if they never gamble themselves.",
    "Gambling-related harm to children is often hidden or normalised.",
    "Harm is frequently emotional, relational, and cumulative rather than acute.",
    "Early awareness and prevention are critical safeguarding actions.",
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

      {/* Large Featured Image */}
      <div className="mb-8">
        <div className="overflow-hidden  shadow-xs border border-gray-100 bg-gray-50">
          <img
            src={image}
            alt="Children grow up surrounded by gambling marketing"
            className="w-full h-auto object-cover max-h-[460px]"
          />
        </div>
        <p className="mt-3 text-xs sm:text-sm italic text-gray-500 font-normal leading-relaxed">
          Children grow up surrounded by gambling marketing: on the high street,
          on shirts and on their screens. A still from GHUK's children's films.
        </p>
      </div>

      {/* Key Points Card & Illustration Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6">
        {/* Left Column: Key Points Container */}
        <div className="md:col-span-7 bg-[#edf7fd] border-l-[4px] border-[#17a9df] rounded-r-xl p-6 md:p-8 shadow-xs">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17a9df] mb-4">
            KEY POINTS
          </h3>
          <div className="divide-y divide-dashed divide-gray-300/80">
            {keyPoints.map((point, index) => (
              <p
                key={index}
                className="py-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal first:pt-0 last:pb-0"
              >
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Illustration Image */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="w-full overflow-hidden p-2">
            <img
              src={illustrationImg}
              alt="Half of all gambling harm affects others"
              className="w-full h-auto object-contain max-h-[320px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
