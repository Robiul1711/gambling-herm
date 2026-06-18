import React from "react";

export default function OurPosition() {
  return (
    <section className="w-full bg-[#2A2828] text-white py-10 md:py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout Container with Left Border Accent */}
        <div className="border-l-4 border-Primary pl-6 md:pl-10 flex flex-col space-y-4 md:space-y-6">
          {/* Section Subtitle Tag */}
          <span className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
            Our position
          </span>

          {/* Main Statement Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.25] max-w-4xl">
            Gambling harm is a leading modifiable risk factor for ill-health in
            the UK. It is treated as if it isn't.
          </h2>

          {/* Body Paragraph Content Block */}
          <div className="flex flex-col space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            <p>
              The product. The marketing. The regulatory environment. The
              funding for treatment and research. Every one of those is
              changeable. The harm is preventable. The reason it persists at the
              scale it does is not mystery, weak willpower, or a
              &quot;vulnerable few&quot;. It is a policy choice.
            </p>

            {/* Mission Statement Accent Text */}
            <p className="font-semibold text-white pt-2">
              We exist to change that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
