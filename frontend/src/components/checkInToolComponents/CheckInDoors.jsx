import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: "DOOR 1",
    title: "I'm checking in for myself",
    description:
      "You're worried about your own gambling, or just want to think about it. Routes to the National Gambling Helpline, NHS clinics, self-exclusion, blocking software, and peer support that fits where you're at.",
    button: "Go To Get Help →",
    to: "/get-help",
  },
  {
    id: "DOOR 2",
    title: "I'm checking in because of someone else",
    description:
      "You're worried about someone you love (a partner, parent, child, sibling, friend). The page for family and friends. You are entitled to support in your own right.",
    button: "For Family & Friends",
    to: "/get-help/family-friends",
  },
  {
    id: "DOOR 3",
    title: "I'm not sure yet",
    description:
      "That's the most common way to arrive. A short read (not a quiz) that helps you work out which door fits, with no commitment to picking one today.",
    button: "Read The Orientation →",
    to: null, // Will scroll to"not-sure"
  },
];

const CheckInDoors = () => {
  const handleScrollToNotSure = (e) => {
    e.preventDefault();
    const element = document.getElementById("not-sure");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Who are you here for?
        </h2>

        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
          Pick the door that fits. You can always come back and try a different
          one.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-gray-200/90  bg-white p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div>
              {/* Door label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2.5px] bg-[#0096D6]" />
                <span className="text-[#0096D6] text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {card.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug tracking-tight mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                {card.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-8 pt-4">
              {card.to ? (
                <Link
                  to={card.to}
                  className="inline-block bg-[#0D6F9D] px-6 py-3.5 text-white font-semibold text-sm sm:text-base text-center transition hover:bg-[#095d84]  shadow-xs"
                >
                  {card.button}
                </Link>
              ) : (
                <button
                  onClick={handleScrollToNotSure}
                  className="bg-[#0D6F9D] px-6 py-3.5 text-white font-semibold text-sm sm:text-base transition hover:bg-[#095d84]  shadow-xs cursor-pointer"
                >
                  {card.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="mt-12 text-center text-gray-500 text-xs sm:text-sm leading-relaxed">
        All answers stay in your browser. Nothing is stored, sent, or shared.
        Not suitable for under-18s, please see our{" "}
        <Link
          to="/children-and-safeguarding"
          className="underline text-Primary hover:text-Primary/80 font-semibold transition-colors"
        >
          page for children and young people
        </Link>{" "}
        instead.
      </p>
    </section>
  );
};

export default CheckInDoors;
