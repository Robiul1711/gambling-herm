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
    text: 'Lighting, sound and on-screen feedback on losing spins where you "win" back less than you staked are documented to feel like winning, even when they are not.',
  },
  {
    title: "Capture cognitive capacity.",
    text: 'Combined with sustained sessions, these mechanisms produce what gambling-studies researchers describe as a "machine zone", an immersive state in which the cognitive faculties needed for rational decision-making are functionally unavailable.',
  },
];

const AddictionByDesign = () => {
  return (
    <section id="addiction-design" className="pt-8 md:pt-16">
      <div className="max-w-5xl mx-auto px-4">

        {/* Top line */}
        <div className="w-12 h-[3px] bg-Primary2 mb-6"></div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2B2B2B] mb-8">
          3. Addiction by design
        </h2>

        {/* Intro */}
        <p className="text-[#4b4b4b] leading-8 max-w-4xl mb-10">
          Modern gambling products (particularly online slots, in-play sports
          betting, casino apps and electronic gaming machines) are not games of
          chance in any traditional sense. They are precision-engineered systems
          for capturing attention and overriding decision-making.
        </p>

        {/* Subtitle */}
        <h3 className="text-2xl font-semibold text-[#2B2B2B] mb-5">
          The "rational choice" fiction
        </h3>

        <p className="text-[#7a7a7a] leading-8 max-w-4xl mb-8">
          A foundational assumption of permissive gambling regulation is that
          adults make rational choices about their gambling, and bear the
          consequences. This assumption is in direct tension with what the
          products themselves are designed to do.
        </p>

        <p className="text-[#7a7a7a] mb-5 md:mb-10">
          High-harm gambling products are engineered to:
        </p>

        {/* Points */}
        <div className="border-t border-gray-200">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-4 md:py-7 border-b border-gray-200"
            >
              <p className="text-[#5b5b5b] leading-8">
                <span className="font-semibold text-[#333]">
                  {item.title}
                </span>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Paragraph */}
        <div className="mt-5 md:mt-10">
          <p className="text-[#7a7a7a] leading-8 max-w-4xl">
            This is not a metaphor. It is a description of what the products
            do, documented in detail by researchers including Natasha Dow
            Schüll (Addiction by Design), in regulatory case files at the UK
            Gambling Commission, and in operator whistleblower disclosures over
            the past decade.
          </p>
        </div>

        {/* Position Card */}
        <div className="mt-6 md:mt-14 bg-[#232020] rounded-xl overflow-hidden">
          <div className="border-l-4 border-Primary2 px-4 md:px-10 py-4 md:py-10">

            <h4 className="text-Primary2 font-medium">
              Our position
            </h4>

            <p className="text-[#d4d4d4] leading-6 text-sm md:text-base">
              Talking about "rational consumer choice" in the context of modern
              engineered gambling products is a category error. The products are
              designed precisely to override the cognitive capacity a rational
              choice would require. Regulation that treats gambling as ordinary
              consumer behaviour is regulating a product that does not exist.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AddictionByDesign;