import React from "react";
import phone from "@/assets/images/phone.png";
const changesList = [
  {
    number: 1,
    title: "A Statutory Levy Proportionate To The Burden Of Harm",
    description:
      "The current £100m UK statutory levy is, on conservative GHUK QALY modelling, between 40 and 60 times smaller than the annual health-economic burden of gambling harm. The levy should be scaled to harm using QALY/DALY valuations, not set by political negotiation with the industry. Distribution should be governed independently of industry influence, with funding ringfenced for prevention, treatment, aftercare, affected-others services and independent research.",
  },
  {
    number: 2,
    title: "A Statutory Duty Of Care On Gambling Operators",
    description:
      'Translate operator obligations from"comply with the social-responsibility code", a self-policed compliance regime that the last fifteen years of UK regulation have shown to be largely ineffective, into a legal duty owed to customers, breach of which creates civil liability. The current Licence Conditions and Codes of Practice (LCCP) framework gives the Gambling Commission an enforcement role, but does not create a private right of action for customers harmed by operator failures. A statutory duty of care closes that gap: it makes the population-level burden of harm into operator-level legal exposure, aligns incentives with prevention, and gives affected customers and their families a route to redress through the civil courts.',
  },
  {
    number: 3,
    title:
      "Research, education and treatment (RET) independent of industry funding",
    description:
      "Independence of evidence and treatment provision from the industry being studied and treated against. This means: levy funds distributed by an arms-length body, transparent allocation, no commissioning by industry-aligned charities, and the eventual phasing-out of historical industry funding routes through which much of UK gambling research has flowed.",
  },
  {
    number: 4,
    title: "A full statutory ban on gambling advertising",
    description: (
      <>
        Apply the post-2002 tobacco-advertising model. A statutory ban on shirt
        and stadium-side sponsorship in football and other broadcast sport;
        removal of gambling adverts from broadcast and pre-watershed media;
        tighter rules on social-media and influencer content. Strengthen
        enforcement of{" "}
        <strong className="text-[#2d2d2d] font-semibold">
          CAP Code Rule 16.3.12
        </strong>
        , which prohibits non-broadcast gambling advertising with strong appeal
        to children, including by prohibiting child-themed slot games such as
        "Jack and the Beanstalk" and"Cinderella Ball". Personalised marketing to
        customers showing distress signals should be classified as a serious
        regulatory breach.
      </>
    ),
  },
  {
    number: 5,
    title: "Product safety standards set by public-health regulators",
    description:
      "Stake limits, speed-of-play limits, mandatory breaks, volatility disclosures, prohibition of demonstrably high-harm features (near-misses, losses disguised as wins, rapid in-play betting markets). Limits set at levels supported by the harm evidence, not by industry preference. Mandatory algorithmic risk-flagging by operators, with regulator-defined intervention thresholds and redress mechanisms for affected customers.",
  },
  {
    number: 6,
    title: "Meaningful affordability checks at the point of significant loss",
    description:
      "Triggered at evidence-based thresholds, designed not to place additional burden on the great majority of customers who are not at risk, and operated by the regulator rather than by operators marking their own homework.",
  },
  {
    number: 7,
    title: "NHS-led specialist treatment as the default",
    description:
      "Specialist treatment delivered by the NHS, not by industry-funded charities. Expansion of the NHS gambling-clinic network, with explicit aftercare and affected-others funding. Treatment as a right, not a privilege of geography or referral.",
  },
  {
    number: 8,
    title: "Funded aftercare and legacy-harms provision",
    description:
      "Recovery from gambling harm is a phase, not a moment. UK provision is concentrated at acute treatment and almost absent at aftercare. The statutory levy should ringfence aftercare alongside treatment, with explicit provision for affected others and bereaved families.",
  },
  {
    number: 9,
    title: "Statutory recognition of affected others, including children",
    description:
      "Affected others (partners, parents, children, siblings) as a distinct population with rights to support, not as adjuncts to the person who gambles. Specific statutory recognition and funded services for children of people experiencing gambling harm.",
  },
  {
    number: 10,
    title:
      "Regulation of gamblified products outside the current Gambling Act scope",
    description:
      "Loot boxes, in-game gambling mechanics, casino-mechanic mobile games and social-casino apps should be brought within the Gambling Commission's scope. They are gambling in everything but the legal definition, and they reach children at scale.",
  },
  {
    number: 11,
    title: "Full-distribution measurement of gambling harm",
    description: (
      <>
        Headline UK gambling-harm prevalence should be measured across the full
        PGSI distribution (not summarised by an 8+ cut-off) and should be
        supplemented by direct measurement of affected-others harm. The headline
        figure used in policy debate should reflect the full distribution.
        <br />
        <br />
        Alongside survey measurement: routine ICD/SNOMED coding of gambling harm
        across NHS contacts, and regular national burden estimation using
        established metrics (YLD, QALY, DALY). Gambling-related deaths and
        morbidity currently go systematically unrecorded, in health records and
        in coroners' accounts, and the UK cannot manage what it does not
        measure. This is where GHUK's work began.
      </>
    ),
  },
  {
    number: 12,
    title:
      "Regulatory consolidation under the Department of Health and Social Care",
    description:
      'Gambling regulation currently sits within DCMS, structurally disconnected from health. We support the consolidation of regulatory leadership under DHSC, with population-health primacy, proper public-health analytical capacity, and policy alignment with tobacco, alcohol and other commercial determinants of health. A public-health framing across government communication follows from this;"responsible gambling" language should be retired from regulator, government and industry communications.',
  },
  {
    number: 13,
    title: "Lived-experience leadership in service design and policy",
    description:
      "People with lived experience of gambling harm (including affected others and those bereaved) should sit at the centre of policy design and service design, not at its edges. We back the lived-experience networks doing this work and integrate it across our own practice.",
  },
];

