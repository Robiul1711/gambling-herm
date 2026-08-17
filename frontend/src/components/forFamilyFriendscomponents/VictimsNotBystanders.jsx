import React from "react";
import whatgambling from "@/assets/images/ourposition.png";
import useClient from "@/hooks/useClient";

export default function VictimsNotBystanders() {
  const { data: responseData } = useClient({
    queryKey: ["about", "get-help-victims"],
    url: "/about/get-help-victims",
  });

  const data = responseData?.data;

  const tagline = data?.subtitle || "Our position";
  const boldPrefix =
    data?.title ||
    "Affected Others Are Direct Victims, Not Concerned Bystanders.";
  const mainDesc =
    data?.description ||
    "You did not consent to a product being marketed at someone you love. The financial, mental-health and developmental harm to you is not a side-effect of \"someone else's choice\", it is part of the harm the product produced. The UK gambling-harm response routinely understates this. We don't.";
  const illustration = data?.image || whatgambling;

  const renderParagraph2 = () => {
    const defaultText =
      'You can access support for you, in your own right, today, without waiting for the person who gambles to be "ready". Call the National Gambling Helpline (0808 8020 133), they support affected others, not only people who gamble.';
    const text = data?.audioTitle || defaultText;
    const targetPhrase = "National Gambling Helpline (0808 8020 133)";

    if (text.includes(targetPhrase)) {
      const index = text.indexOf(targetPhrase);
      const before = text.substring(0, index);
      const after = text.substring(index + targetPhrase.length);
      return (
        <>
          {before}
          <strong className="text-gray-900 font-bold">{targetPhrase}</strong>
          {after}
        </>
      );
    }
    return text;
  };

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Card Wrapper */}
        <div className="bg-[#edf7fd] border-l-4 border-[#0092D0] rounded-r-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 hover:shadow-md transition-shadow duration-300">
          {/* Left Content */}
          <div className="flex-1 text-left">
            {/* Category Label */}
            <span className="text-[#0092D0] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-3">
              {tagline}
            </span>

            {/* First Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-6">
              <strong className="text-gray-900 font-bold">
                {boldPrefix}
              </strong>{" "}
              {mainDesc}
            </p>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              {renderParagraph2()}
            </p>
          </div>

          {/* Right Graphic */}
          <div className="w-full md:w-1/3 shrink-0 flex justify-center">
            <img
              src={illustration}
              alt="Family Illustration"
              className="max-w-[200px] xs:max-w-[240px] md:max-w-full h-auto shadow-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
