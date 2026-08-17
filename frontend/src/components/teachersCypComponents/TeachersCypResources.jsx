import React from "react";
import { Link } from "react-router-dom";

const TeachersCypResources = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
          Resources
        </h2>

        {/* 2-Column Responsive Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: To give to a young person */}
          <div className="bg-white border border-gray-200/90  p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                To give to a young person
              </h3>

              <div className="divide-y divide-dashed divide-gray-200 space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <div className="pt-3.5 first:pt-0">
                  Our young people page,{" "}
                  <Link
                    to="/get-help/young-people"
                    className="underline font-semibold text-gray-900 hover:text-[#0092D0] transition-colors"
                  >
                    written to be read by them
                  </Link>
                </div>

                <div className="pt-3.5">
                  Childline,{" "}
                  <a
                    href="tel:08001111"
                    className="hover:text-[#0092D0] font-semibold text-gray-900 transition-colors"
                  >
                    0800 1111
                  </a>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    Big Deal
                  </strong>
                  (GamCare),{" "}
                  <a
                    href="https://www.bigdeal.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold text-gray-900 hover:text-[#0092D0] transition-colors"
                  >
                    bigdeal.org.uk
                  </a>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    YoungMinds Text,
                  </strong>
                  text YM to 85258
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    Papyrus HOPELINE247
                  </strong>
                  (under-35s){" "}
                  <a
                    href="tel:08000684141"
                    className="hover:text-[#0092D0] font-semibold text-gray-900 transition-colors"
                  >
                    0800 068 4141
                  </a>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    The Mix
                  </strong>
                  (under-25s){" "}
                  <a
                    href="tel:08088084994"
                    className="hover:text-[#0092D0] font-semibold text-gray-900 transition-colors"
                  >
                    0808 808 4994
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: For adults around them */}
          <div className="bg-white border border-gray-200/90  p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                For adults around them
              </h3>

              <div className="divide-y divide-dashed divide-gray-200 space-y-3.5 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                <div className="pt-3.5 first:pt-0">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    NSPCC,
                  </strong>
                  <a
                    href="tel:08088005000"
                    className="hover:text-[#0092D0] font-semibold text-gray-900 transition-colors"
                  >
                    0808 800 5000
                  </a>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    YoungMinds Parents Helpline,
                  </strong>
                  <a
                    href="tel:08088025544"
                    className="hover:text-[#0092D0] font-semibold text-gray-900 transition-colors"
                  >
                    0808 802 5544
                  </a>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    GHUK training &amp; school sessions,
                  </strong>
                  independent and evidence-based:{" "}
                  <a
                    href="mailto:hello@gamblingharm.com"
                    className="underline font-semibold text-gray-900 hover:text-[#0092D0] transition-colors"
                  >
                    hello@gamblingharm.com
                  </a>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    NHS gambling clinics,
                  </strong>
                  accept under-18 referrals; see{" "}
                  <Link
                    to="/get-help/treatment"
                    className="underline font-semibold text-gray-900 hover:text-[#0092D0] transition-colors"
                  >
                    Find treatment
                  </Link>
                </div>

                <div className="pt-3.5">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    National Gambling Helpline,
                  </strong>
                  <a
                    href="tel:08088020133"
                    className="hover:text-[#0092D0] font-semibold text-gray-900 transition-colors"
                  >
                    0808 8020 133
                  </a>
                  , for any adult worried about someone's gambling
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypResources;
