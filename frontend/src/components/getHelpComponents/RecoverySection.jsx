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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Top line */}
      <div className="w-12 h-[3px] bg-[#0092D0] mb-5" />

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
        Recovery is real, and it usually doesn't end at "stopping"
      </h2>

      {/* Intro */}
      <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-10">
        Most people who get the right support do recover. It rarely happens
        overnight, and it rarely looks like a film. It usually looks like: a
        difficult phone call, a block put in place, a friend told, a small step
        taken, repeated, with patience, over months. And then a longer second
        phase that the system does not currently support well.
      </p>

      {/* Legacy harms */}
      <div className="mb-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Legacy harms don't end when the gambling does
        </h3>

        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-6">
          "Recovery" in the public conversation tends to mean: stopping
          gambling. That is a major step, but it is rarely where the harm ends.
          The legacy harms that continue often include:
        </p>

        <div className="border-t border-b border-dashed border-gray-200 divide-y divide-dashed divide-gray-200">
          {legacyHarms.map((item, index) => (
            <div
              key={index}
              className="py-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal"
            >
              <strong className="font-bold text-gray-900 mr-1.5">
                {item.boldText}
              </strong>
              <span>{item.normalText}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aftercare */}
      <div className="mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Aftercare should be the rule, not the exception
        </h3>

        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
          UK gambling-harm services are concentrated overwhelmingly at the
          acute-treatment end of the pipeline. The aftercare phase (the months
          and years that follow a person stopping gambling) is where most of the
          recovery actually happens, and where most of the provision currently
          isn't.
        </p>
      </div>

      {/* White Card */}
      <div className=" border border-gray-200/90 overflow-hidden shadow-xs mb-8">
        <div className="border-l-4 border-[#0196D6] p-6 sm:p-8 bg-white">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0196D6]">
            A FRAMING WE REJECT
          </p>

          <h4 className="text-lg sm:text-xl md:text-2xl italic font-semibold text-gray-900 line-through leading-relaxed my-4">
            "Most people with gambling problems just stop on their own. We don't
            need much treatment infrastructure."
          </h4>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            The "natural recovery" / treatment-fallacy argument. It cites the
            (real) phenomenon of unaided remission to argue that gambling-harm
            treatment is largely unnecessary. The argument relies on overlooking
            three things: most "natural recovery" still involves significant
            unsupported harm during the unaided period; many of the most severe
            harms occur before any spontaneous remission can; and the population
            with the most severe harm is the population least likely to remit
            unaided. Treatment provision is part of a complete response, not all
            of it.{" "}
            <span className="underline font-semibold cursor-pointer text-gray-900 hover:text-[#0196D6] inline-block mt-2 sm:mt-0">
              See our full response →
            </span>
          </p>
        </div>
      </div>

      {/* Dark Card */}
      <div className=" overflow-hidden shadow-md">
        <div className="border-l-4 border-[#0196D6] bg-[#181818] p-6 sm:p-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00AEEF] mb-4">
            OUR POSITION
          </p>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
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
