import React from "react";

const TobaccoControlParallel = () => {
  return (
    <section
      id="tobacco-control-parallel"
      className="py-10 md:py-16 bg-white text-[#2d2d2d]"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Header */}
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-8 tracking-tight">
          The tobacco-control parallel
        </h2>

        {/* Narrative Content Blocks */}
        <div className="space-y-6 text-[15px] md:text-base leading-7 md:leading-8 text-[#2d2d2d]  mb-12">
          <p>
            The single most successful UK public-health intervention of the last
            fifty years is tobacco control. It worked because it acted at every
            level of the system at once. Gambling-harm policy currently acts at
            almost none of them.
          </p>

          <p>
            The strategic frame for serious UK gambling-harm policy is not
            &ldquo;more treatment&rdquo;. It is the whole-system response that
            worked on tobacco: product regulation, marketing restriction,
            pricing, point-of-sale rules, treatment provision, professional
            norms, public information, and the political legitimacy of the
            industry itself, moved together. Each element supports the others;
            none of them work in isolation.
          </p>

          <p>
            The tobacco parallel has limits (gambling is not directly
            carcinogenic; the harm profile is different), and we are careful not
            to overdraw it. But on the strategic question, how do you reduce
            population harm from a commercially-determined product whose
            industry will not voluntarily reform, the parallel is the closest
            thing we have to a worked example.
          </p>
        </div>

        {/* Dark Callout Section Box */}
        <div className="bg-[#262222] rounded-2xl overflow-hidden shadow-lg border-l-[6px] border-[#17a9df] ">
          <div className="p-8 md:p-10">
            {/* Callout Header Label */}
            <h4 className="text-[#17a9df] text-base font-semibold tracking-normal mb-4">
              Our position
            </h4>

            {/* Callout Text Copy */}
            <p className="text-gray-300 text-[15px] md:text-base leading-relaxed md:leading-8">
              Gambling-harm policy should be designed and evaluated as a
              coordinated, whole-system response, not as a portfolio of
              disconnected interventions. The current UK approach is dominated
              by treatment provision and &ldquo;safer gambling&rdquo;
              campaigning, with product, marketing and pricing largely
              untouched. That mix does not match where the harm sits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TobaccoControlParallel;
