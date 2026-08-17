import React from "react";
import { Link } from "react-router-dom";
import still1 from "@/assets/images/cy2.png";
import still2 from "@/assets/images/cy3.png";
import still3 from "@/assets/images/cy4.png";

const filmsData = [
  {
    image: still1,
    caption: "Father and Daughter",
  },
  {
    image: still2,
    caption: "Mother and Daughter",
  },
  {
    image: still3,
    caption: "Brothers",
  },
];

const TeachersCypFilmStills = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-[#0092D0]"></span>
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
            STILLS FROM GHUK'S SAFEGUARDING FILMS
          </span>
        </div>

        {/* Narrative Paragraph with Link */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-normal">
          Three short films, each made with affected others, illustrate what
          gambling harm looks like for the children in a household. Watch them
          all on the{" "}
          <Link
            to="/get-help/family-friends"
            className="underline text-gray-900 hover:text-[#0092D0] font-semibold transition-colors"
          >
            Affected others page
          </Link>
          .
        </p>

        {/* 3 Stills Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filmsData.map((film, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="overflow-hidden  aspect-[16/10] bg-slate-900 shadow-xs border border-slate-200/80">
                <img
                  src={film.image}
                  alt={film.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="italic text-gray-500 text-xs sm:text-sm mt-2.5 font-normal">
                {film.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersCypFilmStills;
