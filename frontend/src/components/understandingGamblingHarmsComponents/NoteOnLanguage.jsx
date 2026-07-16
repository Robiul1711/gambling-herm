import React from"react";

const NoteOnLanguage = () => {
 return (
 <section
 id="language"
 className="bg-[#1a1919] text-[#e0e0e0] py-8 md:py-16"
 >
 <div className="max-w-5xl mx-auto px-4">
 {/* Top Accent Line */}
 <div className="w-12 h-[3px] bg-Primary2 mb-6"></div>

 {/* Main Title */}
 <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight">
 7. A note on language and measurement
 </h2>

 {/* Intro Narrative */}
 <div className="space-y-5 md:space-y-6 text-[#b3b3b3] text-sm md:text-base leading-7 md:leading-8 mb-10 md:mb-12">
 <p>
 We try to say{" "}
 <span className="text-white">"people affected by gambling"</span>{" "}
 rather than <span className="text-white">"problem gamblers"</span>.
 The shift is small, but it matters. We also try to be explicit about
 how the headline 0.4% figure that has dominated UK debate for thirty
 years has come about, because the measurement question is, in this
 field, also a political one.
 </p>

 <p>
 <span className="text-white">"Problem gambler"</span> puts the
 problem inside the person. It implies a defective individual
 interacting with a fine product. It is the framing the gambling
 industry has paid for in research, charity branding and political
 language for decades.
 </p>

 <p>
 <span className="text-white">"Person affected by gambling"</span>{" "}
 puts the harm where the public-health evidence locates it: at the
 intersection of a product, a marketing environment, and a person. It
 makes treatment, regulation, and policy possible. It also makes
 shame less likely, which is the single biggest barrier to people
 seeking help.
 </p>
 </div>

 {/* Subtitle Section */}
 <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6 tracking-tight">
 The PGSI 8+ measurement question
 </h3>

 {/* Measurement Discussion */}
 <div className="space-y-5 md:space-y-6 text-[#b3b3b3] text-sm md:text-base leading-7 md:leading-8 l mb-8">
 <p>
 UK gambling-prevalence figures have for years used a screening
 cut-off (PGSI score of 8 or higher) that captures only the most
 severe end of the harm distribution. This is the source of the"0.4%
 problem gambling" figure long quoted by industry and government
 alike.
 </p>

 <p>There are two problems with this.</p>

 <p>
 It produces a number that radically understates the share of the
 population experiencing harm. The more recent Gambling Survey for
 Great Britain, measuring across the full distribution, finds 14.6%
 of adults score PGSI 1+, with 2.7% in the most severe band alone
 (GSGB 2024). Compare either number with the 0.4% still quoted in
 public debate.
 </p>
 </div>

 {/* Dashed Separator */}
 <div className="border-t border-dashed border-gray-700/60 my-6 md:my-8"></div>

 {/* Post-separator Paragraph */}
 <p className="text-[#b3b3b3] text-sm md:text-base leading-7 md:leading-8 mb-10 md:mb-12">
 It produces a binary framing (you are either a"problem gambler" or
 you are fine) that the actual evidence does not support. Harm is a
 spectrum, and meaningful harm exists well below PGSI 8.
 </p>

 {/* White Position Card */}
 <div className="bg-white shadow-xl border-l-[6px] border-Primary2 overflow-hidden">
 <div className="p-6 md:p-10">
 <h4 className="text-Primary2 text-sm font-semibold uppercase tracking-wider mb-4">
 Our position
 </h4>

 <p className="text-[#4e4e4e] text-sm md:text-[15px] leading-7">
 UK gambling-harm prevalence should be measured and reported across
 the full PGSI distribution (not summarised by an 8+ cut-off) and
 should be supplemented by direct measurement of affected-others
 harm, which the PGSI does not capture at all. The headline number
 used in policy debate should reflect the full distribution of
 harm.
 </p>
 </div>
 </div>
 </div>
 </section>
 );
};

export default NoteOnLanguage;
