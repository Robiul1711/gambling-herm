import React from"react";

const PolicyTabs = ({ activeSection, onNavigate }) => {
  const tabs = [
    { id: "what-we-want-changed", label: "1. What We Want Changed" },
    { id: "what-we-reject", label: "2. What We Reject" },
    { id: "tobacco-control-parallel", label: "3. Tobacco-Control Parallel" },
    { id: "regulatory-capture-and-lobbying", label: "4. Regulatory Capture & Lobbying" },
    { id: "our-funding-and-coi", label: "5. Our Funding & COI" },
    { id: "current-asks-of-government", label: "6. Current Asks of Government" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6">
      <div className="flex flex-nowrap md:flex-wrap gap-2 md:gap-3 overflow-x-auto md:overflow-x-visible pb-1 scrollbar-hide snap-x w-full">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`px-3 py-2 text-xs md:text-sm font-medium border transition-all duration-200 cursor-pointer whitespace-nowrap snap-center shrink-0 ${
                isActive
                  ? "bg-[#1f2937] text-white border-[#1f2937] shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};


export default PolicyTabs;
