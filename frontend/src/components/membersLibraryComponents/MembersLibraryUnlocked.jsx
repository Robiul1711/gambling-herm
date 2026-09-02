import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiDownload,
  FiPlayCircle,
  FiFileText,
  FiSearch,
  FiFilter,
  FiCheckCircle,
  FiExternalLink,
  FiBookmark,
  FiLock,
} from "react-icons/fi";
import { useMemberAuth } from "@/context/MemberAuthContext";

const memberResources = [
  {
    id: 1,
    category: "films",
    categoryLabel: "Safeguarding Film",
    title: "Brothers Gambling Harm — Full Professional Edition",
    description:
      "Full-length safeguarding and awareness film illustrating lived-experience harm progression, identification points, and intervention timing.",
    format: "Video Stream · 18 mins",
    type: "video",
    link: "/members-only-campaign",
    date: "Updated Feb 2026",
  },
  {
    id: 2,
    category: "films",
    categoryLabel: "Safeguarding Film",
    title: "Mother & Daughter Safeguarding Case Narrative",
    description:
      "A clinical review of family-affected harm dynamics, emotional concealment patterns, and how primary care clinicians can spot secondary harm.",
    format: "Video Stream · 14 mins",
    type: "video",
    link: "/children-and-safeguarding",
    date: "Updated Jan 2026",
  },
  {
    id: 3,
    category: "training",
    categoryLabel: "Training Deck",
    title: "MECC (Making Every Contact Count) Master Training Deck",
    description:
      "Complete slide package and speaker notes for delivering GHUK gambling harm identification training in NHS primary care and ED settings.",
    format: "PDF Document & Slides · 4.8 MB",
    type: "download",
    link: "/professionals/healthcare",
    date: "2026 Edition",
  },
  {
    id: 4,
    category: "training",
    categoryLabel: "Clinical Toolkit",
    title: "Healthcare Screening & Routine Enquiry Guidance",
    description:
      "Evidence-backed enquiry scripts, language guidance, and referral pathways for clinical teams asking about gambling harms.",
    format: "PDF Toolkit · 2.1 MB",
    type: "download",
    link: "/professionals/healthcare",
    date: "2026 Edition",
  },
  {
    id: 5,
    category: "evidence",
    categoryLabel: "Evidence & Modelling",
    title: "Burden-of-Disease Modelling & Prevalence Framework",
    description:
      "Underlying data tables and methodological notes behind the GHUK national disease burden calculation and local authority impact estimates.",
    format: "Data Model & Technical Note · 3.5 MB",
    type: "download",
    link: "/burden-mapping-tool",
    date: "Latest Release",
  },
  {
    id: 6,
    category: "evidence",
    categoryLabel: "Interactive Tool",
    title: "Local Authority Burden Mapping Exploration Suite",
    description:
      "Interactive data explorer allowing public health teams to extract localized harm indices, demographic correlations, and cost estimates.",
    format: "Interactive Tool",
    type: "interactive",
    link: "/burden-mapping-tool",
    date: "Active Tool",
  },
  {
    id: 7,
    category: "policy",
    categoryLabel: "Policy Briefing",
    title: "Statutory Levy & Regulatory Reform Briefing for Stakeholders",
    description:
      "GHUK's comprehensive analysis on independent funding mechanisms, regulatory access controls, and machine verification proposals.",
    format: "Policy Whitepaper · 1.6 MB",
    type: "download",
    link: "/policy-and-advocacy",
    date: "Feb 2026",
  },
  {
    id: 8,
    category: "training",
    categoryLabel: "Education Toolkit",
    title: "Schools & Safeguarding Leads Resource Pack",
    description:
      "Lesson plans, discussion prompts, and safeguarding protocols for secondary schools, colleges, and youth-facing organisations.",
    format: "PDF Pack · 3.2 MB",
    type: "download",
    link: "/professionals/teachers-cyp",
    date: "Term 2026",
  },
];

export default function MembersLibraryUnlocked() {
  const { member } = useMemberAuth();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = memberResources.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-10 md:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Welcome Member Banner */}
        <div className="bg-gradient-to-r from-[#0F4A63] to-[#156E94] text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FiCheckCircle size={12} className="text-emerald-400" />
                Verified Professional Member
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {member?.name || "Professional Member"}
            </h2>
            <p className="text-sky-100/80 text-sm sm:text-base mt-1 max-w-2xl font-normal leading-relaxed">
              {member?.organisation
                ? `${member.organisation} · ${member.role || member.sector}`
                : "Your professional membership is active. You have full access to all GHUK materials, training modules, and evidence models below."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 text-center border border-white/10 shrink-0">
              <span className="block text-2xl font-extrabold text-white">
                {memberResources.length}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-white/75 font-semibold">
                Unlocked Items
              </span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-100">
            {[
              { id: "all", label: "All Resources" },
              { id: "films", label: "Safeguarding Films" },
              { id: "training", label: "Training & MECC" },
              { id: "evidence", label: "Evidence & Models" },
              { id: "policy", label: "Policy Briefings" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === tab.id
                    ? "bg-[#0093D0] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Row */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources by title, keyword, or topic..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-[#0093D0] focus:ring-1 focus:ring-[#0093D0] outline-none text-slate-800 bg-slate-50/50"
              />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 bg-slate-100 rounded-xl"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-[#0093D0] border border-sky-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0093D0]"></span>
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5 tracking-tight group-hover:text-[#0093D0] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action Button & Format info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] font-medium text-slate-500 truncate">
                  {item.format}
                </span>

                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0093D0] hover:bg-[#0e5472] text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
                >
                  {item.type === "video" && <FiPlayCircle size={14} />}
                  {item.type === "download" && <FiDownload size={14} />}
                  {item.type === "interactive" && <FiExternalLink size={14} />}
                  <span>
                    {item.type === "video"
                      ? "Watch Now"
                      : item.type === "download"
                      ? "Access Resource"
                      : "Open Tool"}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-3">
            <FiBookmark className="mx-auto text-3xl text-slate-300" />
            <h4 className="text-base font-bold text-slate-800">
              No matching resources found
            </h4>
            <p className="text-xs text-slate-500">
              Try adjusting your search keywords or switching category filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
