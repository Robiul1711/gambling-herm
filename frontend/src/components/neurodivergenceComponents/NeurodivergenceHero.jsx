import React from "react";

const NeurodivergenceHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-12 md:py-20 border-b border-sky-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb Tagline */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-[#0092D0]"></span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
            OUR WORK &middot; NEURODIVERGENCE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
          A product that exploits certain response patterns, not a deficit in
          the person.
        </h1>

        {/* Lead Narrative Text */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
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
