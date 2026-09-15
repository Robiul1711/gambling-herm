import React from "react";
import youngPeopleChildrenAudio from "@/assets/audio/young-people-children.mp3";

const points = [
  {
    boldText: "Take a child's worry seriously.",
    restText:
      " If a child raises concern about a parent's behaviour around money, sport or screens, treat it like any other safeguarding disclosure.",
  },
  {
    boldText: "Don't promise secrecy you can't keep.",
    restText: " But do explain calmly what happens next.",
  },
  {
    boldText: "Document and share appropriately.",
    restText:
      " Follow your safeguarding policy through the designated safeguarding lead, with referral to children's social care or early help where thresholds are met.",
  },
  {
    boldText: "Connect them to age-appropriate support.",
    restText:
      " Childline, National Gambling Helpline (0808 8020 133), YoungMinds. School counsellors. The NHS gambling clinics can accept under-18 referrals.",
  },
];

const TeachersCypParentsSafeguarding = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          For parents, carers and safeguarding leads
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-normal">
          Children affected by a parent's gambling rarely volunteer the fact.
          The signs are often disguised (lost sleep, irritability, school
          issues, vague unease) and frequently misattributed to other causes.
        </p>

        {/* Dotted Statements List */}
        <div className="divide-y divide-dashed divide-gray-200 space-y-4 pt-2">
          {points.map((item, idx) => (
            <div key={idx} className="pt-4 first:pt-0">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                <strong className="font-bold text-gray-900 mr-1.5">
                  {item.boldText}
                </strong>
                {item.restText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersCypParentsSafeguarding;
