import React from"react";

const PolicyTabs = ({ activeSection, onNavigate }) => {
 const tabs = [
 { id:"what-we-want-changed", label:"What we want changed" },
 { id:"what-we-reject", label:"What we reject" },
 { id:"tobacco-control-parallel", label:"Tobacco-control parallel" },
 { id:"regulatory-capture-and-lobbying", label:"Regulatory capture & lobbying" },
 { id:"our-funding-and-coi", label:"Our funding & COI" },
 { id:"current-asks-of-government", label:"Current asks of government" },

 ];

 return (
 
 <div className="flex flex-wrap gap-4 section-padding-x">
 {tabs.map((tab) => (
 <button
 key={tab.id}
 onClick={() => onNavigate(tab.id)}
 className={`px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border cursor-pointer
 ${
 activeSection === tab.id
 ?"bg-Primary text-white border-Primary shadow-md scale-105"
 :"bg-white text-gray-600 border-gray-300 hover:border-Primary hover:text-Primary hover:bg-gray-50"
 }`}
 >
 {tab.label}
 </button>
 ))}
 
 </div>
 );
};

export default PolicyTabs;
