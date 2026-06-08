import React from 'react';

export default function LivedExperienceQuote() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Top Accent Subheading */}
        <div className="flex items-center space-x-3 mb-8 pl-4 sm:pl-8 md:pl-0">
          <span className="w-8 h-[2px] bg-Primary" />
          <span className="text-Primary text-sm md:text-base font-bold tracking-wide">
            Lived Experience
          </span>
        </div>

        {/* Quote Container Workspace */}
        <div className="relative my-4 px-4 sm:px-8 md:px-12">
          
          {/* Left Decorative Opening Quote Mark */}
          <span 
            className="absolute -top-8 left-0 md:-left-4 text-gray-900 font-serif text-6xl leading-none select-none tracking-tighter font-black"
            aria-hidden="true"
          >
            “
          </span>

          {/* Core Layout Content Block with Left Accent Border */}
          <div className="border-l-[4px] border-Primary pl-6 py-1 md:py-2">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight leading-[1.35]">
              &ldquo;For years I thought it was a moral failing. The shame is 
              what kept me silent. The first day someone said &lsquo;this isn't 
              who you are, it's what this product does to people&rsquo;, that's 
              the day it started to change.&rdquo;
            </blockquote>
          </div>

          {/* Right Decorative Closing Quote Mark */}
          <span 
            className="absolute -bottom-14 right-4 md:-right-4 text-gray-900 font-serif text-6xl leading-none select-none tracking-tighter font-black"
            aria-hidden="true"
          >
            ”
          </span>
        </div>

        {/* Quote Attribution Author Bio */}
        <div className="mt-6 pl-10 sm:pl-14 md:pl-12">
          <cite className="not-italic text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
            , Sam, in recovery for four years
          </cite>
        </div>

      </div>
    </section>
  );
}