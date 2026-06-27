import React from "react";

const NewsletterBanner = () => {

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
      <div className="bg-[#e6f6fe] rounded-[24px] px-6 py-8 sm:px-10 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-2 tracking-tight">
            Follow Our Work
          </h3>
          <p className="text-[#64748b] text-[14px] sm:text-[15px] leading-relaxed">
            Roughly monthly. No spam. Our research, consultation responses and
            briefings, sent when we publish them.
          </p>
        </div>

        {/* Right Side: Mailto Link Button */}
        <div className="shrink-0 flex items-center">
          <a
            href="mailto:hello@gamblingharm.com?subject=Newsletter%20signup&amp;body=Please%20add%20me%20to%20the%20Gambling%20Harm%20UK%20mailing%20list."
            className="bg-[#146b93] hover:bg-[#0f5271] text-white font-medium text-[15px] px-[22px] py-[11px] rounded-lg transition-colors duration-200 inline-flex items-center justify-center tracking-wide shrink-0 whitespace-nowrap"
          >
            Email us to join the list
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
