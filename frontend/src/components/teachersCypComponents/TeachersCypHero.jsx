import React from "react";
import { Link } from "react-router-dom";
import cyHeroImg from "@/assets/images/cy.png";

const TeachersCypHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-12 md:py-20 border-b border-sky-100/60">
      <div className="section-padding-x">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Breadcrumb Tagline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#0092D0]"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
              FOR PROFESSIONALS &middot; TEACHERS &amp; THE CHILDREN AND YOUNG
              PEOPLE'S WORKFORCE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6 max-w-3xl">
            Gambling harm reaches further into childhood than the public
            conversation acknowledges.
          </h1>

          {/* Paragraph 1 */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 font-normal max-w-3xl">
            Two distinct populations sit inside the children and young people
            picture: children who gamble themselves, and children living with
            someone else's gambling. Both are underserved, both are
            well-evidenced, and both are missing from most current policy
            thinking. This page is for teachers, safeguarding leads and everyone
            whose work touches children and young people.
          </p>

          {/* Highlight with Link */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl">
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
      </div>
    </section>
  );
};

export default TeachersCypHero;
