import React, { useState } from "react";
import { X } from "lucide-react";
import useClient from "@/hooks/useClient";
import anjanetteImg from "@/assets/team/anjanette-stokes.jpg";
import fayImg from "@/assets/team/fay-laidler.jpg";
import lucyImg from "@/assets/team/lucy-hays.jpg";
import ailbheImg from "@/assets/team/ailbhe-kazounis.jpg";

const getBioParagraphs = (bio) => {
  if (typeof bio === "string") {
    return bio.split("\n").filter(Boolean);
  }
  if (Array.isArray(bio)) {
    return bio;
  }
  return [];
};

const getInitials = (member) => {
  if (member.initials) return member.initials;
  if (!member.name) return "TM";
  const parts = member.name.split(" ").filter(Boolean);
  if (parts.length > 1) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return member.name.substring(0, 2).toUpperCase();
};

const DEFAULT_OPERATIONAL_MEMBERS = [
  {
    id: "kishan-patel",
    name: "Dr Kishan Patel",
    role: "CEO & CO-FOUNDER",
    type: "operational",
    bio: "He co-founded GHUK in 2020, drawing on lived experience of being harmed by someone else's gambling and through gambling-related bereavement. He leads GHUK's strategic direction, policy development and public-health advocacy across the UK.",
  },
  {
    id: "fay-laidler",
    name: "Fay Laidler",
    role: "ENGAGEMENT AND QUALITY LEAD",
    type: "operational",
    image: fayImg,
    bio: "Fay is the Engagement and Quality Lead at GHUK, joining the organisation in May 2026. She completed her PhD at the University of Glasgow in 2025, focusing on the role of women experiencing harm in gambling policy, and brings a background in research and community engagement.",
  },
  {
    id: "lucy-hays",
    name: "Lucy Hays",
    role: "SYSTEMS LEAD",
    type: "operational",
    image: lucyImg,
    bio: "Lucy has spent her career working at the intersection of people and systems, understanding what gets in the way of people living well and focusing on how to change it. She began in social housing, working with individuals, families, and communities.",
  },
  {
    id: "anjanette-stokes",
    name: "Anjanette Stokes",
    role: "SYSTEMS LEAD",
    type: "operational",
    image: anjanetteImg,
    bio: "Anjanette is a Systems Lead at GHUK, bringing extensive experience across health, education, local government and safeguarding systems.",
  },
  {
    id: "ailbhe-kazounis",
    name: "Ailbhe Kazounis",
    role: "PUBLIC HEALTH LEAD",
    type: "operational",
    image: ailbheImg,
    bio: "Ailbhe leads GHUK's public-health translation work, supporting local authorities and NHS teams to embed gambling harm identification and prevention into everyday practice.",
  },
];

const DEFAULT_TRUSTEES = [
  {
    id: "christopher-gilham",
    name: "Christopher Gilham",
    role: "CO-FOUNDER & TRUSTEE (appointed 4 November 2021)",
    type: "trustee",
    bio: "A co-founder of Gambling Harm UK and the All Bets Are Off podcast; a mental-health advocate and peer supporter, including work with Ripple Suicide Prevention. Brings lived experience of alcohol and gambling harm, and of neurodivergence.",
  },
  {
    id: "lesley-buckland",
    name: "Lesley Buckland",
    role: "TRUSTEE (appointed 12 July 2022)",
    type: "trustee",
    bio: "Senior HR and governance leader across industry, higher education and the NHS; former senior leader at LSBU's Faculty of Health, with extensive audit and governance experience.",
  },
  {
    id: "john-gilham",
    name: "John Gilham",
    role: "TRUSTEE & SYSTEM LEAD (appointed 18 June 2025)",
    type: "trustee",
    bio: "Senior healthcare leader with Chief Executive and Non-Executive experience, including chairing Audit, Finance, Quality and Risk committees; previously Chief Executive of GHUK. Brings lived experience of being harmed by someone else's gambling.",
  },
  {
    id: "michael-tarrega",
    name: "Michael Tarrega",
    role: "TRUSTEE (appointed 27 October 2025)",
    type: "trustee",
    bio: "Head of Communications on major UK infrastructure programmes, with senior strategic-communications and stakeholder-engagement expertise. Brings lived experience of gambling harm.",
  },
  {
    id: "paul-dent",
    name: "Paul Dent",
    role: "CHAIR & TRUSTEE (appointed 27 October 2025; Chair from March 2026)",
    type: "trustee",
    bio: "Trauma, addiction and relationship therapist; has led global gambling support services and delivered international presentations on gambling-related harm, recovery and therapeutic practice.",
  },
];

