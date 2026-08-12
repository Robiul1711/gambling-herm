import React from "react";
import { Link } from "react-router-dom";

const UrgentHelpTips = () => {
  return (
    <div className="w-full">
      {/* 1. Next Hour Tips Section (Light Blue Background) */}
      <div className="bg-[#EBF5FA] py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-2 border-[#82A3A1] p-5 sm:p-8 md:p-10 shadow-sm">
            <span className="text-xs font-bold text-[#4F7774] uppercase tracking-widest block mb-6">
              A few things that often help in the next hour
            </span>

            <ul className="space-y-5">
              {[
                {
                  bold: "Tell one person.",
                  text: " A friend, a family member, a colleague, a stranger on a helpline. Saying it aloud breaks the secrecy that makes the next hour harder.",
                },
                {
                  bold: "Hand your card and phone to someone you trust",
                  text: ", for the night. Give yourself a barrier that doesn't depend on willpower in the next hour.",
                },
                {
                  bold: "Get out of where you are.",
                  text: " Move. Walk. Sit somewhere with other people. The acute urge passes faster when you change scene.",
                },
                {
                  bold: "Don't be alone tonight, if you can avoid it.",
                  text: " Stay with someone, or have someone stay with you. If that's not possible, stay in regular contact by phone.",
                },
                {
                  bold: "Eat something. Drink water. Don't drink alcohol.",
                  text: " Tired, hungry, drunk, all three make this harder.",
                },
                {
                  bold: "Don't catastrophise the morning.",
                  text: " Tonight is the priority. Tomorrow's problems can wait for tomorrow.",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed"
                >
                  <span className="mt-1.5 w-4 h-4 border-2 border-Primary/60 shrink-0" />
                  <span>
                    <strong>{item.bold}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 2. Worried About Someone Else Section (White/Light Gray Background) */}
      <div className="bg-gray-50/50 py-12 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 p-5 sm:p-8 md:p-10 shadow-sm">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest block mb-6">
              If you're worried about someone else right now
            </span>

            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="mt-1.5 w-4 h-4 border-2 border-Primary/60 shrink-0" />
                <span>
                  <strong>
                    If you believe their life is in immediate danger
                  </strong>
                  , call 999.
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="mt-1.5 w-4 h-4 border-2 border-Primary/60 shrink-0" />
                <span>
                  <strong>If they will speak to you</strong>, stay with them.
                  Don't leave them alone. Ask them to call Samaritans (116 123).
                  If they want, call together.
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="mt-1.5 w-4 h-4 border-2 border-Primary/60 shrink-0" />
                <span>
                  <strong>If they won't speak to you</strong>, call Samaritans
                  on 116 123 yourself, and tell them what's happening. They will
                  support <em>you</em>, and help you think about what to do
                  next.
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="mt-1.5 w-4 h-4 border-2 border-Primary/60 shrink-0" />
                <span>
                  <strong>You don't have to fix it.</strong> You just have to
                  stay. Being there is not a small thing.
                </span>
              </li>
              <li className="flex items-start gap-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <span className="mt-1.5 w-4 h-4 border-2 border-Primary/60 shrink-0" />
                <span>
                  After tonight, our{" "}
                  <Link
                    to="/get-help/family-friends"
                    className="text-Primary hover:underline font-semibold"
                  >
                    family-and-friends page
                  </Link>{" "}
                  has practical advice for the days ahead.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentHelpTips;
