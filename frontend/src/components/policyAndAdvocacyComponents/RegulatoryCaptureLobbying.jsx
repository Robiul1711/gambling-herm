import React from "react";

const RegulatoryCaptureLobbying = () => {
  return (
    <section
      id="regulatory-capture-and-lobbying"
      className="pb-10 md:pb-16 bg-white text-[#2d2d2d]"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Header */}
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-8 tracking-tight">
          Regulatory capture and lobbying
        </h2>

        {/* Narrative Copy Blocks */}
        <div className="space-y-6 text-[15px] md:text-base leading-7 md:leading-8 text-[#2d2d2d] mb-12">
          <p>
            The single largest factor explaining why UK gambling regulation has
            lagged behind the evidence is not analytic confusion. It is the
            political economy of the sector.
          </p>

          <p>
            Gambling is a politically well-connected industry. It funds
            substantial cross-party lobbying. It funds (directly or through
            affiliated charities) much of the UK research and treatment
            infrastructure on which government depends for evidence. There is a
            steady traffic of senior personnel between operators, trade bodies,
            regulators, broadcasters and ministerial offices. The Gambling
            Commission's own capacity has been repeatedly outweighed by the
            regulatory resources of those it regulates.
          </p>

          <p>
            This pattern is the textbook profile of regulatory capture. We name
            it because not naming it would be misleading.
          </p>
        </div>

        {/* Dark Callout Section Card */}
        <div className="bg-[#262222] overflow-hidden shadow-lg border-l-[6px] border-[#17a9df]">
          <div className="p-8 md:p-10">
            {/* Callout Header Label */}
            <h4 className="text-[#17a9df] text-base font-semibold tracking-normal mb-4">
              Our position
            </h4>

            {/* Callout Text Copy */}
            <p className="text-gray-300 text-[15px] md:text-base leading-relaxed md:leading-8">
              We support a structural separation between the gambling industry
              and the machinery of regulation and policy-making. This requires:
              a statutory cooling-off period for senior regulatory staff moving
              to the industry; an ending of industry hospitality for MPs and
              regulators; independent data collection that does not rely on
              operator dashboards; and the complete removal of economic growth
              or industry health from the Gambling Commission's statutory
              objectives. The regulator's sole client should be the public
              health.
            </p>
          </div>
        </div>
        <div className="bg-[#262222] overflow-hidden shadow-lg border-l-[6px] border-[#17a9df] mt-10">
          <div className="p-8 md:p-10">
            {/* Callout Header Label */}
            <h4 className="text-[#17a9df] text-base font-semibold tracking-normal mb-4">
              Burden of harm → operator liability
            </h4>

            {/* Callout Text Copy */}
            <p className="text-gray-300 text-[15px] md:text-base leading-relaxed md:leading-8">
              The regulatory-capture problem is also why a statutory duty of
              care matters so much. Codes of practice negotiate the operator's
              behaviour with the operator. A statutory duty of care converts the
              population-level burden of harm (which GHUK's whole evidence base
              is concerned with) into operator-level legal exposure that the
              operator cannot lobby away. It is the single mechanism that closes
              the loop between the public-health case and enforceable
              consequences. Advocacy credit: Martin Jones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryCaptureLobbying;