export default function TrusteesAndTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Fetch team members dynamically from CMS/API
  const { data: responseData, isLoading } = useClient({
    queryKey: ["teamMembers"],
    url: "/team",
  });

  const rawMembers = Array.isArray(responseData?.data)
    ? responseData.data
    : Array.isArray(responseData)
    ? responseData
    : [];

  // Normalize API data fields
  const normalizedMembers = rawMembers.map((m) => ({
    ...m,
    id: m._id || m.id,
    name: m.name || "",
    role: m.role || m.designation || m.position || "",
    bio: m.bio || m.description || m.about || "",
    image: m.image || m.photo || m.avatar || m.img || "",
    type: (m.type || m.category || "operational").toLowerCase(),
  }));

  const apiOperational = normalizedMembers.filter(
    (m) => m.type === "operational" || m.type === "team" || m.type === "staff"
  );

  const apiTrustees = normalizedMembers.filter(
    (m) => m.type === "trustee" || m.type === "trustees" || m.type === "board"
  );

  // If admin has added data via API, show only API data. Otherwise show defaults.
  const operationalMembers =
    apiOperational.length > 0
      ? apiOperational
      : normalizedMembers.length > 0 && apiTrustees.length === 0
      ? normalizedMembers
      : DEFAULT_OPERATIONAL_MEMBERS;

  const trusteeMembers =
    apiTrustees.length > 0 ? apiTrustees : DEFAULT_TRUSTEES;

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gray-100">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="w-12 h-[3px] bg-[#1B80C4] mb-5" />
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight mb-4">
              Our operational team
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              GHUK was founded in 2020 by individuals with lived
              experience of gambling harm. The current team is below.
            </p>
          </div>

          {/* Team Grid */}
          {operationalMembers.length === 0 ? (
            <div className="text-center py-12 text-slate-500 border border-dashed border-gray-200">
              <p>No operational team members added yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {operationalMembers.map((member) => (
                <div
                  key={member._id || member.id}
                  className="border border-gray-200 p-5 flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Photo or Initials Avatar */}
                    <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-sky-50 flex items-center justify-center border border-slate-100">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-[#1B80C4] text-5xl font-bold tracking-tight">
                          {getInitials(member)}
                        </div>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg font-bold text-slate-800">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-bold text-[#1B80C4] tracking-wider uppercase block mb-3">
                      {member.role}
                    </span>

                    {/* Biography Preview (Truncated) */}
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p className="line-clamp-6">
                        {getBioParagraphs(member.bio)[0]}
                      </p>
                    </div>
                  </div>

                  {/* See More Link */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-bold text-[#1B80C4] hover:underline"
                    >
                      Read full bio &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="pt-16 md:pt-24 section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-left mb-12">
            <div className="w-12 h-[3px] bg-[#1B80C4] mb-5" />
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-800 tracking-tight mb-4">
              Our trustees
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              GHUK is governed by a board of dedicated trustees. The current trustees are below.
            </p>
          </div>

          {/* Team Grid */}
          {trusteeMembers.length === 0 ? (
            <div className="text-center py-12 text-slate-500 border border-dashed border-gray-200">
              <p>No trustees added yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trusteeMembers.map((member) => (
                <div
                  key={member._id || member.id}
                  className="border border-gray-200 p-5 flex flex-col justify-between bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <div>
                    {/* Photo or Initials Avatar */}
                    <div className="w-full aspect-[4/3] overflow-hidden mb-4 bg-sky-50 flex items-center justify-center border border-slate-100">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-[#1B80C4] text-5xl font-bold tracking-tight">
                          {getInitials(member)}
                        </div>
                      )}
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-lg font-bold text-slate-800">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-bold text-[#1B80C4] tracking-wider uppercase block mb-3">
                      {member.role}
                    </span>

                    {/* Biography Preview (Truncated) */}
                    <div className="text-slate-600 text-sm leading-relaxed space-y-3">
                      <p className="line-clamp-6">
                        {getBioParagraphs(member.bio)[0]}
                      </p>
                    </div>
                  </div>

                  {/* See More Link */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-bold text-[#1B80C4] hover:underline"
                    >
                      Read full bio &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal View */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-2xl w-full max-h-[85vh] overflow-y-auto relative p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors p-1.5 hover:bg-slate-100"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="w-24 h-24 overflow-hidden bg-sky-50 flex items-center justify-center shrink-0 border border-slate-100">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-[#1B80C4] text-3xl font-bold">
                    {getInitials(selectedMember)}
                  </div>
                )}
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-slate-800">
                  {selectedMember.name}
                </h3>
                <span className="text-xs font-bold text-[#1B80C4] tracking-wider uppercase">
                  {selectedMember.role}
                </span>
              </div>
            </div>

            {/* Bio Body */}
            <div className="text-slate-600 text-sm md:text-base space-y-4 leading-relaxed border-t border-gray-100 pt-6">
              {getBioParagraphs(selectedMember.bio).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Declared Interests (Conditional) */}
            {selectedMember.declaredInterests && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <span className="font-semibold text-slate-700">
                    Declared interests:
                  </span>
                  {" "}
                  {selectedMember.declaredInterests}
                </p>
              </div>
            )}

            {/* Email (Conditional) */}
            {selectedMember.email && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xs font-semibold text-slate-700 block mb-1">
                  Contact:
                </span>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="text-[#1B80C4] text-sm hover:underline italic"
                >
                  {selectedMember.email}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
