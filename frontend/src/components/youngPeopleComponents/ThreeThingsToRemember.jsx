import React from "react";
import { Link } from "react-router-dom";

export default function ThreeThingsToRemember() {
  return (
    <section className="w-full">
      {/* Banner Section */}
      <div className="w-full bg-[#486367] text-white py-16 md:py-20 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* White Accent Line */}
          <div className="w-12 h-[2.5px] bg-white/70 mx-auto mb-6"></div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Three things to remember.
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-white/90 font-normal">
            It's not your fault. You're not the only one. And asking for help works.
          </p>

          {/* Action Button */}
          <div className="mt-8">
            <a
              href="https://www.childline.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-800 font-bold text-sm px-6 py-3 rounded-md hover:bg-slate-100 transition-colors shadow-xs"
            >
              Visit Childline &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Guidance Footer for Adults */}
      <div className="w-full bg-white py-12 md:py-16 text-center border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-700 font-normal">
          An adult looking for guidance? See our{" "}
          <Link
            to="/get-help/family-friends"
            className="underline font-bold text-slate-900 hover:text-black"
          >
            family &amp; friends page
          </Link>{" "}
          or our{" "}
          <Link
            to="/professionals/teachers-cyp"
            className="underline font-bold text-slate-900 hover:text-black"
          >
            teachers &amp; CYP professionals page
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
