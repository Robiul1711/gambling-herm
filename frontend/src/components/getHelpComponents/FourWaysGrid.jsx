import React from "react";

const routes = [
  {
    id: 1,
    title: "Talk to a specialist",
    intro:
      "A conversation with someone who understands gambling harm can help you work out what to do next.",
    items: [
      {
        heading: "National Gambling Helpline (0808 8020 133)",
        separator: ", ",
        text: "trained advisers, free, 24/7. Web chat at gamcare.org.uk if you don't want to speak aloud.",
      },
      {
        heading: "NHS Talking Therapies",
        separator: ", ",
        text: "you can self-refer in England without going through a GP, for anxiety, depression and stress that often sits alongside gambling harm.",
      },
      {
        heading: "Your GP",
        separator: ", ",
        text: "a quick conversation can open referrals to specialist services. You're allowed to say the word \"gambling\".",
      },
    ],
  },
  {
    id: 2,
    title: "Block your access",
    items: [
      {
        heading: "GAMSTOP",
        separator: ", ",
        text: "a national self-exclusion scheme that blocks every UK-licensed gambling site and app, for 6 months, 1 year or 5 years. About five minutes to register at gamstop.co.uk.",
      },
      {
        heading: "Gamban & blocking software",
        separator: ", ",
        text: "blocks gambling sites and apps at device level, licensed and unlicensed. Available for free through GamCare in many cases.",
      },
      {
        heading: "At your bank",
        separator: ". ",
        text: "Monzo, Starling, Lloyds, Barclays, HSBC, NatWest and most major UK banks now offer a gambling block (usually switched on in-app) on debit cards. Ask in-app or by phone.",
      },
      {
        heading: "In person",
        separator: ", ",
        text: "multi-operator self-exclusion schemes cover venues: MOSES for betting shops, SENSE for casinos, and the Bingo Association scheme for bingo. One conversation excludes you from all participating venues in your area.",
      },
    ],
  },
  {
    id: 3,
    title: "Specialist treatment",
    items: [
      {
        heading: "NHS gambling clinics",
        separator: ", ",
        text: (
          <>
            the NHS has expanded specialist gambling-harm provision in recent
            years, with clinics across England and additional services in
            Scotland and Wales. Free, evidence-based, you can self-refer.{" "}
            <a
              href="https://www.nhs.uk/live-well/addiction-support/gambling-addiction/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline hover:text-[#0092D0]"
            >
              Find your nearest clinic →
            </a>
          </>
        ),
      },
      {
        heading: "Gordon Moody",
        separator: ", ",
        text: "provides residential and online intensive treatment, free for people experiencing severe gambling harm.",
      },
      {
        heading: "Structured therapy",
        separator: ". ",
        text: "Cognitive Behavioural Therapy (CBT) is the most evidence-based talking therapy for gambling harm. NHS clinics provide it; private therapists are also available.",
      },
    ],
  },
  {
    id: 4,
    title: "Peer support",
    items: [
      {
        heading: "Gamblers Anonymous",
        separator: ", ",
        text: "free 12-step meetings, in person and online, across the UK.",
      },
      {
        heading: "GamCare's online forum and groups",
        separator: ", ",
        text: "moderated peer support, recovery groups, and the option to be anonymous.",
      },
      {
        heading: "SMART Recovery",
        separator: ", ",
        text: "secular, evidence-based peer support that runs gambling-specific groups.",
      },
      {
        heading: "",
        separator: "",
        text: "Many people find peer support carries something the other routes can't: the relief of being understood by someone who's been there.",
      },
    ],
  },
];

const FourWaysGrid = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {routes.map((route) => (
          <div
            key={route.id}
            className="border border-gray-200/90 p-6 sm:p-8 bg-white shadow-xs hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
              {route.id}. {route.title}
            </h2>

            {route.intro && (
              <p className="text-sm sm:text-base leading-relaxed text-gray-700 font-normal mb-6">
                {route.intro}
              </p>
            )}

            <div className="space-y-6">
              {route.items.map((item, index) => (
                <div
                  key={index}
                  className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal"
                >
                  {item.heading && (
                    <strong className="font-bold text-gray-900">
                      {item.heading}
                      {item.separator || ": "}
                    </strong>
                  )}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourWaysGrid;
