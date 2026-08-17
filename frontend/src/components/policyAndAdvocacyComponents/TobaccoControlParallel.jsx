import React from "react";

const TobaccoControlParallel = () => {
  return (
    <section
      id="tobacco-control-parallel"
      className="py-12 md:py-16 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight mb-8 tracking-tight">
          The tobacco-control parallel
        </h2>

        {/* Narrative Content Blocks */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-gray-700 font-normal mb-10">
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
        <div className="bg-[#181818] overflow-hidden shadow-md border-l-[4px] border-[#17a9df] rounded-r-xl">
          <div className="p-6 md:p-8">
            {/* Callout Header Label */}
            <h4 className="text-[#17a9df] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
              OUR POSITION
            </h4>

            {/* Callout Text Copy */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
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
