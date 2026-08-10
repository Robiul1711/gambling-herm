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
      " Childline, Big Deal, YoungMinds. School counsellors. The NHS gambling clinics can accept under-18 referrals.",
  },
];

const TeachersCypParentsSafeguarding = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          For parents, carers and safeguarding leads
        </h2>

        {/* Narrative */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-8 font-normal">
          Children affected by a parent's gambling rarely volunteer the fact.
          The signs are often disguised (lost sleep, irritability, school
          issues, vague unease) and frequently misattributed to other causes.
        </p>

        {/* PhoenixFM Audio Callout Card */}
        <div className="bg-[#f0f9ff] border-l-[4px] border-[#0093D0] rounded-r-xl p-6 sm:p-7 mb-10 shadow-xs max-w-xl">
          <span className="text-[11px] font-bold text-[#0093D0] uppercase tracking-wider mb-2 block">
            PHOENIXFM, MAY 2026
          </span>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 leading-snug">
            Young people, and the hundreds of thousands of UK children living
            with someone else's gambling
          </h3>

          {/* HTML5 Audio Player */}
          <div className="mb-3">
            <audio controls src={youngPeopleChildrenAudio} className="w-full h-10 accent-[#0093D0] rounded-lg">
              <source src={youngPeopleChildrenAudio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <p className="text-[11px] text-slate-500 italic font-normal">
            Clip: John Gilham, speaking from lived experience on Phoenix FM's{" "}
            <span className="italic">123 Friday</span> show, May 2026.
          </p>
        </div>

        {/* Dotted Statements List */}
        <div className="divide-y divide-dotted divide-gray-300 space-y-6 pt-2">
          {points.map((item, idx) => (
            <div key={idx} className="pt-6 first:pt-0">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed md:leading-[1.8] font-normal">
                <strong className="font-bold text-[#1e293b]">
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
