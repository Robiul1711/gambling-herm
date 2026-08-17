import React from "react";
import { Link } from "react-router-dom";

const signsList = [
  {
    bold: "Money.",
    desc: " Borrowing from classmates, missing dinner money, selling belongings, unexplained cash or new items.",
  },
  {
    bold: "Talk.",
    desc: " Odds, accumulators and \"easy money\" treated as normal conversation; in-game spending (loot boxes, packs) discussed compulsively or hidden.",
  },
  {
    bold: "Mood and energy.",
    desc: " Tiredness from late-night phone use, irritability, mood swings tied to fixtures or results.",
  },
  {
    bold: "Home.",
    desc: " A child hinting at money trouble, tension or a parent's betting. Children rarely volunteer a parent's gambling directly.",
  },
];

const TeachersCypClassroomSigns = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          In the classroom: spotting it and responding
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 font-normal">
          Gambling harm in 11-17-year-olds rarely announces itself. It looks like
          tiredness, slipping grades, borrowed money and betting talk treated as
          banter.
        </p>

        {/* Subtitle 1: Signs worth noticing */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
          Signs worth noticing
        </h3>

        <div className="divide-y divide-dashed divide-gray-200 space-y-4 mb-10">
          {signsList.map((item, idx) => (
            <div key={idx} className="pt-4 first:pt-0">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                <strong className="font-bold text-gray-900 mr-1.5">{item.bold}</strong>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Subtitle 2: Responding to a disclosure */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Responding to a disclosure
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-10 font-normal">
          The same principles apply as to any safeguarding disclosure (above):
          treat it seriously whether the gambling is the child's own or a
          parent's, don't promise secrecy you can't keep, and follow your
          school's process through the designated safeguarding lead. For the
          child themselves,{" "}
          <Link
            to="/get-help/young-people"
            className="underline font-semibold text-gray-900 hover:text-[#0092D0] transition-colors"
          >
            our young people page
          </Link>{" "}
          is written to be read by them.
        </p>

        {/* Subtitle 3: Teaching it */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Teaching it
        </h3>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
          <p>
            The statutory RSHE curriculum for secondary pupils includes the
            risks of gambling, including online gambling and its link to debt.
          </p>

          <div className="pt-4 border-t border-dashed border-gray-200">
            <p>
              <strong className="font-bold text-gray-900 mr-1.5">
                GHUK provides independent, evidence-based training on gambling
                harm
              </strong>
              for teachers, safeguarding leads and the wider CYP workforce, built
              on our safeguarding films and lived-experience testimony, and
              free of gambling-industry funding. Book via{" "}
              <a
                href="mailto:hello@gamblingharm.com"
                className="underline font-semibold text-gray-900 hover:text-[#0092D0] transition-colors"
              >
                hello@gamblingharm.com
              </a>
              .
            </p>
          </div>

          <p>
            Our <strong className="font-bold text-gray-900">safeguarding films</strong>{" "}
            are used in school sessions, medical education and safeguarding
            training, and come with the training above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypClassroomSigns;
