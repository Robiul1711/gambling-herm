import React from "react";

const NeurodivergenceHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-16 md:py-24 border-b border-sky-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Tagline */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-5 h-[2.5px] bg-[#0093D0]"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0093D0]">
            OUR WORK &middot; NEURODIVERGENCE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#1e293b] leading-[1.18] tracking-tight mb-8">
          A product that exploits certain response patterns, not a deficit in
          the person.
        </h1>

        {/* Lead Narrative Text */}
        <p className="text-base sm:text-lg  text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
          Neurodivergence covers a range of ways of thinking, attending and
          processing the world, including ADHD, autism, dyslexia, dyspraxia and
          others. This page sets out what the evidence currently supports about
          neurodivergence and gambling harm, where it thins out, and what a
          well-adapted response would look like.
        </p>
      </div>
    </section>
  );
};

export default NeurodivergenceHero;
