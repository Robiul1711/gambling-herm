import React from "react";

const points = [
  {
    number: 1,
    title: "It relocates responsibility from product to person.",
    description:
      "The harm becomes a problem of individual self-control. The product is, in this framing, fine.",
  },
  {
    number: 2,
    title: "It pre-empts product regulation.",
    description:
      "If the problem is individual behaviour, the policy response is information, advice and tools, not stake limits, advertising bans, or affordability checks.",
  },
  {
    number: 3,
    title:
      "It funds a parallel infrastructure that competes with public-health voices.",
    description:
      'Industry "safer gambling" funding has, over decades, built treatment and research institutions whose continued existence depends on remaining within the frame. The result has been a debate in which the loudest voices on harm are themselves funded by harm.',
  },
];

const SaferGamblingMyth = () => {
  return (
    <section id="safer-gambling" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4 tracking-tight">
          4. The myth of "safer gambling"
        </h2>

        {/* Intro Subtitles */}
        <div className="space-y-4 text-[#4b5563] text-[15px] md:text-base leading-relaxed mb-8 max-w-4xl">
          <p>
            "When the fun stops, stop." "Take time to think." "Stay in control."
            You've seen these slogans on TV, on shirts, on websites. They share
            two characteristics: they are produced or funded by the gambling
            industry, and they place the responsibility for harm on the
            individual using the product.
          </p>

          <p>
            This framing is convenient. It is also, by international
            public-health consensus, the wrong one.
          </p>
        </div>

        {/* Sub Heading 1 */}
        <div className="mb-8 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#111827] tracking-tight">
            What "safer gambling" does as a political construct
          </h3>

          <p className="text-[#4b5563] text-[14.5px] md:text-base leading-relaxed max-w-4xl">
            The "safer gambling" frame is not a neutral effort to reduce harm.
            It is a coordinated framing developed and sustained by
            industry-funded charities, trade bodies and PR (reproduced in
            regulatory documents, parliamentary speeches and news coverage) that
            performs three jobs simultaneously:
          </p>
        </div>

        {/* 3 Point Cards */}
        <div className="space-y-4 mb-10">
          {points.map((item) => (
            <div
              key={item.number}
              className="border border-gray-200/90 rounded-xl p-6 flex gap-4 md:gap-5 items-start bg-white shadow-xs"
            >
              <div className="w-8 h-8 bg-[#1d7092] text-white flex items-center justify-center font-bold rounded-full shrink-0 mt-0.5 text-sm">
                {item.number}
              </div>

              <div>
                <h4 className="text-base font-bold text-[#111827] mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-[#4b5563] text-sm md:text-[14.5px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sub Heading 2 & Evidence */}
        <div className="mb-8 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-[#111827] tracking-tight">
            What the evidence actually says
          </h3>

          <div className="space-y-4 text-[#4b5563] text-[14.5px] md:text-base leading-relaxed max-w-4xl">
            <p>
              Harm from gambling follows a familiar public-health pattern,
              similar to alcohol and tobacco: a small number of products do most
              of the damage, marketing and accessibility increase harm at the
              population level, and individual willpower-based interventions are
              among the least effective tools available.
            </p>

            <p>
              The interventions with the strongest evidence base are upstream:
              restrictions on the most harmful products, restrictions on
              advertising, affordability checks, specialist treatment provision
              through universal healthcare, and independent research funding.
              None involve telling individuals to "stay in control".
            </p>
          </div>
        </div>

        {/* White Industry Framing Card */}
        <div className="border border-gray-200/90 rounded-xl p-6 md:p-8 bg-white mb-8 shadow-xs max-w-4xl">
          <h4 className="text-[#1d7092] text-xs font-bold uppercase tracking-wider mb-4">
            INDUSTRY FRAMING
          </h4>

          <p className="italic line-through text-lg md:text-xl text-[#1d7092] font-semibold mb-6">
            "When the fun stops, stop. Stay in control. Set deposit limits. Take a break."
          </p>

          <p className="text-[#4b5563] text-[14.5px] md:text-base leading-relaxed">
            The "responsible gambling" repertoire. We do not use this language.
            It locates harm in the individual, not the product, and serves as a
            brake on the upstream interventions that actually reduce population
            harm. We use the language of public health: harm, exposure, product
            safety, regulation, prevention.
          </p>
        </div>

        {/* Dark Position Card */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md max-w-4xl">
          <h4 className="text-[#17a9df] font-bold text-xs uppercase tracking-wider mb-4">
            OUR POSITION
          </h4>

          <p className="text-white font-bold text-sm md:text-[15px] leading-relaxed">
            "Responsible gambling" is a frame the gambling industry uses to
            shift blame from product design to personal choice. We don't use
            it. Our preferred frame is public health:{" "}
            <span className="italic font-bold">safer products</span> (not safer
            behaviour);{" "}
            <span className="italic font-bold">marketing restrictions</span> (not
            awareness campaigns);{" "}
            <span className="italic font-bold">treatment as a right</span> (not as
            a privilege);{" "}
            <span className="italic font-bold">research independence</span> (not
            industry-funded charities).
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaferGamblingMyth;
