import React from "react";

const resources = [
  {
    title: "GamCare's service for people harmed by someone else’s gambling",
    description:
      "The National Gambling Helpline (0808 8020 133) supports people harmed by someone else’s gambling as well as people who gamble. They offer one-to-one counselling sessions specifically for partners, family and friends, with no waiting list.",
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

const SupportResources = () => {
  return (
    <section className="w-full py-12 md:py-16 bg-[#fafafa] text-gray-900 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
            Get support for yourself
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            You're allowed to need help, even if you're not the one gambling. In
            fact, you almost certainly do.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200/90  bg-white p-6 sm:p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-start"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug tracking-tight">
                {item.title}
              </h3>

              <div className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportResources;
