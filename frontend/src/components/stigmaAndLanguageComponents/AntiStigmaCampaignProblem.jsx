import React from "react";

const AntiStigmaCampaignProblem = () => {
  return (
    <section id="anti-stigma-problem" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
          The "anti-stigma campaign" problem
        </h2>

        {/* Intro Text */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
          Over the last decade, the largest UK-funded anti-stigma campaigns have
          been industry-aligned. The most recent major example was a
          sophisticated, well-produced national campaign whose framing was
          nevertheless built on assumptions we think are wrong.
        </p>

        {/* Industry-Aligned Framing White Card */}
        <div className="border border-gray-200/90  p-6 md:p-8 bg-white mb-8 shadow-xs">
          <h4 className="text-[#1d7092] text-xs font-bold uppercase tracking-wider mb-4">
            INDUSTRY-ALIGNED ANTI-STIGMA FRAMING
          </h4>

          <p className="italic line-through text-lg md:text-xl text-[#1d7092] font-semibold mb-6">
            "Talk about it. Open up. Seeking help is normal. Take action."
          </p>

          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
            <p>
              None of those messages are wrong on their face. The problem is
              what they leave out.{" "}
              <strong className="text-gray-900 font-bold">
                "Anti-stigma" framed only as encouragement to talk locates the
                change at the individual level, the harmed person should feel
                less shame and speak up.
              </strong>{" "}
              It is silent on the system that produces the shame, sells the
              product, designs the marketing, and operates the regulatory
              environment that allows all three. The implicit message is:{" "}
              <span className="italic font-medium text-gray-900">
                stigma is in you; talking is the fix.
              </span>
            </p>

            <p>
              Industry funding for anti-stigma campaigns is also strategically
              convenient. It locates harm-reduction effort downstream (at the
              help-seeking moment), keeps the spotlight off the product, and
              gives the industry a reputational dividend.
            </p>
          </div>
        </div>

        {/* Dark Position Callout Card */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md">
          <h4 className="text-[#17a9df] text-xs font-bold uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              GHUK supports stigma reduction, we believe the social cost of
              disclosure is the most under-addressed problem in UK gambling-harm
              policy.{" "}
              <strong className="text-white font-bold">
                But we are explicit that "anti-stigma" cannot be the only or the
                primary intervention.
              </strong>{" "}
              Stigma reduction without product safety, marketing restriction and
              treatment provision is a half-measure that lets the industry off
              the hook for the conditions that produce the stigma in the first
              place.
            </p>

            <p>
              We also use language deliberately:{" "}
              <span className="italic text-white">
                "people harmed by gambling"
              </span>{" "}
              not <span className="italic text-white">"problem gamblers"</span>.
              We say{" "}
              <span className="italic text-white">
                "harm caused by gambling"
              </span>
              , not{" "}
              <span className="italic text-white">"a gambling problem"</span>.
              We don't use{" "}
              <span className="italic text-white">"responsible gambling"</span>.
              The framing change is part of the stigma work, not separate from
              it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AntiStigmaCampaignProblem;
