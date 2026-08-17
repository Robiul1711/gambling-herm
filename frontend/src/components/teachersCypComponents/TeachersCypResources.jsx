import React from "react";
import { Link } from "react-router-dom";

const TeachersCypResources = () => {
  return (
    <section className="py-12 md:py-20 bg-white pb-28 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-10 tracking-tight">
          Resources
        </h2>

        {/* 2-Column Responsive Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: To give to a young person */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                To give to a young person
              </h3>

              <div className="divide-y divide-dotted divide-gray-300 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <div className="pt-4 first:pt-0">
                  Our young people page,{" "}
                  <Link
                    to="/get-help/young-people"
                    className="underline font-medium text-slate-900 hover:text-[#0093D0] transition-colors"
                  >
                    written to be read by them
                  </Link>
                </div>

                <div className="pt-4">
                  Childline,{" "}
                  <a
                    href="tel:08001111"
                    className="hover:text-[#0093D0] font-medium transition-colors"
                  >
                    0800 1111
                  </a>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">Big Deal</strong>{" "}
                  (GamCare),{" "}
                  <a
                    href="https://www.bigdeal.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium text-slate-900 hover:text-[#0093D0] transition-colors"
                  >
                    bigdeal.org.uk
                  </a>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">
                    YoungMinds Text
                  </strong>
                  , text YM to 85258
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">
                    Papyrus HOPELINE247
                  </strong>{" "}
                  (under-35s){" "}
                  <a
                    href="tel:08000684141"
                    className="hover:text-[#0093D0] font-medium transition-colors"
                  >
                    0800 068 4141
                  </a>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">The Mix</strong>{" "}
                  (under-25s){" "}
                  <a
                    href="tel:08088084994"
                    className="hover:text-[#0093D0] font-medium transition-colors"
                  >
                    0808 808 4994
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: For adults around them */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
                For adults around them
              </h3>

              <div className="divide-y divide-dotted divide-gray-300 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <div className="pt-4 first:pt-0">
                  <strong className="font-bold text-slate-900">NSPCC</strong>,{" "}
                  <a
                    href="tel:08088005000"
                    className="hover:text-[#0093D0] font-medium transition-colors"
                  >
                    0808 800 5000
                  </a>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">
                    YoungMinds Parents Helpline
                  </strong>
                  ,{" "}
                  <a
                    href="tel:08088025544"
                    className="hover:text-[#0093D0] font-medium transition-colors"
                  >
                    0808 802 5544
                  </a>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">
                    GHUK training &amp; school sessions
                  </strong>
                  , independent and evidence-based:{" "}
                  <a
                    href="mailto:hello@gamblingharm.com"
                    className="underline font-medium text-slate-900 hover:text-[#0093D0] transition-colors"
                  >
                    hello@gamblingharm.com
                  </a>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">
                    NHS gambling clinics
                  </strong>
                  , accept under-18 referrals; see{" "}
                  <Link
                    to="/get-help/treatment"
                    className="underline font-medium text-slate-900 hover:text-[#0093D0] transition-colors"
                  >
                    Find treatment
                  </Link>
                </div>

                <div className="pt-4">
                  <strong className="font-bold text-slate-900">
                    National Gambling Helpline
                  </strong>
                  ,{" "}
                  <a
                    href="tel:08088020133"
                    className="hover:text-[#0093D0] font-medium transition-colors"
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
