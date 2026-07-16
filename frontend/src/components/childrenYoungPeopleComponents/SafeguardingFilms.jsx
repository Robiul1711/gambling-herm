import React from"react";
// Renamed imports to avoid duplicates
import fatherDaughterImg from"@/assets/images/cy2.png";
import motherDaughterImg from"@/assets/images/cy3.png";
import brothersImg from"@/assets/images/cy4.png";
import { Link } from"react-router-dom";
import useClient from"@/hooks/useClient";

const SafeguardingFilms = () => {
 // Fetch header data
 const { data: headerResponse } = useClient({
 queryKey: ["about","cyp-safeguarding-header"],
 url:"/about/cyp-safeguarding-header",
 });

 // Fetch individual films data
 const { data: film1Response } = useClient({
 queryKey: ["about","cyp-safeguarding-film-1"],
 url:"/about/cyp-safeguarding-film-1",
 });

 const { data: film2Response } = useClient({
 queryKey: ["about","cyp-safeguarding-film-2"],
 url:"/about/cyp-safeguarding-film-2",
 });

 const { data: film3Response } = useClient({
 queryKey: ["about","cyp-safeguarding-film-3"],
 url:"/about/cyp-safeguarding-film-3",
 });

 const headerData = headerResponse?.data;
 const film1Data = film1Response?.data;
 const film2Data = film2Response?.data;
 const film3Data = film3Response?.data;

 const sectionTitle = headerData?.title ||"Stills from GHUK’s Safeguarding films";

 const renderDescription = () => {
 const defaultText =
"Three short films, each made with affected others, illustrate what gambling harm looks like for the children in a household. Watch them all on the Affected others.";
 const text = headerData?.description || defaultText;

 // Check if the text matches the default format or contains the phrase
 const targetPhrase ="Affected others.";
 if (text.includes(targetPhrase)) {
 const lastIndex = text.lastIndexOf(targetPhrase);
 const before = text.substring(0, lastIndex);
 const after = text.substring(lastIndex + targetPhrase.length);
 return (
 <>
 {before}
 <Link
 to="/get-help/family-friends"
 className="text-gray-800 underline hover:text-[#3A86B9] transition-colors duration-200 decoration-1 underline-offset-4 font-medium"
 >
 Affected others.
 </Link>
 {after}
 </>
 );
 }
 return text;
 };

 const films = [
 {
 id: 1,
 image: film1Data?.image || fatherDaughterImg,
 title: film1Data?.title ||"Father and Daughter",
 },
 {
 id: 2,
 image: film2Data?.image || motherDaughterImg,
 title: film2Data?.title ||"Mother and Daughter",
 },
 {
 id: 3,
 image: film3Data?.image || brothersImg,
 title: film3Data?.title ||"Brothers",
 },
 ];

 return (
 <section className="w-full max-w-5xl mx-auto text-[#4A4A4A]">
 {/* Header Section */}
 <div className="max-w-3xl mb-8 md:mb-12">
 <h2 className="text-[#3A86B9] font-semibold text-base mb-3 xxs:text-lg sm:text-xl">
 {sectionTitle}
 </h2>
 <p className="text-sm leading-relaxed text-gray-600 xs:text-base">
 {renderDescription()}
 </p>
 </div>

 {/* Responsive Cards Grid */}
 <div className="grid grid-cols-1 gap-6 xs:gap-8 sm:grid-cols-2 md:grid-cols-3">
 {films.map((film) => (
 <div key={film.id} className="flex flex-col group">
 {/* Image Container with aspect ratio and corners */}
 <div className="overflow-hidden ] aspect-[4/3] bg-gray-100 shadow-sm">
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