import React from"react";

const editions = [
 {
 year:"The 2021 edition",
 description:
"The original Gambling Explained PDF, written for the 2021 Gambling Act Review. Citation: Gambling Explained 2021. Gambling Harm UK (then Gambling Education Network). Independently written and funded by'Affected Other' researchers.",
 linkLabel:"Download The 2021 PDF",
 href:"#",
 available: true,
 },
 {
 year:"The 2025/26 edition (in preparation)",
 description:
"The revised edition incorporates GHSI 2025, the GambleAware archive, the bank-transaction mortality work, and the past five years of affected-others research. Expected publication late 2026 with associated parliamentary submission.",
 linkLabel:"Email Research@GamblingHarm.Com",
 href:"mailto:Research@GamblingHarm.Com",
 available: false,
 },
];

const ReadAndCite = () => {
 return (
 <section id="read-and-cite" className="scroll-mt-28">
 {/* Section header */}
 <div className="mb-8">
 <div className="w-10 h-0.5 bg-Primary mb-3" />
 <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
 Read, Cite, Use
 </h2>
 </div>

 {/* Edition cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {editions.map((edition, idx) => (
 <div
 key={idx}
 className={`border p-6 flex flex-col gap-4 transition-shadow hover:shadow-md ${
 edition.available
 ?"border-slate-200 bg-white"
 :"border-slate-200 bg-slate-50"
 }`}
 >
 <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
 {edition.year}
 </h3>
 <p className="text-slate-600 text-sm leading-relaxed flex-1">
 {edition.description}
 </p>
 <a
 href={edition.href}
 className="text-Primary text-sm font-medium underline underline-offset-2 hover:opacity-75 transition-opacity self-start"
 >
 {edition.linkLabel}
 </a>
 </div>
 ))}
 </div>
 </section>
 );
};

export default ReadAndCite;
