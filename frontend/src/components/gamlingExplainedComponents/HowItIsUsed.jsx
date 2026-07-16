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
    title: "Lived-experience workshops.",
    body: "Adapted material is used in GHUK's lived-experience-led training and workshops for young people, professionals and ICB partners.",
  },
  {
    title: "Independent reference for journalists and researchers.",
    body: "A starting reference for anyone who wants the public-health view without the industry framing.",
  },
];

const HowItIsUsed = () => {
  return (
    <section id="how-it-is-used" className="scroll-mt-28">
      {/* Section header */}
      <div className="mb-8">
        <div className="w-10 h-0.5 bg-Primary mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          How <em>gambling explained</em> is used
        </h2>
      </div>

      {/* Usage list */}
      <div className="divide-y divide-slate-200 border-t border-slate-200">
        {usageItems.map((item, idx) => (
          <div key={idx} className="py-5 flex gap-4 group">
            <div className="mt-1 w-1.5 h-1.5 bg-Primary flex-shrink-0 mt-2" />
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              <span className="font-bold text-slate-800">{item.title}</span>
              {" "}
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-6 text-slate-600 text-sm md:text-base leading-relaxed">
        The structural backbone of this website. The pages on{" "}
        <Link
          to="/burden-of-harm"
          className="text-Primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          burden
        </Link>
        ,{" "}
        <Link
          to="/gambling-tactics"
          className="text-Primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          tactics
        </Link>
        ,{" "}
        <Link
          to="/understanding-gambling-harms"
          className="text-Primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          understand harms
        </Link>
        ,{" "}
        <Link
          to="/get-help/family-friends"
          className="text-Primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          affected others
        </Link>
        ,{" "}
        <Link
          to="/inequality-and-gambling-harm"
          className="text-Primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          inequality
        </Link>{" "}
        and{" "}
        <Link
          to="/policy-and-advocacy"
          className="text-Primary underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          policy
        </Link>{" "}
        all sit on top of the framework in Gambling Explained.
      </p>
    </section>
  );
};

export default HowItIsUsed;
