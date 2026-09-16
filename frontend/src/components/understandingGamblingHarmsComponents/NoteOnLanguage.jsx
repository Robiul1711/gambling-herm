import React from "react";

const NoteOnLanguage = () => {
  return (
    <section
      id="language"
      className="bg-[#181818] text-gray-300 py-12 md:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white mb-6 tracking-tight leading-tight">
          7. A note on language and measurement
        </h2>

        {/* Intro Narrative */}
        <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed mb-10">
          <p>
            We try to say{" "}
            <span className="italic font-bold text-white">
              "people harmed by gambling"
            </span>{" "}
            rather than{" "}
            <span className="italic font-bold text-white">
              "problem gamblers"
            </span>
            . The shift is small, but it matters. We also try to be explicit
            about how the headline 0.4% figure that has dominated UK debate for
            more than two decades has come about, because the measurement
            question is, in this field, also a political one.
          </p>

          <p>
            <strong className="font-bold text-white">"Problem gambler"</strong>{" "}
            puts the problem inside the person. It implies a defective
            individual interacting with a fine product. It is the framing the
            gambling industry has paid for in research, charity branding and
            political language for decades.
          </p>

          <p>
            <strong className="font-bold text-white">
              "Person harmed by gambling"
            </strong>{" "}
            puts the harm where the public-health evidence locates it: at the
            intersection of a product, a marketing environment, and a person. It
            makes treatment, regulation, and policy possible. It also makes
            shame less likely: the leading barrier to seeking help reported at
            the severe level in the GB treatment and support survey.
          </p>
        </div>

        {/* Subtitle Section */}
        <div className="mb-10 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            The PGSI 8+ measurement question
          </h3>

          {/* Measurement Discussion */}
          <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            <p>
              UK gambling-prevalence figures have for years used a screening
              cut-off (PGSI score of 8 or higher) that captures only the most
              severe end of the harm distribution. This is the source of the
              "0.4% problem gambling" figure long quoted by industry and
              government alike.
            </p>

            <p className="font-semibold text-white">
              There are two problems with this:
            </p>

            <p>
              It produces a number that radically understates the share of the
              population experiencing harm. The most recent Gambling Survey for
              Great Britain, measuring across the full distribution, finds 13.6%
              of adults score PGSI 1+, with 2.4% in the most severe band alone
              (GSGB Year 3, 2025). Compare either number with the 0.4% still
              quoted in public debate.
            </p>
          </div>
        </div>

        {/* Dashed Separator */}
        <div className="border-t border-dashed border-gray-700/80 my-6"></div>

        {/* Post-separator Paragraph */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10">
          It produces a binary framing (you are either a "problem gambler" or
          you are fine) that the actual evidence does not support. Harm is a
          spectrum, and meaningful harm exists well below PGSI 8.
        </p>

        {/* White Position Card */}
        <div className="bg-white border-l-[4px] border-[#1d7092] p-6 md:p-8  shadow-md">
          <h4 className="text-[#1d7092] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            UK gambling-harm prevalence should be measured and reported across
            the full PGSI distribution (not summarised by an 8+ cut-off) and
            should be supplemented by direct measurement of harm among people harmed by someone else’s gambling, which the PGSI does not capture at all. The headline number
            used in policy debate should reflect the full distribution of harm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NoteOnLanguage;
