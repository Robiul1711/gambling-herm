import React from "react";

const AnyoneCanBeHarmed = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          3. Anyone can be harmed by gambling
        </h2>

        {/* Introduction Copy */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600 mb-10">
          <p className="font-medium text-gray-900">
            The framing that gambling harm is"a problem for a small, vulnerable
            group" is one of the most-repeated and most-misleading claims in UK
            public conversation.
          </p>
          <p className="text-gray-400">
            It is correct that some groups face higher risk: men, young adults,
            people with co-occurring mental-health conditions, people in
            financial stress, people exposed to heavy marketing, people with
            family histories of addiction. (See Understand harms &rarr; who is
            affected.) These risk gradients are real and policy should respond
            to them.
          </p>
          <p>
            What the framing gets wrong is the implication that the rest of the
            population is safe. The harm follows the product, the marketing
            environment and the regulatory permissiveness, and modern UK
            gambling products are deliberately engineered to capture the
            broadest possible customer base. Anyone exposed to a
            relentlessly-marketed, fast-cycle gambling product can be harmed by
            it. The evidence on this is unambiguous.
          </p>
        </div>

        {/* Industry Framing Card Box */}
        <div className="border border-gray-200 p-6 md:p-8 shadow-sm bg-white">
          <h4 className="text-[#00A3E0] font-semibold text-sm tracking-wide uppercase mb-4">
            Industry Framing
          </h4>

          {/* Strikethrough Statement */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-tight italic line-through decoration-gray-500 decoration-2">
            "Gambling Harm Only Affects A Small Minority Of Vulnerable People."
          </h3>

          <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
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
