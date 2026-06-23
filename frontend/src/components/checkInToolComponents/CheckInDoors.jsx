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
    to: null, // Will scroll to "not-sure"
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
    <section className="py-16 lg:py-24 max-w-5xl mx-auto px-5">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#292929] leading-tight">
          Who are you here for?
        </h2>

        <p className="mt-4 text-[#6E7388] text-base md:text-lg leading-relaxed">
          Pick the door that fits. You can always come back and try a
          different one.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl border border-[#8C909E]/60 bg-white p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              {/* Door label */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[2px] bg-[#0096D6]" />
                <span className="text-[#0096D6] text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {card.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#292929] leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-[#72768B] text-base md:text-[17px] leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-8">
              {card.to ? (
                <Link
                  to={card.to}
                  className="inline-block rounded-lg bg-[#0D6F9D] px-6 py-3.5 text-white font-semibold text-center transition hover:bg-[#095d84]"
                >
                  {card.button}
                </Link>
              ) : (
                <button
                  onClick={handleScrollToNotSure}
                  className="rounded-lg bg-[#0D6F9D] px-6 py-3.5 text-white font-semibold transition hover:bg-[#095d84]"
                >
                  {card.button}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <p className="mt-10 text-center text-[#6E7388] text-sm md:text-base leading-relaxed">
        All answers stay in your browser. Nothing is stored, sent, or shared.
        Not suitable for under-18s, please see our{" "}
        <Link
          to="/professionals/children-young-people"
          className="underline text-[#0096D6] hover:text-[#095d84] font-medium transition-colors"
        >
          page for children and young people
        </Link>{" "}
        instead.
      </p>
    </section>
  );
};

export default CheckInDoors;