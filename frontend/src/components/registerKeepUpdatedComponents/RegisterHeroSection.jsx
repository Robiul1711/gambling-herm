import React from "react";

const RegisterHeroSection = () => {
  return (
    <section className="bg-[#f0f7fc] py-16 md:py-24 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-left">
        {/* Accent Tag */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-[2px] bg-[#0093D0]" />
          <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest">
            GET INVOLVED
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
          Register &amp; keep updated
        </h1>

        {/* Lead Text */}
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          GHUK membership and the members' area open later this year. Register
          now to be first to know when they launch, and to receive our newsletter,
          campaign updates, and ways to take action on gambling harm.
        </p>
      </div>
    </section>
  );
};

export default RegisterHeroSection;
