import React from "react";
import { Link } from "react-router-dom";

const usageItems = [
  {
    title: "Parliamentary evidence.",
    body: "Cited across GHUK's submissions to the All-Party Parliamentary Group on Gambling Reform, including our 2026 APPG burden-of-harm submission.",
  },
  {
    title: "Medical and public-health education.",
    body: "The framework underpins our work with Geeky Medics, Osmosis, Imperial College London, RCPsych gambling sub-group and FPH-aligned training.",
  },
  {
    title: "Experts by Experience workshops.",
    body: "Adapted material is used in GHUK's Expert-by-Experience-led training and workshops for young people, professionals and ICB partners.",
  },
  {
    title: "Independent reference for journalists and researchers.",
    body: "A starting reference for anyone who wants the public-health view without the industry framing.",
  },
];

const HowItIsUsed = () => {
  return (
    <section id="how-it-is-used" className="scroll-mt-28 my-12">
      {/* Main Section Header */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">
        How <em className="italic">Gambling Explained</em> is used
      </h2>

      {/* Structured Rows Container */}
      <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
        {usageItems.map((item, idx) => (
          <div key={idx} className="py-5 text-sm md:text-base leading-relaxed text-gray-700">
            <strong className="font-bold text-gray-900 mr-1.5">{item.title}</strong>
            <span>{item.body}</span>
          </div>
        ))}

        {/* 5th Row: The structural backbone of this website */}
        <div className="py-5 text-sm md:text-base leading-relaxed text-gray-700">
          <strong className="font-bold text-gray-900 mr-1.5">
            The structural backbone of this website.
          </strong>
          <span>
            The pages on{" "}
            <Link
              to="/burden-of-harm"
              className="text-gray-900 underline font-medium hover:text-[#0093D0] transition-colors"
            >
              burden
            </Link>
            ,{" "}
            <Link
              to="/gambling-tactics"
              className="text-gray-900 underline font-medium hover:text-[#0093D0] transition-colors"
            >
              tactics
            </Link>
            ,{" "}
            <Link
              to="/understanding-gambling-harms"
              className="text-gray-900 underline font-medium hover:text-[#0093D0] transition-colors"
            >
              understand harms
            </Link>
            ,{" "}
            <Link
              to="/get-help/family-friends"
              className="text-gray-900 underline font-medium hover:text-[#0093D0] transition-colors"
            >
              family &amp; friends
            </Link>
            ,{" "}
            <Link
              to="/inequality-and-gambling-harm"
              className="text-gray-900 underline font-medium hover:text-[#0093D0] transition-colors"
            >
              inequality
            </Link>{" "}
            and{" "}
            <Link
              to="/policy-and-advocacy"
              className="text-gray-900 underline font-medium hover:text-[#0093D0] transition-colors"
            >
              policy
            </Link>{" "}
            all sit on top of the framework in <em className="italic">Gambling Explained</em>.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItIsUsed;
