import React from "react";

const legacyHarms = [
  {
    boldText: "Debt and credit damage",
    normalText: " that can take years to repay and longer to repair.",
  },
  {
    boldText: "Mental health",
    normalText:
      ", anxiety, depression, sleep disturbance and, often, PTSD-pattern symptoms after acute periods of harm.",
  },
  {
    boldText: "Relationship damage",
    normalText:
      ", the work of rebuilding trust with partners, children, parents and friends takes years and is rarely linear.",
  },
  {
    boldText: "Loss of identity, purpose and time",
    normalText: " that gambling had filled, sometimes for a very long time.",
  },
  {
    boldText: "Vulnerability to relapse",
    normalText:
      ", particularly around financial stress, bereavement, or significant life change.",
  },
  {
    boldText: "Bereavement",
    normalText:
      ", for the partners and children of those who did not survive their gambling.",
  },
];

const RecoverySection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 section-padding-y ">
      {/* Top line */}
      <div className="w-8 h-[2px] bg-[#0196D6] mb-4" />

      {/* Heading */}
      <h2 className="text-[26px] xs:text-[30px] md:text-[48px] font-bold text-[#292929] leading-tight">
        Recovery is real, and it usually doesn't end at "stopping"
      </h2>

      {/* Intro */}
      <p className="mt-5 text-[#72768B] text-base md:text-lg leading-relaxed md:leading-8">
        Most people who get the right support do recover. It rarely happens
        overnight, and it rarely looks like a film. It usually looks like: a
        difficult phone call, a block put in place, a friend told, a small step
        taken, repeated, with patience, over months. And then a longer second
        phase that the system does not currently support well.
      </p>

      {/* Legacy harms */}
      <div className="mt-10">
        <h3 className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#292929]">
          Legacy harms don't end when the gambling does
        </h3>

        <p className="mt-6 text-[#444] text-base md:text-lg leading-relaxed md:leading-8">
          "Recovery" in the public conversation tends to mean: stopping
          gambling. That is a major step, but it is rarely where the harm ends.
          The legacy harms that continue often include:
        </p>

        <div className="mt-6 border-t border-dashed border-[#D2D5DC]">
          {legacyHarms.map((item, index) => (
            <div
              key={index}
              className="py-5 border-b border-dashed border-[#D2D5DC]"
            >
              <p className="text-[#72768B] text-base md:text-lg leading-relaxed md:leading-8">
                <strong className="font-bold text-[#292929]">
                  {item.boldText}
                </strong>
                {item.normalText}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Aftercare */}
      <div className="mt-12">
        <h3 className="text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#292929]">
          Aftercare should be the rule, not the exception
        </h3>

        <p className="mt-6 text-[#404249] text-base md:text-lg  md:leading-8">
          UK gambling-harm services are concentrated overwhelmingly at the
          acute-treatment end of the pipeline. The aftercare phase (the months
          and years that follow a person stopping gambling) is where most of the
          recovery actually happens, and where most of the provision currently
          isn't.
        </p>
      </div>

      {/* White Card */}
      <div className="mt-10 border border-[#BFC4CE] overflow-hidden">
        <div className="border-l-4 border-[#0196D6] p-5 sm:p-8 bg-white">
          <p className="text-[#0196D6] text-sm font-medium">
            A Framing We Reject
          </p>

          <h4 className="mt-6 text-lg sm:text-xl md:text-2xl italic font-medium text-[#292929] line-through leading-relaxed">
            "Most people with gambling problems just stop on their own. We don't
            need much treatment infrastructure."
          </h4>

          <p className="mt-8 text-[#404249] text-sm sm:text-base  md:leading-8">
            The"natural recovery" / treatment-fallacy argument. It cites the
            (real) phenomenon of unaided remission to argue that gambling-harm
            treatment is largely unnecessary. The argument relies on overlooking
            three things: most"natural recovery" still involves significant
            unsupported harm during the unaided period; many of the most severe
            harms occur before any spontaneous remission can; and the population
            with the most severe harm is the population least likely to remit
            unaided. Treatment provision is part of a complete response, not all
            of it.
            <span className="underline cursor-pointer ml-1 block sm:inline mt-2 sm:mt-0">
              See our full response →
            </span>
          </p>
        </div>
      </div>

      {/* Dark Card */}
      <div className="mt-6 overflow-hidden">
        <div className="border-l-4 border-[#0196D6] bg-[#252223] p-5 sm:p-8">
          <p className="text-[#00AEEF] text-sm font-medium">Our position</p>

          <p className="mt-6 text-[#D7D7D7] text-base md:text-lg leading-relaxed md:leading-8">
            A serious UK gambling-harm response includes funded aftercare as a
            default, not an extra. The statutory levy should ringfence aftercare
            funding alongside treatment, with explicit provision for affected
            others and bereaved families. Recovery from gambling harm is a phase
            (often a long one) not a moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecoverySection;
