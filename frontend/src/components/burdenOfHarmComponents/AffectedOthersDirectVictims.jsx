import React from'react';

const AffectedOthersDirectVictims = () => {
 return (
 <section className="section-padding-x text-gray-800">
 <div className="">
 
 {/* Top Light Blue Accent Line */}
 <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />

 {/* Section Header */}
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
 5. Affected others are direct victims, not collateral
 </h2>

 {/* Lead Content Paragraphs */}
 <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600 mb-10">
 <p className="font-semibold text-gray-900">
 For every person experiencing severe gambling harm, around six others (partners, parents, children, siblings, close 
 friends) carry significant harm of their own (Goodwin et al., 2017), and by some estimates as many as ten. Unlike 
 tobacco or alcohol, around half of all gambling-related health loss is expected to fall on people other than the 
 person who gambles (GHUK APPG modelling, February 2026).
 </p>
 <p className="font-semibold text-gray-900">
The standard framing in gambling treatment and research is that "concerned significant others" are people who can be drawn into supporting a "primary case". This framing has consequences. It produces a service landscape in which affected others are routed through services designed for the person who gambles, rather than receiving support that is theirs by right.

We reject this framing. Affected others are not bystanders to someone else's choice. They are harmed directly by a product they did not choose to interact with, in ways that follow their own clear pattern: anxiety, depression, sleep loss, financial harm, relationship breakdown, bereavement risk, and intergenerational harm to children.
 </p>
 <p className="font-semibold text-gray-900">

We reject this framing. Affected others are not bystanders to someone else's choice. They are harmed directly by a product they did not choose to interact with, in ways that follow their own clear pattern: anxiety, depression, sleep loss, financial harm, relationship breakdown, bereavement risk, and intergenerational harm to children.
 </p>

 </div>

 {/* Structured Grid Definition List (Table layout on desktop, stacked on mobile) */}
 <div className="border-t border-gray-100 divide-y divide-gray-100 mb-12">
 
 {/* Row 1: Scale */}
 <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
 <div className="md:col-span-3 text-sm font-bold text-[#166B94] tracking-wide">
 Scale
 </div>
 <div className="md:col-span-9 text-xs md:text-sm text-gray-600 leading-relaxed">
 Around 9% of UK adults, more than four million people, were affected by someone else's gambling in the past year on the official Gambling Survey for Great Britain (2024), including 2.5% reporting at least one severe consequence; GambleAware's annual survey finds 8.1% (YouGov, 2024). These figures are self-reported, and likely conservative: stigma and hidden gambling mean many affected others never name the harm. Even the most conservative international prevalence estimates put the figure above 2.4 million (Dowling et al., 2025 systematic review).
 </div>
 </div>

 {/* Row 2: Pattern */}
 <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
 <div className="md:col-span-3 text-sm font-bold text-[#166B94] tracking-wide">
 Pattern
 </div>
 <div className="md:col-span-9 text-xs md:text-sm text-gray-600 leading-relaxed">
 The harm to affected others is consistent and well-documented: it includes financial loss, mental-health symptoms, 
 family breakdown, hypervigilance, and chronic stress, with severity that frequently meets clinical thresholds.
 </div>
 </div>

 {/* Row 3: Children */}
 <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
 <div className="md:col-span-3 text-sm font-bold text-[#166B94] tracking-wide">
 Children
 </div>
 <div className="md:col-span-9 text-xs md:text-sm text-gray-600 leading-relaxed">
 Children of someone with severe gambling harm form a distinct and especially-affected sub-group, with elevated 
 risk of childhood adversity, mental-health conditions, and later gambling harm.
 </div>
 </div>

 {/* Row 4: Bereavement */}
 <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
 <div className="md:col-span-3 text-sm font-bold text-[#166B94] tracking-wide">
 Bereavement
 </div>
 <div className="md:col-span-9 text-xs md:text-sm text-gray-600 leading-relaxed">
 Families bereaved by gambling-related suicide form one of the most isolated bereavement groups in the UK. Specialist 
 support exists (Gambling with Lives) but is dramatically underfunded relative to need.
 </div>
 </div>

 </div>

 {/* Position Callout Banner Box */}
 <div className="border-l-4 border-[#166B94] bg-[#292929] text-white p-6 md:p-8 shadow-md">
 <h4 className="text-[#3FABD4] font-semibold tracking-wide text-xs md:text-sm uppercase mb-3">
 Our position
 </h4>
 <p className="text-gray-300 text-xs md:text-sm md:text-base leading-relaxed font-light">
 UK gambling-harm treatment, research and policy should recognise affected others as a distinct population 
 with rights to support, not as adjuncts to the person who gambled. Funding for affected-others services 
 and bereavement support should be reflected separately in the statutory levy. The current investment is 
 several orders of magnitude smaller than the need.
 </p>
 </div>

 </div>
 </section>
 );
};

export default AffectedOthersDirectVictims;