import React from "react";

export default function TreatmentAndSupport() {
  const treatments = [
    {
      title: "NHS East of England Gambling Service",
      description:
        "Free, specialist NHS treatment for gambling harm. Self-referral available online, no GP needed.",
      buttonText: "Self-refer to NHS East of England",
      link: "https://www.eastofenglandgamblingservice.nhs.uk/",
      isExternal: true,
    },
    {
      title: "Breakeven",
      description:
        "Free gambling support service covering Essex and the East of England. Self-referral available online.",
      buttonText: "Self-refer to Breakeven",
      link: "https://www.breakeven.org.uk/",
      isExternal: true,
    },
    {
      title: "GamFam",
      description:
        "Support for people affected by gambling, including family members and others harmed by someone else's gambling.",
      buttonText: "Refer to GamFam",
      link: "https://gamfam.org.uk/",
      isExternal: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 border-t border-gray-200/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-[#1f2937]">
        {/* Header */}
        <header className="mb-10">
          <div className="w-12 h-[3px] bg-[#156E94] mb-4"></div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
            Treatment and support in your area
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Help is available locally and through national services. You can
            refer yourself to any of these. No GP needed.
          </p>
        </header>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/90  p-6 sm:p-8 shadow-xs flex flex-col justify-between min-h-[220px] hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  {item.description}
                </p>
              </div>
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3F5E6B] hover:bg-[#2F424C] text-white font-semibold text-sm sm:text-base py-3 px-5  transition-colors shadow-xs"
                >
                  {item.buttonText}
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}

          {/* National Gambling Helpline Card without button */}
          <div className="bg-white border border-gray-200/90  p-6 sm:p-8 shadow-xs flex flex-col justify-between min-h-[220px] hover:shadow-md transition-shadow duration-300">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                National Gambling Helpline
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                Free, confidential support, 24 hours a day. For yourself, a
                friend, or a family member.
              </p>
            </div>
            <div className="text-sm sm:text-base text-gray-600 border-t border-gray-100 pt-4 mt-auto font-normal">
              <a
                href="tel:08088020133"
                className="font-bold text-gray-900 hover:underline mr-1"
              >
                0808 8020 133
              </a>
              {", or web chat at "}
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 hover:underline"
              >
                gamcare.org.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
