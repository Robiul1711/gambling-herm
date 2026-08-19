import React from "react";

export default function YoungPeopleCrisisSection() {
  return (
    <section className="w-full bg-[#1C1C1C] py-16 md:py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teal Accent Line */}
        <div className="w-8 h-[3px] bg-[#156E94] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
          If things feel too much right now
        </h2>

        {/* List of Emergency contacts */}
        <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          {/* Item 1 */}
          <div className="pt-3 border-t border-dashed border-gray-700">
            <p>
              <strong className="font-bold text-white">Childline, 0800 1111.</strong>{" "}
              Any time, about anything, including feelings that scare you.
            </p>
          </div>

          {/* Item 2 */}
          <div className="pt-3 border-t border-dashed border-gray-700">
            <p>
              <strong className="font-bold text-white">Papyrus HopeLine 24/7, 0300 102 2470</strong>{" "}
              (call) or text <strong className="font-bold text-white">88247</strong>, if you're having thoughts of suicide. For anyone under 35.
            </p>
          </div>

          {/* Item 3 */}
          <div className="pt-3 border-t border-dashed border-gray-700">
            <p>
              <strong className="font-bold text-white">999</strong> if you or someone else is in immediate danger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
