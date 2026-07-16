import React from"react";

const ratioData = [
 {
 percentage:"48%",
 description:
"of people from ethnic minority communities who gamble experience gambling problems (PGSI 1+).",
 highlighted: true,
 },
 {
 percentage:"23%",
 description:
"of White British people who gamble experience gambling problems (PGSI 1+).",
 highlighted: false,
 },
];

const HeadlineRatio = () => {
 return (
 <div className="py-10 md:py-16">
 <div className="max-w-5xl mx-auto px-4">
 {/* Top Accent Line */}
 <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

 {/* Section Heading */}
 <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8 tracking-tight">
 The headline ratio
 </h2>

 {/* Grid Container for the 2 Data Cards */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
 {ratioData.map((item, idx) => (
 <div
 key={idx}
 className={`p-6 md:p-8 border min-h-[160px] flex flex-col justify-start bg-white ${
 item.highlighted
 ?"border-[#17a9df]/70 shadow-sm"
 :"border-gray-200"
 }`}
 >
 {/* Ratio Percentage */}
 <div className="text-2xl font-bold text-[#2d2d2d] mb-4">
 {item.percentage}
 </div>

 {/* Card Body Text Description */}
 <p className="text-[#687076] text-sm leading-relaxed">
 {item.description}
 </p>
 </div>
 ))}
 </div>

 {/* Source Citation & Explanation Narrative */}
 <p className="text-[#2d2d2d] text-sm leading-relaxed">
 <span className="text-[#687076]">
 Source: Annual Treatment and Support Survey 2024
 (GambleAware-funded).
 </span>{" "}
 Both groups have lower overall gambling participation than UK average;
 the conditional harm rate among those who do gamble is roughly 2x
 higher in ethnic minority communities. This is a marker of exposure
 pattern and access to support, not of individual difference.
 </p>
 </div>
 </div>
 );
};

export default HeadlineRatio;
