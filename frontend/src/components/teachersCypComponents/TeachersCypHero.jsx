import React from "react";
import { Link } from "react-router-dom";
import cyHeroImg from "@/assets/images/cy.png";

const TeachersCypHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-16 md:py-24 border-b border-sky-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Text & Breadcrumb */}
          <div className="lg:col-span-7">
            {/* Breadcrumb Tagline */}
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-5 h-[2.5px] bg-[#0093D0]"></span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0093D0]">
                FOR PROFESSIONALS &middot; TEACHERS &amp; THE CYP WORKFORCE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#1e293b] leading-[1.18] tracking-tight mb-8">
              Gambling harm reaches further into childhood than the public
              conversation acknowledges.
            </h1>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-6 font-normal">
              Two distinct populations sit inside the CYP picture: children who
              gamble themselves, and children of people who gamble excessively.
              Both are underserved, both are well-evidenced, and both are missing
              from most current policy thinking. This page is for teachers,
              safeguarding leads and everyone whose work touches children and
              young people.
            </p>

            {/* Highlight with Link */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
              <strong className="font-bold text-[#1e293b]">
                If you're a young person looking for support, this page isn't
                written for you:
              </strong>{" "}
              <Link
                to="/get-help/young-people"
                className="underline text-slate-900 hover:text-[#0093D0] font-semibold transition-colors"
              >
                our young people page
              </Link>{" "}
              is.
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-sm border border-slate-200/80 bg-slate-100">
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
