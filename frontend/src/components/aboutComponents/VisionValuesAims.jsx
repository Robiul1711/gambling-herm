import React from "react";
import { Link } from "react-router-dom";

export default function VisionValuesAims() {
  return (
    <section id="vision" className="w-full py-16 text-[#1f2937]">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Top Accent Line */}
          <div className="w-12 h-[3px] bg-[#1B80C4] mb-6" />

          {/* Title */}
          <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight leading-tight mb-6">
            Vision, values & aims
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-10">
            Gambling Harm UK exists to address a gap in how gambling harm is
            understood and responded to in the UK, and to ensure public systems
            can prevent harm, identify risk earlier, and respond safely. Our
            vision is a country where gambling harm is treated as the
            preventable public-health issue it is: recognised earlier, responded
            to safely, and falling year on year, together with the inequality it
            drives.
          </p>

          {/* Subheading: Our values */}
          <h3 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight mb-6">
            Our values
          </h3>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1 */}
            <div className="border border-gray-200/80 p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-start">
              <h4 className="text-lg font-bold text-slate-800 mb-3">
                Public-health led
              </h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                We focus on prevention, early identification and safeguarding,
                strengthening systems so harm is addressed upstream rather than
                after the damage is done.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200/80 p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-start">
              <h4 className="text-lg font-bold text-slate-800 mb-3">
                Grounded in lived experience
              </h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                Our work is informed and led by people directly affected by
                gambling harm, including affected others and bereaved families.
                Lived experience sits at the centre of what we do, not at its
                edges.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200/80 p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-start">
              <h4 className="text-lg font-bold text-slate-800 mb-3">
                Evidence informed
              </h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                We draw on research, evaluation and guidance, publish our own
                modelling, and invite scrutiny of it. Where the evidence is
                uncertain, we say so.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-200/80 p-6 bg-white shadow-sm hover:shadow-md transition-all duration-200 text-left flex flex-col justify-start">
              <h4 className="text-lg font-bold text-slate-800 mb-3">
                Independent
              </h4>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                We are independent of the gambling industry and accept no
                funding from it. Independence protects our credibility and
                allows us to challenge harmful narratives.{" "}
                <Link
                  to="#funding"
                  className="inline-flex items-center text-[#1B80C4] hover:underline font-semibold mt-1"
                >
                  Our funding statement &rarr;
                </Link>
              </p>
            </div>
          </div>

          {/* Subheading: What we work towards */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-6">
            What we work towards
          </h3>

          {/* List of Aims */}
          <div className="border-t border-b border-gray-200/60 divide-y divide-gray-200/60 mb-8 sm:mb-10">
            <div className="py-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                People affected by gambling harm at the centre of change,
              </span>{" "}
              with lived experience shaping research, services, policy and
              public understanding.
            </div>
            <div className="py-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                Affected others, including children, recognised and supported
              </span>{" "}
              as harmed in their own right.
            </div>
            <div className="py-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                Earlier recognition of harm
              </span>{" "}
              across health, education and safeguarding systems.
            </div>
            <div className="py-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                A confident, equipped workforce
              </span>{" "}
              able to ask about gambling, recognise risk, respond appropriately
              and signpost safely.
            </div>
            <div className="py-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                Sustainable prevention infrastructure
              </span>{" "}
              embedded in routine policy, training and professional practice,
              not dependent on one-off projects.
            </div>
            <div className="py-4 text-[15px] sm:text-base text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">
                Long-term reductions in gambling harm
              </span>{" "}
              and in the inequality it drives.
            </div>
          </div>

          {/* Bottom Paragraph with Principles */}
          <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mt-6 sm:mt-8">
            Three working principles guide how we deliver this:{" "}
            <span className="font-bold text-gray-900">
              creating connectivity
            </span>{" "}
            (bringing health, education, safeguarding and community partners
            together so gambling harm becomes core business, not a niche
            issue),{" "}
            <span className="font-bold text-gray-900">
              developing capability
            </span>{" "}
            (training and evidence translation for every professional group
            whose practice should include gambling), and{" "}
            <span className="font-bold text-gray-900">
              maximising capacity
            </span>{" "}
            (building tools and infrastructure that systems can sustain and scale
            themselves). The three strands are set out in detail on our{" "}
            <Link
              to="/professionals/public-health"
              className="text-gray-900 underline hover:text-Primary font-medium"
            >
              public health page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
