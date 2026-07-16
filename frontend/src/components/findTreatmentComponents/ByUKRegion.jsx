import React from"react";

const regions = [
 {
 region:"North East & Yorkshire",
 title:"Northern Gambling Service",
 items: [
"Leeds, main hub, NHS specialist clinic",
"Sunderland, clinic",
"Manchester (administered jointly with NW)",
"Self-referral by phone, web form, or via GP",
 ],
 note:"Operated by Leeds & York Partnership NHS Foundation Trust.",
 },
 {
 region:"North West",
 title:"NHS gambling services",
 items: [
"Manchester, NHS specialist clinic",
"Liverpool & Merseyside, services in development",
"Local IAPT / NHS Talking Therapies self-referral",
"Gamblers Anonymous meetings across the region",
 ],
 note:"Some services overlap with Northern Gambling Service hub.",
 },
 {
 region:"Midlands",
 title:"NHS gambling services",
 items: [
"Stoke-on-Trent, specialist NHS clinic",
"Birmingham & West Midlands, specialist provision",
"Nottingham / East Midlands, specialist provision",
"NHS Talking Therapies self-referral region-wide",
 ],
 note: null,
 },
 {
 region:"East Of England",
 title:"NHS gambling services",
 items: [
"Service provision varies by ICB area",
"NHS Talking Therapies self-referral",
"National Gambling Helpline triage to nearest specialist service",
"Gamblers Anonymous meetings in Cambridge, Norwich, Ipswich, Peterborough",
 ],
 note: null,
 },
 {
 region:"London",
 title:"National Gambling Clinic",
 items: [
"NHS National Gambling Clinic (Soho), run by Central and North West London NHS Foundation Trust, the longest-established NHS specialist service in the UK",
"NHS Talking Therapies self-referral across all London boroughs",
"Multiple Gamblers Anonymous meetings, in person and online",
 ],
 note:"Operated by Central and North West London NHS Foundation Trust.",
 },
 {
 region:"South East",
 title:"NHS gambling services",
 items: [
"NHS specialist provision available; coverage varies by ICB",
"NHS Talking Therapies self-referral",
"National Gambling Helpline triage to nearest service",
"Gamblers Anonymous meetings in Brighton, Reading, Oxford, Southampton, Portsmouth and others",
 ],
 note: null,
 },
 {
 region:"South West",
 title:"NHS gambling services",
 items: [
"Bristol, NHS specialist clinic",
"Devon & Cornwall, service provision varies by ICB",
"NHS Talking Therapies self-referral region-wide",
"Gamblers Anonymous meetings in Bristol, Exeter, Plymouth",
 ],
 note: null,
 },
 {
 region:"Scotland",
 title:"NHS & third-sector services",
 items: [
"NHS Lothian gambling pathway",
"NHS Greater Glasgow & Clyde, addiction services pathway",
"Scotland-wide referral via the National Gambling Helpline",
"Gamblers Anonymous meetings across Scotland",
 ],
 note: null,
 },
 {
 region:"Wales",
 title:"NHS & third-sector services",
 items: [
"Living Room Cardiff, specialist gambling support",
"NHS Wales addictions pathway via GP referral",
"National Gambling Helpline supports Wales-wide",
"Gamblers Anonymous meetings in Cardiff, Swansea, Newport, Wrexham",
 ],
 note:"Welsh-language helpline support available on request.",
 },
 {
 region:"Northern Ireland",
 title:"NHS & third-sector services",
 items: [
"HSC (Health & Social Care) addiction services via GP",
"Dunlewey Addiction Services, Belfast and outreach",
"Extern NI, community-based support",
"National Gambling Helpline supports NI",
 ],
 note: null,
 },
];

const fallbackText =
"The National Gambling Helpline (0808 8020 133) and the online services listed below are available everywhere in the UK. Many people in lower-coverage regions use a combination of online treatment, NHS Talking Therapies self-referral, and peer support. The helpline can also triage you to the nearest in-person service.";

export default function ByUKRegion() {
 return (
 <section
 id="by-uk-region"
 className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100 bg-[#fafafa]"
 >
 <div className="section-padding-x">
 {/* Header */}
 <header className="mb-10">
 <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 mb-4 leading-tight">
 NHS gambling clinics & specialist services by region
 </h2>
 <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
 The NHS gambling-clinic network has grown rapidly. The map below lists
 specialist NHS services by region, with local peer support and
 signposts. The picture changes frequently, we update this page
 quarterly; verify against the NHS service finder before travelling.
 </p>
 </header>

 {/* Region Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
 {regions.map(({ region, title, items, note }) => (
 <div
 key={region}
 className="bg-white border border-[#b2d8ec] p-5 sm:p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
 >
 {/* Region label */}
 <div className="flex items-center gap-2 mb-3">
 <span className="w-6 h-[2px] bg-[#156E94] shrink-0" />
 <span className="text-[#156E94] text-xs font-semibold tracking-wide">
 {region}
 </span>
 </div>

 {/* Service title */}
 <h3 className="text-[15px] sm:text-base font-bold text-gray-900 mb-3">
 {title}
 </h3>

 {/* Bullet list */}
 <ul className="space-y-1.5 flex-1">
 {items.map((item, i) => (
 <li
 key={i}
 className="flex items-start gap-2 text-[13px] sm:text-[14px] text-gray-600 leading-snug"
 >
 <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 shrink-0" />
 {item}
 </li>
 ))}
 </ul>

 {/* Optional footnote */}
 {note && (
 <p className="mt-4 text-[12px] text-gray-400 leading-relaxed border-t border-gray-100 pt-3">
 {note}
 </p>
 )}
 </div>
 ))}
 </div>

 {/* Callout box */}
 <div className="border-l-4 border-[#156E94] bg-white px-4 py-5 mb-8 max-w-4xl">
 <p className="text-[14px] sm:text-[15px] font-semibold text-gray-800 mb-2">
 If your region isn't well-covered, you are not without options
 </p>
 <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed">
 {fallbackText}
 </p>
 </div>
 {/* Bottom footnote */}
 <p className="text-[12px] sm:text-sm text-gray-400 leading-relaxed max-w-4xl">
 The information on this page is updated quarterly and reflects publicly-available information about NHS and major third-sector provision. Service availability changes; verify with the service or with the National Gambling Helpline before travelling.
 </p>

 </div>
 </section>
 );
}
