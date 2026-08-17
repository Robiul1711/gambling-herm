import React from "react";

const TacticsSidebar = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: "why-this-exists", label: "Why this exists", isHeader: false },
    { id: "tactic-1", label: "1. Arguments and language", isHeader: true },
    { id: "tactic-2", label: "2. Advertising and sponsorship", isHeader: true },
    { id: "tactic-3", label: "3. Industry people and allies", isHeader: true },
    { id: "tactic-4", label: '4. "Harm reduction" framings', isHeader: true },
    { id: "tactic-5", label: "5. Product design", isHeader: true },
    { id: "tactic-6", label: "6. Availability and clustering", isHeader: true },
    { id: "tactic-7", label: "7. The economic argument", isHeader: true },
  ];

  const noteText =
    "The first four tactics map directly to the original four Gambling Tactics sections published in 2021. Three more have been added in this 2026 edition.";

  return (
    <div className="bg-white border border-gray-200/90  p-5 shadow-xs max-h-[85vh] overflow-y-auto">
      <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500 mb-4 px-2 border-l-2 border-[#0092D0]">
        Chapters
      </h2>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-3 py-2 text-sm  transition-all duration-150 block ${
              activeSection === item.id
                ? "text-Primary bg-sky-50 font-bold border-l-2 border-Primary pl-2.5"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-normal"
            } ${item.isHeader ? "pl-4" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <p className="mt-5 px-2 text-xs sm:text-sm text-gray-500 italic leading-relaxed border-t border-gray-100 pt-4 font-normal">
        {noteText}
      </p>
    </div>
  );
};

export default TacticsSidebar;
