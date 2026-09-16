import React from "react";

const WhyItExists = () => {
  return (
    <section id="why-it-exists" className="scroll-mt-28 my-12">
      {/* Accent Bar & Header */}
      <div className="mb-6">
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Why this exists in this form
        </h2>
      </div>

      {/* Body text */}
      <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          In 2021 the UK was approaching a Gambling Act Review. The evidence in
          front of policymakers came overwhelmingly from organisations funded,
          directly or indirectly, by the gambling industry. The framing of that
          evidence carried that funding.
        </p>
        <p>
          We wrote <em className="italic">Gambling Explained</em> for that moment.
          The premise was simple: there should be at least one reference document,
          written independently by researchers harmed by someone else’s gambling,
          that put the evidence into a public-health frame and named the structural
          picture explicitly.
        </p>
      </div>

      {/* Callout box: The 2025/26 update */}
      <div className="mt-8 border-l-4 border-[#0093D0] bg-[#eef7fc] p-6 space-y-2 rounded-r-sm">
        <h3 className="font-bold text-gray-900 text-base md:text-lg">
          The 2025/26 update
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          A revised edition of <em className="italic">Gambling Explained</em> is in
          preparation. The update reflects the past five years of evidence: the
          GambleAware archive, the Annual Treatment &amp; Support Survey series,
          the NatCen Holistic Framework of Harm (2025), the UK bank-transaction
          mortality work, and the harm-to-others research that has followed our
          2021 framing. The 2025 edition carries the tagline{" "}
          <strong className="font-semibold italic text-gray-900">
            "Beyond individual blame. Toward systemic accountability."
          </strong>
        </p>
      </div>
    </section>
  );
};

export default WhyItExists;
