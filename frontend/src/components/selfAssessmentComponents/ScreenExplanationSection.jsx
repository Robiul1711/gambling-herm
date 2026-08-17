import React from "react";

const ScreenExplanationSection = () => {
  const screenCapabilities = [
    {
      title: "What it can do.",
      text: "Help you notice patterns you might not have put together yourself: chasing losses, hiding spend, gambling with money set aside for something else.",
    },
    {
      title: "What it can't do.",
      text: "Tell you for certain whether you're harmed, capture the context a clinician would ask about, or replace a conversation with someone trained to help.",
    },
    {
      title: "Who it's for.",
      text: "Anyone curious about their own gambling, whether that curiosity comes from a specific worry or just wanting to check in.",
    },
  ];

  const noticingItems = [
    {
      title: "Chasing.",
      text: "Going back another day, or later the same day, to try to win back what you lost.",
    },
    {
      title: "Tolerance.",
      text: "Needing to stake more than you used to, to get the same feeling.",
    },
    {
      title: "Money.",
      text: "Betting more than you could really afford to lose, borrowing to gamble, or moving money between accounts to gamble without others noticing.",
    },
    {
      title: "Concealment.",
      text: "Hiding the amount or frequency of your gambling from people close to you, or feeling you have to.",
    },
    {
      title: "Relationships.",
      text: "Arguments, broken trust, or withdrawing from people because of gambling.",
    },
    {
      title: "Mood.",
      text: "Gambling to escape worry, low mood or stress, or feeling guilty, anxious or low afterwards.",
    },
    {
      title: "Time and focus.",
      text: "Time spent gambling, or thinking about it, that's crowding out work, study, sleep or things you used to enjoy.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Section 1: What a screen is, and what it isn't */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            What a screen is, and what it isn't
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
            A screening tool is a short set of standard questions that puts a rough
            shape on a pattern of gambling. It's a starting point for reflection,
            not a medical test and not a verdict.
          </p>

          <div className="space-y-3.5">
            {screenCapabilities.map((item, index) => (
              <div
                key={index}
                className={`${
                  index !== screenCapabilities.length - 1
                    ? "border-b border-dashed border-gray-200/90 pb-3.5"
                    : "pb-1"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    {item.title}
                  </strong>
                  <span>{item.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Things worth noticing */}
        <div className="mt-14 sm:mt-16 md:mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Things worth noticing
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
            These aren't a quiz with a pass mark. They're the areas the validated
            tools ask about, put into plain language, as prompts to notice rather
            than tick.
          </p>

          <div className="space-y-3.5">
            {noticingItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  index !== noticingItems.length - 1
                    ? "border-b border-dashed border-gray-200/90 pb-3.5"
                    : "pb-1"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <strong className="font-bold text-gray-900 mr-1.5">
                    {item.title}
                  </strong>
                  <span>{item.text}</span>
                </p>
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mt-8">
            If any of these feel familiar, that's worth paying attention to,
            whatever a score would say.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScreenExplanationSection;
