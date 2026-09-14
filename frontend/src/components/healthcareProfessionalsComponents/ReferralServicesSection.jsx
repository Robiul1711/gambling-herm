import React from "react";
import { Link } from "react-router-dom";

const ReferralServicesSection = () => {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto py-12 md:py-16 bg-white text-gray-900">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Heading Section */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Where to refer
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          UK gambling-harm services have expanded substantially since 2019. The
          pathways below are free at the point of use and accept self-referral.
        </p>
      </div>

      {/* Two Column Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Column 1: For the patient who gambles */}
        <div className="border border-gray-200/90 p-6 md:p-8 bg-white shadow-xs flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 tracking-tight">
            For the patient who gambles
          </h3>

          <div className="space-y-5">
            {/* Top Prominent Helpline (HC12) */}
            <div className="bg-[#f0f9ff] border-l-[4px] border-[#0082c3] p-4 rounded-r-md">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                <strong className="text-gray-900 font-bold block mb-1">
                  National Gambling Helpline: 0808 8020 133
                </strong>
                Free, 24/7, phone and live chat, for people who gamble and for family and friends.
              </p>
            </div>

            {/* Item 1 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                NHS specialist gambling clinics,
              </strong>{" "}
              the network has expanded to cover most English regions, plus
              services in Scotland and Wales. Self-referral or via primary care.{" "}
              <Link
                to="/get-help/treatment"
                className="text-[#0082c3] underline font-semibold hover:text-[#006699]"
              >
                Find your nearest.
              </Link>
            </p>

            {/* Item 2 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                Gordon Moody,
              </strong>{" "}
              residential and intensive online treatment, free for those with
              severe gambling harm.
            </p>

            {/* Item 3 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                NHS Talking Therapies (IAPT),
              </strong>{" "}
              for comorbid anxiety/depression. Self-referral.
            </p>

            {/* Item 4 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">CBT</strong> is
              the best-evidenced talking therapy for gambling harm.
            </p>
          </div>
        </div>

        {/* Column 2: For the person harmed by someone else's gambling (HC8) */}
        <div className="border border-gray-200/90 p-6 md:p-8 bg-white shadow-xs flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 tracking-tight">
            For the person harmed by someone else's gambling
          </h3>

          <div className="space-y-5">
            {/* Top Prominent Helpline (HC12) */}
            <div className="bg-[#f0f9ff] border-l-[4px] border-[#0082c3] p-4 rounded-r-md">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                <strong className="text-gray-900 font-bold block mb-1">
                  National Gambling Helpline: 0808 8020 133
                </strong>
                Free, 24/7, phone and live chat, for people who gamble and for family and friends.
              </p>
            </div>

            {/* Item 1 (HC8) */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                GamCare support for family and friends:
              </strong>{" "}
              one-to-one counselling.
            </p>

            {/* Item 2 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                Gam-Anon,
              </strong>{" "}
              peer support for family and friends.
            </p>

            {/* Item 3 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                NHS Talking Therapies,
              </strong>{" "}
              for the person's own anxiety/depression (self-refer).
            </p>

            {/* Item 4 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                Gambling with Lives,
              </strong>{" "}
              specialist bereavement support for families bereaved by
              gambling-related suicide.
            </p>

            {/* Item 5 / Footer Link */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              See{" "}
              <Link
                to="/get-help/family-friends"
                className="text-[#0082c3] underline font-semibold hover:text-[#006699]"
              >
                our family-and-friends page
              </Link>{" "}
              for the full pathway.
            </p>
          </div>
        </div>
      </div>

      {/* Triage Guidance Under Table (HC13) */}
      <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg text-sm sm:text-base text-slate-700 leading-relaxed">
        <h4 className="font-bold text-slate-900 mb-2">Triage &amp; Referral Guidance:</h4>
        <ul className="space-y-1.5 list-disc pl-5">
          <li>
            <strong className="text-slate-900">Score of 1 (short-form):</strong> Offer the National Gambling Helpline and brief advice.
          </li>
          <li>
            <strong className="text-slate-900">Score of 2 or 3:</strong> Helpline, and consider an NHS gambling clinic referral.
          </li>
          <li>
            <strong className="text-slate-900">Score of 4 or more, or any safeguarding/suicide-risk concern:</strong> Helpline plus NHS gambling clinic referral (self-referral or professional referral).
          </li>
        </ul>
      </div>

      {/* Single Support Button (HC19) */}
      <div className="mt-8 text-center sm:text-left">
        <Link
          to="/get-help/treatment"
          className="inline-flex items-center gap-2 bg-[#0082c3] hover:bg-[#006699] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors shadow-xs"
        >
          More support options →
        </Link>
      </div>
    </div>
  );
};

export default ReferralServicesSection;
