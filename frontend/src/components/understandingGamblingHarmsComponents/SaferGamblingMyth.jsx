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
      "Industry 'safer gambling' funding has, over decades, built treatment and research institutions whose continued existence depends on remaining within the frame.",
  },
];

const SaferGamblingMyth = () => {
  return (
    <section id="safer-gambling" className="">
      <div className="max-w-5xl mx-auto px-4">

        {/* Top line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-6">
          4. The myth of "safer gambling"
        </h2>

        {/* Intro */}
        <div className="space-y-4 text-[#4e4e4e] leading-8 max-w-4xl">
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

        {/* Subtitle */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#2d2d2d] mb-5">
            What "safer gambling" does as a political construct
          </h3>

          <p className="text-[#7b7b7b] leading-8 max-w-4xl mb-10">
            The "safer gambling" frame is not a neutral effort to reduce harm.
            It is a coordinated framing developed and sustained by
            industry-funded charities, trade bodies and PR that performs three
            jobs simultaneously:
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {points.map((item) => (
            <div
              key={item.number}
              className="border border-gray-300 rounded-3xl p-4 md:p-6 flex gap-5"
            >
              <div className="w-10 h-10 rounded-full bg-[#0e7fad] text-white flex items-center justify-center font-semibold shrink-0 mt-1">
                {item.number}
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#333] mb-4">
                  {item.title}
                </h4>

                <p className="text-[#7b7b7b] leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-[#2d2d2d] mb-5">
            What the evidence actually says
          </h3>

          <div className="space-y-8 text-[#7b7b7b] leading-8 max-w-4xl">
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

        {/* Industry Framing Card */}
        <div className="mt-12 border border-gray-300 rounded-2xl p-6 md:p-8">
          <h4 className="text-[#0e8dc0] font-semibold mb-6">
            Industry Framing
          </h4>

          <p className="italic line-through text-xl text-[#333] mb-8">
            "When the fun stops, stop. Stay in control. Set deposit limits.
            Take a break."
          </p>

          <p className="text-[#7b7b7b] leading-8">
            The "responsible gambling" repertoire. We do not use this language.
            It locates harm in the individual, not the product, and serves as a
            brake on upstream interventions that actually reduce population
            harm. We use the language of public health: harm, exposure, product
            safety, regulation and prevention.
          </p>
        </div>

        {/* Our Position Card */}
        <div className="mt-10 bg-[#262222] rounded-xl overflow-hidden">
          <div className="border-l-4 border-[#17a9df] px-8 py-8 md:px-10 md:py-10">

            <h4 className="text-[#17a9df] font-medium mb-6">
              Our position
            </h4>

            <p className="text-gray-300 leading-8">
              "Responsible gambling" is a frame the gambling industry uses to
              shift blame from product design to personal choice. We don't use
              it. Our preferred frame is public health: safer products (not
              safer behaviour); marketing restrictions (not awareness
              campaigns); treatment as a right (not as a privilege); research
              independence (not industry-funded charities).
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SaferGamblingMyth;