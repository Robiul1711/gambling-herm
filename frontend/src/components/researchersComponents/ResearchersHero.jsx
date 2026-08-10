import React from "react";

const ResearchersHero = () => {
  return (
    <section className="bg-[#f0f8fd] border-b border-sky-100/60 py-16 md:py-24 section-padding-x">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Tagline */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-5 h-[2px] bg-[#0082c3]"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0082c3]">
            FOR PROFESSIONALS &middot; RESEARCHERS
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-extrabold text-[#1a1a1a] tracking-tight leading-[1.18] mb-6">
          Research with us.
        </h1>

        {/* Body Paragraph */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
          Gambling harm is one of the least-studied major harms in UK public health:
          no routine coding, no burden estimate maintained as a national statistic,
          and an evidence base still shaped by two decades of industry-linked
          funding. We are building an independent research community around exactly
          those gaps, and we want to hear from epidemiologists, health economists
          and public health specialists in particular.
        </p>
      </div>
    </section>
  );
};

export default ResearchersHero;
