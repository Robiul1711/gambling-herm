import React, { useState, useEffect, useRef } from"react";

const tabs = [
  { id: "available-everywhere", label: "1. Available everywhere" },
  { id: "by-uk-region", label: "2. By UK region" },
  { id: "online-options", label: "3. Online options" },
  { id: "residential-intensive", label: "4. Residential & intensive" },
  { id: "specialist-services", label: "5. Specialist services" },
  { id: "financial-support", label: "6. Financial support" },
];


export default function FindTreatmentNav() {
 const [activeTab, setActiveTab] = useState("available-everywhere");
 const navRef = useRef(null);

 // Update active tab based on scroll position
 useEffect(() => {
 const observer = new IntersectionObserver(
 (entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 setActiveTab(entry.target.id);
 }
 });
 },
 {
 rootMargin:"-30% 0px -60% 0px",
 threshold: 0,
 }
 );

 tabs.forEach(({ id }) => {
 const el = document.getElementById(id);
 if (el) observer.observe(el);
 });

 return () => observer.disconnect();
 }, []);

 const handleTabClick = (id) => {
 setActiveTab(id);
 const el = document.getElementById(id);
 if (el) {
 const navHeight = navRef.current?.offsetHeight || 64;
 const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
 window.scrollTo({ top, behavior:"smooth" });
 }
 };

 return (
 <div
 ref={navRef}
 className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm"
 >
 {/* Scrollable tabs on mobile, wrapping on wider screens */}
 <div className="section-padding-x">
 <div className="max-w-5xl mx-auto">
 <div className="flex flex-nowrap md:flex-wrap gap-2 py-3 overflow-x-auto scrollbar-hide snap-x">
 {tabs.map(({ id, label }) => {
 const isActive = activeTab === id;
 return (
 <button
 key={id}
 onClick={() => handleTabClick(id)}
 className={`shrink-0 snap-center whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-medium border transition-all duration-200 cursor-pointer ${
 isActive
 ?"bg-[#1f2937] text-white border-[#1f2937]"
 :"bg-white text-gray-700 border-gray-300 hover:border-gray-500 hover:bg-gray-50"
 }`}
 >
 {label}
 </button>
 );
 })}
 </div>
 </div>
 </div>
 </div>
 );
}
