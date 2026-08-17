import React from "react";

const CurrentAsksGovernment = () => {
  const cards = [
    {
      title: "Implement the statutory levy at the rate the evidence justifies.",
      description:
        "Specifically: distribute through an arms-length body with explicit ringfencing for affected-others services, bereavement support, aftercare, and independent research.",
    },
    {
      title:
        "A statutory ban on gambling sponsorship in football and broadcast sport.",
      description:
        "Voluntary industry codes are not delivering. Statutory restriction, comparable to the post-2002 tobacco approach, with reasonable transition.",
    },
    {
      title: "Stake limits on online slots aligned with the harm evidence.",
      description:
        "The current proposed limit is, in our view, set higher than the evidence on harm justifies. We support a more conservative limit, with monitoring of substitution effects.",
    },
    {
      title:
        "Bring loot boxes and gambling-like mechanics within the Gambling Commission's scope.",
      description:
        "They are gambling in everything but the legal definition, and reach children at scale. Bringing them within scope is overdue.",
    },
  ];

  return (
    <section
      id="current-asks-of-government"
      className="py-12 md:py-16 bg-white text-gray-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-[3px] bg-[#0092D0]"></div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
              What We Believe
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Our current asks of government
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
            A short list, updated as the policy landscape moves. These are the
            specific things we are pushing for now.
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-200/90  p-6 md:p-8 bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[2px] bg-[#0092D0]"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0092D0]">
                    Live Ask
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-4 tracking-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal mt-auto">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width bottom card */}
        <div className="border border-gray-200/90  p-6 md:p-8 bg-white shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-[#0092D0]"></div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0092D0]">
              Live Ask
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-4 tracking-tight">
            Legislate a statutory duty of care on gambling operators.
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Move operator obligations from a self-policed code of practice to a
            legal duty owed to customers, with a private right of action for
            breach. The load-bearing reform that makes every other rule on this
            page enforceable.{" "}
            <a
              href="#full-position"
              className="text-gray-900 hover:text-[#0092D0] font-bold underline transition-colors inline-flex items-center gap-1"
            >
              See full position &rarr;
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentAsksGovernment;
