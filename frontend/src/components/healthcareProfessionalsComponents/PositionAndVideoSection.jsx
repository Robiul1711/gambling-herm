import React from'react';
import meccVideo from'@/assets/videos/mecc.mp4';
import useClient from'@/hooks/useClient';

const PositionAndVideoSection = () => {
 const { data: responseData } = useClient({
 queryKey: ["about","healthcare-position-video"],
 url:"/about/healthcare-position-video",
 });

 const sectionData = responseData?.data;

 const tagline = sectionData?.title ||"Our position";
 
 // Combine lead statement and description
 const boldText = sectionData?.subtitle ||"Making Every Contact Count (MECC) should explicitly include gambling.";
 
 // Split description by double newlines to display as two paragraphs if exists, else use standard paragraphs
 let desc1 ="Brief, opportunistic, evidence-based conversation about gambling in routine clinical contact is one of the cheapest, fastest, highest-yield public-health interventions available, and one of the most neglected. Gambling deserves a place alongside the standard MECC topics (smoking, alcohol, weight, physical activity, mental wellbeing).";
 let desc2 ="We also support routine NHS coding of gambling harm, integration into mandatory undergraduate and postgraduate medical curricula, and dedicated MECC training resources for primary and community care.";

 if (sectionData?.description) {
 const paragraphs = sectionData.description.split("\n\n");
 if (paragraphs[0]) desc1 = paragraphs[0];
 if (paragraphs[1]) desc2 = paragraphs[1];
 }

 const videoUrl = sectionData?.audioUrl || meccVideo;
 const captionBold = sectionData?.audioTitle ||"MECC for gambling harm";
 const captionItalic = sectionData?.audioSource ||"GHUK's clinical training film. A 30–60-second opportunistic conversation, modelled in primary care.";

 return (
 <div className="w-full section-padding-y">
 {/* Responsive layout container */}
 <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-12">
 
 {/* Left Column: Callout Box */}
 <div className="flex-1 flex">
 <div className="relative w-full bg-[#f0f9ff] p-8 md:p-10 flex flex-col justify-center">
 {/* Solid Left Border Element */}
 <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#0082c3]"></div>
 
 {/* Tagline */}
 <span className="text-[#0082c3] text-sm font-semibold tracking-wide mb-4 inline-block">
 {tagline}
 </span>
 
 {/* Paragraph 1 */}
 <p className="text-[15px] md:text-16 text-gray-500 leading-relaxed mb-6">
 <span className="font-bold text-gray-800">
 {boldText}
 </span>{" "}
 {desc1}
 </p>
 
 {/* Paragraph 2 */}
 <p className="text-[15px] md:text-16 text-gray-500 leading-relaxed">
 {desc2}
 </p>
 </div>
 </div>

 {/* Right Column: Custom Video Player Mock */}
 <div className="flex-1 flex items-center justify-center">
 <div className="w-full bg-black overflow-hidden shadow-xl flex flex-col">
 
 {/* Video */}
 <video 
 key={videoUrl}
 src={videoUrl} 
 autoPlay 
 loop 
 muted
 controls
 className="w-full h-full object-cover"
 />
 
 {/* Video Meta Title Banner */}
 <div className="bg-[#141414] p-4 text-xs md:text-sm text-gray-300 border-t border-gray-800">
 <p className="leading-relaxed">
 <span className="font-bold text-white">{captionBold}</span> —{" "}
 <span className="italic text-gray-400">{captionItalic}</span>
 </p>
 </div>

 </div>
 </div>

 </div>
 </div>
 );
};

export default PositionAndVideoSection;