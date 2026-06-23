import React from "react";
import { Link } from "react-router-dom";

const prompts = [
  "The first thing that pulled you to this site, was it about something you've been doing yourself, something someone else is doing, or something less specific (worry, money trouble, a relationship strain, a story in the news)?",
  "If you closed this tab now, what conversation would you most want to have in the next 48 hours? With whom?",
  "Are you carrying a financial fear, a relational fear, both, or something else? Affected others often carry the financial fear before the person who gambles realises there's a problem.",
  "If a friend described your situation back to you, what would they say is worrying them?",
];

const NotSureDoor = () => {
  return (
    <section id="not-sure" className="py-16 lg:py-24 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-5">
        {/* Top line */}
        <div className="w-8 h-[2px] bg-[#0099D8] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-center text-[32px] md:text-[48px] font-bold text-[#292929] leading-tight">
          If you're not sure which door fits
        </h2>

        {/* Intro */}
        <p className="max-w-4xl mx-auto mt-6 text-center text-[#6E7388] text-base md:text-lg leading-relaxed">
          This is the position most people who reach a gambling-harm support
          site are actually in. There's not always a clean line between "I'm
          worried about myself" and "I'm worried about someone else", and the
          path through often goes through both. A few things that might help.
        </p>

        {/* Prompts */}
        <div className="mt-16">
          <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292929] mb-6">
            Some Prompts
          </h3>

          <div className="border-t border-dashed border-[#D2D5DC]">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className="py-5 border-b border-dashed border-[#D2D5DC]"
              >
                <p className="text-[#6E7388] text-base md:text-lg leading-relaxed">{prompt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* It can be both */}
        <div className="mt-16">
          <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292929]">
            It can be both
          </h3>

          <p className="mt-4 text-[#6E7388] text-base md:text-lg leading-relaxed">
            It is common to be both worried about your own gambling and
            affected by someone else's, particularly in households where
            gambling is normalised, or where you grew up around it. If both
            feel relevant, both check-ins are available. Most people who use
            both find one of the results lands harder than the other, and that
            becomes the starting point.
          </p>
        </div>

        {/* It's OK */}
        <div className="mt-12">
          <h3 className="text-[24px] md:text-[28px] font-semibold text-[#292929]">
            It's OK to not check in today
          </h3>

          <p className="mt-4 text-[#6E7388] text-base md:text-lg leading-relaxed">
            Some people read this page, decide today isn't the day, and come
            back when it is. That's a valid use of the page. The phone numbers
            on this site stay free 24/7 for whenever you do choose.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl border border-[#9EA4B1]/60 bg-white p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <h3 className="text-[28px] md:text-[36px] font-bold text-[#292929] leading-tight">
                It's about me
              </h3>

              <p className="mt-4 text-[#6E7388] text-base md:text-[17px] leading-relaxed">
                If you've decided this one is the closer fit, the routes to
                support are on the Get help page.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/get-help"
                className="inline-block bg-[#0A6E9C] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#08597d] transition"
              >
                Go To Get Help →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-[#9EA4B1]/60 bg-white p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <h3 className="text-[28px] md:text-[36px] font-bold text-[#292929] leading-tight">
                It's about someone else
              </h3>

              <p className="mt-4 text-[#6E7388] text-base md:text-[17px] leading-relaxed">
                The family & friends page covers what to say, what not to say,
                financial protection, and the support that exists for you in your
                own right.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/get-help/family-friends"
                className="inline-block bg-[#0A6E9C] text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-[#08597d] transition"
              >
                For Family & Friends
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSureDoor;