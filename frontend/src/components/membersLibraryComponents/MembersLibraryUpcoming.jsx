import React from "react";
import { Link } from "react-router-dom";
import {
  FiClock,
  FiFilm,
  FiBarChart2,
  FiBookOpen,
  FiFileText,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { useMemberAuth } from "@/context/MemberAuthContext";

const upcomingFeatures = [
  {
    icon: FiFilm,
    title: "Safeguarding & Clinical Films",
    description:
      "Full-length lived-experience films, clinical reviews, and intervention training videos.",
    tag: "In Development",
  },
  {
    icon: FiBarChart2,
    title: "Burden Mapping & Evidence Models",
    description:
      "Interactive data explorers, localized prevalence tables, and disease burden calculation frameworks.",
    tag: "Next Release",
  },
  {
    icon: FiBookOpen,
    title: "NHS & MECC Master Toolkits",
    description:
      "Screening scripts, primary care routine enquiry guidance, and school safeguarding packs.",
    tag: "Coming Soon",
  },
  {
    icon: FiFileText,
    title: "Policy & Stakeholder Briefings",
    description:
      "Regulatory reform analysis, statutory levy papers, and independent clinical research archives.",
    tag: "Coming Soon",
  },
];

export default function MembersLibraryUpcoming() {
  const { member, isAuthenticated } = useMemberAuth();

  return (
    <section className="py-12 md:py-20 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* User Info / Status Banner */}
        {isAuthenticated && (
          <div className="bg-[#0F4A63] text-white rounded-2xl p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
                <FiCheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-200">
                  Verified Member
                </p>
                <h3 className="text-lg sm:text-xl font-bold">
                  {member?.name || "Professional Member"}
                </h3>
                {member?.organisation && (
                  <p className="text-xs text-sky-100/80 mt-0.5">
                    {member.organisation}
                  </p>
                )}
              </div>
            </div>
            <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30 text-xs font-semibold">
              Account Active
            </span>
          </div>
        )}

        {/* Main Upcoming Notice Box */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0093D0] text-xs font-bold uppercase tracking-wider">
            <FiClock size={14} className="animate-pulse" />
            <span>Upcoming Pages</span>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1e293b] tracking-tight">
              Members Pages &amp; Dedicated Resources
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              We are currently developing specialized members-only pages, exclusive safeguarding media, interactive modelling suites, and practitioner downloads for our upcoming release.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 text-left">
            {upcomingFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-5 sm:p-6 transition-all hover:bg-white hover:border-[#0093D0]/40 hover:shadow-xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-100/80 text-[#0093D0] flex items-center justify-center">
                      <Icon size={18} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick Navigation Action */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/burden-of-harm"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0093D0] hover:bg-[#0e5472] text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Explore Current Evidence Base</span>
              <FiArrowRight size={15} />
            </Link>
            <Link
              to="/professionals"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Professionals Hub</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
