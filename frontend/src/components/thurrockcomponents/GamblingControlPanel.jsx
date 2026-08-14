import React from "react";

export default function GamblingControlPanel() {
  const blockingSoftware = [
    {
      title: "Betblocker",
      description:
        "Block gambling apps and websites across all your devices. Free, and set up with a special Thurrock link that helps us track reach locally.",
      buttonText: "Set up Betblocker",
      buttonColor: "bg-Primary hover:bg-Primary/80", // Emerald/Green tone based on your brand or a default deep teal/blue
    },
    {
      title: "Bank gambling blocks",
      description:
        "Most major UK banks (Monzo, Starling, Barclays, Lloyds, HSBC, NatWest) now offer a one-tap gambling block on your debit card. It's free, takes a minute, and usually includes a 48-hour cooling-off period if you try to remove it.",
      buttonText: "How to set up a bank block",
      buttonColor: "bg-[#111827] hover:bg-[#1f2937]", // Dark slate/black
    },
  ];

  const selfExclusion = [
    {
      title: "GAMSTOP (online gambling)",
      description:
        "Excludes you from all UK-licensed online gambling sites and apps. Choose 6 months, 1 year, or 5 years. About five minutes to register.",
      buttonText: "Register with GAMSTOP",
    },
    {
      title: "GAMSTOP betting shops",
      description:
        "The Multi Operator Self Exclusion Scheme (formerly MOSES). Helps you commit to staying away from betting shops across participating operators.",
      buttonText: "Exclude from betting shops",
    },
    {
      title: "SENSE (casinos)",
      description:
        "The national self-exclusion scheme for casinos in Great Britain. One registration covers participating casino venues.",
      buttonText: "Register with SENSE",
    },
    {
      title: "BACTA (adult gaming centres)",
      description:
        "Bacta's Self-Exclusion Scheme lets you exclude yourself from Adult Gaming Centres for an agreed period.",
      buttonText: "Exclude via BACTA",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4  text-[#1f2937]">
      {/* Top Header */}
      <header className="mb-10">
        <div className="w-12 h-1 bg-[#0284c7] mb-4"></div>{" "}
        {/* Blue top accent bar */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Take control of your gambling
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          Blocking tools and self-exclusion give you a practical layer of
          protection. Most take only a few minutes to set up, and many people
          use more than one at the same time.
        </p>
      </header>

      {/* Section 1: Blocking Software */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Blocking software
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blockingSoftware.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 shadow-sm flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6">
                <button
                  className={`inline-flex items-center gap-2 text-white font-medium text-sm py-3 px-5 transition-colors ${item.buttonColor}`}
                >
                  {item.buttonText}
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Self-Exclusion */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Self-exclusion
        </h2>
        <p className="text-gray-600 mb-6 text-[15px]">
          These national schemes let you exclude yourself from gambling
          operators. One registration covers all participating sites or venues
          in that category.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {selfExclusion.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 shadow-sm flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
              <div className="mt-6">
                <button className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-medium text-sm py-3 px-5 transition-colors">
                  {item.buttonText}
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
