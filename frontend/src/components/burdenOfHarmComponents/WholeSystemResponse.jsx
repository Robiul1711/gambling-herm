import React from "react";

const WholeSystemResponse = () => {
  // Strategy items list matching client specs and screenshots
  const strategyItems = [
    {
      title: "Statutory duty of care",
      text: "A legally binding obligation on operators, not a voluntary commitment. The Online Safety Act introduced a duty of care for online platforms; gambling is a notable absence from any equivalent duty. Emerging Dutch and Finnish models attach specific, enforceable thresholds.",
    },
    {
      title: "Product",
      text: "Stake limits, speed limits, prohibition of demonstrably high-harm features, including variable-ratio jackpot mechanics and in-play continuous betting on the riskiest markets.",
    },
    {
      title: "Marketing",
      text: "A statutory ban on gambling sponsorship in sport and broadcast; tighter rules on influencer and gamblified content; suspension of personalised marketing to customers showing signs of distress.",
    },
    {
      title: "Affordability",
      text: "Light-touch checks at moderate loss thresholds; heavier intervention at points where harm is most likely.",
    },
    {
      title: "Funding",
      text: "The statutory levy, in force since April 2025, is ring-fenced 50% to treatment, 30% to prevention and 20% to research. Ring-fencing is the right principle. The quantum, around £100 million a year against a health burden of £15.6–21.9 billion, is not, and nor is the split. Treatment takes the largest share, while around 85% of the health loss sits below the severe band, where treatment does not reach it. If funding followed the burden, prevention would be weighted above treatment, not at little more than half of it. Research at a fifth has to pay for work the UK has never done properly: gambling-specific epidemiology, a burden-of-harm estimate maintained as a national statistic, mortality and suicide studies using linked health records, and independent economic-cost modelling. None of that is secure on present funding.",
    },
    {
      title: "Treatment",
      text: "NHS-led specialist provision, with funded routes for affected others and bereaved families, not delivered through industry-funded charities. Proactive outreach between referral and first appointment.",
    },
    {
      title: "Identification",
      text: "Routine screening and coding of gambling harm in primary care, mental health services and suicide risk assessment, so the harm becomes visible in national data.",
    },
    {
      title: "Local powers",
      text: "Licensing authorities are currently required to \"aim to permit\" gambling premises, which limits their ability to refuse applications even where health, police and community concerns are raised. That duty should be removed, and local Gambling Impact Assessments enabled.",
    },
    {
      title: "Research",
      text: "Independent funding streams. Open publication. The end of industry-led evidence-production on questions of its own harm.",
    },
    {
      title: "Political legitimacy",
      text: "Restrictions on industry political lobbying and revolving-door appointments between operators, trade bodies, regulators and political offices.",
    },
  ];

  return (
    <section className=" bg-white text-gray-800 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          8. A whole-system response, the tobacco-control parallel
        </h2>

        {/* Lead Copy */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mb-10">
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            The single most successful UK public-health intervention of the last fifty years is tobacco control. It worked because it acted on every part of the system at once: product, marketing, point-of-sale, pricing, treatment, public information, professional norms, and the political legitimacy of the industry itself.
          </p>

          <p>
            Gambling-harm policy is currently nothing like that. Treatment receives most of the resource and attention. Product regulation is patchy. Marketing remains substantially self-regulated. Affordability checks are contested. The political legitimacy of the industry is, in the UK, still largely intact. The result is a response that is the wrong shape for the burden, weighted at the very end of the harm pipeline, where it can change least.
          </p>

          <p>
            Even within treatment, volume is not the same as met need. <strong className="font-bold text-gray-900">Around 40% of referrals to NHS gambling clinics do not attend a first assessment</strong>, far higher than alcohol (18%) or cocaine (10%), with waits beyond 30 days, distance, and still actively gambling among the predictors. Referral counts are not a measure of need being met.
          </p>
        </div>

        {/* Strategy List Container */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            A whole-system gambling-harm strategy would act at every level
          </h3>

          <div className="border-t border-b border-gray-200 divide-y divide-gray-200 my-8">
            {strategyItems.map((item, index) => (
              <div
                key={index}
                className="py-5 text-sm md:text-base leading-relaxed"
              >
                <span className="font-bold text-gray-900 mr-1.5">{item.title}.</span>
                <span className="text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Position Dark Box */}
        <div className="border-l-4 border-[#0093D0] bg-[#1c1d1f] text-white p-6 md:p-8 rounded-r-sm my-8">
          <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase mb-3">
            OUR POSITION
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-200 font-medium">
            Treatment is necessary. It is also nowhere near sufficient. The biggest reductions in gambling harm will come from acting upstream: on product, on marketing, on availability, and on the political conditions that have allowed the harm to grow. The tobacco-control parallel is not a slogan. It is the strategic frame this work requires.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WholeSystemResponse;
