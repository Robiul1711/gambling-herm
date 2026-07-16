import React from"react";

const ChaptersSidebar = ({ activeSection, onNavigate }) => {
 const navItems = [
 { id:"what-it-is", label:"What it is", isHeader: false },
 { id:"chapter-1", label:"1. Gambling and health", isHeader: true },
 { id:"gambling-addiction", label:"2. Gambling and addiction", isHeader: true },
 { id:"children-young", label:"3. Children and young people", isHeader: true },
 { id:"advertising", label:"4. Gambling and advertising", isHeader: true },
 { id:"research-education", label:"5. Research, education and treatment", isHeader: true },
 { id:"product-design", label:"6. Design of gambling products", isHeader: true },
 { id:"conducted", label:"7. The way gambling is conducted", isHeader: true },
 { id:"voluntary-bans", label:"8. Voluntary bans", isHeader: true },
 { id:"multinational", label:"9. Multinational operators", isHeader: true },
 { id:"crime", label:"10. Gambling and crime", isHeader: true },
 { id:"why-it-exists", label:"Why it exists", isHeader: true },
 { id:"how-it-is-used", label:"How it's used", isHeader: true },
 { id:"read-and-cite", label:"Read & cite", isHeader: true },

 ];

 return (
 <div className="bg-white border border-slate-200 p-5 shadow-sm max-h-[85vh] overflow-y-auto">
 <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-2 border-l-2 border-slate-300">
 Chapters
 </h2>
 <nav className="space-y-1">
 {navItems.map((item) => (
 <button
 key={item.id}
 onClick={() => onNavigate(item.id)}
 className={`w-full text-left px-3 py-1.5 text-sm transition-all duration-150 block
 ${
 activeSection === item.id
 ?"text-Primary bg-slate-50 font-semibold border-l-2 border-Primary pl-2.5"
 :"text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
 } ${item.isHeader ?"pl-4" :""}`}
 >
 {item.label}
 </button>
 ))}
 </nav>
 </div>
 );
};

export default ChaptersSidebar;