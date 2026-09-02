import React from "react";
import { Link } from "react-router-dom";

export default function WhoGamblingHarms() {
  const stats = [
    // {
    //   number: "£37bn",
    //   text: (
    //     <>
    //       a year: the health loss from gambling in the UK, valued at the £70,000
    //       Green Book societal value of a QALY. That is roughly 370 times the
    //       statutory levy on gambling operators. Around 530,000 quality-adjusted
    //       life years, of which roughly two-fifths fall on people harmed by
    //       someone else's gambling or on children, close to half before the
    //       household-overlap adjustment.
    //     </>
    //   ),
    // },
    {
      number: "912,805",
      text: (
        <>
          children in England live in a household where an adult may benefit
          from gambling treatment or support (Office for Health Improvement and
          Disparities, 2023; roughly 7 to 8% of the child population). Gambling
          harm isn't confined to a small, clinically distinct group
        </>
      ),
    },
    {
      number: "~9%",
      text: (
        <>
          of adults in Great Britain, about 4.9 million people, reported
          experiencing harm from someone else's gambling in the past year:
          partners, parents, children, siblings, close friends. That is
          comparable in scale to the number harmed by their own gambling
          (Gambling Commission,{" "}
          <em className="italic">
            Insights into affected others from the GSGB
          </em>
          , 2026, n=19,714).
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white text-[#1f2937] py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Tagline with Horizontal Blue Bar */}
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-6 h-[2.5px] bg-Primary"></div>
          <span className="text-Primary text-xs font-bold tracking-widest uppercase">
            The scale of harm
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-950 mb-10 md:mb-12">
          Who gambling harms.
        </h2>

        {/* 2-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-l-[3.5px] border-Primary pl-5 flex flex-col space-y-3"
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

        {/* Bottom Link */}
        <div className="pt-2">
          <Link
            to="/burden-of-harm"
            className="text-Primary hover:text-[#0369a1] underline underline-offset-4 font-medium text-sm sm:text-base inline-flex items-center gap-1 transition-colors"
          >
            See the full picture →
          </Link>
        </div>
      </div>
    </section>
  );
}
