import React from"react";
import { Link } from"react-router-dom";
import audioFile from"@/assets/audio/young-people-children.mp3"
const SafeguardingLeads = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#0092D0] mb-4" />

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
        For parents, carers and safeguarding leads
      </h2>

      {/* Intro Paragraph */}
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
        Children affected by a parent's gambling rarely volunteer the fact. The signs are often disguised (lost sleep, irritability, school issues, vague unease) and frequently misattributed to other causes.
      </p>

      {/* ================= AUDIO CALLOUT CARD ================= */}
      <div className="border-l-4 border-[#0092D0] bg-[#F7F9FA] rounded-r-xl p-6 sm:p-8 mb-10 shadow-xs">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0] mb-2">PhoenixFM, May 2026</p>
        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 leading-snug tracking-tight">
          Young people and the 900,000 children experiencing measurable gambling harm in the UK, within a far larger group touched by someone else's gambling
        </h4>
        
        {/* Audio Player Element */}
        <div className="w-full max-w-[500px] mb-4">
          <audio src={audioFile} controls className="w-full h-10 accent-[#0092D0]">
            Your browser does not support the audio element.
          </audio>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 italic">
          Clip: John Gilham, speaking from lived experience on Phoenix FM's Friday show, May 2026.
        </p>
      </div>

      {/* ================= ACTION LIST WITIH DIVIDERS ================= */}
      <div className="space-y-4 divide-y divide-gray-200 mb-10">
        <div className="pt-0 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          <strong className="text-gray-900 font-bold mr-1.5">Take a child’s worry seriously.</strong>
          If a child raises concern about a parent's behaviour around money, sport or screens, treat it like any other safeguarding disclosure.
        </div>

        <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          <strong className="text-gray-900 font-bold mr-1.5">Don't promise secrecy you can't keep.</strong>
          <span className="text-gray-500">But do explain calmly what happens next.</span>
        </div>

        <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          <strong className="text-gray-900 font-bold mr-1.5">Document and share appropriately.</strong>
          NSPCC safeguarding pathways apply; LADO referral if the concern reaches statutory thresholds.
        </div>

        <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          <strong className="text-gray-900 font-bold mr-1.5">Connect them to age-appropriate support.</strong>
          Childline, Big Deal, YoungMinds. School counsellors. The NHS gambling clinics can accept under-18 referrals.
        </div>
      </div>

      {/* ================= TEACHER / PSHE BLUE BANNER ================= */}
      <div id="teachers" className="scroll-mt-24 border-l-4 border-[#0092D0] bg-[#E8F5FD] rounded-r-xl p-6 sm:p-8 shadow-xs">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-snug tracking-tight">
          If you're a teacher or PSHE lead
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
          See our dedicated{" "}
          <Link to="/professionals" className="underline text-[#0092D0] hover:text-[#0077aa] transition-colors font-semibold">
            teachers & educators page
          </Link>{" "}
          for curriculum links, classroom resources, and how to spot and respond to gambling-related harm in 11–17-year-olds.
        </p>
      </div>
    </div>
 
 );
};

export default SafeguardingLeads;