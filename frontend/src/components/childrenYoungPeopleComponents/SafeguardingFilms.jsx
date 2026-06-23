import React from "react";
// Renamed imports to avoid duplicates
import fatherDaughterImg from "@/assets/images/cy2.png";
import motherDaughterImg from "@/assets/images/cy3.png";
import brothersImg from "@/assets/images/cy4.png";

const SafeguardingFilms = () => {
  const films = [
    {
      id: 1,
      image: fatherDaughterImg,
      title: "Father and Daughter",
    },
    {
      id: 2,
      image: motherDaughterImg,
      title: "Mother and Daughter",
    },
    {
      id: 3,
      image: brothersImg,
      title: "Brothers",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto text-[#4A4A4A] ">
      {/* Header Section */}
      <div className="max-w-3xl mb-8 md:mb-12">
        <h2 className="text-[#3A86B9] font-semibold text-base mb-3 xxs:text-lg sm:text-xl">
          Stills from GHUK’s Safeguarding films
        </h2>
        <p className="text-sm leading-relaxed text-gray-600 xs:text-base">
          Three short films, each made with affected others, illustrate what gambling harm looks like for the children in a household. Watch them all on the{" "}
          <a
            href="#"
            className="text-gray-800 underline hover:text-[#3A86B9] transition-colors duration-200 decoration-1 underline-offset-4 font-medium"
          >
            Affected others page.
          </a>
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 md:grid-cols-3">
        {films.map((film) => (
          <div key={film.id} className="flex flex-col group">
            {/* Image Container with aspect ratio and rounded corners */}
            <div className="overflow-hidden rounded-[20px] aspect-[4/3] bg-gray-100 shadow-sm">
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Caption */}
            <p className="mt-3 text-sm italic text-gray-500 font-medium md:text-base">
              {film.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SafeguardingFilms;