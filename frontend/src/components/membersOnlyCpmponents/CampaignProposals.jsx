import React from "react";

const CampaignProposals = () => {
  const proposals = [
    {
      id: 1,
      tag: "PROPOSAL 1",
      title: "PIN-protected slot machines",
      description: (
        <>
          Every slot machine in a UK Adult Gaming Centre or licensed venue
          should require the user to enter a PIN tied to a verified identity
          before play. No PIN, no play. Self-excluded people are automatically
          refused at the machine, not at the door.
        </>
      ),
      link: "https://membersonlycampaign.org.uk/pin-protected-slots",
    },
    {
      id: 2,
      tag: "PROPOSAL 2",
      title: "National App (V1 & V2)",
      description: (
        <>
          A national identity-verification and self-exclusion app, with three
          access levels: <strong>Level One</strong>, user-facing self-exclusion
          and access management; <strong>Level Two</strong>, enhanced controls
          and enforcement; <strong>Provider Access</strong>, operator-facing
          verification at the point of play.
        </>
      ),
      link: "https://membersonlycampaign.org.uk/national-app-v1%262",
    },
    {
      id: 3,
      tag: "PROPOSAL 3",
      title: "Self-access & self-exclude",
      description: (
        <>
          Restructure UK land-based gambling around active self-access for those
          who choose to gamble, with self-exclusion as the easy, enforceable,
          default-binding state for those who don't. The proof burden moves from
          the customer onto the operator and the system.
        </>
      ),
      link: "https://membersonlycampaign.org.uk/self-access-self-exclude",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-6">
      <div className="">
        {/* Top Centered Section Header */}
        <div className="flex flex-col items-start text-left mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            The campaign's three proposals
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3 max-w-3xl leading-relaxed">
            Concrete, technology-feasible reforms that would close the
            enforcement gap.
          </p>
        </div>

        {/* 3-Column Proposal Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="border border-gray-200  p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Body Details */}
              <div>
                {/* Proposal Sub-tag Top Accenter */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-5 h-[2px] bg-[#166B94]" />
                  <span className="text-[#166B94] font-bold text-xs md:text-sm uppercase tracking-wider">
                    {proposal.tag}
                  </span>
                </div>

                {/* Proposal Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                  {proposal.title}
                </h3>

                {/* Proposal Description Paragraph Content */}
                <div className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  {proposal.description}
                </div>
              </div>

              {/* Action Link Container */}
              <div className="pt-2">
                <a
                  href={proposal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#166B94] hover:text-[#005580] font-medium text-sm underline inline-flex items-center gap-1 transition-colors"
                >
                  Proposal detail &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignProposals;
