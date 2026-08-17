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
        <div className=" border border-gray-200/90 p-6 md:p-8 bg-white shadow-xs flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 tracking-tight">
            For the patient who gambles
          </h3>

          <div className="space-y-5">
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
                National Gambling Helpline (GamCare),
              </strong>{" "}
              0808 8020 133, 24/7, also offers structured treatment.
            </p>

            {/* Item 3 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                Gordon Moody,
              </strong>{" "}
              residential and intensive online treatment, free for those with
              severe gambling harm.
            </p>

            {/* Item 4 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                NHS Talking Therapies (IAPT),
              </strong>{" "}
              for comorbid anxiety/depression. Self-referral.
            </p>

            {/* Item 5 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">CBT</strong> is
              the best-evidenced talking therapy for gambling harm.
            </p>
          </div>
        </div>

        {/* Column 2: For the affected other */}
        <div className=" border border-gray-200/90 p-6 md:p-8 bg-white shadow-xs flex flex-col">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 pb-2 tracking-tight">
            For the affected other
          </h3>

          <div className="space-y-5">
            {/* Item 1 */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed pb-5 border-b border-dashed border-gray-200 font-normal">
              <strong className="text-gray-900 font-bold mr-1.5">
                GamCare affected-others service,
              </strong>{" "}
              one-to-one counselling, no waiting list.
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
              for the affected-other's own anxiety/depression (self-refer).
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
    </div>
  );
};

export default ReferralServicesSection;
