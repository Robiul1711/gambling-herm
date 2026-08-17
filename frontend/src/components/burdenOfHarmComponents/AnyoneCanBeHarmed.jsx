import React from "react";
import { Link } from "react-router-dom";

const AnyoneCanBeHarmed = () => {
  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          3. Anyone can be harmed by gambling
        </h2>

        {/* Introduction Copy */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mb-10">
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            The framing that gambling harm is "a problem for a small, vulnerable
            group" is one of the most-repeated and most-misleading claims in UK
            public conversation.
          </p>

          <p>
            It is correct that some groups face higher risk: men, young adults,
            people with co-occurring mental-health conditions, people in
            financial stress, people exposed to heavy marketing, people with
            family histories of addiction. (See{" "}
            <Link
              to="/understanding-gambling-harms"
              className="font-medium text-black underline hover:text-[#0093D0] transition-colors"
            >
              Understand harms → who is affected
            </Link>
            .) These risk gradients are real and policy should respond to them.
          </p>

          <p>
            What the framing gets wrong is the implication that the rest of the
            population is safe. The harm follows the product, the marketing
            environment and the regulatory permissiveness, and modern UK
            gambling products are deliberately engineered to capture the
            broadest possible customer base. Anyone exposed to a
            relentlessly-marketed, fast-cycle gambling product can be harmed by
            it.
          </p>
        </div>

        {/* Sub-heading 1: The screening threshold hides most of the harm */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            The screening threshold hides most of the harm
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            UK debate treats the most severe screening band as though it were
            the harmed population. It is not.{" "}
            <strong className="text-gray-900 font-bold">
              Only 42.1% of people who report severe consequences from gambling
              score in that top band
            </strong>
            , which means{" "}
            <strong className="text-gray-900 font-bold">
              57.9% of the people experiencing severe consequences are invisible
              to the headline figure
            </strong>{" "}
            (Gambling Commission, Understanding the adverse consequences of
            gambling, 2025).
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            The burden-of-disease evidence points the same way.{" "}
            <strong className="text-gray-900 font-bold">
              Up to 85% of gambling-related years lived with disability arise
              from people at low and moderate levels of harm, not the most
              severe band
            </strong>{" "}
            (Browne et al., 2017). Commissioning aimed only at the severe end
            reaches about 15% of the total health loss.
          </p>
        </div>

        {/* Sub-heading 2: "Low risk" is a misleading label */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            "Low risk" is a misleading label
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Disability weights place conditions on a common 0 to 1 scale. On the
            most recent synthesis, the band conventionally labelled "low risk"
            already carries a measurable loss of health-related quality of life,
            above mild anxiety disorder and comparable to mild cannabis
            dependence:
          </p>

          {/* Severity Comparison Chart */}
          <div className="space-y-3.5 my-6">
            {/* Mild anxiety disorder */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-gray-800 shrink-0">
                Mild anxiety disorder
              </div>
              <div className="flex-1 bg-gray-200 h-7 overflow-hidden flex items-center">
                <div className="bg-[#64748b] h-full w-[6.7%]" />
              </div>
              <div className="w-12 text-right text-sm font-bold text-gray-900">
                0.03
              </div>
            </div>

            {/* Gambling, low level */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-[#0082AD] shrink-0">
                Gambling, low level
              </div>
              <div className="flex-1 bg-gray-200 h-7 overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[13.3%]" />
              </div>
              <div className="w-12 text-right text-sm font-bold text-[#0082AD]">
                0.06
              </div>
            </div>

            {/* Depression, mild */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-gray-800 shrink-0">
                Depression, mild
              </div>
              <div className="flex-1 bg-gray-200 h-7 overflow-hidden flex items-center">
                <div className="bg-[#64748b] h-full w-[33.3%]" />
              </div>
              <div className="w-12 text-right text-sm font-bold text-gray-900">
                0.15
              </div>
            </div>

            {/* Gambling, moderate level */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-[#0082AD] shrink-0">
                Gambling, moderate level
              </div>
              <div className="flex-1 bg-gray-200 h-7 overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[37.8%]" />
              </div>
              <div className="w-12 text-right text-sm font-bold text-[#0082AD]">
                0.17
              </div>
            </div>

            {/* Depression, moderate */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-gray-800 shrink-0">
                Depression, moderate
              </div>
              <div className="flex-1 bg-gray-200 h-7 overflow-hidden flex items-center">
                <div className="bg-[#64748b] h-full w-[88.9%]" />
              </div>
              <div className="w-12 text-right text-sm font-bold text-gray-900">
                0.40
              </div>
            </div>

            {/* Gambling, severe level */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-[#0082AD] shrink-0">
                Gambling, severe level
              </div>
              <div className="flex-1 bg-gray-200 h-7 overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[100%]" />
              </div>
              <div className="w-12 text-right text-sm font-bold text-[#0082AD]">
                0.45
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed mt-4 mb-8">
            Individual-level severity, not the basis of the QALY figures above.
            These are directly elicited health-state utility decrements by
            screening band, from the 2026 hybrid synthesis (Tulloch et al.,
            Addictive Behaviors 175:108612), shown against recognised comparator
            conditions to give a sense of what living at each band is like for
            one person. Our national QALY figures are built on the more
            conservative population-survey decrements (Moayeri, 2020), which run
            several times lower; the elicited values above sit in our published
            upper-bound sensitivity. Utility decrements and Global Burden of
            Disease disability weights are related but distinct scales. An
            independent harm screen places the severe band at the same 0.45
            value, corroborating the range.
          </p>
        </div>

        {/* Sub-heading 3: Total consumption, not a diagnosed minority */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Total consumption, not a diagnosed minority
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Losses, spend and frequency follow a highly skewed distribution, and
            when average consumption in a population rises, heavy consumption
            rises with it. The top 4% of people who gamble account for around
            half of all losses; for online gambling the top 5% account for
            around 80%. That is an argument for monitoring total population
            consumption as the primary indicator of whether harm is rising, not
            only the diagnosed minority.
          </p>
        </div>

        {/* Industry Framing Callout Box */}
        <div className="border border-gray-200 p-6 md:p-8  bg-white shadow-sm my-8">
          <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase mb-3">
            INDUSTRY FRAMING
          </h4>

          {/* Strikethrough Quote Statement */}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 italic line-through decoration-gray-400 decoration-2">
            "Gambling harm only affects a small minority of vulnerable people."
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            This narrative serves a clear function: it lets the industry
            preserve broad customer access while disclaiming responsibility for
            harm caused at the margins. The public-health evidence does not
            support it. Harm is broadly distributed, although the severity is
            concentrated. Both can be true at once.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnyoneCanBeHarmed;
