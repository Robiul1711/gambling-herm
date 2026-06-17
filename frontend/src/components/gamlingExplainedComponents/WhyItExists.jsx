import React from "react";

const WhyItExists = () => {
  return (
    <section id="why-it-exists" className="scroll-mt-28">
      {/* Section header */}
      <div className="mb-6">
        <div className="w-10 h-0.5 bg-Primary mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Why this exists in this form
        </h2>
      </div>

      {/* Body text */}
      <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
        <p>
          In 2021 the UK was approaching a Gambling Act Review. The evidence in
          front of policymakers came overwhelmingly from organisations funded,
          directly or indirectly, by the gambling industry. The framing of that
          evidence carried that funding.
        </p>
        <p>
          We wrote <em>Gambling Explained</em> for that moment. The premise was
          simple. There should be at least one reference document, written by
          independent affected-other researchers, that put the same evidence
          into a public-health frame and named the structural picture
          explicitly. The choice of title was deliberate. WHO's{" "}
          <em>Tobacco Explained</em> by Clive Bates and Andy Rowell did, for
          tobacco in the early 2000s, what we believed someone needed to do for
          gambling in the UK in 2021.
        </p>
      </div>

      {/* Callout box */}
      <div className="mt-8 border-l-4 border-Primary bg-sky-50/60 rounded-r-xl p-5 space-y-2">
        <h3 className="text-Primary font-semibold text-sm md:text-base">
          The 2025/26 update
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed italic">
          A revised edition of Gambling Explained is in preparation. The update
          reflects the past five years of evidence: the GambleAware archive,
          the Annual Treatment &amp; Support Survey series, the GHSI Holistic
          Framework of Harm (NatCen, 2025), the UK bank-transaction mortality
          work, and the affected-others studies that have followed our 2021
          framing. The 2025 edition carries the tagline{" "}
          <strong>
            "Beyond individual blame. Toward systemic accountability."
          </strong>
        </p>
      </div>
    </section>
  );
};

export default WhyItExists;
