import React from "react";

export default function ThreeFramings() {
  const framings = [
    {
      label: "Industry Framing",
      title: '"Responsible Gambling. When The Fun Stops, Stop."',
      description:
        "Places the responsibility for harm on the individual using the product, away from how the product is designed, marketed and regulated. It is the gambling industry's preferred frame. We use the language of public health: harm, exposure, product safety, regulation, prevention.",
      hasLink: false,
    },
    {
      label: "Industry Framing",
      title: "Problem Gambler.",
      description:
        'Puts the problem inside the person and implies a defective individual interacting with a fine product. The narrow PGSI-8+ definition that produced "0.4% of UK adults" radically understates the scale of harm. We say "people affected by gambling".',
      hasLink: false,
    },
    {
      label: "Industry Framing",
      title: '"Regulation Will Just Push People To The Black Market."',
      description:
        "The most heavily-deployed industry argument against every meaningful regulatory proposal in the last decade. Empirically, jurisdictions with stricter gambling rules see only marginal black-market substitution, and the comparison is between regulated harm and unregulated harm not between regulation and no harm.",
      linkText: "See Our Full Response",
      href: "#full-response",
      hasLink: true,
    },
  ];

  return (
    <section className="w-full bg-[#FBFBFB] py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row Block */}
        <div className="flex flex-col space-y-4 mb-8 md:mb-12 text-left">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-[#1A759F]" />
            <span className="text-[#1A759F] text-sm md:text-base font-bold tracking-wide">
              What We Reject
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
           Three framings we challenge.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
           Some language sounds neutral and isn't. The terms below are core to how the gambling industry has shaped public conversation in the UK for thirty years. We oppose them, and we challenge them wherever they appear.
          </p>
        </div>

        {/* Stacked Row Items Container */}
        <div className="space-y-4">
          {framings.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200  p-6 sm:p-8 bg-white flex flex-col space-y-4 shadow-sm hover:border-gray-300 transition-all duration-200"
            >
              {/* Category Subtitle Row */}
              <span className="text-[#1A759F] text-xs sm:text-sm font-bold tracking-wide">
                {item.label}
              </span>

              {/* Crossed-out Rejected Title Typography */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-tight line-through decoration-gray-400 decoration-2 italic">
                {item.title}
              </h3>

              {/* Content Description */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>

              {/* Optional Footer Interactive Link Panel */}
              {item.hasLink && (
                <div className="pt-2">
                  <a
                    href={item.href}
                    className="inline-flex items-center text-sm sm:text-base font-bold text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-all group"
                  >
                    {item.linkText}
                    <span
                      className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
