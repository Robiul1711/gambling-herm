import React from"react";
import homeBanner from"@/assets/images/home.png";
import { Link } from"react-router-dom";
import useClient from"@/hooks/useClient";

export default function Banner() {
 const { data, isLoading } = useClient({
 queryKey: ["banner"],
 url:"/banner",
 });

 const bannerData = data?.data;

 // Format tags: uppercase and dot-separated
 const tagsText =
 bannerData?.tags && bannerData.tags.length > 0
 ? bannerData.tags.map((tag) => tag.toUpperCase()).join(" ·")
 :"INDEPENDENT · NO INDUSTRY FUNDING · LIVED EXPERIENCE INFORMED";

 if (isLoading) {
 return (
 <section className="w-full bg-white py-12 md:py-20 lg:py-24 animate-pulse">
 <div className="section-padding-x">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 {/* LEFT COLUMN: Text Content Skeleton */}
 <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
 {/* Tagline starting with horizontal line */}
 <div className="flex items-center space-x-2">
 <div className="w-6 h-[2px] bg-slate-200" />
 <div className="h-3 w-64 bg-slate-200" />
 </div>

 {/* Main Headline Skeleton */}
 <div className="space-y-3">
 <div className="h-9 sm:h-12 w-[90%] bg-slate-200" />
 <div className="h-9 sm:h-12 w-[95%] bg-slate-200" />
 <div className="h-9 sm:h-12 w-[60%] bg-slate-200" />
 </div>

 {/* Description Skeleton */}
 <div className="space-y-2 pt-2">
 <div className="h-4 w-[100%] bg-slate-200" />
 <div className="h-4 w-[98%] bg-slate-200" />
 <div className="h-4 w-[85%] bg-slate-200" />
 </div>

 {/* Action Buttons Skeleton */}
 <div className="flex flex-wrap items-center gap-4 pt-4">
 <div className="h-12 w-48 bg-slate-200" />
 <div className="h-12 w-52 bg-slate-200" />
 </div>
 </div>

 {/* RIGHT COLUMN: Graphical Layout Skeleton */}
 <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
 {/* Image Frame Placeholder */}
 <div className="w-full max-w-[500px] aspect-[4/5] bg-slate-200" />
 
 {/* Image Caption Placeholder */}
 <div className="w-full max-w-[500px] space-y-2 mt-4">
 <div className="h-3.5 w-[100%] bg-slate-200" />
 <div className="h-3.5 w-[65%] bg-slate-200" />
 </div>
 </div>
 </div>
 </div>
 </section>
 );
 }

 return (
 <section className="w-full bg-white py-12 md:py-20 lg:py-24">
 <div className="section-padding-x">
 {/* Main Grid Layout */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 {/* LEFT COLUMN: Text Content & Actions (Takes 7 spans on desktop) */}
 <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
 {/* Tagline starting with horizontal line */}
 <div className="flex items-center space-x-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#156E94]">
 <span className="w-6 h-[2px] bg-[#156E94]" />
 <span>{tagsText}</span>
 </div>

 {/* Main Catchy Headline */}
 <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-gray-900 tracking-tight leading-[1.12]">
 {bannerData?.title ||"Gambling harm in the UK is bigger than the headlines say."}
 </h1>

 {/* Description */}
 <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
 {bannerData?.description ||
"On our burden-of-disease modelling, gambling ranks among the top five modifiable risks to the UK's health. Unlike tobacco or alcohol, around half of the harm is expected to fall on people who never placed a bet. We're an independent UK charity. We support the people gambling has harmed and the families around them, and we push for the policy change that prevents it."}
 </p>

 {/* Action Buttons Row */}
 <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
 <Link
 to={bannerData?.primaryBtnLink ||"/get-help"}
 className="bg-[#156e94] hover:bg-[#0d4a63] text-white font-bold
 px-5 sm:px-6 py-3 sm:py-3.5
 transition-all duration-200 shadow-sm
 text-sm sm:text-base text-center"
 >
 {bannerData?.primaryBtnText ||"Gambling is harming me"}
 </Link>

 <Link
 to={bannerData?.secondaryBtnLink ||"/get-help/family-friends"}
 className="bg-white border border-gray-300 hover:border-gray-900 text-gray-800 font-bold
 px-5 sm:px-6 py-3 sm:py-3.5
 transition-all duration-200
 text-sm sm:text-base text-center shadow-sm"
 >
 {bannerData?.secondaryBtnText ||"I'm worried about someone"}
 </Link>
 </div>
 </div>

 {/* RIGHT COLUMN: Graphical Layout / Frame Container (Takes 5 spans on desktop) */}
 <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
 {/* The Custom Rounded Main Frame */}
 <div className="w-full max-w-[500px] aspect-[4/5] overflow-hidden border border-slate-100 shadow-sm bg-gray-50">
 <img
 src={bannerData?.image || homeBanner}
 alt="Presentation regarding public health risks"
 className="w-full h-full object-cover"
 />
 </div>

 {/* Image Caption */}
 <p className="mt-3 text-xs sm:text-[13px] text-gray-500 italic max-w-[500px] text-left w-full leading-relaxed">
 {bannerData?.statDescription ||
"Dr Kishan Patel, GHUK CEO, lecturing on gambling harm in primary-care consultations. Anglia Ruskin University, January 2026."}
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
