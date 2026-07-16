import React from"react";
import whatstigma from"@/assets/images/whatstigma.png";
import useClient from"@/hooks/useClient";

const reductionPoints = [
 {
 number: 1,
 title:
"Reframe to public-health language across government, regulator and media",
 description:
'"People affected by gambling" rather than"problem gamblers"."Harm caused by gambling products" rather than"gambling problems". This isn\'t cosmetic, the available frames determine what action is then thinkable.',
 },
 {
 number: 2,
 title:"Centre lived experience, not as testimony, as leadership",
 description:
"People with lived experience of gambling harm, including affected others and the bereaved, should sit at the centre of policy and service design. Not as case studies, as the people defining the response. This is one of the most reliably stigma-reducing things research finds.",
 },
 {
 number: 3,
 title:"Make the structural causes visible",
 description:
"Naming the commercial determinants (product design, marketing, regulation, industry lobbying) reduces stigma at the individual level. If the harm is shown to be industrial, the shame of being harmed by it shifts.",
 },
 {
 number: 4,
 title:"Take industry funding out of stigma-reduction work",
 description:
"The reputation dividend is incompatible with effective anti-stigma work. Stigma campaigns funded independently of the industry being studied are more credible and produce different framings.",
 },
];

const WhatReducesStigma = () => {
 const { data: responseData } = useClient({
 queryKey: ["about","work-stigma"],
 url:"/about/work-stigma",
 });

 const data = responseData?.data;

 const bottomStillImage = data?.audioUrl || whatstigma;
 const bottomStillCaption = data?.audioTitle ||"Still from GHUK's Brothers Gambling Harm safeguarding film — the people behind the statistics are not problems to be solved.";

 return (
 <section id="reduces-stigma" className="py-10 md:py-16">
 <div className="max-w-5xl mx-auto px-4">
 {/* Top Accent Line */}
 <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

 {/* Title */}
 <h2 className="text-3xl md:text-[40px] font-bold text-[#2d2d2d] leading-tight mb-6 tracking-tight">
 What actually reduces stigma
 </h2>

 {/* Intro Subtitle */}
 <p className="text-[#2d2d2d] text-base mb-10">
 The international evidence suggests three things move the needle.
 </p>

 {/* Lived Experience Media Player Box */}
 <div className="bg-[#f8f9fa] border-l-[4px] border-[#17a9df] p-6 md:p-8 mb-8">
 <div className="text-xs md:text-sm text-[#17a9df] font-medium mb-2">
 Lived experience · PhoenixFM, May 2026
 </div>
 <h4 className="text-base md:text-lg font-bold text-[#2d2d2d] mb-4">
 John Gilham On Shame, Stigma And The Language We Use About Gambling
 Harm
 </h4>

 {/* Audio Player Component */}
 <div className="mb-4 max-w-xl">
 <audio controls className="w-full h-10 accent-[#17a9df]">
 <source src="your-audio-file-path-here.mp3" type="audio/mpeg" />
 Your browser does not support the audio element.
 </audio>
 </div>

 <p className="text-xs md:text-sm text-[#687076]">
 Clip: John Gilham (lived experience), interviewed on Phoenix FM's 123 Friday show, May 2026.
 </p>
 </div>

 {/* Point Cards Layout Grid Stack */}
 <div className="space-y-4 mb-8">
 {reductionPoints.map((item) => (
 <div
 key={item.number}
 className="border border-gray-200 p-5 md:p-6 flex gap-5 items-start bg-white transition-all hover:border-gray-300"
 >
 {/* Number Circle Badge */}
 <div className="w-9 h-9 bg-[#0e7fad] text-white flex items-center justify-center font-bold shrink-0 mt-0.5 text-sm">
 {item.number}
 </div>

 {/* Text Area */}
 <div>
 <h4 className="text-base md:text-[17px] font-bold text-[#2d2d2d] mb-3 leading-snug">
 {item.title}
 </h4>
 <p className="text-[#687076] text-sm md:text-[15px] leading-relaxed">
 {item.description}
 </p>
 </div>
 </div>
 ))}
 </div>

 {/* Dark Position/Note Panel */}
 <div className="bg-[#262222] overflow-hidden shadow-xl border-l-[6px] border-[#17a9df] mb-12">
 <div className="p-8 md:p-10">
 <h4 className="text-[#17a9df] text-xs font-semibold uppercase tracking-wider mb-5">
 A note on language
 </h4>
 <p className="text-gray-300 text-[14px] md:text-[15px] leading-7">
 The phrase"12 ways to reduce stigma when discussing gambling
 harms" you may have seen is from a GambleAware-published language
 guide. The advice in it is largely sound. The frame around it
 (that stigma can be solved with better individual word choice)
 understates the structural piece. Use the language guide; reject
 the implied theory of change.
 </p>
 </div>
 </div>

 {/* Video Still Image and Caption Container */}
 <div className="max-w-xl mx-auto md:max-w-md flex flex-col items-center text-center mt-12">
 <div className="w-full aspect-[16/10] bg-gray-200 overflow-hidden mb-4 shadow-sm">
 <img
 src={bottomStillImage}
 alt="Still from GHUK's Brothers Gambling Harm safeguarding film"
 className="w-full h-full object-cover"
 />
 </div>
 <p className="text-xs md:text-sm text-[#2d2d2d] leading-relaxed max-w-sm">
 {bottomStillCaption}
 </p>
 </div>
 </div>
 </section>
 );
};

export default WhatReducesStigma;
