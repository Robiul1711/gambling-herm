import React from "react";
import { Link } from "react-router-dom";

const MoneyAndLegalSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Money and legal exposure
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
          If money is tangled between you, joint accounts, joint debt, borrowing
          you didn't agree to, the earlier you get advice the more options you
          usually have.
        </p>

        {/* Points with dashed lines */}
        <div className="space-y-4">
          <div className="border-b border-dashed border-gray-200/90 pb-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <strong className="font-bold text-gray-900 mr-1.5">
                Joint accounts and joint credit.
              </strong>
              If you suspect funds have moved, get statements and advice early.
              Time matters here.
            </p>
          </div>

          <div className="border-b border-dashed border-gray-200/90 pb-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <strong className="font-bold text-gray-900 mr-1.5">
                Coerced or pressured borrowing.
              </strong>
              If you've been asked, or felt pressured, to borrow, guarantee a
              loan or add someone to an account, that's a legal question as much
              as a financial one. Free advice is available from Citizens Advice,
              Rights of Women (for women specifically), and family-law
              solicitors.
            </p>
          </div>

          <div className="border-b border-dashed border-gray-200/90 pb-4">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <strong className="font-bold text-gray-900 mr-1.5">
                Don't co-sign or lend
              </strong>
              what you can't afford to lose, even with the best intentions.
            </p>
          </div>

          <div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <strong className="font-bold text-gray-900 mr-1.5">
                Specialist debt advice is free.
              </strong>
              Our{" "}
              <Link
                to="/get-help"
                className="text-[#0082c3] underline font-semibold hover:text-[#006090] transition-colors"
              >
                financial help section
              </Link>{" "}
              sets out the specific organisations and what each one does.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyAndLegalSection;
