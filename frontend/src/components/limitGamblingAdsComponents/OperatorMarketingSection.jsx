import React from "react";
import { Link } from "react-router-dom";

const OperatorMarketingSection = () => {
  const steps = [
    {
      num: 1,
      title: "Unsubscribe directly",
      desc: "Use the unsubscribe link in emails and texts, or the marketing-preferences setting in your account, on every operator you've used. Push notifications can usually be turned off in the app or in your phone's notification settings.",
    },
    {
      num: 2,
      title: "Ask for confirmation",
      desc: "Ask the operator to confirm in writing that marketing has stopped, and keep that confirmation somewhere you can find it.",
    },
    {
      num: 3,
      title: "Complain if it continues",
      desc: "If marketing keeps arriving after you've opted out, that's a breach of the rules operators are required to follow. You can report it to the Information Commissioner's Office (ICO).",
    },
  ];

  return (
    <section
      id="operator-marketing"
      className="scroll-mt-24 w-full py-12 md:py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Operator marketing
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8">
          Gambling operators hold your contact details, and under UK
          direct-marketing rules they must stop contacting you once you tell
          them to.
        </p>

        {/* Steps List */}
        <div className="space-y-4 mb-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white border border-gray-200/90  p-5 sm:p-6 flex items-start gap-4 shadow-xs"
            >
              <span className="w-8 h-8 rounded-full bg-[#156E94] text-white flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-xs">
                {step.num}
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Report Button */}
        <div className="mb-6">
          <a
            href="https://ico.org.uk/make-a-complaint/nuisance-calls-and-messages/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold text-sm py-2.5 px-5  transition-colors"
          >
            Report unwanted marketing to the ICO →
          </a>
        </div>

        {/* Note */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Putting a{" "}
          <Link
            to="/get-help/blocking-tools"
            className="underline hover:text-[#0082c3] text-gray-900 font-semibold"
          >
            block in place
          </Link>
          , such as registering with GAMSTOP, also stops marketing from
          participating operators, since they're required to suppress it once
          you've self-excluded.
        </p>
      </div>
    </section>
  );
};

export default OperatorMarketingSection;
