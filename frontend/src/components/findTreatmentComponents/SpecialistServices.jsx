import React from"react";

const services = [
 {
 title:"Women",
 description:
"The Women's Programme at GamCare and Gordon Moody offer women-specific groups and one-to-one provision. Many women experiencing gambling harm find a women-only space substantially easier to enter.",
 },
 {
 title:"Young people (under 25)",
 description:
"NHS clinics, GamCare, and dedicated CYP services. YGAM runs prevention-led programmes; Big Deal (GamCare) is specifically for young people. NHS Talking Therapies routes are also available for under-25s.",
 },
 {
 title:"Children of affected others",
 description:
"GamCare's affected-others service supports children, where appropriate, alongside their parents. Young Minds (parents helpline: 0808 802 5544) and NSPCC (0808 800 5000) can also help where the household situation is complex.",
 },
 {
 title:"Veterans",
 description:
"The veteran community carries elevated gambling-harm risk. Combat Stress and Veterans' Gateway coordinate with the NHS gambling services for veteran-specific routes.",
 },
 {
 title:"LGBTQ+ people",
 description:
"LGBTQ+-affirmative provision is available through GamCare and through specialist therapy referrals; the NHS Northern Gambling Service has explicit guidance for LGBTQ+ users.",
 },
 {
 title:"Minority ethnic communities",
 description:
"GamCare and the NHS clinics operate community partnerships with several UK minority-ethnic-led organisations to reduce barriers to access. Specialist culturally-informed provision is unevenly distributed; ask the helpline what is available locally.",
 },
];

export default function SpecialistServices() {
 return (
 <section
 id="specialist-services"
 className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100 bg-white"
 >
 <div className="max-w-5xl mx-auto px-4 sm:px-6">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
 Specialist services
 </h2>
 <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] leading-relaxed">
 Several populations are still significantly underserved by the
 mainstream offer. The services below have an explicit specialism, not
 because everyone in these groups needs different treatment, but
 because consistent specialist provision reduces the cost of seeking
 help.
 </p>
 </div>

 {/* Services Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((item, index) => (
 <div
 key={index}
 className="border border-[#b2d8ec] bg-white p-6 sm:p-7 hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
 >
 <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-snug">
 {item.title}
 </h3>
 <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5f6472]">
 {item.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
