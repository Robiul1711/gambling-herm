import React from "react";

const items = [
  {
    title: "Compress decision time.",
    text: "Stakes are placed every two to three seconds in online slots; in-play betting compresses the decision window further. The capacity for reflective choice does not function on this timescale.",
  },
  {
    title: "Trigger compulsive reward responses.",
    text: "Variable-ratio reinforcement (unpredictable, intermittent rewards) is the single most psychologically addictive schedule of reinforcement known to behavioural science. Modern slots are built on it deliberately.",
  },
  {
    title: "Stage near-misses.",
    text: "Outcomes deliberately weighted to land just short of a jackpot trigger near-identical reward responses to actual wins, sustaining engagement past the point where engagement would otherwise dissipate.",
  },
  {
    title: "Disguise losses as wins.",
    text: 'Lighting, sound and on-screen feedback on losing spins where you "win" back less than you staked are documented to feel like winning, even when they aren\'t.',
  },
  {
    title: "Capture cognitive capacity.",
    text: 'Combined with sustained sessions, these mechanisms produce what gambling-studies researchers describe as a "machine zone", an immersive state in which the cognitive faculties needed for rational decision-making are functionally unavailable.',
  },
];

const AddictionByDesign = () => {
  return (
    <section id="addiction-design" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          3. Addiction by design
        </h2>

        {/* Subtitle Paragraph */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
          Modern gambling products (particularly online slots, in-play sports
          betting, casino apps and electronic gaming machines) are not games of
          chance in any traditional sense. They are precision-engineered systems
          for capturing attention and overriding decision-making.
        </p>

        {/* Sub Heading & Paragraphs */}
        <div className="mb-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            The "rational choice" fiction
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            A foundational assumption of permissive gambling regulation is that
            adults make rational choices about their gambling, and bear the
            consequences. This assumption is in direct tension with what the
            products themselves are designed to do.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            High-harm gambling products are engineered to:
          </p>
        </div>

        {/* Dashed Dividers List */}
        <div className="divide-y divide-dashed divide-gray-200 border-t border-b border-dashed border-gray-200 mb-8">
          {items.map((item, index) => (
            <div key={index} className="py-4 md:py-5">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                <strong className="font-bold text-gray-900">
                  {item.title}
                </strong>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Paragraph Below List */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10">
          This is a literal description of what the products do, documented in
          detail by researchers including Natasha Dow Schüll (
          <span className="italic">Addiction by Design</span>), in regulatory case
          files at the UK Gambling Commission, and in operator whistleblower
          disclosures over the past decade.
        </p>

        {/* Dark Position Card */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md">
          <h4 className="text-[#17a9df] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-white font-bold text-sm sm:text-base leading-relaxed">
            Talking about "rational consumer choice" in the context of modern
            engineered gambling products is a category error. The products are
            designed precisely to override the cognitive capacity a rational
            choice would require. Regulation that treats gambling as ordinary
            consumer behaviour is regulating a product that does not exist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddictionByDesign;
