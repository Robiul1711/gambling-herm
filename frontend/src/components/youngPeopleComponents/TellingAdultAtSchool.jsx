import React from "react";

export default function TellingAdultAtSchool() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-20 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teal Accent Line */}
        <div className="w-8 h-[3px] bg-[#156E94] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          Telling an adult at school
        </h2>

        {/* Paragraph 1 */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-6">
          Teachers, school counsellors and school nurses are safe people to tell, and you can start with something as small as "things are hard at home".
        </p>

        {/* Paragraph 2 */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
          One honest thing to know: if what you say makes them worried about your safety, they can't keep it completely secret. Their job is to get you the right help, and they should tell you what happens next. That isn't you getting into trouble. Nothing about this is your fault.
        </p>
      </div>
    </section>
  );
}
