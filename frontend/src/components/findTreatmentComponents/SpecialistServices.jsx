import React from "react";

const specialistCharities = [
  {
    name: "GamFam",
    url: "https://www.gamfam.org.uk",
    desc: "Support, guidance, and peer groups for families and friends affected by someone else's gambling.",
  },
  {
    name: "GamLEARN",
    url: "https://www.gamlearn.org.uk",
    desc: "Lived-experience leadership, education, and peer-led advocacy for individuals harmed by gambling.",
  },
  {
    name: "Betknowmore UK",
    url: "https://www.betknowmoreuk.org",
    desc: "Peer-led support services, tailored interventions, and digital coaching programmes across the UK.",
  },
  {
    name: "Beacon Counselling Trust",
    url: "https://beaconcounsellingtrust.co.uk",
    desc: "Free specialist counselling, CBT interventions, and education programmes across the North West and beyond.",
  },
  {
    name: "Break Even",
    url: "https://www.breakeven.org.uk",
    desc: "Free, confidential counselling for anyone affected by gambling harm across East Anglia and the South East.",
  },
  {
    name: "Reframe Coaching",
    url: "https://reframecoaching.org.uk",
    desc: "Specialist coaching and harm-reduction support for individuals and workplaces.",
  },
  {
    name: "Red Card Gambling Support Project",
    url: "https://redcardgambling.org",
    desc: "Community workshops, education, and culturally-competent support led by lived experience.",
  },
];

const specificCommunities = [
  {
    title: "Children and families",
    description:
      "GamCare's family and friends support extends to children, where appropriate, alongside their parents. Young Minds (parents helpline: 0808 802 5544) and NSPCC (0808 800 5000) can also help where household circumstances are complex.",
  },
  {
    title: "Women",
    description:
      "The Women's Programme at GamCare and Gordon Moody offer women-specific groups and one-to-one provision. Many women experiencing gambling harm find a women-only space substantially easier to enter.",
  },
  {
    title: "Young people (under 25)",
    description:
      "NHS clinics, GamCare, and dedicated CYP workforce services. The National Gambling Helpline (0808 8020 133) provides 24/7 confidential support for young people. NHS Talking Therapies routes are also available for under-25s.",
  },
  {
    title: "Minority ethnic communities",
    description:
      "GamCare and the NHS clinics operate community partnerships with several UK minority-ethnic-led organisations to reduce cultural stigma and barriers to access. Ask the helpline what is available locally.",
  },
  {
    title: "LGBTQ+ people",
    description: (
      <>
        LGBTQ+-affirmative provision is available through GamCare, the NHS Northern Gambling Service, and dedicated helplines such as{" "}
        <a
          href="https://switchboard.lgbt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline hover:text-[#0092D0] font-medium"
        >
          Switchboard LGBT+ Helpline
        </a>{" "}
        (0800 0119 100).
      </>
    ),
  },
  {
    title: "Veterans",
    description: (
      <>
        The veteran community carries elevated gambling-harm risk.{" "}
        <a
          href="https://combatstress.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline hover:text-[#0092D0] font-medium"
        >
          Combat Stress
        </a>{" "}
        and{" "}
        <a
          href="https://www.veteransgateway.org.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 underline hover:text-[#0092D0] font-medium"
        >
          Veterans' Gateway
        </a>{" "}
        coordinate with the NHS specialist clinics for veteran-specific routes.
      </>
    ),
  },
];

export default function SpecialistServices() {
  return (
    <section
      id="specialist-services"
      className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 Header: Specialist Charities */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
            Specialist charities & support organisations
          </h2>
          <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] max-w-3xl mx-auto leading-relaxed">
            Independent, free specialist charities offering counselling, family support, coaching, and lived-experience advocacy across the UK.
          </p>
        </div>

        {/* Charities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {specialistCharities.map((item, index) => (
            <div
              key={index}
              className="border border-[#b2d8ec] bg-white p-5 sm:p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-[#0092D0] hover:underline shrink-0"
                  >
                    Visit site →
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-[#5f6472] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2 Header: Specific Communities */}
        <div className="text-center mb-12 border-t border-gray-100 pt-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Support for specific communities
          </h3>
          <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] max-w-2xl mx-auto leading-relaxed">
            Populations with specific needs or elevated risk, supported by tailored provision to reduce barriers to seeking help.
          </p>
        </div>

        {/* Specific Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specificCommunities.map((item, index) => (
            <div
              key={index}
              className="border border-[#b2d8ec] bg-white p-6 sm:p-7 hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
            >
              <h4 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-3 leading-snug">
                {item.title}
              </h4>
              <div className="text-[13px] sm:text-[14px] leading-relaxed text-[#5f6472]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
