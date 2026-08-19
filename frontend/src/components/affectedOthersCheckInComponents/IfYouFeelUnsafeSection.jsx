import React from "react";
import { Link } from "react-router-dom";

const IfYouFeelUnsafeSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          If you feel unsafe
        </h2>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
          Gambling-related financial harm can sit alongside domestic abuse and
          coercive control. If that's part of what you're describing to
          yourself, it deserves to be named and taken seriously on its own
          terms, separately from the gambling.
        </p>

        {/* Emergency / Safety Callout Box */}
        <div className="border-l-[4px] border-red-500 bg-[#fff8f8]  p-6 sm:p-8 space-y-4 shadow-xs">
          <p className="font-bold text-gray-900 text-sm sm:text-base">
            If anyone is in immediate danger, call 999.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            The National Domestic Abuse Helpline is{" "}
            <a
              href="tel:08082000247"
              className="font-bold text-gray-900 hover:text-[#0082c3] underline transition-colors"
            >
              0808 2000 247
            </a>
            , free and available 24/7.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            If you need to talk to someone about what's happening to you right
            now, <strong className="font-bold text-gray-900">Samaritans</strong>{" "}
            are free on{" "}
            <a
              href="tel:116123"
              className="font-bold text-gray-900 hover:text-[#0082c3] underline transition-colors"
            >
              116 123
            </a>
            , 24 hours a day, every day. You don't need to be in crisis to call,
            and you don't need to have the words ready.
          </p>

          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
            Our{" "}
            <Link
              to="/urgent-help"
              className="text-[#0082c3] underline font-semibold hover:text-[#006090] transition-colors"
            >
              urgent help page
            </Link>{" "}
            sets out what to do next, in order, if you or someone else is in
            danger tonight.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IfYouFeelUnsafeSection;
