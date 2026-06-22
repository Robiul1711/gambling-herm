import React from "react";

const GamblingRelatedSuicide = () => {
  return (
    <section className="py-12 bg-[#1A1A1A] text-gray-300 px-4 md:px-8 rounded-2xl">
      <div className="max-w-5xl mx-auto">
        {/* Top Accent Blue Line */}
        <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />

        {/* Main Header Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          6. Gambling-related suicide
        </h2>

        {/* Informational Paragraph Body Text Blocks */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-300 mb-10">
          <p className="font-semibold text-white">
            Gambling carries one of the highest suicide rates of any addiction.
            A Swedish national-cohort study found people aged 20–49 with
            gambling disorder were 19.3 times more likely to die by suicide than
            the general population of the same age. UK estimates (PHE 2021)
            point to up to 496 gambling-associated suicides per year in England
            alone, widely understood to be a substantial undercount, given that
            gambling is almost never recorded as a contributing factor in
            coroners' reports.
          </p>
          <p className="text-gray-400">
            The risk does not peak at the height of someone's gambling. It peaks
            in the days and weeks after a heavy loss, when shame, hopelessness,
            financial despair and isolation compound. This is, not
            coincidentally, also the period during which gambling operators'
            "win-back" marketing (personalised free-bet offers, account-manager
            outreach, retargeting) intensifies.
          </p>
          <p className="text-gray-400">
            The relationship between marketing-at-distress and gambling-related
            suicide is one of the most urgent unresolved research questions in
            this field. Regulatory intervention should not wait for full
            resolution.
          </p>
        </div>

        {/* Light Blue Position and Help Callout Box Layout */}
        <div className="border-l-4 border-[#00B5FF] bg-[#ffff] text-gray-800 p-6 md:p-8 rounded-r-2xl max-w-7xl shadow-md">
          <h4 className="text-[#0076A8] font-bold text-sm tracking-wide uppercase mb-3">
            Our position
          </h4>

          <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700">
            <p>
              All UK gambling operators should be required to suspend automated
              and personalised marketing to customers showing signals of
              distress, including following heavy losses. Failure to do so
              should be classified as a serious regulatory breach with
              corresponding sanctions.
            </p>

            <p className="pt-2 text-xs md:text-sm text-gray-600 border-t border-blue-100">
              For specialist bereavement support, please visit{" "}
              <a
                href="https://www.gamblingwithlives.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0076A8] underline hover:text-[#166B94] font-medium transition-colors duration-150"
              >
                Gambling with Lives
              </a>
              , the UK charity founded by families bereaved this way, for
              families bereaved this way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingRelatedSuicide;
