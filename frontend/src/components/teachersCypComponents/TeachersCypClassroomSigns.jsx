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
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          In the classroom: spotting it and responding
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal">
          Gambling harm in 11-17-year-olds rarely announces itself. It looks like
          tiredness, slipping grades, borrowed money and betting talk treated as
          banter.
        </p>

        {/* Subtitle 1: Signs worth noticing */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          Signs worth noticing
        </h3>

        <div className="divide-y divide-dotted divide-gray-300 space-y-6 mb-12">
          {signsList.map((item, idx) => (
            <div key={idx} className="pt-6 first:pt-0">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed md:leading-[1.8] font-normal">
                <strong className="font-bold text-[#1e293b]">{item.bold}</strong>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Subtitle 2: Responding to a disclosure */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
          Responding to a disclosure
        </h3>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-12 font-normal">
          The same principles apply as to any safeguarding disclosure (above):
          treat it seriously whether the gambling is the child's own or a
          parent's, don't promise secrecy you can't keep, and follow your
          school's process through the designated safeguarding lead. For the
          child themselves,{" "}
          <Link
            to="/get-help/young-people"
            className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
          >
            our young people page
          </Link>{" "}
          is written to be read by them.
        </p>

        {/* Subtitle 3: Teaching it */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
          Teaching it
        </h3>

        <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
          <p>
            The statutory RSHE curriculum for secondary pupils includes the
            risks of gambling, including online gambling and its link to debt.
          </p>

          <div className="pt-6 border-t border-dotted border-gray-300">
            <p>
              <strong className="font-bold text-[#1e293b]">
                GHUK provides independent, evidence-based training on gambling
                harm
              </strong>{" "}
              for teachers, safeguarding leads and the wider CYP workforce, built
              on our safeguarding films and lived-experience testimony, and
              free of gambling-industry funding. Book via{" "}
              <a
                href="mailto:hello@gamblingharm.com"
                className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
              >
                hello@gamblingharm.com
              </a>
              .
            </p>
          </div>

          <p>
            Our <strong className="font-bold text-[#1e293b]">safeguarding films</strong>{" "}
            are used in school sessions, medical education and safeguarding
            training, and come with the training above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypClassroomSigns;
