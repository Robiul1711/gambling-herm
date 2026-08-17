import React from "react";
import { Link } from "react-router-dom";
import cyHeroImg from "@/assets/images/cy.png";

const TeachersCypHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-12 md:py-20 border-b border-sky-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Breadcrumb */}
          <div className="lg:col-span-7">
            {/* Breadcrumb Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#0092D0]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
                FOR PROFESSIONALS &middot; TEACHERS &amp; THE CYP WORKFORCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
              Gambling harm reaches further into childhood than the public
              conversation acknowledges.
            </h1>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 font-normal">
              Two distinct populations sit inside the CYP picture: children who
              gamble themselves, and children of people who gamble excessively.
              Both are underserved, both are well-evidenced, and both are
              missing from most current policy thinking. This page is for
              teachers, safeguarding leads and everyone whose work touches
              children and young people.
            </p>

            {/* Highlight with Link */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              <strong className="font-bold text-gray-900 mr-1.5">
                If you're a young person looking for support, this page isn't
                written for you:
              </strong>
              <Link
                to="/get-help/young-people"
                className="underline text-gray-900 hover:text-[#0092D0] font-semibold transition-colors"
              >
                our young people page
              </Link>{" "}
              is.
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md overflow-hidden  shadow-xs border border-slate-200/80 bg-slate-100">
              <img
                src={cyHeroImg}
                alt="Young people with football in community"
                className="w-full h-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypHero;
