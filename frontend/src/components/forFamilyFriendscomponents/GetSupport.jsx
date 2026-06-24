import React from "react";

const resources = [
  {
    title: "GamCare's affected-others service",
    description:
      "The National Gambling Helpline (0808 8020 133) supports affected others as well as people who gamble. They offer one-to-one counselling sessions specifically for partners, family and friends, with no waiting list.",
  },
  {
    title: "Gam-Anon",
    description:
      "A peer-support fellowship for the family and friends of people with gambling harm. Free meetings, in person and online. Many people find this the single most useful resource they ever access.",
  },
  {
    title: "NHS Talking Therapies",
    description:
      "You can self-refer in England, with no need to go through a GP, for free CBT or counselling for your own anxiety, depression or stress. You do not have to wait for them to seek help.",
  },
  {
    title: "Gambling with Lives",
    description: (
      <>
        The UK charity for those bereaved by gambling-related suicide. They
        provide specialist bereavement support, group meetings, and advocacy.{" "}
        <a
          href="https://www.gamblingwithlives.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0092D0] hover:underline"
        >
          gamblingwithlives.org
        </a>
      </>
    ),
  },
];

export default function GetSupport() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#fafafa] text-[#1f2937] border-b border-gray-100">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
              Get support for yourself
            </h2>
            <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] max-w-3xl mx-auto leading-relaxed">
              You're allowed to need help, even if you're not the one gambling. In
              fact, you almost certainly do.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((item, index) => (
              <div
                key={index}
                className="border border-[#b2d8ec] rounded-2xl bg-white p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
              >
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5f6472]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
