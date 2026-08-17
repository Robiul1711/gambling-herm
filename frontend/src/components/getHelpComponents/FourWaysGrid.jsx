import React from "react";

const routes = [
  {
    id: 1,
    title: "Talk to a specialist",
    items: [
      {
        heading: "National gambling helpline (0808 8020 133)",
        text: "trained advisors, free, 24/7. Web chat at gamcare.org.uk if you don't want to speak aloud.",
      },
      {
        heading: "NHS talking therapies",
        text: "you can self-refer in England without going through a GP, for anxiety, depression and stress that often sits alongside gambling harm.",
      },
      {
        heading: "Your GP",
        text: "a quick conversation can open referrals to specialist services. You're allowed to say the word'gambling'.",
      },
    ],
  },
  {
    id: 2,
    title: "Block your access",
    items: [
      {
        heading: "GAMSTOP",
        text: "a national self-exclusion scheme that blocks every UK-licensed gambling site and app, for 6 months, 1 year or 5 years. About five minutes to register at gamstop.co.uk.",
      },
      {
        heading: "Gamban & blocking software",
        text: "blocks unlicensed sites at the device level. Available for free through GamCare in many cases.",
      },
      {
        heading: "At your bank",
        text: "Monzo, Starling, Lloyds, Barclays, HSBC, NatWest and most major UK banks now offer a one-tap gambling block on debit cards. Ask in-app or by phone.",
      },
      {
        heading: "In person",
        text: "most UK bookmakers operate a multi-operator self-exclusion scheme. One conversation excludes you from all participating venues in your area.",
      },
    ],
  },
  {
    id: 3,
    title: "Specialist treatment",
    items: [
      {
        heading: "NHS gambling clinics",
        text: (
          <>
            the NHS has expanded specialist gambling-harm provision in recent
            years, with clinics across England and additional services in
            Scotland and Wales. Free, evidence-based, you can self-refer.{" "}
            <a
              href="https://www.nhs.uk/live-well/addiction-support/gambling-addiction/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black underline hover:text-blue-600"
            >
              Find your nearest clinic →
            </a>
          </>
        ),
      },
      {
        heading: "Gordon Moody",
        text: "provides residential and online intensive treatment, free for people experiencing severe gambling harm.",
      },
      {
        heading: "Structured therapy",
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
        text: "free 12-step meetings, in person and online, across the UK.",
      },
      {
        heading: "GamCare's online forum and groups",
        text: "moderated peer support, recovery groups, and the option to be anonymous.",
      },
      {
        heading: "SMART Recovery",
        text: "secular, evidence-based peer support that runs gambling-specific groups.",
      },
      {
        heading: "",
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
            className="border border-gray-200/90  p-6 sm:p-8 bg-white shadow-xs hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
              {route.id}. {route.title}
            </h2>

            <div className="space-y-6">
              {route.items.map((item, index) => (
                <div
                  key={index}
                  className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal"
                >
                  {item.heading && (
                    <strong className="font-bold text-gray-900 mr-1.5">
                      {item.heading}:
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
