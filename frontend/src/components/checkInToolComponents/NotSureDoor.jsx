import React from "react";
import { Link } from "react-router-dom";

const prompts = [
  {
    boldText: "The first thing that pulled you to this site ,",
    normalText:
      " was it about something you've been doing yourself, something someone else is doing, or something less specific (worry, money trouble, a relationship strain, a story in the news)?",
  },
  {
    boldText: "If you closed this tab now,",
    normalText: (
      <>
        {" "}
        what conversation would you most want to have in the next 48 hours?
        <br />
        With whom?
      </>
    ),
  },
  {
    boldText:
      "Are you carrying a financial fear, a relational fear, both, or something else?",
    normalText:
      " People harmed by someone else’s gambling often carry the financial fear before the person who gambles realises there's a problem.",
  },
  {
    boldText: "If a friend described your situation back to you,",
    normalText: " what would they say is worrying them?",
  },
];

const NotSureDoor = () => {
  return (
    <section
      id="not-sure"
      className="py-16 lg:py-24 bg-white border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top line */}
        <div className="w-12 h-[3px] bg-[#0099D8] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
          If you're not sure which door fits
        </h2>

        {/* Intro */}
        <p className="mx-auto mt-6 text-center text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
          This is the position most people who reach a gambling-harm support
          site are actually in. There's not always a clean line between "I'm
          worried about myself" and "I'm worried about someone else", and the
          path through often goes through both. A few things that might help.
        </p>

        {/* Prompts */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
            Some Prompts
          </h3>

          <div className="border-t border-dashed border-gray-200">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className="py-5 border-b border-dashed border-gray-200"
              >
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  <strong className="font-bold text-gray-900">
                    {prompt.boldText}
                  </strong>
                  {prompt.normalText}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* It can be both */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            It can be both
          </h3>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            It is common to be both worried about your own gambling and affected
            by someone else's, particularly in households where gambling is
            normalised, or where you grew up around it. If both feel relevant,
            both check-ins are available. Most people who use both find one of
            the results lands harder than the other, and that becomes the
            starting point.
          </p>
        </div>

        {/* It's OK */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            It's OK to not check in today
          </h3>

          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Some people read this page, decide today isn't the day, and come
            back when it is. That's a valid use of the page. The phone numbers
            on this site stay free 24/7 for whenever you do choose.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200/90  bg-white p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                It's about me
              </h3>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                If you've decided this one is the closer fit, the routes to
                support are on the Get help page.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/get-help"
                className="inline-block bg-[#0A6E9C] text-white px-6 py-3.5 font-semibold text-sm sm:text-base  hover:bg-[#08597d] transition-colors shadow-xs"
              >
                Go To Get Help →
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200/90  bg-white p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                It's about someone else
              </h3>

              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                The family & friends page covers what to say, what not to say,
                financial protection, and the support that exists for you in
                your own right.
              </p>
            </div>

            <div className="mt-8 pt-4">
              <Link
                to="/get-help/family-friends"
                className="inline-block bg-[#0A6E9C] text-white px-6 py-3.5 font-semibold text-sm sm:text-base  hover:bg-[#08597d] transition-colors shadow-xs"
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
