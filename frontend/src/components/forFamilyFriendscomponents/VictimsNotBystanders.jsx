import React from "react";
import whatgambling from "@/assets/images/ourposition.png";

export default function VictimsNotBystanders() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Card Wrapper */}
          <div className="bg-[#f0f9ff] border-l-4 border-[#0092D0] rounded-r-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 hover:shadow-md transition-shadow duration-300">
            {/* Left Content */}
            <div className="flex-1 text-left">
              {/* Category Label */}
              <span className="text-[#0092D0] text-xs font-semibold uppercase tracking-wider block mb-3">
                Our position
              </span>

              {/* First Paragraph */}
              <p className="text-[15px] sm:text-base leading-relaxed text-[#4b5563] mb-6">
                <strong className="text-gray-900 font-bold">
                  Affected Others Are Direct Victims, Not Concerned Bystanders.
                </strong>{" "}
                You did not consent to a product being marketed at someone you
                love. The financial, mental-health and developmental harm to you
                is not a side-effect of "someone else's choice", it is part of the
                harm the product produced. The UK gambling-harm response
                routinely understates this. We don't.
              </p>

              {/* Second Paragraph */}
              <p className="text-[15px] sm:text-base leading-relaxed text-[#4b5563]">
                You can access support for you, in your own right, today, without
                waiting for the person who gambles to be "ready". Call the{" "}
                <strong className="text-gray-900 font-bold">
                  National Gambling Helpline (0808 8020 133)
                </strong>
                , they support affected others, not only people who gamble.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="w-full md:w-1/3 shrink-0 flex justify-center">
              <img
                src={whatgambling}
                alt="Family Illustration"
                className="max-w-[200px] xs:max-w-[240px] md:max-w-full h-auto rounded-xl shadow-sm object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
