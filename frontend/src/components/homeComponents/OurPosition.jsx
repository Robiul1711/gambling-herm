import React from "react";
import { Link } from "react-router-dom";

export default function WhoGamblingHarms() {
  const stats = [
    {
      number: "~1 in 5",
      text: (
        <>
          UK adults experienced gambling-related harm in the past year, counting
          those who gambled themselves <span className="italic">and</span> the
          affected others around them.
        </>
      ),
    },
    {
      number: "~9%",
      text: "of UK adults were affected by someone else's gambling in the past year, including 2.5% experiencing severe consequences (GSGB official statistics, 2024). Partners, parents, children, siblings, close friends.",
    },
    {
      number: "~42%",
      text: "of children in Great Britain may be affected by someone else's gambling, on modelling for GambleAware (YouGov, 2024): parents, siblings, and others close to them.",
    },
  ];

  return (
    <section className="w-full bg-white text-[#1f2937] py-12 md:py-20">
      <div className="max-w-6xl mx-auto ">
        
        {/* Top Tagline with Horizontal Blue Bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[2px] bg-Primary"></div>
          <span className="text-Primary text-xs font-bold tracking-widest uppercase">
            In the UK, last year
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-950 mb-10 md:mb-12">
          Who gambling actually harms.
        </h2>

        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="border-l-[3px] border-Primary pl-5 flex flex-col space-y-3"
            >
              {/* Stat Highlight Number */}
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-950">
                {stat.number}
              </div>
              {/* Stat Description */}
              <p className="text-gray-600 text-[14px] md:text-[15px] leading-relaxed font-normal">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* Source Footer Links */}
        <footer className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-3xl border-t border-transparent pt-4">
          <span className="font-semibold text-gray-700">Source:</span> GHUK submission to the All-Party Parliamentary Group for Gambling Reform, February 2026.{" "}
          <Link 
            to='/burden-of-harm' 
            className="text-Primary hover:text-[#0369a1] underline underline-offset-4 font-medium inline-flex items-center gap-1 transition-colors"
          >
            See the full picture &rarr;
          </Link>
        </footer>

      </div>
    </section>
  );
}