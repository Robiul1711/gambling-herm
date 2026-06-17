import React from "react";

const TacticsSidebar = ({ activeSection, onNavigate }) => {
  const navItems = [
    { id: "why-this-exists", label: "Why this exists", isHeader: false },
    { id: "tactic-1", label: "1. Arguments and language", isHeader: true },
    { id: "tactic-2", label: "2. Advertising and sponsorship", isHeader: true },
    { id: "tactic-3", label: "3. Industry people and allies", isHeader: true },
    { id: "tactic-4", label: "4. \"Harm reduction\" framings", isHeader: true },
    { id: "tactic-5", label: "5. Product design", isHeader: true },
    { id: "tactic-6", label: "6. Availability and clustering", isHeader: true },
    { id: "tactic-7", label: "7. The economic argument", isHeader: true },
  ];

  const noteText =
    "The first four tactics map directly to the original four Gambling Tactics sections published in 2021. Three more have been added in this 2026 edition.";

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm max-h-[85vh] overflow-y-auto">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-2 border-l-2 border-slate-300">
        Chapters
      </h2>
      <nav className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-all duration-150 block
              ${
                activeSection === item.id
                  ? "text-Primary bg-slate-50 font-semibold border-l-2 border-Primary pl-2.5"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
              } ${item.isHeader ? "pl-4" : ""}`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <p className="mt-5 px-2 text-xs text-slate-400 leading-relaxed border-t border-slate-100 pt-4">
        {noteText}
      </p>
    </div>
  );
};

export default TacticsSidebar;
