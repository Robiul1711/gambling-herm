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
      className="py-12 md:py-20 bg-white text-[#2d2d2d] antialiased"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-[2px] bg-sky-500"></div>
            <span className="text-xs font-semibold text-sky-500 tracking-wider">
              What We Believe
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] tracking-tight mb-4">
            Our current asks of government
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            A short list, updated as the policy landscape moves. These are the
            specific things we are pushing for now.
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-gray-400 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-[2px] bg-sky-500"></div>
                  <span className="text-xs font-bold text-sky-500 tracking-wider">
                    Live Ask
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-snug mb-4">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed mt-auto">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width bottom card */}
        <div className="border border-gray-300 rounded-xl p-6 md:p-8 hover:border-gray-400 transition-colors duration-200">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-[2px] bg-sky-500"></div>
            <span className="text-xs font-bold text-sky-500 tracking-wider">
              Live Ask
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-snug mb-4 max-w-4xl">
            Legislate a statutory duty of care on gambling operators.
          </h3>
          <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-6xl">
            Move operator obligations from a self-policed code of practice to a
            legal duty owed to customers, with a private right of action for
            breach. The load-bearing reform that makes every other rule on this
            page enforceable.{" "}
            <a
              href="#full-position"
              className="text-gray-500 hover:text-sky-500 underline decoration-gray-400 hover:decoration-sky-500 transition-colors inline-flex items-center gap-1"
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
