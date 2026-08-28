import React from "react";

const PublicRecordEvidence = () => {
  // Array matrix keeping evidence sources highly organized and easily maintainable
  const evidenceCards = [
    {
      source: "Investigation · BBC File on 4",
      date: "17 June 2025",
      title: "Adult Gaming Centres, Investigation",
      description:
        "The BBC's investigation into UK Adult Gaming Centres: testimonies from people harmed, documented self-exclusion enforcement failures, and the case for safer systems.",
    },
    {
      source: "Investigation · The Guardian",
      date: "26 September 2025",
      title: "Addicts Tell Of Huge Losses From Slot Gambling",
      description:
        "UK gamblers describing the powerful pull of slot machines, the failures of self-exclusion, and calls for better enforcement.",
    },
    {
      source: "News · Hello Rayo",
      date: "2025",
      title: "Newcastle Man Calls For Changes To High Street Gambling",
      description:
        "Local coverage of Sam Badcock's advocacy for land-based gambling reform and protections for people harmed.",
    },
    {
      source: "Lived-experience account · Chronicle Live",
      date: "2025",
      title: '"I Lost £100k Gambling"',
      description:
        "A first-person account of how gambling harm led to severe financial loss, the harm pattern the Members Only proposals would interrupt.",
    },
    {
      source: "Essay · Sam Badcock on Medium",
      date: "2025",
      title: "Our Rights To Gamble And Self-Exclude Are Being Eroded",
      description:
        '"Enforcement failures were treated as my responsibility. Proof was my burden. Data was my burden. Justice was functionally unreachable."',
    },
    {
      source: "Essay · Sam Badcock on Medium",
      date: "2025",
      title: "ID Required To Use A Slot Machine",
      description:
        "The detailed case for ID-at-the-machine as the access-control mechanism that closes the enforcement gap.",
    },
    {
      source: "History · Sam Badcock on Medium",
      date: "2025",
      title: "The Big Four Bookmakers And The Senet Group (2014)",
      description:
        "A brief history of UK land-based self-exclusion, what was promised, what was delivered, what's still broken.",
    },
    {
      source: "Essay · Sam Badcock on Medium",
      date: "2025",
      title: "Closing The Gambling Ads Loophole",
      description:
        "Why self-exclusion has to extend beyond machines to advertising, free bets and sponsorships, the marketing pipeline that pulls self-excluded customers back in.",
    },
  ];

  return (
    <section className="text-gray-800">
      <div className="">
        {/* Section Header */}
        <div className="text-center sm:mb-12 mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            The evidence in the public record
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Selected reporting and primary sources behind the campaign.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {evidenceCards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta Source & Date Headers */}
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-[#0076A8] text-sm md:text-[15px] font-semibold tracking-wide group-hover:underline">
                    {card.source}
                  </span>
                  <span className="text-gray-600 text-xs md:text-sm">{card.date}</span>
                </div>

                {/* Evidence Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Card Summary Context Text */}
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicRecordEvidence;
