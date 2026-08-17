import React from"react";

const guidelines = [
 {
 prefix:"Honesty appropriate to age.",
 text:" Children deal less well with the unexplained tension in the house than they do with a calm, age-appropriate explanation that there's a problem and that adults are dealing with it.",
 },
 {
 prefix:"Reassure them it isn't their fault.",
 text:" Children, especially younger ones, often assume responsibility for adult problems. Telling them clearly that this isn't theirs to fix matters.",
 },
 {
 prefix:"Protect their routine.",
 text:" Predictable mealtimes, bedtimes, school. The predictable scaffolding is what carries children through.",
 },
 {
 prefix:"Tell a school or trusted adult.",
 text:" A teacher, GP or family friend who knows what's going on can be an important steady presence for a child.",
 },
 {
 prefix:"Get specialist support if needed.",
 text:" Young Minds Parents Helpline (0808 802 5544) and NSPCC (0808 800 5000) can help. So can GamCare.",
 },
];

export default function ChildrenInHouse() {
  return (
    <section className="w-full py-12 md:py-16 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Line */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-5"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
          If there are children in the house
        </h2>

        {/* Subheading / Highlight Paragraph */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-8 font-normal">
          <strong className="text-gray-900 font-bold">
            An estimated one in five children
          </strong>{" "}
          of a parent with severe gambling harm will experience harm themselves,
          financial, emotional, or developmental. Children almost always pick up
          on more than parents think. They are also among the most underserved
          affected-others populations in the UK system.
        </p>

        {/* Guidelines list with separators */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200 mb-10">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="py-5 text-sm sm:text-base leading-relaxed"
            >
              <strong className="text-gray-900 font-bold mr-1.5">
                {item.prefix}
              </strong>
              <span className="text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Callout Position Card */}
        <div className="bg-[#222120] text-white border-l-4 border-[#0092D0] rounded-r-xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 text-left">
          <span className="text-[#0092D0] text-xs font-bold uppercase tracking-wider block mb-3">
            Our position
          </span>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Children of people experiencing gambling harm are a distinct,
            statutorily-invisible population. They deserve recognition in the
            UK gambling-harm response, ringfenced funding through the statutory
            levy, and dedicated services. The current position (in which
            CYP-as-affected-others receive a fraction of the attention given to
            CYP-as-direct-customers, despite being the larger group) is not
            justifiable on the evidence.
          </p>
        </div>
      </div>
    </section>
  );
}
