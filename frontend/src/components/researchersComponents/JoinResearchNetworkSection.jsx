import React from "react";
import { Link } from "react-router-dom";

const JoinResearchNetworkSection = () => {
  const fields = [
    {
      label: "Epidemiology",
      subject: "Connect with GHUK - Epidemiology",
    },
    {
      label: "Health economics",
      subject: "Connect with GHUK - Health Economics",
    },
    {
      label: "Public health",
      subject: "Connect with GHUK - Public Health",
    },
    {
      label: "Another field",
      subject: "Connect with GHUK - Other Field",
      isOutline: true,
    },
  ];

  const getMailtoUrl = (subject, field) => {
    const body = `Hello GHUK Team,%0D%0A%0D%0AI would like to connect with you.%0D%0A%0D%0AField: ${encodeURIComponent(
      field
    )}%0D%0AInstitution: %0D%0AInterests: `;
    return `mailto:hello@gamblingharm.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-gray-900 tracking-tight mb-6">
          Connect with us
        </h2>

        {/* Introductory Texts (RE2) */}
        <p className="text-[15px] md:text-base text-gray-700 leading-relaxed mb-4">
          We want to connect with people working on these gaps, or who want to:
        </p>
        <p className="text-[15px] md:text-base text-gray-700 leading-relaxed mb-8">
          A structured sign-up is coming with our new membership system. For now,
          one email is enough: tell us your field, institution and interests.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center mb-5">
          {fields.map((item, index) => (
            <a
              key={index}
              href={getMailtoUrl(item.subject, item.label)}
              className={
                item.isOutline
                  ? "inline-block px-6 py-2.5  border border-gray-800 text-gray-900 text-sm md:text-[15px] font-medium hover:bg-gray-50 transition-colors"
                  : "inline-block px-6 py-2.5  bg-[#156E94] text-white text-sm md:text-[15px] font-medium hover:bg-[#115877] transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Independence Disclaimer Note */}
        <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed mb-12">
          We are independent of the gambling industry and accept no industry
          funding. Collaborations are on the same basis.
        </p>

        {/* Crisis Support Helper Footer */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
            If gambling is affecting you or someone close to you, confidential
            support is available any time.{" "}
            <Link
              to="/get-help"
              className="underline text-gray-800 hover:text-[#0082c3] font-medium"
            >
              Find help
            </Link>{" "}
            &middot; National Gambling Helpline{" "}
            <a
              href="tel:08088020133"
              className="underline text-gray-800 hover:text-[#0082c3] font-medium"
            >
              0808 8020 133
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinResearchNetworkSection;