const WhatWeWantChanged = () => {
  return (
    <section id="what-we-want-changed" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Header Title */}
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-6 tracking-tight">
          What we want changed
        </h2>

        {/* Section Context Intro Paragraph */}
        <p className="text-[15px] md:text-base leading-7 md:leading-8 text-[#2d2d2d] mb-12">
          The positive regulatory positions GHUK supports. These are coherent
          (they describe a single, whole-system response to gambling harm) and
          they are anchored in the public-health evidence, not in any particular
          political tradition. None of this asks for new science. It asks for
          standard UK public-health practice, the same machinery used for
          tobacco and alcohol: surveillance, product-safety regulation,
          comprehensive marketing controls, and funding scaled to burden.
        </p>

        {/* Interactive Ordered List Blocks */}
        <div className="space-y-10 ">
          {changesList.map((item) => (
            <div key={item.number} className="flex gap-5 items-start">
              {/* Number Badge Counter */}
              <div className="w-9 h-9 bg-[#0e7fad] text-white flex items-center justify-center font-bold shrink-0 mt-0.5 text-sm">
                {item.number}
              </div>

              {/* Text Description Segment Container */}
              <div className="space-y-3">
                <h4 className="text-base md:text-[17px] font-bold text-[#2d2d2d] leading-snug">
                  {item.title}
                </h4>
                <p className="text-[#687076] text-sm md:text-[15px] leading-relaxed md:leading-7">
                  {item.description}
                </p>

                {/* Light Blue Callout Nesting Specific to Item 2 */}
                {item.number === 2 && (
                  <div className="bg-[#edf7fd] border-l-[4px] border-[#17a9df] p-6 md:p-8 !mt-6">
                    <h5 className="text-[#17a9df] text-sm font-semibold tracking-normal mb-3">
                      Why this position is foundational
                    </h5>
                    <p className="text-[#687076] text-sm leading-relaxed md:leading-7">
                      Every other ask on this page (advertising restrictions,
                      product-safety standards, affordability checks,
                      algorithmic risk-flagging) depends on a mechanism that
                      turns operator failure into legal consequence. Without a
                      statutory duty of care, regulatory rules are merely codes
                      the operator can negotiate compliance with. With one, they
                      become standards an operator can be sued for failing. This
                      is the change that makes the rest of the public-health
                      response enforceable. Advocacy credit:{" "}
                      <span className="italic">
                        Martin Jones has been one of the most consistent UK
                        voices arguing for statutory duty of care as the
                        load-bearing regulatory reform;
                      </span>{" "}
                      GHUK supports this framing.
                    </p>
                  </div>
                )}
      
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhatWeWantChanged;
