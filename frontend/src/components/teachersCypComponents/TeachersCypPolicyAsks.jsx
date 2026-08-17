import React from "react";

const policyCards = [
  {
    num: 1,
    title:
      "Regulate gamblified products that fall outside the Gambling Act's current scope",
    desc: "Loot boxes, in-game purchases with random rewards, casino-mechanic mobile games and social-casino apps reach children at scale and demonstrably function as gambling. They should be regulated as gambling, with age verification and harm-design constraints.",
  },
  {
    num: 2,
    title: "Restrict marketing in environments where children are present",
    desc: (
      <>
        A statutory ban on gambling sponsorship in sport and broadcast. Stronger
        enforcement of{" "}
        <strong className="font-bold text-slate-900">
          CAP Code Rule 16.3.12
        </strong>
        , which prohibits non-broadcast gambling advertising with strong appeal
        to children. Ban on child-themed slot games (e.g. &ldquo;Jack and the
        Beanstalk&rdquo;, &ldquo;Cinderella Ball&rdquo;).
      </>
    ),
  },
  {
    num: 3,
    title: "Ringfence CYP funding within the statutory levy",
    desc: "Explicit allocation for (a) prevention and education in schools, (b) services for children of people who gamble excessively, and (c) the lived-experience-led CYP-specific support sector. The current allocation does not reflect the scale of CYP harm.",
  },
  {
    num: 4,
    title: "Add gambling to routine safeguarding",
    desc: "Statutory recognition of children of people who gamble excessively as a distinct safeguarding population. Inclusion in the ACEs framework. Integration into local-authority children's services frameworks and the NHS routine safeguarding curriculum.",
  },
];

const TeachersCypPolicyAsks = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          What we ask for in CYP policy
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-normal">
          Four specific changes that would reshape the UK CYP gambling-harm
          response.
        </p>

        {/* 4 Numbered Cards Stack */}
        <div className="space-y-4">
          {policyCards.map((card) => (
            <div
              key={card.num}
              className="bg-white border border-gray-200/90  p-6 sm:p-8 flex items-start gap-4 sm:gap-6 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Number Badge */}
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#156E94] text-white font-bold flex items-center justify-center text-sm shrink-0 mt-0.5 shadow-xs">
                {card.num}
              </div>

              {/* Card Content */}
              <div>
                <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2 leading-snug tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersCypPolicyAsks;
