import React from "react";
import { Link } from "react-router-dom";
import brothersVid from "@/assets/videos/safeguarding-brothers.mp4";
import fatherDaughterVid from "@/assets/videos/safeguarding-father-daughter.mp4";
import motherDaughterVid from "@/assets/videos/safeguarding-mother-daughter.mp4";

const films = [
  {
    category: "Brothers",
    title: "Brothers Gambling Harm",
    video: brothersVid,
    description:
      "An older brother's gambling lands on a younger sibling who didn't choose it. A film about how harm travels sideways inside a family.",
  },
  {
    category: "Father & Daughter",
    title: "Father and Daughter Gambling Harm",
    video: fatherDaughterVid,
    description:
      "A daughter carries the weight of a father's gambling at home. The harm a parent rarely sees themselves.",
  },
  {
    category: "Mother & Daughter",
    title: "Mother and Daughter Gambling Harm",
    video: motherDaughterVid,
    description:
      "A mother gambling on her phone, a daughter watching, a household quietly changing shape.",
  },
];

export default function WhatHarmLooksLike() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#222120] text-white">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Accent Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-[#0092D0] shrink-0" />
            <span className="text-[#0092D0] text-xs font-semibold uppercase tracking-wider">
              Our position
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white leading-tight">
              What gambling harm looks like inside a home.
            </h2>
            <p className="mt-4 text-[14px] sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Three short films, each made with affected others. Used in our
              medical-school teaching, safeguarding training and public-health
              work. Watch them in any order.
            </p>
          </div>

          {/* Films Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {films.map((film, index) => (
              <div key={index} className="flex flex-col">
                {/* Video Player */}
                <div className="mb-4 aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-gray-800">
                  <video
                    src={film.video}
                    controls
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                </div>

                {/* Film Description Content */}
                <div className="flex flex-col">
                  <span className="text-[#0092D0] text-[13px] sm:text-[14px] font-semibold mb-2">
                    {film.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {film.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-300">
                    {film.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-300">
            All three films are also used in our{" "}
            <Link
              to="/professionals/healthcare"
              className="text-[#0092D0] hover:underline"
            >
              MECC clinical training
            </Link>
            . To request the films for teaching, contact{" "}
            <a
              href="mailto:hello@gamblingharm.com"
              className="text-[#0092D0] hover:underline"
            >
              hello@gamblingharm.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
