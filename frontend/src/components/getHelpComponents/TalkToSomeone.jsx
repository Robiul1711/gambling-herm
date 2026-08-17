import React from "react";

const TalkToSomeone = () => {
  const cards = [
    {
      title: "National Gambling Helpline",
      number: "0808 8020 133",
      description:
        "Free. Confidential. 24 hours a day, every day. Run by GamCare. Web chat also available. Supports affected others as well as people who gamble.",
    },
    {
      title: "Samaritans",
      number: "116 123",
      description:
        "For emotional crisis of any kind. Free, 24/7. You don't have to be suicidal to call.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
          Free, confidential, available 24 hours.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
          Three numbers. All free, all confidential. None of them require you to
          be in crisis.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-gray-200/90  bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start"
          >
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
              {card.title}
            </h3>

            <div className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-none tracking-tight">
              {card.number}
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600 font-normal">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom text */}
      <p className="mt-8 text-center text-sm sm:text-base text-gray-700 font-medium">
        If you or someone you love is in immediate danger, call{" "}
        <strong className="text-gray-900 font-bold">999</strong>.
      </p>
    </div>
  );
};

export default TalkToSomeone;
